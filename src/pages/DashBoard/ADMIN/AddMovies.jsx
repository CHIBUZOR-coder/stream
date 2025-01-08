import { HiPlusCircle } from "react-icons/hi2";
import { Input } from "../../../Custom/Input";
import { useContext, useEffect, useState } from "react";
import Uploader from "../Components/UpdateProfile/Uploader";
import SelectRating from "../../../Custom/SelectRating";
import MovieContext from "../../../Context/MovieContext";
import { CgSelectR } from "react-icons/cg";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";

const AddMovie = () => {
  const {
    CategoryData,
    handleFileUploaded,
    handleFileUploadedVideo,
    setInputVal,
  } = useContext(MovieContext);
  let Ffor = "video";
  const [Images, setImages] = useState(""); // Array to store multiple image URLs
  const [Video, setVideo] = useState([]); // Array to store multiple image URLs
  const [previewVideo, setpreviewVideo] = useState([]); // Array to store multiple image URLs
  const [previewImageV, setpreviewImageV] = useState([]); // Array to store multiple image URLs
  const [previewImageC, setpreviewImageC] = useState([]); // Array to store multiple image URLs
  const selectedData = CategoryData.filter((item) => item.display === "show");
  const [Casts, setCasts] = useState([]);
  const [Name, setname] = useState("");
  const [Role, setRole] = useState("");
  const [MovieImages, setMovieImages] = useState(""); // Array to store multiple image URLs
  const [MovieTitle, setMovieTitle] = useState("");
  const [MovieHour, setMovieHour] = useState("");
  const [MovieLanguage, setMovieLanguage] = useState("");
  const [MovieYears, setMovieYear] = useState("");

  const AddCast = (name, role, imageurl) => {
    if (!name || !role || !imageurl) {
      console.error("All fields (name, role, imageurl) are required.");
      return;
    }
    if (typeof name !== "string" || typeof role !== "string") {
      console.error("All fields must be strings.");
      return;
    }
    if (Casts.some((cast) => cast.name === name && cast.role === role)) {
      console.warn("This cast already exists.");
      return;
    }
    const newCast = { name: name, role: role, imageurl: imageurl };
    setCasts((prev) => [...prev, newCast]);

    setname("");
    setRole("");
    setImages([]);
  };

  useEffect(() => {
    console.log("imagUrl", Images);
  }, [Images]);
  useEffect(() => {
    console.log("MovieimagUrl", MovieImages);
  }, [MovieImages]);

  useEffect(() => {
    console.log("Casts", Casts);
  }, [Casts]);

  return (
    <div className="flex flex-col gap-28">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold ">Add Movie</h2>
        <form className="flex flex-col gap-6 text-left" action="">
          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label={"Movie Title"}
              placeholder={"Avengers"}
              type={"text"}
              bg={true}
              setter={setMovieTitle}
              setInputVal={setInputVal}
              mainVal={MovieTitle}
            />
            <Input
              label={"Hours"}
              placeholder={"2hr 20min"}
              type={"text"}
              bg={true}
              setter={setMovieHour}
              setInputVal={setInputVal}
              mainVal={MovieHour}
            />
          </div>

          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label={"Language Used"}
              placeholder={"English"}
              type={"text"}
              bg={true}
              setter={setMovieLanguage}
              setInputVal={setInputVal}
              mainVal={MovieLanguage}
            />
            <Input
              label={"Year Released"}
              placeholder={"2022"}
              type={"number"}
              bg={true}
              setter={setMovieYear}
              setInputVal={setInputVal}
              mainVal={MovieYears}
            />
          </div>

          <div className="w-full grid md:grid-cols-2 gap-6 ">
            {/* Images */}
            <div className="flex flex-col gap-2 w-full col-span-2 md:col-span-1 ">
              <p className="text-border font-semibold text-sm ">Movie Image</p>
              <Uploader
                onFileUploaded={handleFileUploaded}
                prviewSetter={setpreviewImageV}
                MainImageSetter={setMovieImages}
                For={"image"}
              />

              {/* PreviewImage */}
              <div className=" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center cursor-default ">
                <div className="flex gap-4 flex-wrap">
                  {MovieImages.length > 0 ? (
                    MovieImages.map((image, index) => (
                      <div
                        key={index}
                        className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center"
                      >
                        <img
                          src={previewImageV}
                          alt={`Uploaded Preview ${index + 1}`}
                          className="object-cover w-full h-full rounded"
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 p-4 rounded-md border border-border bg-main">
                      No images selected
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* video */}
            <div className="flex flex-col  gap-2 w-full col-span-2 md:col-span-1 ">
              <p className="text-border font-semibold text-sm ">Movie Video</p>

              {MovieImages.length > 0 ? (
                <Uploader
                  onFileUploaded={handleFileUploadedVideo}
                  prviewSetter={setVideo}
                  For={Ffor}
                />
              ) : (
                <div className="w-full col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-main border-border border-2 h-[178.5px] border-dashed rounded-md">
                  <div className=" animate-pulse">
                    <p className="w-full p-8  text-lg text-text  text-center">
                      This Feild will only be active after adding Movie Image
                    </p>
                    <span className=" flex justify-center items-center  rounded-full ">
                      <TbInfoSquareRoundedFilled className="w-10 h-10" />
                    </span>
                  </div>
                </div>
              )}

              {/* PreviewVideo*/}
              <div className=" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center cursor-default ">
                <div className="flex gap-4 flex-wrap">
                  {Video.length > 0 ? (
                    MovieImages.map((image, index) => (
                      <div
                        key={index}
                        className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center"
                      >
                        <img
                          src={previewImageV}
                          alt={`Uploaded Preview ${index + 1}`}
                          className="object-cover w-full h-full rounded"
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 p-4 rounded-md border border-border bg-main">
                      No video selected
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Description And Category */}
          <div>
            <div className="w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start ">
              {/* Description */}
              <div className="w-full col-span-2 md:col-span-1">
                <label className="text-border font-semibold">
                  Movie Description
                </label>
                <textarea
                  className="w-full h-44 mt-2 p-6 bg-main border border-border rounded"
                  placeholder="Make it short and honest...."
                  name=""
                  id=""
                ></textarea>
              </div>

              {/* Category */}
              <div className="w-full relative text-sm mt-6">
                <SelectRating data={selectedData} />
                <div className="absolute top-[47%] cursor-pointer right-4 flex items-center  transform pointer-events-auto">
                  {/* <FaArrowDown className="text-white h-6 w-6" /> */}
                  <CgSelectR className="text-white h-4 w-4 " />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              // Additional functionality for Add button
            }}
            className="md:w-1/2 w-full  font-semibold flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main"
          >
            <HiPlusCircle className="pikin h-7 w-7" /> Add
          </button>
        </form>
      </div>

      {/* Add Casts */}
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold ">Add Casts</h2>
        <form className="flex flex-col gap-8 text-left" action="">
          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label={"Full Name"}
              placeholder={"Name"}
              type={"text"}
              bg={true}
              setter={setname}
              setInputVal={setInputVal}
              mainVal={Name}
            />
            <Input
              label={"Role"}
              placeholder={"Movie role"}
              type={"text"}
              bg={true}
              setter={setRole}
              setInputVal={setInputVal}
              mainVal={Role}
            />
          </div>

          <div className="w-full grid md:grid-cols-1 gap-6 ">
            {/* Images */}
            <div className="flex flex-col gap-2 w-full col-span-2 md:col-span-1 ">
              <p className="text-border font-semibold text-sm ">Movie Images</p>
              <Uploader
                onFileUploaded={handleFileUploaded}
                For={"image"}
                prviewSetter={setpreviewImageC}
                MainImageSetter={setImages}
              />
            </div>
          </div>
          {/* Preview */}
          <div className=" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 items-start cursor-default ">
            <div className="flex gap-4 flex-wrap">
              {Images.length > 0 ? (
                Images.map((image, index) => (
                  <div
                    key={index}
                    className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center"
                  >
                    <img
                      src={previewImageC}
                      alt={`Uploaded Preview ${index + 1}`}
                      className="object-cover w-full h-full rounded"
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 p-4 rounded-md border border-border bg-main">
                  No images selected
                </p>
              )}
            </div>

            <div
              className={`bg-main w-full border-2 border-border col-span-2 border-dashed rounded-md p-2 `}
            >
              {Casts.length > 0 ? (
                <div
                  className={` ${
                    Casts.length > 0
                      ? "grid   grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 items-center p-2"
                      : " flex justify-start items-center"
                  } w-full `}
                >
                  {Casts.map((cast, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center"
                    >
                      <div className=" p-2 bg-main border border-border rounded ">
                        <img
                          src={
                            cast.imageurl.length > 0
                              ? URL.createObjectURL(cast.imageurl[0])
                              : ""
                          }
                          alt={`${cast.name}'s Image`}
                          className="w-32 h-32 object-cover rounded"
                        />
                      </div>
                      <p>{cast.name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full flex justify-center items-center  ">
                  <p className="text-text w-full text-center">No cast added</p>
                </div>
              )}
            </div>
          </div>

          <div className="w-full flex justify-center gap-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                // Additional functionality for Add button
              }}
              className="md:w-1/2 w-full  font-semibold flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main"
            >
              <HiPlusCircle className="pikin h-7 w-7" /> Add
            </button>
            <span
              onClick={(e) => {
                e.preventDefault();
                AddCast(Name, Role, Images);
                // Additional functionality for Add button
              }}
              className="md:w-1/2 w-full  font-semibold flexRow py-3  rounded border-2 gap-2 Ogaa cursor-pointer transi  border-subMain bg-main text-white hover:bg-subMain"
            >
              <HiPlusCircle className="pikin h-7 w-7" /> Add Cast
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
