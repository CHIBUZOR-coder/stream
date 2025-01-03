import { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../../../../Context/MovieContext";

const SideBar = () => {
  const { HandleActiveChange, isActive, slideLinks } = useContext(MovieContext);
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
