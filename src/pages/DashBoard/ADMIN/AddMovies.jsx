// import { HiPlusCircle } from "react-icons/hi2";
// import { Input } from "../../../Custom/Input";
// import Uploader from "../Components/UpdateProfile/Uploader";

// const AddMovie = () => {
//   const bg = "bg-main";
//   return (
//     <div className="flex flex-col gap-5">
//       <h2 className="text-2xl font-bold ">Add Movie</h2>
//       <form className="flex flex-col gap-6 text-left" action="">
//         <div className="w-full grid md:grid-cols-2 gap-6">
//           <Input
//             label={"Movie Tittle"}
//             placeholder={"Arvengers"}
//             type={"text"}
//             bg={true}
//           />
//           <Input
//             label={"Hours"}
//             placeholder={"2hr 20min"}
//             type={"text"}
//             bg={true}
//           />
//         </div>

//         <div className="w-full grid md:grid-cols-2 gap-6">
//           <Input
//             label={"Language Used"}
//             placeholder={"English"}
//             type={"text"}
//             bg={true}
//           />
//           <Input
//             label={"Year Released"}
//             placeholder={"2022"}
//             type={"number"}
//             bg={true}
//           />
//         </div>
//         <div className="w-full grid md:grid-cols-2 gap-6">
//           {/* images */}
//           <div className="flex flex-col gap-2">
//             <p className="text-border font-semibold text-sm ">
//               Images Without Tittle
//             </p>
//             <Uploader />
//             <div className="w-32 h-32 p-2 bg-main border dis border-border rounded ">
//               <img src={``} alt="" />
//             </div>
//           </div>
//         </div>
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             setCurrentModal("Add");
//             setModalDisplay((prev) => !prev);
//           }}
//           className="w-1/2 font-semibold  flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main"
//         >
//           <HiPlusCircle className="pikin h-7 w-7" /> Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddMovie;
import { HiPlusCircle } from "react-icons/hi2";
import { Input } from "../../../Custom/Input";
import { useState } from "react";
import Uploader from "../Components/UpdateProfile/Uploader";

const AddMovie = () => {
  const [images, setImages] = useState([]); // Array to store multiple image URLs

  const handleFileUploaded = (newFiles) => {
    setImages((prevImages) => [...prevImages, ...newFiles]); // Add new images to the existing list
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold ">Add Movie</h2>
      <form className="flex flex-col gap-6 text-left" action="">
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label={"Movie Title"}
            placeholder={"Avengers"}
            type={"text"}
            bg={true}
          />
          <Input
            label={"Hours"}
            placeholder={"2hr 20min"}
            type={"text"}
            bg={true}
          />
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label={"Language Used"}
            placeholder={"English"}
            type={"text"}
            bg={true}
          />
          <Input
            label={"Year Released"}
            placeholder={"2022"}
            type={"number"}
            bg={true}
          />
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* Images */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm ">
              Images Without Title
            </p>
            <Uploader onFileUploaded={handleFileUploaded} />
            <div className="flex gap-4 flex-wrap">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div
                    key={index}
                    className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center"
                  >
                    <img
                      src={image}
                      alt={`Uploaded Preview ${index + 1}`}
                      className="object-cover w-full h-full rounded"
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No images selected</p>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            // Additional functionality for Add button
          }}
          className="w-1/2 font-semibold flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main"
        >
          <HiPlusCircle className="pikin h-7 w-7" /> Add
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
