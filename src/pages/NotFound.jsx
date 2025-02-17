import { BiHomeAlt, BiHomeAlt2 } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="relative flexCol w-full h-[100vh] text-white bg-main bg-center">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1735808522/errorPage3_mc0z9z.jpg"
          alt="Not Found"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col gap-8 bg-transb items-center justify-center md:py-20 py-10">
          <div className="w-full flexCol gap-3">
            <h1 className="text-4xl font-bold">🤖Opps!</h1>
            <h1 className="text-4xl font-bold">Page Not Found</h1>
          </div>

          <p className=" px-5 text-center text-lg text-text italic">
            The page you are looking for doesn't exist. You may have mistyped
            the address or the page may have moved.
          </p>

          <Link
            to={"/"}
            className="bg-subMain border border-subMain text-white flexRow gap-3 font-medium py-2 px-4 rounded-md hover:bg-dry transi hover:text-gray-500"
          >
            <BiHomeAlt/> Back To Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
