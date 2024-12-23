import { useContext } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Context/MovieContext";
import MovieInfo from "../Components/SingleMovie/MovieInfo";

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
      </Layout>
    </div>
  );
};

export default SingleMovie;
