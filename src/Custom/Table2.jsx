import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import MovieContext from "../Context/MovieContext";
import { useContext, useEffect, useRef, useState } from "react";

const Table2 = ({
  data,
  headList,
  For,
  HandeleDelete,
  setter,
  IdRetrival,
  setCurrentModal,
  HandleGetCategories,
  HandeleDeleteUser,
}) => {
  const { currentModal, ModalChangeUpdate, autoRender } =
    useContext(MovieContext);

  const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase ";
  const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

  // console.log("Userss",data);

  // const [bgColor, setBgColor] = useState("");
  // useEffect(() => {
  //   // Generate a random background color on mount
  //   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //   setBgColor(randomColor);
  // }, []);


const getRandomColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = `#${(hash & 0xffffff).toString(16).padStart(6, "0")}`; // Ensure 6-digit hex
  return color;
};


  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="table-auto w-full text-white border  border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            {headList.map((item, i) => (
              <th key={i} scope="col" className={`${Head}`}>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" bg-main divide-y divide-gray-800">
          {For === "category" ? (
            <>
              {data &&
                data.map((item, i) => (
                  <tr key={i}>
                    <td className={`${Text}`}>
                      <p>{item.id}</p>
                    </td>
                    <td className={`${Text}`}>
                      <p>{item.date}</p>
                    </td>

                    <td className={`${Text}`}>
                      <p>{item.tittle}</p>
                    </td>
                    <td className={`${Text} float-left flexRow gap-5`}>
                      <button
                        onClick={() => {
                          setCurrentModal("Edit");
                          ModalChangeUpdate(item.tittle);
                          console.log(currentModal);
                          console.log(item);

                          IdRetrival(item.id, setter);
                        }}
                        className="bg-dry border border-border flexRow transi edit  hover:bg-green-500 hover:text-white gap-2 text-border px-2 py-1 rounded"
                      >
                        Edit{" "}
                        <FaEdit className="text-green-500 editchild  transi " />
                      </button>
                      <button
                        onClick={(e) => {
                          HandeleDelete(e, item.id);
                          HandleGetCategories();
                        }}
                        className="bg-subMain text-white rounded flexCol w-6 h-6 hover:bg-main transi border border-subMain delete  "
                      >
                        <MdDelete className="deletechild transi" />
                      </button>
                    </td>
                  </tr>
                ))}
            </>
          ) : (
            <>
              {data &&
                data.map((user, i) => (
                  <tr key={i}>
                    <td className={`${Text}`}>
                      {/* <div
                        style={{ backgroundColor: bgColor }}
                        className="w-12 bg-dry borer border-border flex justify-center items-center text-2xl font-semibold rounded h-12 overflow-hidden "
                      >
                        {user.image ? (
                          <img
                            src={`${user.image}`}
                            alt={user.image}
                            className="w-full h-full object-cover rounded-md"
                          />
                        ) : (
                          user.name?.charAt(0).toUpperCase()
                        )}
                      </div> */}

                      <div
                        style={{
                          backgroundColor: user.image
                            ? "transparent"
                            : getRandomColor(user.name || user.id),
                        }}
                        className="w-12 borer border-border flex justify-center items-center text-2xl font-semibold rounded h-12 overflow-hidden"
                      >
                        {user.image ? (
                          <img
                            src={`${user.image}`}
                            alt={user.image}
                            className="w-full h-full object-cover rounded-md"
                          />
                        ) : (
                          user.name?.charAt(0).toUpperCase()
                        )}
                      </div>
                    </td>
                    <td className={`${Text}`}>
                      <p>{user.id}</p>
                    </td>
                    <td className={`${Text}`}>
                      <p>{user.date}</p>
                    </td>
                    <td className={`${Text}`}>
                      <p>{user.name}</p>
                    </td>
                    <td className={`${Text}`}>
                      <p>{user.email}</p>
                    </td>
                    <td className={`${Text} float-left flexRow gap-5`}>
                      <button
                        onClick={() => {
                          setCurrentModal("DeleteUser");
                          ModalChangeUpdate(user.name);
                          console.log(currentModal);
                          console.log(item);
                        }}
                        className="bg-dry border border-border flexRow transi edit  hover:bg-green-500 hover:text-white gap-2 text-border px-2 py-1 rounded"
                      >
                        Edit{" "}
                        <FaEdit className="text-green-500 editchild  transi " />
                      </button>
                      <button
                        onClick={() => HandeleDeleteUser(user.id)}
                        className="bg-subMain text-white rounded flexCol w-6 h-6 hover:bg-main transi border border-subMain delete  "
                      >
                        <MdDelete className="deletechild transi" />
                      </button>
                    </td>
                  </tr>
                ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
