import { useContext, useEffect, useState } from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { CgSelectR } from "react-icons/cg";
import Star from "../Home/Star";
import { userData } from "../../Data/UserData";
import SelectRating from "../../Custom/SelectRating";
import MovieContext from "../../Context/MovieContext";

const MovieRates = ({ movie }) => {
  const { HandleGetMovies, FetchedMovies, setRatings } =
    useContext(MovieContext);
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");
  const [starUsers, setStarUser] = useState([]);
  const [Bounce, setBounce] = useState(false);
  const [canReview, setCanReview] = useState(true);
  const [toggleRevie, setToggleReview] = useState(false);
  const [reviews, setReviews] = useState();
  const [bgColor, setBgColor] = useState();
  const User = JSON.parse(localStorage.getItem("userInfo"));

  // const HandleGetReviews = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://streambackend-nbbc.onrender.com/getReviews",
  //       {
  //         method: "GET",
  //       }
  //     );

  //     const data = await res.json();
  //     if (!res.ok) {
  //       console.log(data);
  //     } else {
  //       setReviews(data.data);
  //       console.log(data);
  //     }
  //   } catch (error) {}
  // };
  // useEffect(() => {
  //   console.log("reviews:", reviews);
  // }, [reviews]);

  const HandleReview = async (e) => {
    e.preventDefault();
    if (!User) {
      setCanReview(false);
      setToggleReview(true);
      setTimeout(() => {
        setToggleReview(false);
      }, 4000);
      return;
    }

    const movieId = movie && movie.id;
    console.log("movieId", movieId);
    const userRating = rating && Number(rating);

    console.log("userRating", userRating);
    const userReview = review && review;
    console.log("userReview", userReview);
    const userId = User && User.id;
    console.log("userId", userId);

    const res = await fetch("https://streambackend-nbbc.onrender.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, movieId, userRating, userReview }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data);
    }
    HandleGetMovies();

    console.log(data);
    setReview("");
  };

  useEffect(() => {
    console.log(movie);
    if (movie) {
      setStarUser(movie.movieReviews);
    }
  }, [movie]);

  useEffect(() => {
    console.log("StarUse", starUsers);
  }, [starUsers]);

  // useEffect(() => {
  //   console.log("rating", rating);
  // }, [rating]);
  const Ratings = [
    {
      tittle: "0 - poor",
      value: 0,
    },
    {
      tittle: "1 - fair",
      value: 1,
    },
    {
      tittle: "2 - Good",
      value: 2,
    },
    {
      tittle: "3 - Verty - Good",
      value: 3,
    },
    {
      tittle: " 4 - Excellent",
      value: 4,
    },
    {
      tittle: "5 - Masterpiece",
      value: 5,
    },
  ];

  useEffect(() => {
    // Generate a random background color on mountt
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  }, []);
  return (
    <div className="my-12">
      <div className="flex items-center gap-8 md:gap-4">
        <BsBookmarkStarFill className="w-6 h-6 md:w-4 md:h-4 text-subMain" />
        <h2 className="sm:text-xl font-bold text-lg">Reviews</h2>
      </div>

      <div className="mt-10 flexCol xl:grid  grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-4 sm:p-20 rounded">
        {/* Write review */}
        <div className="xl:col-span-2 w-full flex flex-col gap-8 write relative">
          <p className="text-xl text-text font-semibold">
            Review {movie?.name}
          </p>
          <p className="text-sm leading-7 font-medium text-border">
            Write a review for this movie. It will be Posted on this page. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
            placeat perspiciatis quisquam enim quibusdam ipsa sed, consequatur
            minima natus sapiente.
          </p>

          <form className="text-sm w-full">
            <div className="relative">
              <div
                className={`${
                  toggleRevie ? "" : "hidden"
                } absolute top-3 w-full rev  py-10 z-50  px-4 bg-main rounded-md  justify-center  border border-border `}
              >
                {canReview ? (
                  ""
                ) : (
                  <p className="text-sm leading-7 z-50 font-medium text-text">
                    ⚠️You need to be logged in to review a movie.
                  </p>
                )}
              </div>
              <label className="text-border font-semibold">Select Rating</label>
              <div className="relative ">
                {/* <select
                  className="w-full mt-2 px-3 py-4 text-text bg-main border border-border rounded appearance-none"
                  id=""
                  onChange={(e) => setRating(e.target.value)}
                >
                  {Ratings.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.tittle}
                    </option>
                  ))}
                </select> */}

                <SelectRating data={Ratings} setter={setRating} For={"movie"} />
                {/* Custom Arrow */}
                <div className="absolute top-[47%] cursor-pointer right-4 flex items-center  transform pointer-events-auto">
                  {/* <FaArrowDown className="text-white h-6 w-6" /> */}
                  <CgSelectR className="text-white h-4 w-4 " />
                </div>
              </div>
              <div className="flex my-2  gap-2 text-star ">
                <Star value={rating} />
              </div>
            </div>

            <div className="w-full">
              <label className="text-border font-semibold">Message</label>
              <textarea
                onChange={(e) => setReview(e.target.value)}
                className="w-full h-40 mt-2 p-6 bg-main border border-border rounded"
                placeholder="Make it short and honest...."
                name=""
                id=""
              ></textarea>

              <button
                onClick={(e) => {
                  HandleReview(e);

                  setBounce(true);
                  setTimeout(() => {
                    setBounce(false);
                  }, 200);
                }}
                className={`bg-subMain ${
                  Bounce ? "scale-110" : ""
                } text-white hover:bg-red-800 transi py-3 px-4 w-full flexCol rounded`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Review */}
        <div className="col-span-3 flex flex-col gap-6 w-full md:w-auto p-4 md:p-0">
          <p className="text-xl text-text font-semibold">
            Reviews {starUsers && starUsers.length}
          </p>
          <div
            className={`w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-0   max-h-[460px] md:max-h-[550px] overflow-y-scroll `}
          >
            {starUsers && starUsers.length > 0 ? (
              <>
                {starUsers &&
                  starUsers.map((user, i) => (
                    <div
                      key={i}
                      className="md:grid   flex flex-col w-full grid-cols-12 gap-5  bg-dry p-4 border border-x-gray-800  rounded-lg"
                    >
                      <div
                        style={{
                          backgroundColor: user?.user?.image
                            ? "transparent"
                            : bgColor,
                        }}
                        className="col-span-2 flex justify-center items-center text-2xl font-semibold rounded-lg  text-white"
                      >
                        {user?.user?.image ? (
                          <img
                            className="w-full h-full  object-cover"
                            src={`${user?.user?.image}`}
                            alt=""
                          />
                        ) : (
                          user?.user?.name.charAt(0).toUpperCase()
                        )}
                      </div>
                      <div className="col-span-7 flex flex-col gap-2">
                        <p>{user?.user?.name}</p>
                        <p className="text-xs leading-6 font-medium text-text">
                          {user?.userReview}
                        </p>
                        {/* rates */}
                      </div>
                      <div className="col-span-3 flexRow  border-l border-border text-xs gap-1 text-star">
                        <div className="flex my-2  gap-2 text-star ">
                          {console.log("use:", user?.userRating)}

                          <Star value={user?.userRating} />
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <div className=" flex flex-col w-full grid-cols-12 gap-5  bg-dry p-4 border border-x-gray-800  rounded-lg">
                <p className="font-semibold text-white">No user review</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRates;
