import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar/Navbar";
import MovieContext, { MovieProvider } from "./Context/MovieContext";
import { useContext } from "react";

function App() {
   const { FetchedMovies } = useContext(MovieContext);
  return (
    <>
      <MovieProvider>
        <div>
          <Outlet />
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
