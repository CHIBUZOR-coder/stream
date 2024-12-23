import { Children, lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
// import SingleMovie from "./pages/SingleMovie.jsx";
// import Home from "./pages/Home.jsx";
// import Contact from "./pages/Contact.jsx";
// import NotFound from "./pages/NotFound.jsx";
// import About from "./pages/About.jsx";
// import User from "./pages/DashBoard/ADMIN/Users.jsx";
// import Favourite from "./pages/DashBoard/FavouriteMovies.jsx";
// import MoviesPage from "./pages/MoviesPage.jsx";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const User = lazy(() => import("./pages/DashBoard/ADMIN/Users"));
const Favourite = lazy(() => import("./pages/DashBoard/FavouriteMovies"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SingleMovie = lazy(() => import("./pages/SingleMovie"));

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
        path: "/stream/contact",
        element: <Contact />,
      },
      {
        path: "/stream/movies",
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
        path: "favourite",
        element: <Favourite />,
      },
      {
        path: "/stream/movie/:id",
        element: <SingleMovie />,
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
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
