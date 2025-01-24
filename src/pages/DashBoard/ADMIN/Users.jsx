import { useContext } from "react";
import MovieContext from "../../../Context/MovieContext";
import Table from "../../../Custom/Table";
import { HiPlusCircle } from "react-icons/hi2";
import Table2 from "../../../Custom/Table2";

const Users = () => {
  const { staticUsers } = useContext(MovieContext);


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
    <div className="flex flex-col gap-6">
      <h2 className="md:text-xl text-lg text-white  font-bold">Users</h2>

      <Table2 data={staticUsers} headList={headList} For={"user"} />
    </div>
  );
};

export default Users;
