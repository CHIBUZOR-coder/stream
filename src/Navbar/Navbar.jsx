import { useContext } from "react";
import { BsCollectionPlayFill, BsFillSearchHeartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import MovieContext from "../Context/MovieContext";
import { FaInfoCircle } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

const Navbar = () => {
  const { FavouriteCount } = useContext(MovieContext);
  const hover = "hover:text-subMain transi text-white relative";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <>
      {/* Logo */}
      <div className="bg-main px-7 shadow-md sticky  top-0 z-50">
        <div className="container  px-5 py-4  lg:grid gap-10 grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:block hidden ">
            <div className="flex justify-center items-center">
              <Link to={`/stream/`}>
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1734517937/StreamLogo_ao5f75.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          {/**Logo Done**/}

          {/* Search Form */}
          <div className="col-span-3">
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
                className="font-mono  placeholder:text-border text-sm w-4/5 h-12 bg-transparent border-none px-2 text-black"
                type="text"
                placeholder="Search movie name"
              />
            </form>
          </div>
          {/**Search Form Done**/}

          {/*Menu*/}
          <div className="col-span-3  font-medium text-sm hidden xl:gap-8 2xl:gap-16 lg:flex justify-between xl:justify-end items-center">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-main bg-white"
                    : "hover:text-main hover:bg-white transi text-white relative"
                } hov p-2 flex justify-center gap-2 items-center rounded-md`
              }
              to={`/stream/movies`}
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
              to={`/stream/about`}
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
              to={`/stream/contact`}
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
              to={`/stream/login`}
            >
              <FaUserCircle />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-main bg-white"
                    : "hover:text-main hover:bg-white  transi text-white relative"
                } hov   p-3 flex justify-center items-center rounded-md`
              }
              to={`/stream/favouritpage`}
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
