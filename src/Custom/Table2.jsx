import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import MovieContext from "../Context/MovieContext";
import { useContext } from "react";

const Table2 = ({ data, headList, For }) => {
  const { currentModal, ModalChangeUpdate } = useContext(MovieContext);
  const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase ";
  const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
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
              {data.map((item, i) => (
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
                        ModalChangeUpdate(item.tittle);
                        console.log(currentModal);
                      }}
                      className="bg-dry border border-border flexRow transi edit  hover:bg-green-500 hover:text-white gap-2 text-border px-2 py-1 rounded"
                    >
                      Edit{" "}
                      <FaEdit className="text-green-500 editchild  transi " />
                    </button>
                    <button className="bg-subMain text-white rounded flexCol w-6 h-6 hover:bg-main transi border border-subMain delete  ">
                      <MdDelete className="deletechild transi" />
                    </button>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <>
              {data.map((item, i) => (
                <tr key={i}>
                  <td className={`${Text}`}>
                    <div className="w-12 bg-dry borer border-border rounded h-12 overflow-hidden ">
                      <img
                        src={`./castImages/${item.image}.jpg`}
                        alt={item.image}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </td>
                  <td className={`${Text}`}>
                    <p>{item.id}</p>
                  </td>
                  <td className={`${Text}`}>
                    <p>{item.date}</p>
                  </td>
                  <td className={`${Text}`}>
                    <p>{item.name}</p>
                  </td>
                  <td className={`${Text}`}>
                    <p>{item.email}</p>
                  </td>
                  <td className={`${Text} float-left flexRow gap-5`}>
                    <button className="bg-dry border border-border flexRow transi edit  hover:bg-green-500 hover:text-white gap-2 text-border px-2 py-1 rounded">
                      Edit{" "}
                      <FaEdit className="text-green-500 editchild  transi " />
                    </button>
                    <button className="bg-subMain text-white rounded flexCol w-6 h-6 hover:bg-main transi border border-subMain delete  ">
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
