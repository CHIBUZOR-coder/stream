import { createContext, useState } from "react";

import { Movies } from "../Data/MovieData";
import { CategoryData } from "../Data/CategoryData"; // Include CategoryData

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState({});
  const [userChoice, setUserChoice] = useState(null);

  const YearData = [
    { name: "Sort By Year" },
    { tittle: "1700 - 1800", id: 1 },
    { tittle: "1800 - 1900", id: 2 },
    { tittle: "1900 - 2000", id: 3 },
    { tittle: "2000 - 2010", id: 4 },
    { tittle: "2010 - 2030", id: 5 },
  ];

  const TimesData = [
    { name: "Sort By Hours" },
    { tittle: "1 - 2 hrs", id: 1 },
    { tittle: "2 - 3 hrs", id: 2 },
    { tittle: "3 - 4 hrs", id: 3 },
    { tittle: "4 - 5 hrs", id: 4 },
  ];

  const RatesData = [
    { name: "Sort By Rates" },
    { tittle: "1 Star", id: 1 },
    { tittle: "2 Star", id: 2 },
    { tittle: "3 Star", id: 3 },
    { tittle: "4 Star", id: 4 },
    { tittle: "5 Star", id: 5 },
  ];

  const HandleGetSelected = (dropdownId, itemId) => {
    setSelectedItems((prev) => {
      const updatedSelections = {
        ...prev,
        [dropdownId]: itemId, // Update only the selected dropdown
      };

      // Map dropdownId to dataset
      const datasets = {
        1: CategoryData,
        2: YearData,
        3: TimesData,
        4: RatesData,
      };

      // Get the dataset for this dropdown
      const dataset = datasets[dropdownId];

      // Find the selected item's title
      const selectedTitle = dataset?.find((item) => item.id === itemId)?.tittle;

      console.log(`Dropdown ${dropdownId}: Selected Title -`, selectedTitle);

      // Retrieve all selected values (titles)
      const selectedValues = Object.entries(updatedSelections).reduce(
        (acc, [key, value]) => {
          const ds = datasets[key];
          const title = ds?.find((item) => item.id === value)?.tittle;
          if (title) acc[key] = title;
          return acc;
        },
        {}
      );

      console.log("All Selected Titles:", selectedValues);
      setUserChoice(selectedValues);
      return updatedSelections;
    });
  };

  return (
    <MovieContext.Provider
      value={{
        setSelectedItems,
        selectedItems,
        RatesData,
        TimesData,
        YearData,
        HandleGetSelected,
        userChoice,
        Movies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
