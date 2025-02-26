import { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../../../../Context/MovieContext";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { HandleActiveChange, isActive, slideLinks } = useContext(MovieContext);
  const userData = JSON.parse(localStorage.getItem("UserInfo")) || null;
  const nabvigate = useNavigate();
  const UserLinks = slideLinks.filter((item) => item.user === "All");

  // console.log(userData.role);

  const HandleLogout = async (e) => {
    e.preventDefault();

    try {
      // localStorage.clear();
      // Send a request to the backend to clear the HTTP-only cookie
      const res = await fetch(
        "https://streambackend-nbbc.onrender.com/clear-cookies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();

      if (res.ok) {
        window.location.href = "/";
        localStorage.clear();
        // Make sure to wait for the response

        console.log(data);
      } else {
        console.log("Failed to clear cookies. Server returned an error.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sidebar  mx-auto  bg">
      {/* Parent of the sticky element is now positioned relatively */}

      <div className="relative  ">
        <div className="flexCol justify-start  w-full items-start md:py-6 py-12 sticky top-0 bg-dry border border-gray-800 rounded-md px-4 ">
          {userData.role === "ADMIN"
            ? userData && (
                <>
                  {slideLinks.map((linkk, index) => (
                    <div
                      key={index}
                      onClick={(e) => {
                        HandleActiveChange(linkk.name, e);
                        if (linkk.name === "Logout") {
                          HandleLogout(e);
                        }
                      }}
                      className={` ${
                        isActive === linkk.name
                          ? "bg-dryGray text-subMain hover:text-subMain hover:bg-dryGray"
                          : "text-white hover:text-dry"
                      }  flex justify-start items-center w-full p-3 gap-4  hover:bg-main hover:text-dryGray    rounded-md  transi cursor-pointer`}
                    >
                      {linkk.icon}
                      <p>{linkk.name}</p>
                    </div>
                  ))}
                </>
              )
            : userData && userData.role === "USER"
            ? userData && (
                <>
                  {UserLinks.map((linkk, index) => (
                    <div
                      key={index}
                      onClick={(e) => {
                        HandleActiveChange(linkk.name, e);
                        if (linkk.name === "Logout") {
                          HandleLogout(e);
                        }
                      }}
                      className={` ${
                        isActive === linkk.name
                          ? "bg-dryGray text-subMain hover:text-subMain hover:bg-dryGray"
                          : "text-white"
                      }  flex justify-start items-center w-full p-3 gap-4  hover:bg-main hover:text-dryGray rounded-md  transi cursor-pointer`}
                    >
                      {linkk.icon}
                      <p>{linkk.name}</p>
                    </div>
                  ))}
                </>
              )
            : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
