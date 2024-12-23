import { BiTime } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

const FlexMovie = ({ movie }) => {
  const gap = "gap-4";
  const text = "text-white";
  return (
    <>
      <div className={`flex justify-start items-center ${gap} `}>
        <div className="   ">
          <span className="names">{movie.category}</span>
        </div>
        <div className=" flex justify-center items-center gap-1  ">
          <FaRegCalendarAlt className="text-subMain" />
          <span className="names">{movie.year}</span>
        </div>
        <div className="flex justify-center items-center gap-1   ">
          <BiTime className={`${text ? "text-subMain" : "text-white"}`} />
          <span className="names">{movie.time}</span>
        </div>
      </div>
    </>
  );
};

export default FlexMovie;
