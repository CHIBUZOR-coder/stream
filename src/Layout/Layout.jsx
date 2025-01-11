import { Link, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import MobileFooter from "../Footer/MobileFooter";
import Navbar from "../Navbar/Navbar";
import { MdCancel } from "react-icons/md";
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsCollectionPlayFill } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FaFacebook, FaInfoCircle, FaInstagram, FaTiktok, FaUserCircle, FaWhatsapp } from "react-icons/fa";
import { FaHeartCircleCheck, FaXTwitter } from "react-icons/fa6";
import MovieContext from "../Context/MovieContext";

const Layout = ({ children }) => {
  const { FavouriteCount } = useContext(MovieContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const hover = "hover:text-subMain transi text-white relative";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

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
                <Link to={`/stream/`}>
                  <img
                    className="h-20 w-20 rounded-full"
                    src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1734517937/StreamLogo_ao5f75.png"
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
                      : "hover:text-subMain hover:bg-white transi text-white relative"
                  } hov p-2 flex  gap-2 items-center `
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
                      : "hover:text-subMain hover:bg-white transi text-white relative"
                  } hov p-2 flex  gap-2 items-center `
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
                      : "hover:text-subMain hover:bg-white transi text-white relative"
                  } hov  p-2 flex  items-center`
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
                      : "hover:text-subMain hover:bg-white  transi text-white relative"
                  }  hov2   p-2 py-3 flex items-center `
                }
                to={`/stream/favouritpage`}
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
        <Navbar />
        {children}

        <Footer />
        {/* Mobile Footer */}
        <MobileFooter setMenuOpen={setMenuOpen} />
      </div>
    </>
  );
};

export default Layout;
