import { useContext, useEffect, useState } from "react";
import { BiHomeAlt, BiHomeAlt2 } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import MovieContext from "../Context/MovieContext";

const NotUser = () => {
  const { unAuthorizedUser, unAuthorizedADmin } = useContext(MovieContext);
  let defaultt;

  useEffect(() => {
    defaultt = unAuthorizedADmin ? (
      unAuthorizedADmin
    ) : unAuthorizedUser ? (
      unAuthorizedUser
    ) : (
      <p className=" px-44 text-center text-lg text-text italic">
        You have to be a user to gain acces to your own dashboard at this
        address or page. Navigate to the Signup page below and signup to gain
        acces to your favouritpage and  Dashboard!
      </p>
    );

    console.log("defaultt", defaultt);
    console.log("Add:",unAuthorizedADmin);
    console.log("USSS:",unAuthorizedUser);

  }, [unAuthorizedADmin, unAuthorizedUser]);

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
            <h1 className="text-4xl font-bold">Not a User</h1>
          </div>

          <div>{defaultt}</div>

          <Link
            to={"/register"}
            className="bg-subMain text-white flexRow gap-3 font-medium py-2 px-4 rounded-md hover:bg-dry transi hover:text-gray-500"
          >
            <FiLogIn /> Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotUser;
