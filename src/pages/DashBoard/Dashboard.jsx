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
import { RiLoader2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Login from "../Login";

const Dashboard = () => {
  const {
    isActive,
    display,
    setDisplay,
    Userr,
    currentModal,
    setCurrentModal,
    ModalDisplay,
    ModalChangeUpdate,
    setModalDisplay,
    UpdatedTite,
    setInputVal,
    IdRetrival,
    AllMovies,
    Alert,
    issLoading,
    setIsLoading,
    setAutornder,
    HandleGetCategories,
    HandleGetMovies,
    setResult,
    User,
  } = useContext(MovieContext);

  // console.log("all", allProductes);

  //Movilist data
  const [MovieId, setMoveId] = useState(null);
  const [MovieToUpdate, setMovieToUpdate] = useState("");
  const [fetchId, setFetchId] = useState(null);

  // const User = JSON.parse(localStorage.getItem("UserInfo")) || null;

  const navigate = useNavigate();

  useEffect(() => {
    if (AllMovies) {
      console.log("from dash", AllMovies);

      const update = AllMovies.find((item) => item.id === MovieId);
      console.log("update:", update);

      if (update) {
        if (update.id === MovieId) {
          setFetchId(MovieId);
        }
      }
    }
  }, [MovieId]);

  //this sets the modal to display
  const Handlegeneral = (name, id) => {
    setCurrentModal("TableEdit");
    console.log("Table");
    ModalChangeUpdate(name);
    IdRetrival(id, setMoveId);
  };

  //values sent to input below
  const [newCategory, setNewCategory] = useState("");
  const [newUpDate, setNewUpdate] = useState("");

  //Values sent to fetch request below
  const [updatCategory, setUpdateCategory] = useState({ tittle: "", id: null });
  const [updatedMovie, setUpdatedMovie] = useState({ name: "", movieId: null });
  const [tittle, setTittle] = useState({ tittle: "" });

  const [categoryId, setCatgoryId] = useState(null);

  const [loadDisplay, setLoadDiaplay] = useState("");

  useEffect(() => {
    console.log("MovieId", MovieId);
  }, [MovieId]);

  useEffect(() => {
    setTittle({ tittle: newCategory });
    setUpdateCategory((prev) => ({
      ...prev,
      tittle: newUpDate,
      id: categoryId,
    }));
  }, [newCategory, newUpDate, categoryId]);

  useEffect(() => {
    setUpdatedMovie((prev) => ({
      ...prev,
      name: MovieToUpdate,
      movieId: fetchId,
    }));
  }, [fetchId, MovieToUpdate]);

  //MovieFetch
  //*****************Update Movies*************
  const HandleUpdateMovie = async () => {
    setLoadDiaplay("Updating Movie...");
    setIsLoading(true);

    try {
      let data;
      const res = await fetch("https://streambackend-v5u9.onrender.com/api/updateMovie", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-auth-token",
        },
        body: JSON.stringify(updatedMovie),
      });

      if (!res.ok) {
        data = await res.json();
        setIsLoading(false);
        setResult(Alert(false, data.message));
      }
      data = await res.json();
      console.log(data);

      setIsLoading(false);
      setResult(Alert(true, "Movie updated succesfully"));
      HandleGetMovies();
    } catch (error) {
      console.error(error.message);
      setResult(Alert(false, "Somthing went wrong"));
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 6000);
    }
  };

  //Delete Movie
  const HandleDeleteMovie = async (e, id) => {
    e.preventDefault();
    setLoadDiaplay("Deleting Movie...");
    setIsLoading(true);

    try {
      let data;
      const res = await fetch("https://streambackend-v5u9.onrender.com/api/deletSingleMovie", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-auth-token",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        data = await res.json();
        setIsLoading(false);
        setResult(Alert(false, data.message));
      }
      data = await res.json();
      console.log(data);

      setIsLoading(false);
      setResult(Alert(true, "Movie deleted succesfully"));
      HandleGetMovies();
    } catch (error) {
      console.error(error.message);
      setResult(Alert(false, "Somthing went wrong"));
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 6000);
    }
  };

  //Category Fetch**********
  //*****************Add Catehgory**********
  const HandeleAddCategory = async () => {
    // e.preventDefault();
    setLoadDiaplay("Adding Category...");
    setIsLoading(true);

    try {
      const res = await fetch("https://streambackend-v5u9.onrender.com/api/createCartegory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-auth-token",
        },
        body: JSON.stringify(tittle),
      });
      let data;
      if (!res) {
        setIsLoading(false);
        data = await res.json();
        setResult(Alert(false, data.message));
      }
      data = await res.json();
      setIsLoading(false);
      HandleGetCategories();
      setResult(Alert(true, "Category added successfully"));
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 6000);
    }
  };

  //*************Update  Category*******************
  const HandeleUpdateCategory = async () => {
    setIsLoading(true);
    setLoadDiaplay("Updating Category...");

    // e.preventDefault();
    try {
      const res = await fetch("https://streambackend-v5u9.onrender.com/api/updateCategory", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-auth-token",
        },
        body: JSON.stringify(updatCategory),
      });
      let data;
      if (!res.ok) {
        data = await res.json();

        setIsLoading(false);
        setResult(Alert(false, data.message));
      }

      setIsLoading(false);
      setResult(Alert(true, "Category updated succesfully"));
      setAutornder((prev) => !prev);
      data = await res.json();
      console.log(data);
      HandleGetCategories();
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 6000);
    }
  };

  const Rerender = (setter) => {
    setter((prev) => !prev);
    console.log("Rerendering done");
  };

  useEffect(() => {
    // console.log(isActive);
    if (isActive === "Update Profile") {
      setDisplay(<UpdateProfile Forr={"show"} />);
    } else if (isActive === "Change Password") {
      setDisplay(
        <UpdatePassword
          setIsLoading={setIsLoading}
          setResult={setResult}
          setLoadDiaplay={setLoadDiaplay}
        />
      );
    } else if (isActive === "Users") {
      setDisplay(<Users />);
    } else if (isActive === "Categories") {
      setDisplay(
        <Categories
          IdRetrival={IdRetrival}
          setter={setCatgoryId}
          setResult={setResult}
          Rerender={Rerender}
        />
      );
    } else if (isActive === "Add Movie") {
      setDisplay(
        <AddMovies
          isLoading={issLoading}
          setIsLoading={setIsLoading}
          setResult={setResult}
          setLoadDiaplay={setLoadDiaplay}
        />
      );
    } else if (isActive === "Movies List") {
      setDisplay(
        <MovieList
          Handlegeneral={Handlegeneral}
          setMoveIid={setMoveId}
          HandleUpdateMovie={HandleUpdateMovie}
          HandleDeleteMovie={HandleDeleteMovie}
          setResult={setResult}
          setIsLoading={setIsLoading}
          setLoadDiaplay={setLoadDiaplay}
        />
      );
    } else if (isActive === "Dashboard") {
      setDisplay(
        <Profile
          HandleDeleteMovie={HandleDeleteMovie}
          setMoveIid={setMoveId}
          setResult={setResult}
          setIsLoading={setIsLoading}
          setLoadDiaplay={setLoadDiaplay}
          Handlegeneral={Handlegeneral}
          setModalDisplay={setModalDisplay}
        />
      );
    } else {
      setDisplay(<Profile />);
    }
  }, [isActive]);

  return (
    <Layout>
      {User && User.role ? (
        <div className="flex lg:flex-row flex-col min-h-screen bg-main  relative py-3 px-5 gap-10 md:gap-8 lg:px-10 ">
          <div
            className={`${
              issLoading ? "" : "hidden"
            } absolute top-0 left-0 w-full h-full flex justify-center  bg-modal z-40`}
          >
            {issLoading && (
              <div className=" fixed top-[200px] h-24 w-1/2 rounded-md border-border text-white  flex flex-col justify-center items-center ">
                <RiLoader2Fill className="h-10 w-10 animate-spin" />
                <p className="font-semibold">{loadDisplay}</p>
                <p className="font-semibold">
                  this will take about two minutes
                </p>
              </div>
            )}
          </div>

          <div
            className={`absolute top-0 left-0 w-full ${
              ModalDisplay ? "" : "hidden"
            }  z-20 h-full bg-modal flex flex-col justify-start items-center gap-5  p-4 `}
          >
            <div className="flex absolute top-[60px] mod right-5 md:right-auto justify-end items-center w-full md:w-1/2 ">
              <span
                onClick={() => setModalDisplay((prev) => !prev)}
                className="rounded-full border-2 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 "
              >
                <MdCancel className="h-12 w-12" />
              </span>
            </div>

            <div className=" w-[90%] md:w-1/2 absolute top-[160px]  prof rounded-lg border border-border flexCol  gap-10 p-6 bg-dry">
              {currentModal === "Add" ? (
                <>
                  <h2 className="text-2xl font-bold ">Create Category</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setCurrentModal("Add");
                      setModalDisplay((prev) => !prev);
                      HandeleAddCategory();
                    }}
                    className="flex flex-col gap-6 text-left"
                    action=""
                  >
                    <Input
                      label={"Category Name"}
                      placeholder={"Add category name"}
                      type={"text"}
                      setter={setNewCategory}
                      mainVal={newCategory}
                      setInputVal={setInputVal}
                      indicator={"Category Name"}
                      lablFor={"tittle"}
                    />
                    <button
                      type="submit"
                      className="w-full font-semibold  flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main"
                    >
                      <HiPlusCircle className="pikin h-7 w-7" /> Add
                    </button>
                  </form>
                </>
              ) : currentModal === "Edit" ? (
                <>
                  <h2 className="text-2xl font-bold ">Update Category</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setCurrentModal("Edit");
                      setModalDisplay((prev) => !prev);
                      console.log(currentModal);
                      HandeleUpdateCategory();
                      setTimeout(() => {
                        Rerender(setAutornder);
                      }, 200);
                    }}
                    className="flex flex-col gap-6 text-left"
                    action=""
                  >
                    <Input
                      label={"Category Name"}
                      placeholder={`${UpdatedTite}`}
                      mainVal={newUpDate}
                      setInputVal={setInputVal}
                      setter={setNewUpdate}
                      type={"text"}
                      indicator={"Category Name"}
                      lablFor={"tittle"}
                    />
                    <button className="w-full font-semibold transi Oga  flexRow py-3 rounded border-2 gap-3 cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main">
                      <RxUpdate className="pikin" /> Update
                    </button>
                  </form>
                </>
              ) : currentModal === "TableEdit" ? (
                <>
                  <h2 className="text-2xl font-bold ">Update Movie</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setCurrentModal("Edit");
                      setModalDisplay((prev) => !prev);
                      console.log(currentModal);
                      HandleUpdateMovie();
                    }}
                    className="flex flex-col gap-6 text-left"
                    action=""
                  >
                    <Input
                      label={"Movie Name"}
                      placeholder={`${UpdatedTite}`}
                      mainVal={MovieToUpdate}
                      setInputVal={setInputVal}
                      setter={setMovieToUpdate}
                      type={"text"}
                      indicator={"Category Name"}
                      lablFor={"tittle"}
                    />
                    <button
                      onClick={() => HandleUpdateMovie()}
                      className="w-full font-semibold transi Oga  flexRow py-3 rounded border-2 gap-3 cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main"
                    >
                      <RxUpdate className="pikin" /> Update
                    </button>
                  </form>
                </>
              ) : currentModal === "DeleteUser" ? (
                <>
                  <UpdateProfile />
                </>
              ) : (
                <p>{console.log("No current modal")}</p>
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
        <Login />
      )}
    </Layout>
  );
};

export default Dashboard;
