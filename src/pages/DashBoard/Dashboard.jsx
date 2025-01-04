import { useContext, useEffect, useState } from "react";
import SideBar from "./Components/DashboardComponents/SideBar";
import MovieContext from "../../Context/MovieContext";
import UpdateProfile from "./Components/DashboardComponents/UpdateProfile";
import Layout from "../../Layout/Layout";

import UpdatePassword from "./Components/DashboardComponents/UpdatePassword";
import Favourite from "./Components/DashboardComponents/FavouriteMovies";
import Profile from "./Components/DashboardComponents/Profile";
import MovieList from "./ADMIN/MovieList";
import Categories from "./ADMIN/Categories";
import NotUser from "../NotUser";
import Users from "./ADMIN/Users";

const Dashboard = () => {
  // const { isActive, display } = useContext(MovieContext);

  const { isActive, display, setDisplay, User } = useContext(MovieContext);
  // const [display, setDisplay] = useState(<DboardPage />);

  useEffect(() => {
    console.log(isActive);
    if (isActive === "Update Profile") {
      setDisplay(<UpdateProfile />);
    } else if (isActive === "Favourite Movies") {
      setDisplay(<Favourite />);
    } else if (isActive === "Change Password") {
      setDisplay(<UpdatePassword />);
    } else if (isActive === "Notifications") {
      setDisplay(<div> Notifications</div>);
    } else if (isActive === "Users") {
      setDisplay(<Users />);
    } else if (isActive === "Categories") {
      setDisplay(<Categories />);
    } else if (isActive === "Add Movie") {
      setDisplay(<div> Add Movie</div>);
    } else if (isActive === "Movies List") {
      setDisplay(<MovieList />);
    } else if (isActive === "Dashboard") {
      setDisplay(<Profile />);
    } else {
      setDisplay(<Profile />);
    }
  }, [isActive]);

  return (
    <Layout>
      {User ? (
        <div className="flex lg:flex-row flex-col min-h-screen bg-main py-3 px-5 gap-10 md:gap-8 lg:px-10 ">
          <div className=" w-full lg:w-[25%] relative rounded-md ">
            <SideBar />
          </div>

          <div className=" w-full lg:w-[75%] bg-dry  rounded-md border border-gray-800 p-4">
            {display}
          </div>
        </div>
      ) : (
        <NotUser />
      )}
    </Layout>
  );
};

export default Dashboard;
