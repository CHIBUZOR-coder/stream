import { useContext } from "react";
import MovieContext from "../../../../Context/MovieContext";
import Table from "../../../../Custom/Table";

const Favourite = () => {
  const { Movies, User } = useContext(MovieContext);
      const selected = Movies.slice(0, 10);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center p-0 md:p-4 ">
        <h2 className="md:text-xl text-lg text-white  font-bold">
          Favourite Movies
        </h2>
        <button className="bg-dry font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded ">
          Delete All
        </button>
      </div>

      <Table data={selected} User={User} For={"Fav"} />
    </div>
  );
};

export default Favourite;
