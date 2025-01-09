import { useContext, useState } from "react";

import MovieContext from "../Context/MovieContext";
import Table from "../Custom/Table";
import Layout from "../Layout/Layout";

const FavouritePage = () => {
  const { Movies, User, selected } = useContext(MovieContext);

  const maxPage = 10;
  const [page, SetPage] = useState(maxPage);
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center p-0 md:p-4 ">
          <h2 className="md:text-xl text-lg text-white  font-bold">
            Favourite Movies
          </h2>
        </div>

        <Table data={selected} User={User} page={false} maxPage={false} />
      </div>
    </Layout>
  );
};

export default FavouritePage;
