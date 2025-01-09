

import { BiTime } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import React from "react";

const FlexMovie = React.memo(
  ({ movie }) => {
    const gap = "gap-4";
    const text = "text-white";

    return (
      <div className={`flex justify-start items-center ${gap}`}>
        <div>
          <span className="names">{movie.category}</span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <FaRegCalendarAlt className="text-subMain" />
          <span className="names">{movie.year}</span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <BiTime className={`${text ? "text-subMain" : "text-white"}`} />
          <span className="names">{movie.time}</span>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison function to avoid unnecessary re-renders
    return (
      prevProps.movie.category === nextProps.movie.category &&
      prevProps.movie.year === nextProps.movie.year &&
      prevProps.movie.time === nextProps.movie.time
    );
  }
);

export default FlexMovie;
