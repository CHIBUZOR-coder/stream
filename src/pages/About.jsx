import Head from "../Components/About/Head";
import Layout from "../Layout/Layout";

const About = () => {
  return (
    <div>
      <Layout>
        <div className=" px-2 my-6">
          <Head />

          <div className="xl:py-20 py-10 px-4 ">
            <div className="grid grid-flow-row xl:grid-cols-2 gap-16 items-center  ">
              <div>
                <h3 className="text-xl my-4 lg:text-3xl  font-semibold">
                  Welcome to Straem
                </h3>
                <div className="text-sm leading-8 text-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione tempora doloremque tenetur aut amet optio odio iure
                    molestiae quae nulla, officiis voluptatem. Maiores
                    voluptatibus quos molestias ad alias numquam explicabo
                    laborum deserunt adipisci maxime. Error laudantium
                    perspiciatis quasi officiis
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione tempora doloremque tenetur aut amet optio odio iure
                    molestiae quae nulla, officiis voluptatem. Maiores
                    voluptatibus quos molestias ad alias numquam explicabo
                    laborum deserunt adipisci maxime. Error laudantium
                    perspiciatis quasi officiis accusantium?
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-8 bg-dry rounded-lg ">
                    <span className="text-3xl block font-extrabold ">10k</span>
                    <h4 className="text-lg font-semibold my-2 ">
                      Listed Movies
                    </h4>
                    <p className="mb0 text-text leading-7 text-sm ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="p-8 bg-dry rounded-lg ">
                    <span className="text-3xl block font-extrabold ">8k</span>
                    <h4 className="text-lg font-semibold my-2 ">
                   Users
                    </h4>
                    <p className="mb0 text-text leading-7 text-sm ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>


              <div style={{backgroundImage:"url('./images/marvel.jpg')"}} className=" xl:block mt-10 lg:mt-0 bg-cover bg-center hidden h-[32rem] ">

              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
