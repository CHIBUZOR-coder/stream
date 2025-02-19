import { Children, lazy, StrictMode, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./pages/DashBoard/Dashboard";

import Romance from "./pages/FilteredMovies/Romance.jsx";
import Dramma from "./pages/FilteredMovies/Dramm.jsx";
import Tech from "./pages/FilteredMovies/Tech.jsx";
import Action from "./pages/FilteredMovies/Action.jsx";
// import FilteredDrammaMovies from "./pages/FilteredDrammaMovies.jsx";
// import FilteredActionMovies from "./pages/FilteredActionMovies.jsx";
// import FilteredMovies from "./pages/FilteredMovies.jsx";
// import ResetPassword from "./pages/ResetPassword.jsx";
// import AccountRecovery from "./pages/AccountRecovery.jsx";

// import Recovery from "./pages/Recovery.jsx";

// import FavouritePage from "./pages/FavouritePage.jsx";

// import Dashboard from "./pages/DashBoard/Dashboard.jsx";

// import DashboardPage from "./pages/DashBoard/Components/Dashboard/DashboardPage.jsx";
// import DashboardPage from "./pages/DashBoard/DashboardPage";
// import Watch from "./pages/Watch.jsx";
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import DashboardPage from "./pages/DashBoard/DashboardPage.jsx";
// import SingleMovie from "./pages/SingleMovie.jsx";
// import Home from "./pages/Home.jsx";
// import Contact from "./pages/Contact.jsx";
// import NotFound from "./pages/NotFound.jsx";
// import About from "./pages/About.jsx";
// import User from "./pages/DashBoard/ADMIN/Users.jsx";
// import Favourite from "./pages/DashBoard/FavouriteMovies.jsx";
// import MoviesPage from "./pages/MoviesPage.jsx";

// const Home = lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(() => resolve(import("./pages/Home")), 7000)
//     )
// );

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const User = lazy(() => import("./pages/DashBoard/ADMIN/Users"));
const AccountRecovery = lazy(() => import("./pages/AccountRecovery.jsx"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SingleMovie = lazy(() => import("./pages/SingleMovie"));
const Watch = lazy(() => import("./pages/Watch"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const FavouritePage = lazy(() => import("./pages/FavouritePage.jsx"));
const ResetPassword = lazy(() => import("./pages/ResetPassword.jsx"));
const Thankyou = lazy(() => import("./pages/Thankyou.jsx"));

// function generateRandomString(length) {
//   const chars =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return result;
// }

// console.log(generateRandomString(10)); // Example output: "A1bC2dE3Fg"
// const result = generateRandomString(8);

const actionn = "Action";
const romance = "Romance";
const dramma = "Dramma";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />, // Default route
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "movie/:id",
        element: <SingleMovie />,
      },
      {
        path: "watch/:name",
        element: <Watch />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "favouritpage/:name",
        element: <FavouritePage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: `/dash/us/:name`,
        element: <Dashboard />,
      },
      {
        path: "/dash/ad/:name",
        element: <Dashboard />,
      },
      {
        path: "recovery",
        element: <AccountRecovery />,
      },
      {
        path: "resetPassword/:token",
        element: <ResetPassword />,
      },

      {
        path: "action",
        element: <Action />,
      },

      {
        path: "romance",
        element: <Romance />,
      },
      {
        path: "dramma",
        element: <Dramma />,
      },
      {
        path: "tech",
        element: <Tech />,
      },

      {
        path: "thankyou",
        element: <Thankyou />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="w-full h-[100vh] bg-main flex justify-center items-center">
          <div className="w-[150px] h-[150px] rounded-full  border border-border animate-bounce">
            <img
              className="h-full w-full rounded-full"
              src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1739151976/logoround_awixqx.png"
              alt=""
            />
          </div>
        </div>
      }
    >
      <RouterProvider router={router}>
        <MovieProvider>
          <App />
        </MovieProvider>
      </RouterProvider>
    </Suspense>
  </StrictMode>
);
