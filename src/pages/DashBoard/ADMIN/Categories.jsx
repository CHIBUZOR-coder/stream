import { useContext, useState } from "react";
import MovieContext from "../../../Context/MovieContext";
import Table from "../../../Custom/Table";
import { HiPlusCircle } from "react-icons/hi2";
import Table2 from "../../../Custom/Table2";

const Categories = ({ setModalDisplay, ModalDisplay }) => {
  const { Movies, User, CategoryData } = useContext(MovieContext);
  const selectedData = CategoryData.filter((item) => item.display === "show");
  console.log("cdata", CategoryData);

  const headList = [
    {
      id: 1,
      title: "Id",
    },
    {
      id: 2,
      title: "Date",
    },
    {
      id: 3,
      title: "Tittle",
    },
    {
      id: 3,
      title: "Actions",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center p-0 md:p-4 ">
        <h2 className="md:text-xl text-lg text-white  font-bold">Categories</h2>
        <button
          onClick={() => setModalDisplay((prev) => !prev)}
          className="bg-main font-medium flexRow transi hover:bg-main  gap-4 text-text hover:text-green-500 border border-subMain hover:border-green-500 py-2 px-4 rounded "
        >
          <HiPlusCircle /> Create
        </button>
      </div>
      <Table2 data={selectedData} headList={headList} For={"category"} />
    </div>
  );
};

export default Categories;
