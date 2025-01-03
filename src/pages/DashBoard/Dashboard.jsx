import { useContext, useEffect, useState } from "react";
import SideBar from "./Components/Dashboard/SideBar";
import MovieContext from "../../Context/MovieContext";
import DboardPage from "./Components/Dashboard/DboardPage";
import Favourite from "./FavouriteMovies";
import UpdatePassword from "./UpdatePassword";

const DashboardPage = () => {
  // const { isActive, display } = useContext(MovieContext);

  const { isActive, display, setDisplay } = useContext(MovieContext);
  // const [display, setDisplay] = useState(<DboardPage />);

  useEffect(() => {
    console.log(isActive);
    if (isActive === "Update Profile") {
      setDisplay(<div> Update Profile</div>);
    } else if (isActive === "Favourite Movies") {
      setDisplay(<Favourite />);
    } else if (isActive === "Change Password") {
      setDisplay(<UpdatePassword />);
    } else if (isActive === "Notifications") {
      setDisplay(<div> Notifications</div>);
    } else if (isActive === "Users") {
      setDisplay(<div> Users</div>);
    } else if (isActive === "Categories") {
      setDisplay(<div> Categories</div>);
    } else if (isActive === "Add Movie") {
      setDisplay(<div> Add Movie</div>);
    } else if (isActive === "Movies List") {
      setDisplay(<div> Movies List</div>);
    } else if (isActive === "Dashboard") {
      setDisplay(<DboardPage />);
    } else {
      setDisplay(<div> Profile</div>);
    }
  }, [isActive]);

  return (
    <div className="flex md:flex-row flex-col min-h-screen bg-main py-3 px-4 gap-10 md:gap-8 md:px-10 ">
      <div className=" w-full md:w-[25%] relative">
        <SideBar />
      </div>

      <div className=" w-full md:w-[75%] rounded-md ">{display}</div>
    </div>
  );
};

export default DashboardPage;
