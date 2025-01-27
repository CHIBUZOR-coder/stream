import { FaPhone, FaPhoneAlt, FaRegListAlt, FaUser } from "react-icons/fa";
import MovieContext from "../../../../Context/MovieContext";
import { useContext, useEffect, useState } from "react";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../../Custom/Table";
import { MdWatchLater } from "react-icons/md";
import { MdUnsubscribe } from "react-icons/md";

const Profile = ({ Handlegeneral, HandleDeleteMovie }) => {
  const { Movies, AllMovies, User } = useContext(MovieContext);
  const selected = Movies.slice(0, 10);

  const ProfileData = [
    {
      bg: "bg-orange-600",
      icon: <FaRegListAlt />,
      tittle: "Total Movies",
      text: Movies.length,
      style: false,
    },
    {
      bg: "bg-blue-700",
      icon: <HiViewGridAdd />,
      tittle: "Total Categories",
      text: 6,
      style: false,
    },
    {
      bg: "bg-green-600",
      icon: <FaUser />,
      tittle: "Total Users",
      text: 135,
      style: false,
    },
  ];

  const ProfileDataUser = [
    {
      bg: "bg-orange-600",
      icon: <FaRegListAlt />,
      tittle: "Total Favourites",
      text: Movies.length,
      style: false,
    },
    {
      bg: "bg-subMain",
      icon: <MdUnsubscribe />,
      tittle: "Subscription Details",
      text: 6,
      style: false,
    },
    {
      bg: "bg-blue-700",
      icon: <MdWatchLater />,
      tittle: "Watch Count",
      text: 6,
      style: false,
    },
  ];
  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="md:text-xl text-lg text-white  font-bold">Profile</h2>

      <div className="w-full flex justify-center">
        <div className=" md:w-1/2 w-[80%] flex flex-col justify-center items-center gap-3 p-5 rounded bg-main border border-border">
          <div className="flex justify-center items-center">
            <img
              src={`${User.userInfo.image}`}
              alt="user"
              className="w-20 h-20 rounded-full"
            ></img>
          </div>

          <div className="text-center">
            <p className="font-semibold">{User.userInfo.name}</p>
            <p className="text-sm text-dryGray">{User.userInfo.email}</p>
            <p className="text-sm text-dryGray flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-dryGray" />
              {User.userInfo.phone}
            </p>
          </div>
        </div>
      </div>
      {/* tittle: User.userInfo.name,
      text: User.userInfo.email,
      style: true,  */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {User && User.role === "ADMIN"
          ? ProfileData.map((item, index) => (
              <div
                key={index}
                className={`rounded bg-main border border-border grid grid-cols-4 gap-2`}
              >
                <div
                  className={`col-span-1 rounded-full h-12 w-12 flexCol ${item.bg} `}
                >
                  {item.icon}
                </div>

                <div className="col-span-3">
                  <h2>{item.tittle}</h2>
                  <p className=" mt-2 font-bold">{item.text}</p>
                </div>
              </div>
            ))
          : ProfileDataUser.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.style === true
                    ? "flex flex-col justify-center items-center "
                    : " grid grid-cols-4 "
                }  gap-2 rounded bg-main border border-border p-4 `}
              >
                <div
                  className={` ${
                    item.style === true ? "" : `${item.bg} h-12 w-12`
                  }   col-span-1 rounded-full flexCol  `}
                >
                  {item.icon}
                </div>

                <div className="col-span-3  ">
                  <p className={`font-bold`}>{item.tittle}</p>
                  <p
                    className={`${
                      item.style === true
                        ? "text-small text-dryGray"
                        : "font-bold"
                    } mt-2 `}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
      </div>
      <h3 className="font-medium my-4 text-border">Recent Movies</h3>

      <Table
        data={AllMovies}
        User={User}
        For={"dash"}
        Handlegeneral={Handlegeneral}
        HandleDeleteMovie={HandleDeleteMovie}
      />
    </div>
  );
};

export default Profile;
