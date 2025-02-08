import { FaPhone, FaPhoneAlt, FaRegListAlt, FaUser } from "react-icons/fa";
import MovieContext from "../../../../Context/MovieContext";
import { useContext, useEffect, useMemo, useState } from "react";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../../Custom/Table";
import { MdWatchLater } from "react-icons/md";
import { MdUnsubscribe } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = ({ Handlegeneral, HandleDeleteMovie }) => {
  const {
    Movies,
    AllMovies,
    setRoleCheck,
    unAuthorizedUser,
    setunAuthorizedUser,
    unAuthorizedADmin,
    setunAuthorizedADmin,
  } = useContext(MovieContext);
  const { name } = useParams();
  const userData = JSON.parse(localStorage.getItem("UserInfo")) || null;

  console.log("userData:", userData.role);

  // const selected = AllMovies.slice(0, 10);
  const [singleUser, SetSingleUser] = useState(null);
  const navigate = useNavigate();
  const [MovieList, setMovieList] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = AllMovies && Math.ceil(AllMovies.length / itemsPerPage);
  let UserLink;
  if (userData) {
    console.log("userData.role:", userData.role);

    if (userData.role === "ADMIN") {
      UserLink = `http://localhost:5000/getAdmin/${name}`;
    } else if (userData.role === "USER") {
      UserLink = `http://localhost:5000/getUser/${name}`;
    } else {
      UserLink = "nothing";
    }
  }
  console.log("UserLink", UserLink);

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
      if (name.slice(-3) !== userData.userInfo.name.slice(-3)) {
        setunAuthorizedADmin("You are not authorized to acces this route!");
        navigate("*");

        return;
      }
    } else if (UserLink.includes("getUser")) {
      console.log("This is a USER link");
      if (name.slice(-3) !== userData.userInfo.name.slice(-3)) {
        setunAuthorizedUser("You must be a registerd user to acces route");
        navigate("*");
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

  useEffect(() => {
    HandleGetUser();
  }, []);

  // useEffect(() => {
  //   console.log("User", Userr);
  // });

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
      text: Movies.length,
      style: false,
    },
    {
      bg: "bg-subMain",
      icon: <MdUnsubscribe />,
      tittle: "Subscription Details",
      text: 6,
      style: false,
    },
    {
      bg: "bg-blue-700",
      icon: <MdWatchLater />,
      tittle: "Watch Count",
      text: 6,
      style: false,
    },
  ];
  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="md:text-xl text-lg text-white  font-bold">Profile</h2>

      <div className="w-full flex justify-center">
        <div className=" md:w-1/2 w-[80%] flex flex-col justify-center items-center gap-3 p-5 rounded bg-main border border-border">
          <div className="flex justify-center items-center">
            <img
              src={`${singleUser && singleUser.image}`}
              alt="user"
              className="w-20 h-20 rounded-full object-cover"
            ></img>
          </div>

          <div className="text-center">
            <p className="font-semibold">{singleUser && singleUser.name}</p>
            <p className="text-sm text-dryGray">
              {singleUser && singleUser.email}
            </p>
            <p className="text-sm text-dryGray flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-dryGray" />
              {singleUser && singleUser.phone}
            </p>
          </div>
        </div>
      </div>
      {/* tittle: User.userInfo.name,
      text: User.userInfo.email,
      style: true,  */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {singleUser && singleUser.role === "ADMIN"
          ? ProfileData.map((item, index) => (
              <div
                key={index}
                className={`rounded bg-main border border-border grid grid-cols-4 gap-2 p-4`}
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
                }  gap-2 rounded bg-main border border-border p-4 `}
              >
                <div
                  className={` ${
                    item.style === true ? "" : `${item.bg} h-12 w-12`
                  }   col-span-1 rounded-full flexCol  `}
                >
                  {item.icon}
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
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
      </div>
      <h3 className="font-medium my-4 text-border">Latest Movies</h3>

      <Table
        data={paginatedMovies}
        User={singleUser}
        For={"dash"}
        Handlegeneral={Handlegeneral}
        HandleDeleteMovie={HandleDeleteMovie}
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
