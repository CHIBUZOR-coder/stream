const MovieInfo = ({ movie }) => {
  return (
    <div
      loading="lazy"
      className="bg-center w-full xl:h-screen  bg-cover relative overflow-hidden rounded"
      style={{
        backgroundImage: `url('../images/${movie.image}.jpg')`,
      }}
    >
      <div className="xl:bg-main2 bg-dry flex flex-col xl:absolute top-0 left-0 right-0 butto-0 "></div>
    </div>
  );
};

export default MovieInfo;
