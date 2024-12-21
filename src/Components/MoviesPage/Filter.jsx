// import { Fragment, useState } from "react";
// import { CategoryData } from "../../Data/CategoryData";
// import {
//   Listbox,
//   ListboxButton,
//   ListboxOption,
//   ListboxOptions,
//   Transition,
// } from "@headlessui/react";
// import { MdArrowDropDown } from "react-icons/md";
// import { FaCheck } from "react-icons/fa";

// const YearData = [
//   { tittle: "Sort By Year" },
//   { tittle: "1700 - 1800" },
//   { tittle: "1800 - 1900" },
//   { tittle: "1900 - 2000" },
//   { tittle: "2000 - 2100" },
//   { tittle: "2010 - 2030" },
// ];

// const TimesData = [
//   { tittle: "Sort By Hours" },
//   { tittle: "1 - 2 Hours" },
//   { tittle: "2 - 3 Hours" },
//   { tittle: "3 - 4 Hours" },
//   { tittle: "4 - 5 Hours" },
// ];

// const RatesData = [
//   { tittle: "Sort By Rates" },
//   { tittle: "1 Star" },
//   { tittle: "2 Star" },
//   { tittle: "3 Star" },
//   { tittle: "4 Star" },
//   { tittle: "5 Star" },
// ];

// const Filters = () => {
//   const [category, setCatgory] = useState({ tittle: "Category" });
//   const [year, setYear] = useState(YearData[0]);
//   const [times, setTimes] = useState(TimesData[0]);
//   const [rates, setRates] = useState(RatesData[0]);

//   const Filter = [
//     {
//       value: category,
//       onchange: setCatgory,
//       items: CategoryData,
//     },
//     {
//       value: year,
//       onchange: setYear,
//       items: YearData,
//     },
//     {
//       value: times,
//       onchange: setTimes,
//       items: TimesData,
//     },
//     {
//       value: rates,
//       onchange: setRates,
//       items: RatesData,
//     },
//   ];

//   return (
//     <div className=" my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
//       {Filter.map((item, index) => (
//         <Listbox key={index} value={item.value} onChange={item.onchange}>
//           <div className="relative">
//             {/* <Listbox.Button></Listbox.Button> */}

//             <ListboxButton className="relative w-full border-gray-800  text-white px-4 py-2 text-left bg-main rounded-lg focus:outline-none focus:ring-1 focus:border-dry text-xs cursor-default ">
//               <span className="block truncate">{item.value.tittle}</span>
//               <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none ">
//                 <MdArrowDropDown className="h-5 w-5" aria-hidden="true" />
//               </span>
//             </ListboxButton>
//             <Transition
//               as={Fragment}
//               leave="transition easse-in-out duration-100 "
//               leaveFrom="opacity-0"
//             >
//               <ListboxOptions
//                 className={`absolute z-10 mt-1 w-full bg-dry  border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm-text-sm `}
//               >
//                 {item.items.map((iterm, i) => (
//                   <ListboxOption
//                     key={i}
//                     className={({ active }) =>
//                       `relative  cursor-default select-none py-2 px-8  ${
//                         active ? "bg-subMain text-white" : "text-subMain"
//                       }`
//                     }
//                     value={iterm}
//                   >
//                     {({ selected }) => (
//                       <>
//                         <span
//                           className={`block truncated ${
//                             selected ? "font-semibold " : "font-normal"
//                           } `}
//                         >
//                           {iterm.tittle}
//                         </span>

//                         {selected ? (
//                           <span className="absolute insert-y-0 left-0 bottom-3 flex items-center pl-3 ">
//                             <FaCheck className="h-4 w-4" aria-hidden="true" />
//                           </span>
//                         ) : null}
//                       </>
//                     )}
//                   </ListboxOption>
//                 ))}
//               </ListboxOptions>
//             </Transition>
//           </div>
//         </Listbox>
//       ))}
//     </div>
//   );
// };

// export default Filters;



import { useState } from "react";
import { CategoryData } from "../../Data/CategoryData";
import { MdArrowDropDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const YearData = [
  { name: "Sort By Year" },
  { tittle: "1700 - 1800", id: 1 },
  { tittle: "1800 - 1900", id: 2 },
  { tittle: "1900 - 2000", id: 3 },
  { tittle: "2000 - 2100", id: 4 },
  { tittle: "2010 - 2030", id: 5 },
];

const TimesData = [
  { name: "Sort By Hours" },
  { tittle: "1 - 2 Hours", id: 1 },
  { tittle: "2 - 3 Hours", id: 2 },
  { tittle: "3 - 4 Hours", id: 3 },
  { tittle: "4 - 5 Hours", id: 4 },
];

const RatesData = [
  { name: "Sort By Rates" },
  { tittle: "1 Star", id: 1 },
  { tittle: "2 Star", id: 2 },
  { tittle: "3 Star", id: 3 },
  { tittle: "4 Star", id: 4 },
  { tittle: "5 Star", id: 5 },
];

const Filters = ({Movies}) => {
  const [selectedItems, setSelectedItems] = useState({}); // State for selected items
  const [isActive, setActive] = useState(null);
  const [activeState, setSate] = useState(false);

  const Filter = [
    { id: 1, items: CategoryData },
    { id: 2, items: YearData },
    { id: 3, items: TimesData },
    { id: 4, items: RatesData },
  ];

  const handleToggle = (id) => {
    if (isActive === id) {
      setActive(null);
      setSate(false);
    } else {
      setActive(id);
      setSate(true);
    }
  };

  const handleSelect = (dropdownId, itemId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [dropdownId]: itemId, // Update only the selected dropdown
    }));
  };

  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((dropdown) => (
        <div key={dropdown.id} onClick={() => handleToggle(dropdown.id)}>
          <div className="relative w-full flex items-center cursor-pointer border-gray-800 text-white px-4 py-2 text-left bg-main rounded-lg focus:outline-none focus:ring-1 focus:border-dry">
            <span className="block font-semibold">
              {selectedItems[dropdown.id]
                ? dropdown.items.find(
                    (item) => item.id === selectedItems[dropdown.id]
                  )?.tittle
                : dropdown.items[0].name}
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
                  key={item.id}
                  onClick={() => {
                    if (index !== 0) handleSelect(dropdown.id, item.id); // Exclude the default "Sort By ..." option
                  }}
                  className={`relative w-full flex justify-start items-center gap-2 hover:bg-white hover:text-dry transi py-1 cursor-pointer ${
                    selectedItems[dropdown.id] === item.id ? "font-bold" : ""
                  }`}
                >
                  <span>
                    {selectedItems[dropdown.id] === item.id && index !== 0 && (
                      <FaCheck className="h-4 w-4" />
                    )}
                  </span>
                  <span className="truncate font-semibold">{item.tittle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filters;
