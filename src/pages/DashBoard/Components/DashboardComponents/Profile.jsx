import { FaRegListAlt } from "react-icons/fa";
import MovieContext from "../../../../Context/MovieContext";
import { useContext } from "react";
import { HiViewGridAdd } from "react-icons/hi";

const Profile = () => {
  const { Movies } = useContext(MovieContext);
  const ProfileData = [
    {
      bg: "bg-orange-600",
      icon: <FaRegListAlt />,
      Tittle: "Total Movies",
    },
    {
      bg: "bg-blue-700",
      icon: <HiViewGridAdd />,
      Tittle: "Total Categories",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center p-0 md:p-4 ">
        <h2 className="md:text-xl text-lg text-white  font-bold">Profile</h2>
      </div>
    </div>
  );
};

export default Profile;
