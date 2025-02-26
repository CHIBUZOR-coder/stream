import { FaPhone, FaPhoneAlt, FaRegListAlt, FaUser } from "react-icons/fa";
import MovieContext from "../../../../Context/MovieContext";
import { useContext, useEffect, useMemo, useState } from "react";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../../Custom/Table";
import { MdCancel, MdWatchLater } from "react-icons/md";
import { MdUnsubscribe } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = ({ Handlegeneral, HandleDeleteMovie, setModalDisplay }) => {
  const { name } = useParams() || {};
  if (!name) {
    return <p>Loading...</p>;
  }

  const {
    Movies,
    AllMovies,
    setRoleCheck,
    setunAuthorizedUser,
    setunAuthorizedADmin,
    Result,
    setResult,
    Alert,
    setIsLoading,
    HandleSubscribe,
    Watched,
  } = useContext(MovieContext);

  const Head = "text-xs text-left text-main font-semibold px-4 py-2 uppercase ";
  const Text = "text-sm  leading-6 whitespace-nowrap px-5 py-3";

  const userData = JSON.parse(localStorage.getItem("UserInfo")) || null;
  const User = JSON.parse(localStorage.getItem("userInfo"));
  const favouriteCart = JSON.parse(localStorage.getItem("favouriteCart"));
  // console.log("favouriteCart:", favouriteCart.favouriteCartMovies.length);
  const [bgColor, setBgColor] = useState("");

  const days = localStorage.getItem("subscription");

  //  console.log("userData:", User);

  // const selected = AllMovies.slice(0, 10);
  const [singleUser, SetSingleUser] = useState(null);
  const [RecieptOpen, setReceiptOpen] = useState(false);
  const navigate = useNavigate();
  const [MovieList, setMovieList] = useState(null);
  const [page, setPage] = useState(1);
  const [Reciept, setReciept] = useState([]);
  const [shareOpen, setShareOpen] = useState(false);
  const [display, setDisplay] = useState("");
  const [loadDisplay, setLoadDiaplay] = useState("");

  const itemsPerPage = 10;
  const totalPages = AllMovies && Math.ceil(AllMovies.length / itemsPerPage);
  let UserLink;
  if (userData) {
    // console.log("userData.role:", userData.role);

    if (userData.role === "ADMIN") {
      UserLink = `https://streambackend-nbbc.onrender.com/getAdmin/${name}`;
    } else if (userData.role === "USER") {
      UserLink = `https://streambackend-nbbc.onrender.com/getUser/${name}`;
    } else {
      UserLink = "nothing";
    }
  }
  // console.log("UserLink", UserLink);

  useEffect(() => {
    console.log("watched:", Watched);
    console.log("watchedLength:", Watched.length);
  }, [Watched]);

  // Paginated movies for the current page
  const paginatedMovies = useMemo(() => {
    return (AllMovies || [])
      .slice((page - 1) * itemsPerPage, page * itemsPerPage)
      .filter(
        (movie) =>
          movie.year === "2022" ||
          movie.year === "2023" ||
          movie.year === "2024"
      );
  }, [AllMovies, page]);

  const HandleGetUser = async () => {
    if (UserLink.includes("getAdmin")) {
      console.log("This is an ADMIN link");
      if (name.slice(-3) !== User.name.slice(-3)) {
        setunAuthorizedADmin("You are not authorized to acces this route!");
        setTimeout(() => {
          navigate("*");
        }, 100);

        return;
      }
    } else if (UserLink.includes("getUser")) {
      console.log("This is a USER link");
      if (name.slice(-3) !== User.name.slice(-3)) {
        setunAuthorizedUser("You must be a registerd user to acces route");
        setTimeout(() => {
          navigate("*");
        }, 100);
        return;
      }
    } else {
      console.log("Unknown link type");
    }

    console.log("Getting User...");

    try {
      const res = await fetch(`${UserLink}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const contentType = res.headers.get("content-type");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
        console.log("somthing went wrong");
      }
      const data = await res.json();
      console.log("Userdataaaaa:", data);

      SetSingleUser(data.data);

      setRoleCheck(true);
      localStorage.setItem("role", data.data.role);
    } catch (error) {
      console.error("Error in Authentication:", error.message);
    }
  };

  const HandleGeTSubscription = async () => {
    if (User.subscription === "UNSUBSCRIBED") {
      console.log("User is not subscribed");
      return;

      //  setDisplay(
      //    <div className=" flex flex-col justify-center items-center gap-5  bg-dry p-4 border border-x-gray-800  rounded-lg">
      //      <p className="  font-semibold text-white">
      //        ⚠️You have no reciept because you are not a subscribed user!.
      //      </p>
      //    </div>
      //  );
    }
    try {
      const res = await fetch(
        `https://streambackend-nbbc.onrender.com/subscriptionDetails/${name}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.log(data);
        setDisplay(
          <div className=" flex flex-col justify-center items-center gap-5  bg-dry p-4 border border-x-gray-800  rounded-lg">
            <p className="  font-semibold text-white">Error fetching Recipt.</p>
          </div>
        );
      }

      setReciept(data.data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const HandeleUnsubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = User.email;

    try {
      const res = await fetch(
        "https://streambackend-nbbc.onrender.com/Unsubscribe",
        {
          method: "POST",
          headers: {
            headers: {
              "Content-Type": "application/json",
            },
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        setIsLoading(false);
        setResult(Alert(false, data.message));
      }
      console.log(data);
      setIsLoading(false);
      setResult(Alert(false, data.message));
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 3000);
    }
  };

  useEffect(() => {
    HandleGetUser();
    HandleGeTSubscription();
    if (User.subscription === "UNSUBSCRIBED") {
      setDisplay(
        <div className=" w-full flex flex-col justify-center items-center gap-5  bg-dry p-4 border border-x-gray-800  rounded-lg">
          <p className="  font-semibold text-white">
            ⚠️You have no reciept because you are not a subscribed user!.
          </p>
        </div>
      );
    } else {
      setDisplay(null);
    }
  }, []);

  useEffect(() => {
    console.log("Reciept:", Reciept);
  }, [Reciept]);

  const ProfileData = [
    {
      bg: "bg-orange-600",
      icon: <FaRegListAlt />,
      tittle: "Total Movies",
      text: Movies.length,
      style: false,
    },
    {
      bg: "bg-blue-700",
      icon: <HiViewGridAdd />,
      tittle: "Total Categories",
      text: 6,
      style: false,
    },
    {
      bg: "bg-green-600",
      icon: <FaUser />,
      tittle: "Total Users",
      text: 135,
      style: false,
    },
  ];

  const ProfileDataUser = [
    {
      bg: "bg-orange-600",
      icon: <FaRegListAlt />,
      tittle: "Total Favourites",
      text: (favouriteCart && favouriteCart.favouriteCartMovies.length) || 0,
      style: false,
    },
    {
      bg: "bg-subMain",
      icon: <MdUnsubscribe />,
      tittle: "Subscription Details",
      text: 6,
      status: User.subscription || "UNSUBSCRIBED",
      style: false,
    },
    {
      bg: "bg-blue-700",
      icon: <MdWatchLater />,
      tittle: "Watch Count",
      text: (watched && watched.length) || 0,
      style: false,
    },
  ];

  useEffect(() => {
    // Generate a random background color on mount
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  }, []);
  return (
    <div className="flex flex-col gap-4 ">
      <div
        className={` ${
          Result ? "Animate" : "hidden"
        } fixed Alert  left-0 w-full z-40 flex justify-center items-center `}
      >
        <div className=" bg-text text-dry w-1/2 rounded-md border-[3px] border-subMain flex justify-center items-center p-4">
          {Result && <p>{Result}</p>}
        </div>
      </div>

      <div
        className={` ${
          shareOpen ? "" : "hidden"
        }  absolute  top-0 left-0 z-50   w-full h-full bg-main2 flex justify-center items-center `}
      >
        <span
          onClick={() => setShareOpen((prev) => !prev)}
          className="rounded-full fixed top-[25%]  md:right-[25%] lg:right-[20%] right-[8%] border-2 h-14 w-14 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 flex justify-center items-center"
        >
          <MdCancel className="h-12 w-12" />
        </span>

        <div className="  fixed top-[40%] flexCol gap-6  py-5 subscribe  px-4 bg-main rounded-md  justify-center  border border-border ">
          <div className="w-1/2 flex justify-center item-center gap-2">
            <h1 className="text-2xl font-bold">🤖Opps!</h1>
          </div>
          <p className="font-semibold text-text subscribe">
            Only a valid and subscribed user can stream live. Signup or login.
            If you already have an account, please subscribe to enjoy our
            services.
          </p>

          <button
            onClick={(e) => HandleSubscribe(e, User && User.email)}
            className="bg-subMain2 text-white rounded-md border-2 border-subMain transi mt-3 hover:bg-main p-2 animate-bounce hover:animate-none "
          >
            {User ? "Subscribe" : "Login"}
          </button>
        </div>
      </div>

      <div
        className={` ${
          RecieptOpen ? "" : "hidden"
        }  absolute  top-0 left-0 z-50   w-full h-full bg-main2 flex justify-center items-center  px-4`}
      >
        <span
          onClick={() => setReceiptOpen((prev) => !prev)}
          className="rounded-full fixed top-[30%]  md:right-[25%] lg:right-[20%] right-[8%] border-2 h-14 w-14 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 flex justify-center items-center"
        >
          <MdCancel className="h-12 w-12" />
        </span>

        <div className="overflow-x-scroll  fixed top-[45%] md:top-[45%] w-[75%] md:w-[60%]">
          <table className="table-auto w-full text-white border  border-border  divide-border">
            <thead>
              <tr className="bg-dryGray">
                <th scope="col" className={`${Head}`}>
                  Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Transaction_id
                </th>
                <th scope="col" className={`${Head}`}>
                  Status
                </th>

                <th scope="col" className={`${Head}`}>
                  Amount
                </th>
                <th scope="col" className={`${Head} `}>
                  Days left
                </th>
                <th scope="col" className={`${Head} `}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody className=" bg-main divide-y divide-gray-800">
              {Reciept && User.subscription === "SUBSCRIBED" ? (
                <tr>
                  <td className={`${Text}`}>{Reciept && Reciept?.name}</td>
                  <td className={`${Text}`}>
                    {Reciept && Reciept.transactionId}
                  </td>
                  <td className={`${Text}`}>{Reciept && Reciept?.status}</td>
                  <td className={`${Text}`}>{Reciept && Reciept?.amount}$</td>
                  <td className={`${Text}`}>{days && days} Days</td>
                  <td className={`${Text}`}>
                    <button
                      onClick={(e) => HandeleUnsubscribe(e)}
                      className="bg-dry border border-border flexRow gap-2 text-border px-2 py-1 rounded"
                    >
                      Unsubscribe
                    </button>
                  </td>
                </tr>
              ) : (
                <tr className="w-full">
                  <td colSpan={6} className="w-full">
                    <>{display}</>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* <p className="text-white text-xs w-full text-center">← Scroll to see more details →</p> */}
        </div>
      </div>

      {/* ********************************************* */}

      <h2 className="md:text-xl text-lg text-white  font-bold">Profile</h2>

      {singleUser ? (
        <div className="w-full flex justify-center">
          <div className=" md:w-1/2 w-[80%] flex flex-col justify-center items-center gap-3 p-5 rounded bg-main border border-border cursor-default">
            <div className="flex justify-center items-center">
              <div
                className="relative w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-gray-300 text-white text-3xl font-semibold"
                style={{ backgroundColor: bgColor }}
              >
                {singleUser?.image ? (
                  <img
                    src={singleUser?.image}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  singleUser?.name?.charAt(0).toUpperCase()
                )}
              </div>

              {/* <img
                src={`${singleUser && singleUser?.image}`}
                alt="user"
                className="w-20 h-20 rounded-full object-cover"
              ></img> */}
            </div>

            <div className="text-center">
              <p className="font-semibold">{singleUser && singleUser?.name}</p>
              <p className="text-sm text-dryGray">
                {singleUser && singleUser?.email}
              </p>
              <p className="text-sm text-dryGray flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-dryGray" />
                {singleUser && singleUser.phone}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-72  lg:h-72 xl:h-96 bg-dry shimmer"></div>
      )}

      {singleUser ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {singleUser && singleUser.role === "ADMIN"
            ? ProfileData.map((item, index) => (
                <div
                  key={index}
                  className={`rounded bg-main border border-border grid grid-cols-4 gap-2 p-4 `}
                >
                  <div
                    className={`col-span-1 rounded-full h-12 w-12 flexCol ${item.bg} `}
                  >
                    {item.icon}
                  </div>

                  <div className="col-span-3">
                    <h2>{item.tittle}</h2>
                    <p className=" mt-2 font-bold">{item.text}</p>
                  </div>
                </div>
              ))
            : ProfileDataUser.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.style === true
                      ? "flex flex-col justify-center items-center "
                      : " grid grid-cols-4 "
                  }${
                    item?.tittle === "Subscription Details"
                      ? `cursor-default`
                      : ``
                  }  gap-2 rounded bg-main border border-border p-4 `}
                >
                  <div
                    onClick={(e) => {
                      if (item.tittle === "Subscription Details") {
                        setReceiptOpen((prev) => !prev);
                      }
                    }}
                    className={` ${
                      item.style === true ? "" : `${item.bg} h-12 w-12 `
                    } ${
                      item.tittle === "Subscription Details"
                        ? `cursor-pointer`
                        : ``
                    }   col-span-1 rounded-full flexCol cursor-default  `}
                  >
                    {item?.icon}
                  </div>

                  <div className="col-span-3  ">
                    <p className={`font-bold`}>{item.tittle}</p>
                    <p
                      className={`${
                        item.style === true
                          ? "text-small text-dryGray"
                          : "font-bold"
                      } mt-2 `}
                    >
                      {item.tittle === "Subscription Details" ? "" : item.text}
                    </p>

                    {item.tittle === "Subscription Details" && (
                      <p
                        className={`${
                          item?.style ? "text-small text-dryGray" : "font-bold"
                        } mt-2`}
                      >
                        {item?.status}
                      </p>
                    )}
                  </div>
                </div>
              ))}
        </div>
      ) : (
        <div className="w-full h-72  lg:h-72 xl:h-96 bg-dry shimmer"></div>
      )}
      <h3 className="font-medium my-4 text-border">Latest Movies</h3>

      <Table
        data={paginatedMovies}
        User={singleUser}
        For={"dash"}
        Handlegeneral={Handlegeneral}
        HandleDeleteMovie={HandleDeleteMovie}
        setShareOpen={setShareOpen}
      />

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mb-7 mt-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded ${
            page === 1 ? "bg-gray-400 text-white" : "bg-subMain text-white"
          }`}
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded ${
            page === totalPages
              ? "bg-gray-400 text-white"
              : "bg-subMain text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Profile;
