import { HiPlusCircle } from "react-icons/hi2";
import { Input } from "../../../Custom/Input";
import { useContext, useEffect, useState } from "react";
import Uploader from "../Components/UpdateProfile/Uploader";
import SelectRating from "../../../Custom/SelectRating";
import MovieContext from "../../../Context/MovieContext";
import { CgSelectR } from "react-icons/cg";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { IoIosWarning } from "react-icons/io";

const AddMovie = () => {
  const {
    CategoryData,
    handleFileUploaded,
    handleFileUploadedVideo,
    setInputVal,
    Movies,
    categoryData,
    CategoryId,
  } = useContext(MovieContext);
  const [check, setCheck] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (categoryData) {
      setCategories(categoryData);
    }
  }, [categoryData]);

  useEffect(() => {
    console.log("categryId", CategoryId);
  }, [CategoryId]);

  let Ffor = "video";
  const [Images, setImages] = useState("");

  //Preview show to confim upload
  const [PreviewVideo, setPreviewVideo] = useState(null);
  const [previewImageV, setpreviewImageV] = useState(null);
  const [previewImageC, setpreviewImageC] = useState(null);
  // const selectedData = CategoryData.filter((item) => item.display === "show");
  const [Casts, setCasts] = useState([]);
  const [Name, setname] = useState("");
  const [Description, setDescription] = useState("");
  const [Role, setRole] = useState("");
  const [MovieImages, setMovieImages] = useState([]);

  const [MovieTitle, setMovieTitle] = useState("");
  const [MovieHour, setMovieHour] = useState("");
  const [MovieLanguage, setMovieLanguage] = useState("");
  const [MovieYears, setMovieYear] = useState("");
  const [MovieVideo, setMovieVideo] = useState([]);
  const [Duration, setDuration] = useState("");
  const [YearDuration, setYearDuration] = useState("");
  const [Popular, setPopular] = useState("");

  //the  Popularr below will be the data passed in the request. its value is conditionally gotten from Popular above
  const [Popularr, setPopularr] = useState();
  const [Rating, setRating] = useState("");
  const [RatingRange, setRatingRange] = useState("");
  const [Price, setPrice] = useState("");
  const [Trailer, setTrailer] = useState("");
  const [MovieCategoryId, setMovieCategoryId] = useState(null);
  const [MovieCategory, setMovieCategory] = useState(null);
  const [MovieData, setMoviedata] = useState({
    name: "",
    time: "",
    approxiT: "",
    popular: "",
    categoryId: "",
    year: "",
    approxiY: "",
    rating: "",
    approxiR: "",
    language: "",
    description: "",
    price: "",
    trailer: "",
    image: "",
    video: "",
  });

  useEffect(() => {
    if (MovieVideo.name && MovieImages.name) {
      const value = MovieVideo.name;
      // console.log("Mov", value);
      const slicedValue = value.slice(0, -7);
      console.log("Mov (sliced):", slicedValue);

      const value2 = MovieImages.name;
      const slicedValue2 = value2.slice(0, -7);
      console.log("Img (sliced):", slicedValue2);
      if (slicedValue === slicedValue2) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    }
  }, [MovieVideo, MovieImages]);
  useEffect(() => {
    if (Popular === "true") setPopularr(true);
    else setPopularr(false);
    //  console.log("Apop",Popular);
  }, [Popular]);

  useEffect(() => {
    console.log("Apop", Popularr);
  }, [Popularr]);

  useEffect(() => {
    console.log("initial", check);
  }, [check]);

  useEffect(() => {
    console.log("MovieImages", MovieImages);
  }, [MovieImages]);

  const HandeleAddMovie = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append all form fields to FormData
    formData.append("name", MovieTitle);
    formData.append("time", MovieHour);
    formData.append("approxiT", Duration);
    formData.append("popular", Popular);
    formData.append("year", MovieYears);
    formData.append("approxiY", YearDuration);
    formData.append("rating", Rating);
    formData.append("approxiR", RatingRange);
    formData.append("language", MovieLanguage);
    formData.append("description", Description);
    formData.append("price", Price);
    formData.append("trailer", Trailer);
    formData.append("categoryId", MovieCategoryId);

    // Append image files (multiple files)
    formData.append("image", MovieImages);

    // Append video files (multiple files)
    formData.append("video", MovieVideo);

    try {
      const res = await fetch("http://localhost:5000/api/createMovies", {
        method: "POST",
        headers: {
          Authorization: "Bearer your-auth-token",
        },
        body: formData,
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setMovieCategoryId(CategoryId);
  }, [CategoryId]);

  useEffect(() => {
    console.log("descrip", Description);
  }, [Description]);

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

  return (
    <div className="flex flex-col gap-28">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold ">Add Movie</h2>
        <form
          onSubmit={(e) => {
            // e.preventDefault();
            HandeleAddMovie(e);
          }}
          className="flex flex-col gap-6 text-left"
          action=""
        >
          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label={"Movie Title"}
              placeholder={"Avengers"}
              type={"text"}
              bg={true}
              setter={setMovieTitle}
              setInputVal={setInputVal}
              mainVal={MovieTitle}
              indicator={"Movie Title"}
              labelFor={"name"}
            />

            <Input
              label={"Time"}
              placeholder={"2hr 20min"}
              type={"text"}
              bg={true}
              setter={setMovieHour}
              setInputVal={setInputVal}
              mainVal={MovieHour}
              indicator={"Time"}
              labelFor={"time"}
            />
          </div>

          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label={"Duration"}
              placeholder={"2 - 3 hrs"}
              type={"text"}
              bg={true}
              setter={setDuration}
              setInputVal={setInputVal}
              mainVal={Duration}
              indicator={"Duration"}
              labelFor={"approxiT"}
            />

            <Input
              label={"Popular Movie?"}
              placeholder={"true/false"}
              type={"text"}
              bg={true}
              setter={setPopular}
              setInputVal={setInputVal}
              mainVal={Popular}
              indicator={"Popular Movies"}
              labelFor={"popular"}
            />
          </div>

          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label={"Year Released"}
              placeholder={"2022"}
              type={"number"}
              bg={true}
              setter={setMovieYear}
              setInputVal={setInputVal}
              mainVal={MovieYears}
              indicator={"Year Released"}
              labelFor={"year"}
            />
            <Input
              label={"Year Duration"}
              placeholder={"2010 - 2030"}
              type={"text"}
              bg={true}
              setter={setYearDuration}
              setInputVal={setInputVal}
              mainVal={YearDuration}
              indicator={"Year Duration"}
              labelFor={"approxiY"}
            />
          </div>

          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label={"Rating"}
              placeholder={"maximum range is 5"}
              type={"number"}
              bg={true}
              setter={setRating}
              setInputVal={setInputVal}
              mainVal={Rating}
              indicator={"Rating"}
              labelFor={"rating"}
            />

            <Input
              label={"Rating range"}
              placeholder={"4 Star"}
              type={"text"}
              bg={true}
              setter={setRatingRange}
              setInputVal={setInputVal}
              mainVal={RatingRange}
              indicator={"Rating range"}
              labelFor={"approxiR"}
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
              indicator={"Language"}
              labelFor={"language"}
            />
            <Input
              label={"Price"}
              placeholder={"Add price"}
              type={"number"}
              bg={true}
              setter={setPrice}
              setInputVal={setInputVal}
              mainVal={Price}
              indicator={"price"}
              labelFor={"price"}
            />
          </div>

          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label={"Trailer"}
              placeholder={"https://www.youtube.com/embed/6ZfuNTqbHE8"}
              type={"text"}
              bg={true}
              setter={setTrailer}
              setInputVal={setInputVal}
              mainVal={Trailer}
              indicator={"Trailer"}
              labelFor={"trailer"}
            />
          </div>

          <div className="w-full grid md:grid-cols-2 gap-6 ">
            {/* Images */}
            <div className="flex flex-col gap-2 w-full col-span-2 md:col-span-1 ">
              <p className="text-border font-semibold text-sm ">Movie Image</p>
              <Uploader
                MainImageSetter={setMovieImages}
                onFileUploaded={handleFileUploaded}
                prviewSetter={setpreviewImageV}
                For={"image"}
              />

              {/* PreviewImage */}
              <div className=" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center cursor-default ">
                <div className="flex gap-4 flex-wrap">
                  {MovieImages.name ? (
                    <div className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center">
                      <img
                        src={previewImageV}
                        alt={`Uploaded Preview ${MovieImages.name}`}
                        className="object-cover w-full h-full rounded"
                      />
                    </div>
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

              {MovieImages ? (
                <Uploader
                  onFileUploaded={handleFileUploadedVideo}
                  prviewSetter={setPreviewVideo}
                  MainVideoSetter={setMovieVideo}
                  For={Ffor}
                />
              ) : (
                <div className="w-full col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-main border-border border-2 py-4 md:py-0 h-auto md:h-[207.5px] border-dashed rounded-md">
                  <div className=" animate-pulse">
                    <p className="w-full p-8  text-lg text-text  text-center">
                      This Feild will only be active after adding Movie Image
                    </p>
                    <span className=" flex justify-center items-center mt-0 md:-mt-2  rounded-full ">
                      <TbInfoSquareRoundedFilled className="w-10 h-10" />
                    </span>
                  </div>
                </div>
              )}

              {/* PreviewVideo*/}
              <div className=" w-full  relative col-span-2  flex justify-center items-center cursor-default ">
                <div className="flex gap-4 flex-wrap w-full">
                  {MovieVideo.name ? (
                    check ? (
                      <div className=" w-full p-2 bg-main border border-border rounded flex flex-col gap-2 items-center justify-center">
                        {MovieVideo.name}
                        <div className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center">
                          <img
                            src={previewImageV}
                            alt={`Uploaded Preview ${MovieImages.name}`}
                            className="object-cover w-full h-full rounded"
                          />
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 p-4 rounded-md border border-border bg-main">
                        The movies you added may not be currect. Please Check
                      </p>
                    )
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
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-44 mt-2 p-6 bg-main border border-border rounded"
                  placeholder="Make it short and honest...."
                  name=""
                  id=""
                ></textarea>
              </div>

              {/* Category */}
              <div className="w-full relative text-sm mt-6">
                <SelectRating data={categories} setter={setMovieCategory} />
                <div className="absolute top-[47%] cursor-pointer right-4 flex items-center  transform pointer-events-auto">
                  {/* <FaArrowDown className="text-white h-6 w-6" /> */}
                  <CgSelectR className="text-white h-4 w-4 " />
                </div>
              </div>
            </div>
          </div>

          <button className="md:w-1/2 w-full  font-semibold flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main">
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
              indicator={"Full Name"}
              labelFor={"name"}
            />
            <Input
              label={"Role"}
              placeholder={"Movie role"}
              type={"text"}
              bg={true}
              setter={setRole}
              setInputVal={setInputVal}
              mainVal={Role}
              indicator={"Role"}
              labelFor={"role"}
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

// import { HiPlusCircle } from "react-icons/hi2";
// import { Input } from "../../../Custom/Input";
// import { useContext, useEffect, useState } from "react";
// import Uploader from "../Components/UpdateProfile/Uploader";
// import SelectRating from "../../../Custom/SelectRating";
// import MovieContext from "../../../Context/MovieContext";
// import { CgSelectR } from "react-icons/cg";
// import { TbInfoSquareRoundedFilled } from "react-icons/tb";
// import { IoIosWarning } from "react-icons/io";

// const AddMovie = () => {
//   const {
//     CategoryData,
//     handleFileUploaded,
//     handleFileUploadedVideo,
//     setInputVal,
//     Movies,
//     categoryData,
//     CategoryId,
//   } = useContext(MovieContext);
//   const [check, setCheck] = useState(null);
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     if (categoryData) {
//       setCategories(categoryData);
//     }
//   }, [categoryData]);

//   useEffect(() => {
//     console.log("categryId", CategoryId);
//   }, [CategoryId]);

//   let Ffor = "video";
//   const [Images, setImages] = useState("");

//   //Preview show to confim upload
//   const [PreviewVideo, setPreviewVideo] = useState(null);
//   const [previewImageV, setpreviewImageV] = useState(null);
//   const [previewImageC, setpreviewImageC] = useState(null);
//   // const selectedData = CategoryData.filter((item) => item.display === "show");
//   const [Casts, setCasts] = useState([]);
//   const [Name, setname] = useState("");
//   const [Description, setDescription] = useState("");
//   const [Role, setRole] = useState("");
//   const [MovieImages, setMovieImages] = useState([]);

//   const [MovieTitle, setMovieTitle] = useState("");
//   const [MovieHour, setMovieHour] = useState("");
//   const [MovieLanguage, setMovieLanguage] = useState("");
//   const [MovieYears, setMovieYear] = useState("");
//   const [MovieVideo, setMovieVideo] = useState([]);
//   const [Duration, setDuration] = useState("");
//   const [YearDuration, setYearDuration] = useState("");
//   const [Popular, setPopular] = useState("");

//   //the  Popularr below will be the data passed in the request. its value is conditionally gotten from Popular above
//   const [Popularr, setPopularr] = useState();
//   const [Rating, setRating] = useState("");
//   const [RatingRange, setRatingRange] = useState("");
//   const [Price, setPrice] = useState("");
//   const [Trailer, setTrailer] = useState("");
//   const [MovieCategoryId, setMovieCategoryId] = useState(null);
//   const [MovieCategory, setMovieCategory] = useState(null);
//   const [MovieData, setMoviedata] = useState({
//     name: "",
//     time: "",
//     approxiT: "",
//     popular: "",
//     categoryId: "",
//     year: "",
//     approxiY: "",
//     rating: "",
//     approxiR: "",
//     language: "",
//     description: "",
//     price: "",
//     trailer: "",
//     image: "",
//     video: "",
//   });

//   useEffect(() => {
//     if (Popular === "true") setPopularr(true);
//     else setPopularr(false);
//     //  console.log("Apop",Popular);
//   }, [Popular]);

//   useEffect(() => {
//     console.log("Apop", Popularr);
//   }, [Popularr]);

//   useEffect(() => {
//     console.log("MovieImages", MovieImages);
//   }, [MovieImages]);

//   const HandeleAddMovie = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     // Append all form fields to FormData

//     formData.append("name", MovieTitle);
//     formData.append("time", MovieHour);
//     formData.append("approxiT", Duration);
//     formData.append("popular", Popular);
//     formData.append("year", MovieYears);
//     formData.append("approxiY", YearDuration);
//     formData.append("rating", Rating);
//     formData.append("approxiR", RatingRange);
//     formData.append("language", MovieLanguage);
//     formData.append("description", Description);
//     formData.append("price", Price);
//     formData.append("trailer", Trailer);
//     formData.append("categoryId", MovieCategoryId);

//     // Append image files (multiple files)
//     formData.append("image", MovieImages);

//     // Append video files (multiple files)
//     formData.append("video", MovieVideo);

//     try {
//       const res = await fetch("http://localhost:5000/api/createMovies", {
//         method: "POST",
//         headers: {
//           Authorization: "Bearer your-auth-token",
//         },
//         body: formData,
//       });

//       const data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     setMovieCategoryId(CategoryId);
//   }, [CategoryId]);

//   useEffect(() => {
//     console.log(typeof setMovieImages);
//   }, []);

//   const AddCast = (name, role, imageurl) => {
//     if (!name || !role || !imageurl) {
//       console.error("All fields (name, role, imageurl) are required.");
//       return;
//     }
//     if (typeof name !== "string" || typeof role !== "string") {
//       console.error("All fields must be strings.");
//       return;
//     }
//     if (Casts.some((cast) => cast.name === name && cast.role === role)) {
//       console.warn("This cast already exists.");
//       return;
//     }
//     const newCast = { name: name, role: role, imageurl: imageurl };
//     setCasts((prev) => [...prev, newCast]);

//     setname("");
//     setRole("");
//     setImages([]);
//   };

//   return (
//     <div className="flex flex-col gap-28">
//       <div className="flex flex-col gap-5">
//         <h2 className="text-2xl font-bold ">Add Movie</h2>
//         <form
//           onSubmit={(e) => {
//             // e.preventDefault();
//             HandeleAddMovie(e);
//           }}
//           className="flex flex-col gap-6 text-left"
//           action=""
//         >
//           <div className="w-full grid md:grid-cols-2 gap-6">
//             <Input
//               label={"Movie Title"}
//               placeholder={"Avengers"}
//               type={"text"}
//               bg={true}
//               setter={setMovieTitle}
//               setInputVal={setInputVal}
//               mainVal={MovieTitle}
//               indicator={"Movie Title"}
//               labelFor={"name"}
//             />

//             <Input
//               label={"Time"}
//               placeholder={"2hr 20min"}
//               type={"text"}
//               bg={true}
//               setter={setMovieHour}
//               setInputVal={setInputVal}
//               mainVal={MovieHour}
//               indicator={"Time"}
//               labelFor={"time"}
//             />
//           </div>

//           <div className="w-full grid md:grid-cols-2 gap-6">
//             <Input
//               label={"Duration"}
//               placeholder={"2 - 3 hrs"}
//               type={"text"}
//               bg={true}
//               setter={setDuration}
//               setInputVal={setInputVal}
//               mainVal={Duration}
//               indicator={"Duration"}
//               labelFor={"approxiT"}
//             />

//             <Input
//               label={"Popular Movie?"}
//               placeholder={"true/false"}
//               type={"text"}
//               bg={true}
//               setter={setPopular}
//               setInputVal={setInputVal}
//               mainVal={Popular}
//               indicator={"Popular Movies"}
//               labelFor={"popular"}
//             />
//           </div>

//           <div className="w-full grid md:grid-cols-2 gap-6">
//             <Input
//               label={"Year Released"}
//               placeholder={"2022"}
//               type={"number"}
//               bg={true}
//               setter={setMovieYear}
//               setInputVal={setInputVal}
//               mainVal={MovieYears}
//               indicator={"Year Released"}
//               labelFor={"year"}
//             />
//             <Input
//               label={"Year Duration"}
//               placeholder={"2010 - 2030"}
//               type={"text"}
//               bg={true}
//               setter={setYearDuration}
//               setInputVal={setInputVal}
//               mainVal={YearDuration}
//               indicator={"Year Duration"}
//               labelFor={"approxiY"}
//             />
//           </div>

//           <div className="w-full grid md:grid-cols-2 gap-6">
//             <Input
//               label={"Rating"}
//               placeholder={"maximum range is 5"}
//               type={"number"}
//               bg={true}
//               setter={setRating}
//               setInputVal={setInputVal}
//               mainVal={Rating}
//               indicator={"Rating"}
//               labelFor={"rating"}
//             />

//             <Input
//               label={"Rating range"}
//               placeholder={"4 Star"}
//               type={"text"}
//               bg={true}
//               setter={setRatingRange}
//               setInputVal={setInputVal}
//               mainVal={RatingRange}
//               indicator={"Rating range"}
//               labelFor={"approxiR"}
//             />
//           </div>

//           <div className="w-full grid md:grid-cols-2 gap-6">
//             <Input
//               label={"Language Used"}
//               placeholder={"English"}
//               type={"text"}
//               bg={true}
//               setter={setMovieLanguage}
//               setInputVal={setInputVal}
//               mainVal={MovieLanguage}
//               indicator={"Language"}
//               labelFor={"language"}
//             />
//             <Input
//               label={"Price"}
//               placeholder={"Add price"}
//               type={"number"}
//               bg={true}
//               setter={setPrice}
//               setInputVal={setInputVal}
//               mainVal={Price}
//               indicator={"price"}
//               labelFor={"price"}
//             />
//           </div>

//           <div className="w-full grid md:grid-cols-2 gap-6">
//             <Input
//               label={"Trailer"}
//               placeholder={"https://www.youtube.com/embed/6ZfuNTqbHE8"}
//               type={"text"}
//               bg={true}
//               setter={setTrailer}
//               setInputVal={setInputVal}
//               mainVal={Trailer}
//               indicator={"Trailer"}
//               labelFor={"trailer"}
//             />
//           </div>

//           <div className="w-full grid md:grid-cols-2 gap-6 ">
//             {/* Images */}
//             <div className="flex flex-col gap-2 w-full col-span-2 md:col-span-1 ">
//               <p className="text-border font-semibold text-sm ">Movie Image</p>
//               <Uploader
//                 onFileUploaded={handleFileUploaded}
//                 MainImageSetter={setMovieImages}
//                 prviewSetter={setpreviewImageV}
//                 For={"image"}
//               />

//               {/* PreviewImage */}
//               <div className=" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center cursor-default ">
//                 <div className="flex gap-4 flex-wrap">
//                   {MovieImages ? (
//                     <div

//                       className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center"
//                     >
//                       <img
//                         src={previewImageV}
//                         alt={`Uploaded Preview ${MovieImages.name}`}
//                         className="object-cover w-full h-full rounded"
//                       />
//                     </div>
//                   ) : (
//                     <p className="text-sm text-gray-500 p-4 rounded-md border border-border bg-main">
//                       No images selected
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* video */}
//             <div className="flex flex-col  gap-2 w-full col-span-2 md:col-span-1 ">
//               <p className="text-border font-semibold text-sm ">Movie Video</p>

//               {MovieImages ? (
//                 <Uploader
//                   onFileUploaded={handleFileUploadedVideo}
//                   MainVideoSetter={setMovieVideo}
//                   prviewSetter={setPreviewVideo}
//                   For={Ffor}
//                 />
//               ) : (
//                 <div className="w-full col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-main border-border border-2 py-4 md:py-0 h-auto md:h-[207.5px] border-dashed rounded-md">
//                   <div className=" animate-pulse">
//                     <p className="w-full p-8  text-lg text-text  text-center">
//                       This Feild will only be active after adding Movie Image
//                     </p>
//                     <span className=" flex justify-center items-center mt-0 md:-mt-2  rounded-full ">
//                       <TbInfoSquareRoundedFilled className="w-10 h-10" />
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {/* PreviewVideo*/}
//               <div className=" w-full  relative col-span-2  flex justify-center items-center cursor-default ">
//                 <div className="flex gap-4 flex-wrap w-full">
//                   {MovieVideo.length > 0 ? (
//                     MovieVideo.map((mov, index) => (
//                       <p
//                         key={index}
//                         className=" w-full h-32 p-2 bg-main border border-border rounded flex items-center justify-center"
//                       >
//                         {mov.name}
//                       </p>
//                     ))
//                   ) : (
//                     <p>No Movie Selected</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Description And Category */}
//           <div>
//             <div className="w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start ">
//               {/* Description */}
//               <div className="w-full col-span-2 md:col-span-1">
//                 <label className="text-border font-semibold">
//                   Movie Description
//                 </label>
//                 <textarea
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-full h-44 mt-2 p-6 bg-main border border-border rounded"
//                   placeholder="Make it short and honest...."
//                   name=""
//                   id=""
//                 ></textarea>
//               </div>

//               {/* Category */}
//               <div className="w-full relative text-sm mt-6">
//                 <SelectRating data={categories} setter={setMovieCategory} />
//                 <div className="absolute top-[47%] cursor-pointer right-4 flex items-center  transform pointer-events-auto">
//                   {/* <FaArrowDown className="text-white h-6 w-6" /> */}
//                   <CgSelectR className="text-white h-4 w-4 " />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <button className="md:w-1/2 w-full  font-semibold flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main">
//             <HiPlusCircle className="pikin h-7 w-7" /> Add
//           </button>
//         </form>
//       </div>

//       {/* Add Casts */}
//       <div className="flex flex-col gap-5">
//         <h2 className="text-2xl font-bold ">Add Casts</h2>
//         <form className="flex flex-col gap-8 text-left" action="">
//           <div className="w-full grid md:grid-cols-2 gap-6">
//             <Input
//               label={"Full Name"}
//               placeholder={"Name"}
//               type={"text"}
//               bg={true}
//               setter={setname}
//               setInputVal={setInputVal}
//               mainVal={Name}
//               indicator={"Full Name"}
//               labelFor={"name"}
//             />
//             <Input
//               label={"Role"}
//               placeholder={"Movie role"}
//               type={"text"}
//               bg={true}
//               setter={setRole}
//               setInputVal={setInputVal}
//               mainVal={Role}
//               indicator={"Role"}
//               labelFor={"role"}
//             />
//           </div>

//           <div className="w-full grid md:grid-cols-1 gap-6 ">
//             {/* Images */}
//             <div className="flex flex-col gap-2 w-full col-span-2 md:col-span-1 ">
//               <p className="text-border font-semibold text-sm ">Movie Images</p>
//               <Uploader
//                 onFileUploaded={handleFileUploaded}
//                 For={"image"}
//                 prviewSetter={setpreviewImageC}
//                 MainImageSetter={setImages}
//               />
//             </div>
//           </div>
//           {/* Preview */}
//           <div className=" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 items-start cursor-default ">
//             <div className="flex gap-4 flex-wrap">
//               {Images.length > 0 ? (
//                 Images.map((image, index) => (
//                   <div
//                     key={index}
//                     className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center"
//                   >
//                     <img
//                       src={previewImageC}
//                       alt={`Uploaded Preview ${index + 1}`}
//                       className="object-cover w-full h-full rounded"
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-sm text-gray-500 p-4 rounded-md border border-border bg-main">
//                   No images selected
//                 </p>
//               )}
//             </div>

//             <div
//               className={`bg-main w-full border-2 border-border col-span-2 border-dashed rounded-md p-2 `}
//             >
//               {Casts.length > 0 ? (
//                 <div
//                   className={` ${
//                     Casts.length > 0
//                       ? "grid   grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 items-center p-2"
//                       : " flex justify-start items-center"
//                   } w-full `}
//                 >
//                   {Casts.map((cast, i) => (
//                     <div
//                       key={i}
//                       className="flex flex-col items-center justify-center"
//                     >
//                       <div className=" p-2 bg-main border border-border rounded ">
//                         <img
//                           src={
//                             cast.imageurl.length > 0
//                               ? URL.createObjectURL(cast.imageurl[0])
//                               : ""
//                           }
//                           alt={`${cast.name}'s Image`}
//                           className="w-32 h-32 object-cover rounded"
//                         />
//                       </div>
//                       <p>{cast.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="w-full flex justify-center items-center  ">
//                   <p className="text-text w-full text-center">No cast added</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="w-full flex justify-center gap-6">
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 // Additional functionality for Add button
//               }}
//               className="md:w-1/2 w-full  font-semibold flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main"
//             >
//               <HiPlusCircle className="pikin h-7 w-7" /> Add
//             </button>
//             <span
//               onClick={(e) => {
//                 e.preventDefault();
//                 AddCast(Name, Role, Images);
//                 // Additional functionality for Add button
//               }}
//               className="md:w-1/2 w-full  font-semibold flexRow py-3  rounded border-2 gap-2 Ogaa cursor-pointer transi  border-subMain bg-main text-white hover:bg-subMain"
//             >
//               <HiPlusCircle className="pikin h-7 w-7" /> Add Cast
//             </span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddMovie;
