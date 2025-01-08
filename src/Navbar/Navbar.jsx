import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const hover = "hover:text-subMain transi text-white relative";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <>
      {/* Logo */}
      <div className="bg-main px-7 shadow-md sticky  top-0 z-20">
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
          <div className="col-span-3  font-medium text-sm hidden xl:gap-14 2xl:gap-20 lg:flex justify-between xl:justify-end items-center">
            <NavLink className={Hover} to={`/stream/movies`}>
              Movies
            </NavLink>
            <NavLink className={Hover} to={`/stream/about`}>
              About
            </NavLink>
            <NavLink className={Hover} to={`/stream/contact`}>
              Contact
            </NavLink>
            <NavLink className={Hover} to={`/stream/login`}>
              <FaUserCircle />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-subMain"
                    : "hover:text-subMain transi text-white relative"
                } hov`
              }
              to={`/stream/favouritpage`}
            >
              <FaHeartCircleCheck />
              <p className="w-4 h-4 flexCol_mdRow rounded-full hova text-xs bg-subMain text-white absolute top-[-15px] right-[-1px]">
                3
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
