import { createContext, useCallback, useEffect, useState } from "react";

import { Movies } from "../Data/MovieData";
import { Casts } from "../Data/CastsData";
// import { CategoryData } from "../Data/CategoryData"; // Include CategoryData

import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaUser } from "react-icons/fa";
import { RiLockPasswordLine, RiMovie2Fill } from "react-icons/ri";
import { HiViewColumns } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import Profile from "../pages/DashBoard/Components/DashboardComponents/Profile";
import { userData } from "../Data/UserData";
import DataResolve from "../DataFetching/DataResolve";
import { data } from "react-router-dom";

// import DashboardPage from "../pages/DashBoard/Dashboard";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  // fetchied

  const [CategoryId, setCategoryId] = useState(null);
  const [FetchedMovies, setFetchedMovies] = useState(null);

  const {
    data: AllCategory,
    isLoading,
    error,
  } = DataResolve("http://localhost:5000/api/getCategory", "GET");
  // categoryData = AllCategory.data;

  // console.log("All", AllCategory.data);
  let categoryData;

  if (AllCategory) {
    categoryData = AllCategory.data;
    console.log("all:", AllCategory);
    
    
  }
  // console.log("ctd", categoryData);

  useEffect(() => {
    const HandleGetMovies = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/getMovies", {
          method: "GET",
          headers: {
            "Content-Type": "Application/Json",
          },
          // body: JSON.stringify({ id }),
        });
        let data;
        if (res.ok) {
          console.log("Movies fetched successfully");

          data = await res.json();
          setFetchedMovies(data.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    HandleGetMovies();
  }, []);

  const AllMovies = FetchedMovies;
  // console.log("all", AllMovies);

  // useEffect(() => {
  //   if (categoryData) console.log("data:", categoryData[0].name);
  // }, [categoryData]);

  //id retrival for update
  const IdRetrival = (id, setter) => {
    setter(parseInt(id));
    console.log(id);
  };

  const user = {
    name: "John Doe",
    image: "Adam",
    review: "Great service and content!",
    star: 5,
    role: "Admin",
  };
  const Users = userData;
  // console.log(CategoryData);

  const [User, setUser] = useState(user);
  // console.log("from MovieContext", User.role);
  const [selectedItems, setSelectedItems] = useState({});
  const [userChoice, setUserChoice] = useState(null);
  // ***************Dashbord***************
  const [isActive, setIsActive] = useState(() => {
    // Retrieve the initial value from localStorage or set a default
    return localStorage.getItem("Active") || "Dashboard";
  });
  const [display, setDisplay] = useState(<Profile />);
  // ********Dashboard Done**************
  // *****************Modal Display********
  const [currentModal, setCurrentModal] = useState("Add");
  const [UpdatedTite, setUpdatedTitle] = useState(null);
  // console.log(currentModal);
  const ModalChangeUpdate = (Title) => {
    setModalDisplay((prev) => !prev);
    // setCurrentModal("Edit");
    console.log(currentModal);
    console.log(Title);
    setUpdatedTitle(Title);
  };
  const [ModalDisplay, setModalDisplay] = useState(false);
  // *****************Modal Display Done********

  //Favourite Cart
  const [FavouriteCount, setFavouriteCount] = useState(0);
  const [FavouriteCart, setFavouriteCart] = useState(() => {
    const storedCart = localStorage.getItem("FavouriteCart");
    return storedCart ? JSON.parse(storedCart) : []; // Parse the stored value if available, otherwise return an empty array
  });

  useEffect(() => {
    const favouriteCount = FavouriteCart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    const count = favouriteCount ? favouriteCount : 0;
    setFavouriteCount(count);

    // console.log(count);
  }, [FavouriteCart]);

  useEffect(() => {
    // console.log("favCart", FavouriteCart);
  }, [FavouriteCart]);
  // *****Form****************

  const handleFileUploaded = (
    newFiles,
    preview,
    prviewSetter,
    MainImageSetter
  ) => {
    if (typeof MainImageSetter === "function") {
      MainImageSetter(newFiles);
    } else {
      console.error("MainImageSetter is not a function");
    }

    prviewSetter(preview);

    console.log("file", newFiles);

    console.log(
      "filename",
      newFiles.name.slice(0, -4) // Drops the last 4 characters
    );
  };
  const handleFileUploadedVideo = (
    newFiles,
    preview,
    prviewSetter,
    MainVideoSetter
  ) => {
    if (typeof MainVideoSetter === "function") {
      MainVideoSetter(newFiles);
    } else {
      console.error("MainImageSetter is not a function");
    }
    prviewSetter(preview);

    console.log("file", newFiles);
    console.log("filename", newFiles.name.slice(0, -4));
  };

  const setInputVal = (vale, setter, mainVal, indicator) => {
    setter(vale);
    console.log(`${indicator}:`, mainVal);
    console.log("mainval", mainVal);
  };

  // ******For Done*******

  const YearData = [
    { name: "Sort By Year" },
    { tittle: "1700 - 1800", id: 1 },
    { tittle: "1800 - 1900", id: 2 },
    { tittle: "1900 - 2000", id: 3 },
    { tittle: "2000 - 2010", id: 4 },
    { tittle: "2010 - 2030", id: 5 },
  ];

  const TimesData = [
    { name: "Sort By Hours" },
    { tittle: "1 - 2 hrs", id: 1 },
    { tittle: "2 - 3 hrs", id: 2 },
    { tittle: "3 - 4 hrs", id: 3 },
    { tittle: "4 - 5 hrs", id: 4 },
  ];

  const RatesData = [
    { name: "Sort By Rates" },
    { tittle: "1 Star", id: 1 },
    { tittle: "2 Star", id: 2 },
    { tittle: "3 Star", id: 3 },
    { tittle: "4 Star", id: 4 },
    { tittle: "5 Star", id: 5 },
  ];

  const HandleGetSelected = (dropdownId, itemId) => {
    setSelectedItems((prev) => {
      const updatedSelections = {
        ...prev,
        [dropdownId]: itemId,
      };

      const datasets = {
        1: categoryData,
        2: YearData,
        3: TimesData,
        4: RatesData,
      };

      const dataset = datasets[dropdownId];
      const selectedTitle = dataset?.find((item) => item.id === itemId)?.tittle;

      console.log(`Dropdown ${dropdownId}: Selected Title -`, selectedTitle);

      const selectedValues = Object.entries(updatedSelections).reduce(
        (acc, [key, value]) => {
          const ds = datasets[key];
          const title = ds?.find((item) => item.id === value)?.tittle;
          if (title) acc[key] = title;
          return acc;
        },
        {}
      );

      console.log("All Selected Titles:", selectedValues);
      setUserChoice(selectedValues);
      return updatedSelections;
    });
  };

  const HandleActiveChange = (name, e) => {
    const ActiveState = localStorage.setItem("Active", name);
    setIsActive(name);
  };

  const slideLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <BsFillGridFill />,
      user: "All",
    },
    {
      name: "Movies List",
      link: "/movielist",
      icon: <FaListAlt />,
      user: "All",
    },
    {
      name: "Add Movie",
      link: "/addmovie",
      icon: <RiMovie2Fill />,
      user: "Admin",
    },
    {
      name: "Categories",
      link: "/categories",
      icon: <FaListAlt />,
      user: "Admin",
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: <HiViewColumns />,
      user: "All",
    },
    { name: "Users", link: "dashboard/users", icon: <FaUser />, user: "Admin" },
    {
      name: "Update Profile",
      link: "dashboard/profile",
      icon: <FiSettings />,
      user: "All",
    },
    {
      name: "Favourite Movies",
      link: "/messages",
      icon: <FaHeart />,
      user: "All",
    },
    {
      name: "Change Password",
      link: "/password",
      icon: <RiLockPasswordLine />,
      user: "All",
    },
  ];

  //Alert
  const Alert = (success, message) => {
    if (success) {
      let value;
      value = message;
      return value;
    } else if (!success) {
      let errorMessage;
      errorMessage = message;
      return errorMessage;
    }
  };

  // useEffect(() => {
  //   console.log("FavouriteMovies", FavouriteCart);
  // }, [FavouriteCart]);

  //Add to favorite cart
  const AddToCart = (movie, amount) => {
    let StoredFavouriteCart =
      JSON.parse(localStorage.getItem("FavouriteCart")) || [];

    const addedMovie = StoredFavouriteCart.find(
      (item) => item.id === parseInt(movie.id)
    );
    let feedback;
    const total = amount;
    const vat = 22;
    const quantity = 1;
    if (addedMovie) {
      console.log("Movie already exists");
      feedback = Alert(false, " Movie already exist");
      console.log("feedback", feedback);

      return;

      // addedMovie = { ...addedMovie, amount, vat };
      StoredFavouriteCart = StoredFavouriteCart.map((item) =>
        item.id === parseInt(movie.id)
          ? { ...item, total, amount, vat, quantity }
          : item
      );
    } else {
      StoredFavouriteCart = [
        ...StoredFavouriteCart,
        { ...movie, total, amount, vat, quantity },
      ];
      const check = StoredFavouriteCart.find(
        (item) => item.name === movie.name
      );
      if (check) {
        feedback = Alert(true, " Movie added Succesfully");
        console.log("feedback", feedback);
      }
    }

    localStorage.setItem("FavouriteCart", JSON.stringify(StoredFavouriteCart));
    setFavouriteCart(StoredFavouriteCart);
  };

  return (
    <MovieContext.Provider
      value={{
        setSelectedItems,
        selectedItems,
        RatesData,
        TimesData,
        YearData,
        HandleGetSelected,
        userChoice,
        Movies,
        Casts,
        isActive,
        slideLinks,
        HandleActiveChange,
        display,
        setDisplay,
        User,
        Users,
        currentModal,
        setCurrentModal,
        ModalDisplay,
        setModalDisplay,
        ModalChangeUpdate,
        UpdatedTite,
        handleFileUploaded,
        handleFileUploadedVideo,
        setInputVal,
        AddToCart,
        Alert,
        FavouriteCount,
        categoryData,
        IdRetrival,
        CategoryId,
        setCategoryId,
        AllMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
export { MovieProvider };
