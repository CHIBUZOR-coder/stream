import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
