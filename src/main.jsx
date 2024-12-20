import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Movies from "./pages/Movies.jsx";
import About from "./pages/About.jsx";
import User from "./pages/DashBoard/ADMIN/Users.jsx";
import Favourite from "./pages/DashBoard/FavouriteMovies.jsx";


const router = createBrowserRouter([
  {
    path: "/stream/",
    element: <App />,
    children: [
      {
        path: "/stream/",
        element: <Home />,
      },
      {
        path: "/stream/contact",
        element: <Contact />,
      },
      {
        path: "/stream/movies",
        element: <Movies />,
      },
      {
        path: "/stream/user",
        element: <User />,
      },
      {
        path: "/stream/about",
        element: <About />,
      },
      {
        path: "/stream/favourite",
        element: <Favourite />,
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
    <RouterProvider router={router} />
  </StrictMode>
);
