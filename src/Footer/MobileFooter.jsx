import { useEffect, useState } from "react";
import { BsCollectionPlay, BsCollectionPlayFill } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

const MobileFooter = () => {
  const hover = "hover:text-subMain transi text-white relative";
  const Hover = ({ isActive }) => (isActive ? "text-subMain  " : hover);

  const MobileLinks = [
    {
      icon: <BiHomeAlt className="w-6 h-6" />,
      path: "/stream/",
      name: "home",
      bg: false,
    },
    {
      icon: <FaHeartCircleCheck className="w-6 h-6" />,
      path: "/stream/favouritpage",
      name: "favourite",
      bg: false,
    },
    {
      icon: <FaUserCircle className="w-6 h-6" />,
      path: "/stream/login",
      name: "login",
      bg: false,
    },
    {
      icon: (
        <button>
          <CgMenu className="w-6 h-6" />
        </button>
      ),
      path: "",
      name: "",
      bg: true,
    },
  ];

  return (
    <>
      <div className="flex-btn h-full overflow-y-scroll flex-grow w-full">
        {/* Drawer */}
        <div className="fixed lg:hidden z-50 bottom-0 w-full">
          <div className="bg-main flex justify-between items-center w-full p-2 gap-4">
            <div className="flex w-full justify-between">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-subMain transi text-white relative"
                  } hov px-4 py-3 flex justify-center items-center rounded-md`
                }
                to={`/stream/movies`}
              >
                <BsCollectionPlayFill className="w-6 h-6" />
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-subMain transi text-white relative"
                  } hov   px-4 py-3 flex justify-center items-center rounded-md`
                }
                to={`/stream/favouritpage`}
              >
                <FaHeartCircleCheck className="w-6 h-6" />
                <p className="w-4 h-4 flexCol_mdRow rounded-full hova text-xs bg-subMain text-white absolute top-[-15px] right-[-1px]">
                  3
                </p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-subMain transi text-white relative"
                  } hov  px-4 py-3 flex justify-center items-center rounded-md`
                }
                to={`/stream/login`}
              >
                <FaUserCircle className="w-6 h-6" />
              </NavLink>

              <button className=" px-4 py-3 flex justify-center items-center rounded-md bg-white text-main">
                <CgMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
