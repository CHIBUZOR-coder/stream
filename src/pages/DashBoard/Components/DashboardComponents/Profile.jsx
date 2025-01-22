import { FaRegListAlt, FaUser } from "react-icons/fa";
import MovieContext from "../../../../Context/MovieContext";
import { useContext } from "react";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../../Custom/Table";

const Profile = () => {
  const { Movies, User } = useContext(MovieContext);
  const selected = Movies.slice(0, 10);
  const ProfileData = [
    {
      bg: "bg-orange-600",
      icon: <FaRegListAlt />,
      tittle: "Total Movies",
      total: Movies.length,
    },
    {
      bg: "bg-blue-700",
      icon: <HiViewGridAdd />,
      tittle: "Total Categories",
      total: 6,
    },
    {
      bg: "bg-green-600",
      icon: <FaUser />,
      tittle: "Total Users",
      total: 135,
    },
  ];
  return (
    <div>
      <h2 className="md:text-xl text-lg text-white  font-bold">Profile</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {ProfileData.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded bg-main border border-border grid grid-cols-4 gap-2"
          >
            <div
              className={`col-span-1 rounded-full h-12 w-12 flexCol ${item.bg} `}
            >
              {item.icon}
            </div>

            <div className="col-span-3 ">
              <h2>{item.tittle}</h2>
              <p className=" mt-2 font-bold">{item.total}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="font-medium my-4 text-border">Recent Movies</h3>

      <Table data={Movies.slice(0, 6)} User={User} For={"dash"} />
    </div>
  );
};

export default Profile;
