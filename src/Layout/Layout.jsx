import { Link, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import MobileFooter from "../Footer/MobileFooter";
import Navbar from "../Navbar/Navbar";
import { MdCancel } from "react-icons/md";
import { useContext, useEffect, useMemo, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsCollectionPlayFill } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import {
  FaFacebook,
  FaInfoCircle,
  FaInstagram,
  FaTiktok,
  FaUserCircle,
  FaWhatsapp,
} from "react-icons/fa";
import { FaHeartCircleCheck, FaXTwitter } from "react-icons/fa6";
import MovieContext from "../Context/MovieContext";
import { TbTableDashed } from "react-icons/tb";

const Layout = ({ children }) => {
  const { FavouriteCount } = useContext(MovieContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [Height, setHeight] = useState(null);
  const [Text, setText] = useState("");
  const hover = "hover:text-subMain transi text-white relative";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  const textArray = useMemo(() => ["Search Movie Name Here"], []);
  const User = JSON.parse(localStorage.getItem("userInfo"));

  const { typingSpeed, charIndex, index, HandleTypewrite } =
    useContext(MovieContext);
  let dash;
  let fav;
  if (!User) {
    // console.log("No user info yet");
    dash = "/login";
  } else {
    dash =
      User.role === "ADMIN"
        ? `/dash/ad/${User.name}`
        : User.role === "USER"
        ? `/dash/us/${User.name}`
        : "NOT";

    fav = `/favouritpage/${User.name}`;
  }
  useEffect(() => {
    const cleanup = HandleTypewrite(textArray, setText);
    return cleanup;
  }, [charIndex, index, textArray, typingSpeed, HandleTypewrite]);

  // console.log(!!"hello"); // true (non-empty string)
  // console.log(!!"");

  const HandleFetchStart = async (value) => {
    if (!value.trim()) {
      setSearchResult([]); // Clear results if input is empty
      return;
    }
    try {
      const res = await fetch(
        "https://streambackend-ngow.onrender.com/api/getMovies",
        {
          method: "GET",
        }
      );
      const data = await res.json();

      if (!res.ok) {
        console.log(data);
        throw new Error("Failed to fetch search results");
      }

      // setSearchResult(
      //   data.filter((movie) => {
      //     return (
      //       value &&
      //       movie &&
      //       movie.name &&
      //       movie.name.toLowerCase().includes(value)
      //     );
      //   })
      // );
      console.log("Fetched data:", data);

      setSearchResult(
        data.data.filter((movie) =>
          movie?.name?.toLowerCase().includes(value.toLowerCase())
        )
      );

      // console.log(result);
    } catch (error) {
      console.error("Error fetching search results:", error.message);
      setError("Failed to fetch search results. Please try again.");
    }
  };

  const HandleInputChange = (e) => {
    e.preventDefault();

    const value = e.target.value.trim();
    // if (value) {
    //   setHeight(true);
    // } else {
    //   setHeight(false);
    // }

    setHeight(!!value);

    HandleFetchStart(value); // Perform the fetch
    if (value.length <= 0) {
      setHeight(false);
    }
  };

  useEffect(() => {
    console.log("height:", Height);
  }, [Height]);

  useEffect(() => {
    console.log("Searchresult:", searchResult);
  }, [searchResult]);
  const socials = [
    {
      path: `#`,
      icon: <FaWhatsapp className="h-7 w-7" />,
    },
    {
      path: `#`,
      icon: <FaFacebook className="h-7 w-7" />,
    },
    {
      path: `#`,
      icon: <FaXTwitter className="h-7 w-7" />,
    },
    {
      path: `#`, // Instagram doesn't have a native share URL for web
      icon: <FaInstagram className="h-7 w-7" />,
    },
    {
      path: `#`, // TikTok might not support direct sharing via URL
      icon: <FaTiktok className="h-7 w-7" />,
    },
  ];

  return (
    <>
      <div className="bg-main text-white relative">
        <div className="lg:hidden">
          <div
            className={`absolute ${
              menuOpen ? "" : "hidden"
            } top-0 right-0 w-full md:w-3/4 h-full bg-main flex flex-col gap-4   z-50 `}
          >
            <div className="flex justify-between bg-dry w-full p-4 ">
              <div>
                <Link onClick={() => setMenuOpen((prev) => !prev)} to={`/`}>
                  <img
                    className="h-20 w-20 rounded-full"
                    src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1739151976/logoround_awixqx.png"
                    alt=""
                  />
                </Link>
              </div>

              <span
                onClick={() => setMenuOpen((prev) => !prev)}
                className="rounded-full  h-14 w-14   text-main bg-white hover:bg-subMain hover:text-white transi hover:rotate-180 flex justify-center items-center"
              >
                <IoClose className="h-5 w-5" />
              </span>
            </div>

            <div className="flex flex-col justify-start gap-3 p-4">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-subMain hover:bg-white transi text-white relative"
                  } hov p-2 flex  gap-2 items-center `
                }
                to={`/movies`}
              >
                Movies
                <BsCollectionPlayFill />
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-subMain hover:bg-white transi text-white relative"
                  } hov p-2 flex  gap-2 items-center `
                }
                to={`/about`}
              >
                About
                <FaInfoCircle />
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-subMain hover:bg-white transi text-white relative"
                  } hov p-2 flex  gap-2 items-center `
                }
                to={`/contact`}
              >
                Contact
                <TiContacts />
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-subMain hover:bg-white transi text-white relative"
                  } hov  p-2 flex  items-center`
                }
                to={`${dash}`}
              >
                {User ? <TbTableDashed /> : <FaUserCircle />}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-subMain hover:bg-white  transi text-white relative"
                  }  hov2   p-2 py-3 flex items-center relative `
                }
                to={`${fav}`}
              >
                <FaHeartCircleCheck className="w-6 h-6" />
                <p className="w-4 h-4 flexCol_mdRow rounded-full  hova2 text-xs bg-white text-main absolute top-[3px] left-[30px]">
                  {FavouriteCount}
                </p>
              </NavLink>
            </div>

            <div className="px-4 mt-12">
              <div className="  py-10  px-2 w-full  bg-main rounded-md flex justify-between items-center  border border-border ">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.path}
                    className="bg-border p-2 rounded-md transi flex justify-center items-center hover:bg-white hover:text-border"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Navbar
          HandleInputChange={HandleInputChange}
          searchResult={searchResult}
          Text={Text}
        />

        <div
          className={` ${
            searchResult && searchResult.length > 0 ? "" : ""
          } fixed w-full top-26 z-50 left-0 flex flex-col gap-5 bg-drkb text-white p-5  overflow-y-auto`}
        >
          {searchResult &&
            searchResult.map((movie, i) => (
              <Link to={`/movie/${movie.id}`} className="font-semibold">
                {movie.name}
              </Link>
            ))}
          {/* <p className="text-subMain font-semibold text-2xl">Testing</p> */}
        </div>
        {children}

        <Footer />
        {/* Mobile Footer */}
        <MobileFooter setMenuOpen={setMenuOpen} />
      </div>
    </>
  );
};

export default Layout;
