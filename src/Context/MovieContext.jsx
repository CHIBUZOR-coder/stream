import { createContext } from "react";

export const MovieContext = createContext();

const MoviesFilter = (val1, val2, val3, val4)=>{


}

const MovieProvider = ({ children }) => {
  return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
};

export default MovieProvider;
