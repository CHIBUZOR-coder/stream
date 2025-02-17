import { useContext, useEffect, useState } from "react";
import MovieContext from "../../../Context/MovieContext";
import Table from "../../../Custom/Table";
import { HiPlusCircle } from "react-icons/hi2";
import Table2 from "../../../Custom/Table2";
import DataResolve from "../../../DataFetching/DataResolve";

const Categories = ({ IdRetrival, setter, setResult }) => {
  const {
    setModalDisplay,
    currentModal,
    setCurrentModal,
    categoryDataa,
    HandleGetCategories,
  } = useContext(MovieContext);

  // const [rerender, setRerender] = useState(false);

  //update Category
  //*************Update  Category*******************
  const HandeleUpdateCategory = async () => {
    setLoadDiaplay("Updating Category...");
    setIsLoading(true);

    // e.preventDefault();
    try {
      const res = await fetch("https://streambackend-v5u9.onrender.com/api/updateCategory", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-auth-token",
        },
        body: JSON.stringify(updatCategory),
      });
      let data;
      if (!res.ok) {
        data = await res.json();

        setIsLoading(false);
        setResult(Alert(false, data.message));
      }

      setIsLoading(false);
      setResult(Alert(true, "Category updated succesfully"));

      data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 6000);
    }
  };

  //Delete Category
  const HandeleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await fetch("https://streambackend-v5u9.onrender.com/api/deleteCategory", {
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
        data={categoryDataa}
        headList={headList}
        For={"category"}
        HandeleDelete={HandeleDelete}
        IdRetrival={IdRetrival}
        setter={setter}
        setCurrentModal={setCurrentModal}
        HandleGetCategories={HandleGetCategories}
      />
    </div>
  );
};

export default Categories;
