import { useState } from "react";

export const Input = ({
  label,
  placeholder,
  type,
  bg,
  setter,
  setInputVal,
  mainVal,
}) => {
  const [value, setValue] = useState(null);
  return (
    <div className="text-sm w-full">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={mainVal}
        onChange={(e) => {
          setInputVal(e.target.value, setter, mainVal);
        
        }}
        className={`w-full mt-2 px-6 p-4 text-white border border-border rounded ${
          bg ? "bg-main" : "bg-dry"
        }`}
      />
    </div>
  );
};
