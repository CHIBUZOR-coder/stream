import { useContext, useEffect, useState } from "react";
import { BsCollectionPlay, BsCollectionPlayFill } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

import MovieContext from "../Context/MovieContext";
import { TbTableDashed } from "react-icons/tb";

const MobileFooter = ({ setMenuOpen }) => {
  const User = JSON.parse(localStorage.getItem("userInfo"));
  const hover = "hover:text-subMain transi text-white relative";
  const Hover = ({ isActive }) => (isActive ? "text-subMain  " : hover);
  const { FavouriteCount } = useContext(MovieContext);
  


  const userData = JSON.parse(localStorage.getItem("UserInfo")) || null;
  // console.log(userData.userInfo);
  //
  // const dash = userData ? `/stream/dash/${userData.usrid}` : "/stream/login";

  let dash;
  let fav;
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

    fav = `/favouritpage/${userData.userInfo.name}`;
  }
  return (
    <>
      <div className="flex-btn   ">
        <div className="fixed lg:hidden z-40 bottom-0 w-full bg-main">
          <div className="bg-sub flex justify-between items-center w-full p-2 ">
            <div className="flex w-full justify-between">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-main hover:bg-white transi text-white relative"
                  } hov px-4 py-3 flex justify-center items-center rounded-md`
                }
                to={`/movies`}
              >
                <BsCollectionPlayFill className="w-6 h-6" />
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-main hover:bg-white  transi text-white relative"
                  } hov   px-4 py-3 flex justify-center items-center rounded-md`
                }
                to={`${fav}`}
              >
                <FaHeartCircleCheck className="w-6 h-6" />
                <p className="w-4 h-4 flexCol_mdRow rounded-full hova text-xs bg-white text-main absolute top-[0.6px] -right-[-9px]">
                  {FavouriteCount}
                </p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-main hover:bg-white transi text-white relative"
                  } hov  px-4 py-3 flex justify-center items-center rounded-md`
                }
                to={`${dash}`}
              >
                {userData ? <TbTableDashed /> : <FaUserCircle />}
              </NavLink>

              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className=" px-4 py-3 flex justify-center items-center rounded-md  text-white transi hover:text-main hover:bg-white"
              >
                <CgMenuRound className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
