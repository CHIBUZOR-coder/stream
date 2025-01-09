import { useEffect, useState } from "react";
import { BsCollectionPlay, BsCollectionPlayFill } from "react-icons/bs";
import { LuSquareMenu } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

const MobileFooter = () => {
  const hover = "hover:text-subMain transi text-white relative";
  const Hover = ({ isActive }) => (isActive ? "text-subMain  " : hover);



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
                      : "hover:text-main hover:bg-white transi text-white relative"
                  } hov  p-[0.9rem]  flex justify-center items-center rounded-md`
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
                      : "hover:text-main hover:bg-white transi text-white relative"
                  } hov mobie_notiP   p-[0.9rem]  flex justify-center items-center rounded-md`
                }
                to={`/stream/favouritpage`}
              >
                <FaHeartCircleCheck className="w-6 h-6" />
                <p className="w-4 h-4 flexCol_mdRow rounded-full hova mobie_noti text-xs bg-subMain text-white absolute top-[1px] right-[10px]">
                  3
                </p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-main bg-white"
                      : "hover:text-main hover:bg-white transi text-white relative"
                  } hov  p-[0.9rem] flex justify-center items-center rounded-md`
                }
                to={`/stream/login`}
              >
                <FaUserCircle className="w-6 h-6" />
              </NavLink>

              <button className=" px-4 py-3 flex justify-center items-center rounded-md hover:bg-white  hover:text-main transi">
                <LuSquareMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
