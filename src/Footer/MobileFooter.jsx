import { useEffect, useState } from "react";
import { BsCollectionPlay, BsCollectionPlayFill } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

const MobileFooter = () => {
  const [isActive, setIsActive] = useState(() => {
    return localStorage.getItem("MobileActive") || "home";
  });
const HandleActive = (value) => {
  if (value === "") {
    return; // Do nothing if the value is empty
  }
  localStorage.setItem("MobileActive", value); // Update localStorage
  setIsActive(value); // Directly update the state with the new value
};


  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
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
              {MobileLinks.map((mobLink, i) => (
                <Link
                  key={i}
                  to={mobLink.path}
                  onClick={() => HandleActive(mobLink.name)}
                  className={`${
                    isActive === mobLink.name
                      ? "bg-white text-main"
                      : "text-white"
                  } py-2 px-3 rounded-md flex justify-center items-center hover:text-main hover:bg-white  ${
                    mobLink.bg ? "text-white " : ""
                  }  `}
                >
                  {mobLink.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
