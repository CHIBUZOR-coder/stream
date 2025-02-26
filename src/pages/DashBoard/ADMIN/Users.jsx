import { useContext, useEffect, useMemo, useState } from "react";
import MovieContext from "../../../Context/MovieContext";
import Table from "../../../Custom/Table";
import { HiPlusCircle } from "react-icons/hi2";
import Table2 from "../../../Custom/Table2";

const Users = () => {
  const {
    staticUsers,
    Alert,
    Result,
    setResult,
    ModalDisplay,
    setModalDisplay,
    currentModal,
    setCurrentModal,
    categoryDataa,
    HandleGetCategories,
    HandleGetAllUsers,
    AllUsers,
    setAllUsers,
  } = useContext(MovieContext);

  let selected;
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = AllUsers && Math.ceil(AllUsers.length / itemsPerPage);

  useEffect(() => {
    if (AllUsers) {
      console.log("AllUsers U", AllUsers);

      selected = AllUsers;
    }
  }, [AllUsers]);

  useEffect(() => {
    HandleGetAllUsers();
  }, []);
 useEffect(() => {
console.log("AllUsers M:", AllUsers);

 }, [AllUsers]);
  // const HandleGetAllUsers = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://streambackend-nbbc.onrender.com/getAllUser",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const data = await res.json();

  //     if (!res.ok) {
  //       console.log(data);
  //       setResult(Alert(false, "Unable to get users! Something went wrong"));
  //       setTimeout(() => {
  //         setResult(null);
  //       }, 3000);
  //     }

  //     console.log(data);
  //     // setResult(Alert(true, data.message));
  //     setAllUsers(data.data);
  //     setTimeout(() => {
  //       setResult(null);
  //     }, 3000);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const HandeleDeleteUser = async (userId) => {
    try {
      const res = await fetch(
        "https://streambackend-nbbc.onrender.com/deleteUser",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        setResult(Alert(false, "Unable to delete user. Somthing went wrong!"));
        setTimeout(() => {
          setResult(null);
        }, 3000);
      }
      HandleGetAllUsers();
      console.log(data);
      setResult(Alert(true, data.message));
      setTimeout(() => {
        setResult(null);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleGetAllUsers();
  }, []);

  // Paginated movies for the current page
  const paginatedUsers = useMemo(() => {
    if (AllUsers) {
      return AllUsers.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }
  }, [AllUsers, page]);

  const headList = [
    {
      id: 1,
      title: "Image",
    },
    {
      id: 2,
      title: "Id",
    },
    {
      id: 3,
      title: "Date",
    },
    {
      id: 4,
      title: "Full Name",
    },
    {
      id: 5,
      title: "Email",
    },
    {
      id: 6,
      title: "Actions",
    },
  ];

  return (
    <div className="flex flex-col gap-6 relative">
      <div
        className={` ${
          Result ? "Animate" : "hidden"
        } fixed Alert  left-0 w-full z-40 flex justify-center items-center `}
      >
        <div className=" bg-text text-dry w-1/2 rounded-md border-[3px] border-subMain flex justify-center items-center p-4">
          {Result && <p>{Result}</p>}
        </div>
      </div>
      <h2 className="md:text-xl text-lg text-white  font-bold">Users</h2>

      <Table2
        data={paginatedUsers}
        headList={headList}
        For={"user"}
        setCurrentModal={setCurrentModal}
        HandeleDeleteUser={HandeleDeleteUser}
      />

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mb-7 mt-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded ${
            page === 1 ? "bg-gray-400 text-white" : "bg-subMain text-white"
          }`}
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded ${
            page === totalPages
              ? "bg-gray-400 text-white"
              : "bg-subMain text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
