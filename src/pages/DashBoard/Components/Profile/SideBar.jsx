import { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiViewColumns } from "react-icons/hi2";
import { RiLockPasswordLine, RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideBar = ({ children }) => {
  const [isActive, setIsActive] = useState("Dashboard");
  const slideLinks = [
    { name: "Dashboard", link: "/dashboard/", icon: <BsFillGridFill /> },
    { name: "Movies List", link: "dashboard/movielist", icon: <FaListAlt /> },
    { name: "Add Movie", link: "dashboard/addmovie", icon: <RiMovie2Fill /> },
    { name: "Categories", link: "dashboard/categories", icon: <FaListAlt /> },
    { name: "Notifications", link: "/notifications", icon: <HiViewColumns /> },
    { name: "Users", link: "dashboard/users", icon: <FaUser /> },
    { name: "Update Profile", link: "dashboard/profile", icon: <FiSettings /> },
    { name: "Favourite Movies", link: "/messages", icon: <FaHeart /> },
    {
      name: "Change Password",
      link: "/password",
      icon: <RiLockPasswordLine />,
    },
  ];

  const HandleActiveChange = (name, e) => {
    setIsActive(name);
  };

  return (
    <div className="sidebar  mx-auto  bg">
      {/* Parent of the sticky element is now positioned relatively */}
      <div className="relative  ">
        <div className="flexCol justify-start  w-full items-start md:py-6 py-12 sticky top-0 bg-dry border border-gray-800 rounded-md px-4 ">
          {slideLinks.map((linkk, index) => (
            <div
              // to={linkk.link}

              key={index}
              onClick={(e) => HandleActiveChange(linkk.name, e)}
              className={` ${
                isActive === linkk.name
                  ? "bg-dryGray text-subMain hover:text-subMain hover:bg-dryGray"
                  : "text-white"
              }  flex justify-start items-center w-full p-3 gap-4  hover:bg-main rounded-md  transi cursor-pointer`}
            >
              {linkk.icon}
              <p>{linkk.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
