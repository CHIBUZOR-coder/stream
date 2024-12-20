const Head = ({tittle}) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('./images/about.jpg')`,
        }}
        className="bg-deepGray lg:h-64 relative overflow-hidden h-40 rounded-md w-full"
      >
        <div className="w-full h-full bg-drkb">
          <div className="absolute   w-full lg:top-24 top-16 flex flex-col">
            <h1 className="text-2xl  lg:text-h1 text-white text-center font-bold">
             {tittle}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
