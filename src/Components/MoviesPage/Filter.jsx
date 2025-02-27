import { useContext, useEffect, useState } from "react";
import React from "react";
import { CategoryData } from "../../Data/CategoryData";
import { MdArrowDropDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import MovieContext from "../../Context/MovieContext";

const Filters = React.memo(({ Movies }) => {
  // const [selectedItems, setSelectedItems] = useState({}); // State for selected items
  const {
    setSelectedItems,
    selectedItems,
    RatesData,
    TimesData,
    YearData,
    HandleGetSelected,
    categoryDataa,
    userChoice,
  } = useContext(MovieContext);

  const [isActive, setActive] = useState(null);
  const [activeState, setSate] = useState(false);
  const [categoryHead, setCategoryHead] = useState(null);
  const [categories, setCategories] = useState([]);


  //  useEffect(() => {
  //    console.log("mov:", Movies);
  //  }, [Movies]);

  useEffect(() => {
    if (categoryDataa) {
      // console.log("data:", categoryDataa);
      setCategoryHead(categoryDataa[0].name);
      setCategories(categoryDataa);
    } else {
      setCategoryHead(<p>No data list </p>);
    }
    // console.log("categoryData", categoryDataa);
  }, [categoryDataa]);

  const Filter = [
    { id: 1, items: categories },
    { id: 2, items: YearData },
    { id: 3, items: TimesData },
    { id: 4, items: RatesData },
  ];

  // useEffect(() => {
  //   console.log("flter", userChoice);
  // }, [userChoice]);
  const handleToggle = (id) => {
    // console.log("id",id);

    if (isActive === id) {
      setActive(null);
      setSate(false);
    } else {
      setActive(id);
      setSate(true);
    }
  };

  const handleSelect = (dropdownId, itemId) => {
    console.log(itemId);

    setSelectedItems((prev) => ({
      ...prev,
      [dropdownId]: itemId, // Update only the selected dropdown
    }));

    HandleGetSelected(dropdownId, itemId);
  };

  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((dropdown) => (
        <div key={dropdown.id} onClick={() => handleToggle(dropdown.id)}>
          {/* {console.log("menu", dropdown)} */}
          <div className="relative w-full flex items-center cursor-pointer border-gray-800 text-white px-4 py-2 text-left bg-main rounded-lg focus:outline-none focus:ring-1 focus:border-dry">
            <span className="block font-semibold text-[0.7rem] filterr md:text-[1rem] ">
              {selectedItems[dropdown.id] ? (
                dropdown.items.find(
                  (item) => item.id === selectedItems[dropdown.id]
                )?.tittle
              ) : (
                <>
                  {dropdown.id === 1 ? (
                    <p>Sort By Category</p>
                  ) : dropdown.id === 2 ? (
                    <p>Sort By Year</p>
                  ) : dropdown.id === 3 ? (
                    <p>Sort By Hours</p>
                  ) : dropdown.id === 4 ? (
                    <p>Sort By Rates</p>
                  ) : (
                    ""
                  )}
                </>
              )}
            </span>
            <span className="absolute right-2 flex items-center">
              <MdArrowDropDown className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>

          <div
            className={`${
              isActive === dropdown.id
                ? `${activeState ? "block" : "hidden"}`
                : "hidden"
            } relative`}
          >
            <div className="absolute z-10 mt-1 w-full bg-drkb2 flex flex-col gap-2 pl-4 border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm-text-sm">
              {dropdown.items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleSelect(dropdown.id, item.id);
                    console.log(item.id);
                  }}
                  className={`${
                    item.id === 0 ? "hidden" : ""
                  }   relative w-full flex justify-start items-center gap-2 hover:bg-white hover:text-dry transi py-1 cursor-pointer ${
                    selectedItems[dropdown.id] === item.id ? "font-bold" : ""
                  }`}
                >
                  <span>
                    {selectedItems[dropdown.id] === 1
                      ? selectedItems[dropdown.id] === item.id &&
                        index >= 0 && <FaCheck className="h-4 w-4" />
                      : selectedItems[dropdown.id] === item.id &&
                        index !== 0 && <FaCheck className="h-4 w-4" />}

                    {/* {selectedItems[dropdown.id] === item.id && index !== 0 && (
                      <FaCheck className="h-4 w-4" />
                    )} */}
                  </span>
                  <span className={`truncate font-semibold `}>{item.tittle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Filters;
