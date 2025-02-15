import { createContext, useCallback, useEffect, useRef, useState } from "react";

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

import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// import DashboardPage from "../pages/DashBoard/Dashboard";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  // fetchied
  const staticUsers = userData;
  const [CategoryId, setCategoryId] = useState(null);
  const [FetchedMovies, setFetchedMovies] = useState(null);
  const [FetchedCategories, setFetchedCategories] = useState(null);
  const [issLoading, setIsLoading] = useState(false);
  const isLogin = localStorage.getItem("IsLogin") || false;
  const Users = userData;
  const User = JSON.parse(localStorage.getItem("UserInfo")) || null;
  const [unAuthorizedUser, setunAuthorizedUser] = useState(null);
  const [unAuthorizedADmin, setunAuthorizedADmin] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [Reviewed, setReviwed] = useState([]);
  const [Ratingss, setRatings] = useState([]);

  const [autoRender, setAutornder] = useState(false);

  const [activityStatus, setActivityStatus] = useState(false);
  const [InactiveStart, setStart] = useState("stop");
  const [FavouriteCartMovies, setFavouriteCartMovies] = useState([]);
  const [roleCheck, setRoleCheck] = useState(false);

  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100;

  useEffect(() => {
    console.log("catrrt:", FavouriteCartMovies);
  }, [FavouriteCartMovies]);

  const navigate = useNavigate();

  const TaskRunner = (task) => {
    task();
  };

  const [Result, setResult] = useState();
  const HandleGetMovies = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/getMovies", {
        method: "GET",
        headers: {
          "Content-Type": "Application/Json",
        },
        // body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
      }
      // console.log(data);

      console.log("Movies fetched successfully");
      setFetchedMovies(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const HandleGetReviews = async () => {
  //   try {
  //     const res = await fetch("http://localhost:5000/getReviews", {
  //       method: "GET",
  //     });

  //     const data = await res.json();
  //     if (!res.ok) {
  //       console.log(data);
  //     }
  //     setReviwes(data.data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.messag);
  //   }
  // };

  const [IdUpdate, setIdUpdate] = useState();
  const HandleGetCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/getCategory", {
        method: "GET",
        headers: {
          "Content-Type": "Application/Json",
        },
        // body: JSON.stringify({ id }),
      });
      let data;
      if (res.ok) {
        // console.log("Categories fetched successfully");

        data = await res.json();
        setFetchedCategories(data.data);
        // console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //Veryfy token
  const Autentification = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/protectedRoute", {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Optional, depending on your API
        },
        credentials: "include", // Include cookies in the request
      });
      const data = await res.json();

      if (!res.ok) {
        const errorData = data;
        throw new Error(errorData.message || "Authorization failed");
      }

      if (isLogin) {
        localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
      }

      console.log(data);

      // Assuming setUserRole is defined
      // Assuming setUserDetails is defined
    } catch (error) {
      console.error("Error in Authentification:", error.message);
    }
  };

  // Ensures it runs only once on mount

  //Veryfy SAubscription
  const VeryfySubscriptoin = async () => {
    try {
      const res = await fetch("http://localhost:5000/subscriptionCheck", {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Optional, depending on your API
        },
        credentials: "include", // Include cookies in the request
      });
      const data = await res.json();

      if (!res.ok) {
        const errorData = data;
        throw new Error(errorData.message || "Authorization failed");
      }
      console.log(data);
      if (isLogin) {
        localStorage.setItem(
          "subscription",
          JSON.stringify(data.remainingDays)
        );

        JSON.stringify(
          localStorage.setItem("favouriteCart", JSON.stringify(data.cart))
        );
      }

      // Assuming setUserRole is defined
      // Assuming setUserDetails is defined
    } catch (error) {
      console.error("Error in Authentification:", error.message);
    }
  };

  // Ensures it runs only once on mount

  useEffect(() => {
    HandleGetMovies();
    HandleGetCategories();
    Autentification();
    VeryfySubscriptoin();
    // HandleGetReviews();
  }, []);

  const AllMovies = FetchedMovies;
  const categoryDataa = FetchedCategories;

  //Typewriter

  const HandleTypewrite = (textArray, setTypewriter) => {
    if (!textArray || textArray.length === 0) return;

    const currentText = textArray[index];
    let timeout;

    // Type one character at a time until the full text is displayed
    if (charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setTypewriter(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    }

    // Return a cleanup function (optional in this case)
    return () => clearTimeout(timeout);
  };

  //id retrival for update
  const IdRetrival = (id, setter) => {
    setter(parseInt(id));
    console.log(id);
  };

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
  const [favCartAlert, setFavCartAlert] = useState(false);

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

  // useEffect(() => {
  //   if (Userr) {
  //     localStorage.setItem("userInfo", JSON.stringify(Userr));
  //   }
  // }, [Userr]);

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
        1: categoryDataa,
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
    localStorage.setItem("Active", name);
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
      user: "ADMIN",
    },
    {
      name: "Add Movie",
      link: "/addmovie",
      icon: <RiMovie2Fill />,
      user: "ADMIN",
    },
    {
      name: "Categories",
      link: "/categories",
      icon: <FaListAlt />,
      user: "ADMIN",
    },
    // {
    //   name: "Notifications",
    //   link: "/notifications",
    //   icon: <HiViewColumns />,
    //   user: "All",
    // },
    { name: "Users", link: "dashboard/users", icon: <FaUser />, user: "ADMIN" },

    // {
    //   name: "Favourite Movies",
    //   link: "/messages",
    //   icon: <FaHeart />,
    //   user: "All",

    {
      name: "Update Profile",
      link: "dashboard/profile",
      icon: <FiSettings />,
      user: "All",
    },
    {
      name: "Change Password",
      link: "/password",
      icon: <RiLockPasswordLine />,
      user: "All",
    },
    {
      name: "Logout",
      link: "",
      icon: <IoLogOut />,
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

  useEffect(() => {
    if (isLogin) {
      console.log("calling Authentification");
      Autentification();
    }
  }, [isLogin]);

  const Time = 1 * 60 * 1000;
  const InactiveTime = 20 * 60 * 1000;
  let activityEvents = ["mousemove", "keydown", "mousedown", "touchstart"];
  //Logout
  const checkTokenExpiry = async () => {
    console.log("starting Logout...");

    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")); // Get userInfo from localStorage
      if (!userInfo) {
        console.log("userInfo not found");

        return;
      }

      const expTime = userInfo.exp * 1000; // Convert exp from seconds to milliseconds
      let currentTime = Date.now(); // Get current time in milliseconds

      // Check if the token is expired
      if (expTime < currentTime) {
        console.log(
          "Token has expired. Token has expired. Logging out user..."
        );

        localStorage.clear();
        // Send a request to the backend to clear the HTTP-only cookie
        const res = await fetch("http://localhost:5000/clear-cookies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const data = await res.json();

        if (res.ok) {
          // Make sure to wait for the response
          localStorage.setItem("relogin", "true");

          setTimeout(() => {
            navigate("/stream/login");
          }, 500);

          console.log(data);
        } else {
          console.log(
            "Failed to clear cookies. Server returned an error.",
            data
          );
        }
      } else {
        console.log("Token has not yet expired");
        setTimeout(() => {
          logoutUser();
        }, Time);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Function to log the user out and clean up
  const logoutUser = () => {
    console.log("Starting automatic logout...");

    checkTokenExpiry();
  };

  let inactivityTimer;

  const resetInactivityTimer = () => {
    console.log("User activity detected. Resetting inactivity timer...");
    clearTimeout(inactivityTimer);
    setActivityStatus(true);

    // Automatically set `activeStatus` to false after inactivity threshold
    inactivityTimer = setTimeout(() => {
      console.log("No activity detected. Setting activeStatus to false...");
      setActivityStatus(false);
    }, Time);
  };

  const InactiveLogOut = async () => {
    console.log("Logging out due to inactivity...");
    try {
      localStorage.clear();
      const res = await fetch("http://localhost:5000/clear-cookies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("InactiveLogout", "true");
        setTimeout(() => {
          navigate("/stream/login");
        }, 500);
        localStorage.clear();
        console.log(data);
      } else {
        console.log("Failed to clear cookies. Server returned an error.", data);
      }
    } catch (error) {
      console.error("An error occurred during inactive logout:", error);
    }
  };

  useEffect(() => {
    if (isLogin) {
      console.log("User is logged in. Setting up activity listeners...");

      // console.log("is:", isLogin);

      // Listen for user activity events
      const activityEvents = [
        "mousemove",
        "keydown",
        "mousedown",
        "touchstart",
      ];
      activityEvents.forEach((event) =>
        document.addEventListener(event, resetInactivityTimer)
      );

      if (activityStatus === true) {
        console.log("active is True!");
        console.log("active:", activityStatus);
        logoutUser();
        // InactivieLogoutCall();
      }

      // Check inactivity and log out if `activityStatus` becomes false
      console.log(" Logging out inactive or setting active status to false");
      const monitorInactivity = setInterval(() => {
        if (activityStatus === false) {
          console.log("Inactive status detected. Triggering logout...");
          InactiveLogOut();
        } else {
          setActivityStatus(false);
          console.log("active Statua false");
          console.log("activ", activityStatus);
        }
      }, InactiveTime); // Check every 1 second

      // Cleanup on unmount
      return () => {
        activityEvents.forEach((event) =>
          document.removeEventListener(event, resetInactivityTimer)
        );
        clearInterval(monitorInactivity);
        clearTimeout(inactivityTimer);
      };
    } else {
      console.log("not a user");
    }
  }, [isLogin, activityStatus]);

  useEffect(() => {
    const favouriteCount = FavouriteCart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    const count = favouriteCount ? favouriteCount : 0;
    console.log(count);

    setFavouriteCount(count);

    // console.log(count);
  }, [FavouriteCart]);

  //Add to favorite cart
  const AddToCart = async (movie, movieId, Id) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    // console.log("id:", Id);

    if (isLogin) {
      try {
        Id = user.id;
        let StoredFavouriteCart =
          JSON.parse(localStorage.getItem("FavouriteCart")) || [];
        const res = await fetch("http://localhost:5000/addfavourite", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ movieId, Id }),
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          setResult(Alert(false, data.message));
          setTimeout(() => {
            setResult(null);
          }, 2000);
        } else {
          setResult(Alert(true, data.messag));
          console.log(data);
          let localStorageCart;
          let quantity = 1;
          StoredFavouriteCart = [
            ...StoredFavouriteCart,
            { ...movie, quantity },
          ];
          localStorage.setItem(
            "FavouriteCart",
            JSON.stringify(StoredFavouriteCart)
          );
          setFavouriteCart(StoredFavouriteCart);

          setTimeout(() => {
            setResult(null);
          }, 2000);
        }
      } catch (error) {
        console.log(error.message);
        setResult(Alert(false, error.message));
      }
    } else {
      let StoredFavouriteCart =
        JSON.parse(localStorage.getItem("FavouriteCart")) || [];

      const addedMovie = StoredFavouriteCart.find(
        (item) => item.id === parseInt(movieId)
      );

      if (addedMovie) {
        console.log("Movie already exists");
        setResult(Alert(false, " Movie already exist"));
        console.log("feedback", feedback);

        return;

        // addedMovie = { ...addedMovie, amount, vat };
        StoredFavouriteCart = StoredFavouriteCart.map((item) =>
          item.id === parseInt(movie.id)
            ? { ...item, total, amount, vat, quantity }
            : item
        );
      } else {
        let quantity = 1;
        StoredFavouriteCart = [...StoredFavouriteCart, { ...movie, quantity }];
        const check = StoredFavouriteCart.find((item) => item.id === movie.id);
        if (check) {
          setResult(Alert(true, " Movie added Succesfully"));
          console.log(Result);
        }
      }

      localStorage.setItem(
        "FavouriteCart",
        JSON.stringify(StoredFavouriteCart)
      );
      setFavouriteCart(StoredFavouriteCart);
    }
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
        Users,
        // Userr,
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
        categoryDataa,
        IdRetrival,
        CategoryId,
        setCategoryId,
        AllMovies,
        issLoading,
        setIsLoading,
        checkTokenExpiry,
        staticUsers,
        HandleGetCategories,
        HandleGetMovies,
        Autentification,
        autoRender,
        setAutornder,
        Result,
        setResult,
        IdUpdate,
        roleCheck,
        setRoleCheck,
        setIdUpdate,
        FavouriteCartMovies,
        setFavouriteCartMovies,
        TaskRunner,
        favCartAlert,
        setFavCartAlert,
        FetchedMovies,
        User,
        unAuthorizedUser,
        setunAuthorizedUser,
        unAuthorizedADmin,
        setunAuthorizedADmin,
        typingSpeed,
        Text,
        charIndex,
        index,
        HandleTypewrite,
        setOrderId,
        // HandleGetReviews,

        Ratingss,
        setRatings,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
export { MovieProvider };
