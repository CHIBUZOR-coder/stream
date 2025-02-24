import { useContext, useState } from "react";
import Banner from "../Components/Home/Banner";
import PopularMovies from "../Components/Home/PopularMovies";
import Promos from "../Components/Home/Promos";
import TopRated from "../Components/Home/TopRated";
import Layout from "../Layout/Layout";
import { MdCancel } from "react-icons/md";
import MovieContext from "../Context/MovieContext";

const Home = () => {
  const [shareOpen, setShareOpen] = useState(false);
  const { HandleSubscribe } = useContext(MovieContext);
  const User = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      <Layout>
        <div className="min-h-screen px-5 relative">
          <div
            className={` ${
              shareOpen ? "" : "hidden"
            }  absolute  top-0 left-0 z-50   w-full h-full bg-main2 flex justify-center items-center `}
          >
            <span
              onClick={() => setShareOpen((prev) => !prev)}
              className="rounded-full fixed top-[25%]  md:right-[25%] lg:right-[20%] right-[8%] border-2 h-14 w-14 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 flex justify-center items-center"
            >
              <MdCancel className="h-12 w-12" />
            </span>

            <div className="  fixed top-[40%] flexCol gap-6  py-5 subscribe  px-4 bg-main rounded-md  justify-center  border border-border ">
              <div className="w-1/2 flex justify-center item-center gap-2">
                <h1 className="text-2xl font-bold">🤖Opps!</h1>
              </div>
              <p className="font-semibold text-text subscribe">
                Only a valid and subscribed user can stream live. Signup or
                login. If you already have an account, please subscribe to enjoy
                our services.
              </p>

              <button
                onClick={(e) => HandleSubscribe(e, User && User.email)}
                className="bg-subMain2 text-white rounded-md border-2 border-subMain transi mt-3 hover:bg-main p-2 animate-bounce hover:animate-none "
              >
                {User ? "Subscribe" : "Login"}
              </button>
            </div>
          </div>

          <Banner setShareOpen={setShareOpen} />

          <PopularMovies />
          <Promos />
          <TopRated />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
