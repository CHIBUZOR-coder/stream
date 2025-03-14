import { useContext, useEffect, useState } from "react";
import { BsCollectionPlayFill, BsFillSearchHeartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import MovieContext from "../Context/MovieContext";
import { FaInfoCircle } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { TbTableDashed } from "react-icons/tb";
import { use } from "react";

const Navbar = ({ HandleInputChange, Text }) => {
  const { FavouriteCount, logDetail } = useContext(MovieContext);
  // console.log("favaCount",FavouriteCount);
  const [access, setAccess] = useState(false);
  const userData = JSON.parse(localStorage.getItem("UserInfo")) || null;
  // console.log(userData.userInfo);
  //
  // const dash = userData ? `/stream/dash/${userData.usrid}` : "/stream/login";
  // useEffect(() => {
  //   console.log("logDetails after", logDetail);
  // }, [logDetail]);
  const NotUser = "/nofavorite";
  let dash;
  let fav;
  let UserName;
  if (!userData) {
    // console.log("No user info yet");
    dash = "/login";
  } else {
    dash =
      userData.role === "ADMIN"
        ? `/dash/ad/${userData.userInfo.name}`
        : userData.role === "USER"
        ? `/dash/us/${userData.userInfo.name}`
        : "NOT";

    UserName = userData.userInfo.userName;

    fav = `/favouritpage/${userData.userInfo.name}`;
  }

  // console.log("dash:", dash);

  const hover = "hover:text-subMain transi text-white relative";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <>
      {/* Logo */}
      <div className="bg-main px-5 md:px-7 shadow-md sticky   top-0 z-40">
        <div className="container  px-5 py-4  lg:grid gap-10 grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:block hidden ">
            <div className="flex justify-center items-center">
              <Link to={`/`}>
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1739151976/logoround_awixqx.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          {/**Logo Done**/}

          {/* Search Form */}
          <div className=" col-span-7 md:col-span-3 flex flex-col gap-2">
            <form
              className="w-full text-sm bg-dryGray rounded flex justify-start items-center gap-3 "
              action=""
            >
              <button
                className="bg-subMain w-12 h-12 rounded flexCol text-white"
                type="submit"
              >
                <BsFillSearchHeartFill />
              </button>

              <input
                onChange={(e) => HandleInputChange(e)}
                className="font-mono  placeholder:text-border text-sm w-4/5 h-12 bg-transparent border-none px-2 text-black"
                type="text"
                placeholder={`${Text ? Text : "Search movie name"}`}
              />
            </form>

            {UserName && (
              <div className="flex gap-2 text-sm justify-center items-center">
              
                <p className="text-text text-sm"> Welcome to your profile {UserName}!🎉</p>
              </div>
            )}
          </div>
          {/**Search Form Done**/}

          {/*Menu*/}
          <div className="col-span-3  font-medium text-sm hidden xl:gap-8 2xl:gap-16 lg:flex justify-between xl:justify-end items-center">
            <NavLink
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-main bg-white"
                    : "hover:text-main hover:bg-white transi text-white relative"
                } hov p-2 flex justify-center gap-2 items-center rounded-md`
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
                    : "hover:text-main hover:bg-white transi text-white relative"
                } hov p-2 flex justify-center gap-2 items-center rounded-md`
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
                    : "hover:text-main hover:bg-white transi text-white relative"
                } hov p-2 flex justify-center gap-2 items-center rounded-md`
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
                    : "hover:text-main hover:bg-white transi text-white relative"
                } hov  p-2 flex justify-center items-center rounded-md`
              }
              to={`${dash}`}
            >
              {/* <FaUserCircle /> */}
              {userData ? <TbTableDashed /> : <FaUserCircle />}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-main bg-white"
                    : "hover:text-main hover:bg-white  transi text-white relative"
                } hov   p-3 flex justify-center items-center rounded-md`
              }
              to={`${fav || NotUser}`}
            >
              <FaHeartCircleCheck className="w-6 h-6" />
              <p className="w-4 h-4 flexCol_mdRow rounded-full hova text-xs bg-white text-main absolute -top-[-1px] -right-[-3px]">
                {FavouriteCount}
              </p>
            </NavLink>
          </div>
          {/*Menu Done*/}
        </div>
      </div>
    </>
  );
};

export default Navbar;
