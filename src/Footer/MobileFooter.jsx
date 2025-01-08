import { BsCollectionPlay, BsCollectionPlayFill } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const MobileFooter = () => {
  const active = "text-dry bg-white";
  const inActive =
    "transi text-2xl flexCol hover:bg-white hover:text-main text-white rounded-md px-4 py-3";
  const Hover = ({ isActive }) => 
    isActive ? `${active} ${inActive}` : `${inActive}`;
  
  return (
    <>
      <div className="flex-btn h-full   overflow-y-scroll flex-grow w-full">
        {/* Drawer */}
        <div className="fixed lg:hidden z-50  bottom-0 w-full  ">
          <div className="bg-main  flex justify-between items-center w-full p-2 ">
            <NavLink className={Hover} to={`/stream/movies`}>
              <BsCollectionPlay className="w-7 h-7" />
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-subMain"
                    : "hover:text-subMain transi text-white relative"
                } hov`
              }
              to={`/stream/favourite`}
            >
              <FaHeartCircleCheck className="w-7 h-7" />
              <p className="w-4 h-4 flexCol_mdRow rounded-full hova text-xs bg-subMain text-white absolute top-[-15px] right-[-1px]">
                3
              </p>
            </NavLink> */}

            <NavLink className={Hover} to={`/stream/login`}>
              <FaUserCircle className="w-7 h-7" />
            </NavLink>
            <button className={inActive}>
              <CgMenu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
