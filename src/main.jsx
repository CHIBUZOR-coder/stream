import { Children, lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
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

const NotFound = lazy(() => import("./pages/NotFound"));
const SingleMovie = lazy(() => import("./pages/SingleMovie"));
const Watch = lazy(() => import("./pages/Watch"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/DashBoard/Dashboard"));
const FavouritePage = lazy(() => import("./pages/FavouritePage.jsx"));

const router = createBrowserRouter([
  {
    path: "/stream/",
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
        path: "/stream/user",
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
        path: "favouritpage",
        element: <FavouritePage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dash",
        element: <Dashboard />,
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
          <div className="w-[100px] h-[100px] rounded-full  border border-border animate-bounce">
            <img
              className="h-full w-full rounded-full"
              src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1734517937/StreamLogo_ao5f75.png"
              alt=""
            />
          </div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
