// import { useContext, useState } from "react";
// import MovieContext from "../Context/MovieContext";

// const SelectRating = ({ data, setter }) => {
//   const { categoryId, setCategoryId } = useContext(MovieContext);
//   return (
//     <select
//       className="w-full mt-2 px-3 py-4 text-text bg-main border border-border rounded appearance-none"
//       id=""
//       onChange={(e) => {
//         if (
//           e.target.value === "Rate Movie" ||
//           e.target.value === "Select Category"
//         ) {
//              setter("");
//              return
//         }
//         setter(e.target.value);
//       }}
//     >
//       <option value="">
//         {/* */}
//         <p>{data.length === 6 ? "Rate Movie" : "Select Category"} </p>
//       </option>
//       {data.map((option, i) => (
//         <option key={i} value={option.value}>
//           {option.tittle}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default SelectRating;
import { useContext } from "react";
import MovieContext from "../Context/MovieContext";

const SelectRating = ({ data, setter, For }) => {
  const { categoryId, setCategoryId, IdRetrival } = useContext(MovieContext);
  const defaultText = For === "movie" ? "Rate Movie" : "Select Category";

  return (
    <select
      className="w-full mt-2 px-3 py-4 text-text bg-main border border-border rounded appearance-none"
      onChange={(e) => {
        const selectedValue = e.target.value;
        console.log("selectedValue", selectedValue);

        setter(Number(selectedValue) || "");
        const selectedData = data.find((item) => item.tittle === selectedValue);
        console.log("selectedData", selectedData);
        if (For !== "movie") {
          IdRetrival(selectedData.id, setCategoryId);
        }

        console.log(data);
      }}
      defaultValue=""
    >
      {/* Default Header Option */}
      <option value="" disabled>
        {defaultText}
      </option>
      {data &&
        data.map((option, i) => (
          <option key={i} value={option.value}>
            {option.tittle}
          </option>
        ))}
    </select>
  );
};

export default SelectRating;
