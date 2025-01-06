import { useState } from "react";

const SelectRating = ({ data, setRating }) => {
  
  return (
    <select
      className="w-full mt-2 px-3 py-4 text-text bg-main border border-border rounded appearance-none"
      id=""
      onChange={(e) => setRating(e.target.value)}
    >
      {data.map((option, i) => (
        <option key={i} value={option.value}>
          {option.tittle}
        </option>
      ))}
    </select>
  );
};

export default SelectRating;
