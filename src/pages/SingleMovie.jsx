import { useContext } from "react";
import Layout from "../Layout/Layout";
import { Link, useParams } from "react-router-dom";
import MovieContext from "../Context/MovieContext";
import MovieInfo from "../Components/SingleMovie/MovieInfo";
import MovieCasts from "../Components/SingleMovie/MovieCasts";
import MovieRates from "../Components/SingleMovie/MovieRates";
import { BsCollectionFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const SingleMovie = () => {
  const { id } = useParams();
  const { Casts, Movies } = useContext(MovieContext);
  console.log(id);

  const movie = Movies.find((movie) => movie.id === parseInt(id));
  console.log(movie);
  const relatedMovies = Movies.filter(
    (movi) => movi.category === movie.category
  );

  return (
    <div>
      <Layout>
        <MovieInfo movie={movie} />
        <div className="container mx-auto px-2 my-6 min-h-screen  ">
          <MovieCasts movieId={movie.id} />

          <MovieRates movie={movie} />

          <div className="my-16">
            <div className="flex items-center gap-8 md:gap-4">
              <BsCollectionFill className="w-6 h-6 md:w-4 md:h-4 text-subMain" />
              <h2 className="sm:text-xl font-bold text-lg">Related Movies</h2>
            </div>

            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 gap-6">
              {relatedMovies.map((movie, index) => (
                <Link
                  to={`/stream/movie/${movie.id}`}
                  key={`${movie.id}`}
                  className="border h-64 border-border rounded bg-center bg-cover transi hover:scale-95 w-full relative"
                  style={{
                    backgroundImage: `url('../images/${movie.image}.jpg')`,
                  }}
                >
                  <div className="absolute flex  justify-between items-center left-0 bottom-0 bg-main2 w-full text-white px-4 py-3">
                    <h3 className="font-semibold truncate">{movie.name}</h3>
                    <button className="h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white ">
                      <FaHeart />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SingleMovie;
