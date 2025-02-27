import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Input = ({
  label,
  placeholder,
  type,
  bg,
  setter,
  setInputVal,
  mainVal,
  indicator,
  lablFor,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="text-sm w-full relative">
      <label htmlFor={lablFor}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={mainVal}
        onChange={(e) => {
          setInputVal(e.target.value, setter, mainVal, indicator);
        }}
        className={`w-full mt-2 px-6 p-4 text-white border border-border rounded ${
          bg ? "bg-main" : "bg-dry"
        }`}
        required={false}
      />

      {label === "Password" ? (
        <div
          onClick={() => setVisible((prev) => !prev)}
          className="absolute right-4 top-[60%] cursor-pointer"
        >
          {visible === true ? <FaEyeSlash /> : <FaEye />}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
