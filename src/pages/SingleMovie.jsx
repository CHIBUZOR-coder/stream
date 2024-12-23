import { useContext } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Context/MovieContext";
import MovieInfo from "../Components/SingleMovie/MovieInfo";
import MovieCasts from "../Components/SingleMovie/MovieCasts";

const SingleMovie = () => {
  const { id } = useParams();
  const { Movies } = useContext(MovieContext);
  console.log(id);

  const movie = Movies.find((movie) => movie.id === parseInt(id));
  console.log(movie);
  return (
    <div>
      <Layout>
        <MovieInfo movie={movie} />
        <div className="container mx-auto px-2 my-6 min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MovieCasts />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SingleMovie;
