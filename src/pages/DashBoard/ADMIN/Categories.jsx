import { useContext, useEffect, useState } from "react";
import MovieContext from "../../../Context/MovieContext";
import Table from "../../../Custom/Table";
import { HiPlusCircle } from "react-icons/hi2";
import Table2 from "../../../Custom/Table2";
import DataResolve from "../../../DataFetching/DataResolve";

const Categories = ({ IdRetrival, setter }) => {
  const { setModalDisplay, currentModal, setCurrentModal, categoryData } =
    useContext(MovieContext);
  const [categories, setCategories] = useState([]);

  console.log("ddd:", categoryData);

  //Delete Category
  const HandeleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/deleteCategory", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-auth-token",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const selectedData = CategoryData.filter((item) => item.display === "show");
  // console.log("cdata", CategoryData);
  // useEffect(() => {
  //   if (categoryData ) {
  //     setCategories(categoryData.dat);
  //   }
  // }, []);
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
          onClick={() => {
            setModalDisplay((prev) => !prev);
            setCurrentModal("Add");
            console.log(currentModal);
          }}
          className="bg-main font-medium flexRow transi hover:bg-main  gap-4 text-text hover:text-green-500 border border-subMain hover:border-green-500 py-2 px-4 rounded "
        >
          <HiPlusCircle /> Create
        </button>
      </div>
      <Table2
        data={categories}
        headList={headList}
        For={"category"}
        HandeleDelete={HandeleDelete}
        IdRetrival={IdRetrival}
        setter={setter}
        setCurrentModal={setCurrentModal}
      />
    </div>
  );
};

export default Categories;
