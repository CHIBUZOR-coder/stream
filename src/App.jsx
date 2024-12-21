import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar/Navbar";
import MovieProvider from "./Context/MovieContext";

function App() {
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
