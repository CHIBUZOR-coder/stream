import { useContext } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Context/MovieContext";
import MovieInfo from "../Components/SingleMovie/MovieInfo";
import MovieCasts from "../Components/SingleMovie/MovieCasts";

const SingleMovie = () => {
  const { id } = useParams();
  const { Casts, Movies } = useContext(MovieContext);
  console.log(id);

  const movie = Movies.find((movie) => movie.id === parseInt(id));
  console.log(movie);

  return (
    <div>
      <Layout>
        <MovieInfo movie={movie} />
        <div className="container mx-auto px-2 my-6 min-h-screen  ">
          <MovieCasts movieId={movie.id} />
        </div>
      </Layout>
    </div>
  );
};

export default SingleMovie;
