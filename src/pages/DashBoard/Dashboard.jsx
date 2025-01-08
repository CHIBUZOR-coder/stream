import { useContext, useEffect, useState } from "react";
import SideBar from "./Components/DashboardComponents/SideBar";
import MovieContext from "../../Context/MovieContext";
import UpdateProfile from "./Components/DashboardComponents/UpdateProfile";
import Layout from "../../Layout/Layout";
import { MdCancel } from "react-icons/md";
import UpdatePassword from "./Components/DashboardComponents/UpdatePassword";
import Favourite from "./Components/DashboardComponents/FavouriteMovies";
import Profile from "./Components/DashboardComponents/Profile";
import MovieList from "./ADMIN/MovieList";
import Categories from "./ADMIN/Categories";
import NotUser from "../NotUser";
import Users from "./ADMIN/Users";
import { Input } from "../../Custom/Input";
import { HiPlusCircle } from "react-icons/hi2";
import { RxUpdate } from "react-icons/rx";
import AddMovies from "./ADMIN/AddMovies";

const Dashboard = () => {
  const {
    isActive,
    display,
    setDisplay,
    User,
    currentModal,
    setCurrentModal,
    ModalDisplay,
    setModalDisplay,
    UpdatedTite,
  } = useContext(MovieContext);

  useEffect(() => {
    // console.log(isActive);
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
      setDisplay(<AddMovies />);
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
        <div className="flex lg:flex-row flex-col min-h-screen bg-main cursor-pointer relative py-3 px-5 gap-10 md:gap-8 lg:px-10 ">
          <div
            className={`absolute top-0 left-0 w-full ${
              ModalDisplay ? "" : "hidden"
            }  z-20 h-full bg-modal flex flex-col justify-start items-center gap-5  p-4 `}
          >
            <div className="flex justify-end items-center w-full md:w-1/2 ">
              <span
                onClick={() => setModalDisplay((prev) => !prev)}
                className="rounded-full border-2 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 "
              >
                <MdCancel className="h-12 w-12" />
              </span>
            </div>

            <div className=" w-full md:w-1/2  rounded-lg border border-border flexCol  gap-10 p-6 bg-dry">
              {currentModal === "Add" ? (
                <>
                  <h2 className="text-2xl font-bold ">Create Category</h2>
                  <form className="flex flex-col gap-6 text-left" action="">
                    <Input
                      label={"Category Name"}
                      placeholder={"Add category name"}
                      type={"text"}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentModal("Add");
                        setModalDisplay((prev) => !prev);
                      }}
                      className="w-full font-semibold  flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main"
                    >
                      <HiPlusCircle className="pikin h-7 w-7" /> Add
                    </button>
                  </form>
                </>
              ) : (
                ""
              )}

              {currentModal === "Edit" ? (
                <>
                  <h2 className="text-2xl font-bold ">Update Category</h2>
                  <form className="flex flex-col gap-6 text-left" action="">
                    <Input
                      label={"Category Name"}
                      placeholder={`${UpdatedTite}`}
                      type={"text"}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentModal("Add");
                        setModalDisplay((prev) => !prev);
                        console.log(currentModal);
                      }}
                      className="w-full font-semibold transi Oga  flexRow py-3 rounded border-2 gap-3 cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main"
                    >
                      <RxUpdate className="pikin" /> Update
                    </button>
                  </form>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className=" w-full lg:w-[25%] relative rounded-md ">
            <SideBar />
          </div>

          <div className=" w-full lg:w-[75%] bg-dry  rounded-md border border-gray-800 rightbar p-4">
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
