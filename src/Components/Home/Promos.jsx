import { FiUser } from "react-icons/fi";

const Promos = () => {
  return (
    <div className="w-full my-20 py-10 md:px-[3.4rem] px-2 bg-dry">
      <div className="md:grid md:grid-cols-2 md:gap-10  items-center">
        <div className="flex lg:gap-10 gap-6 flex-col    ">
          <h1 className="xl-text-3xl text-xl capitalize font-sans font-medium xl:leading-loose">
            Download Movies & Watch Offline On Mobile
          </h1>
          <p className="text-text text-sm  xl:text-base leading-6 xl:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in
            laudantium culpa corporis nostrum laboriosam vitae consectetur nisi
            dicta totam? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit.
          </p>

          <div className="flex gap-4 md:text-lg text-sm">
            <div className="flex-col bg-black text-subMain px-5 py-3 rounded-md font-bold">
              HD 4K
            </div>
            <div className=" flexRow gap-4 bg-black text-subMain px-5 py-3 rounded-md font-bold">
              <FiUser /> 2K
            </div>
          </div>
        </div>

        <div
          className=" bg-center bg-cover rounded md:my-0 my-8 w-full h-96 "
          style={{
            backgroundImage: "url('./images/phone2.jpg')",
          }}
        >
       
        </div>
      </div>
    </div>
  );
};

export default Promos;
