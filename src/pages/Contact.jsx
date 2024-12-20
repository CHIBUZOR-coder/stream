import { FiMail, FiMap, FiMapPin, FiPhone } from "react-icons/fi";
import Layout from "../Layout/Layout";
import Head from "../Components/About/Head";

const Contact = () => {
  const contactData = [
    {
      id: 1,
      tittle: "Email Us",
      info: "Make your suggestions and  contributions to the growth of Stream",
      icon: <FiMail />,
      contact: "info@stream.com",
    },
    {
      id: 2,
      tittle: "Call Us",
      info: "Get in touch with us for enquires and issues",
      icon: <FiPhone />,
      contact: "+234 815 711 8184",
    },
    {
      id: 3,
      tittle: "Location",
      info: "Unity Road Ikeja",
      icon: <FiMapPin />,
      contact: "",
    },
  ];
  return (
    <Layout>
      <div className=" px-2 my-6">
        <Head tittle={"Contact Us"} />
        <div className="grid md:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8">
          {/* <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to Stream
              </h3>
              <div className="mt-3 text-sm leading-8 text-text  ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  pariatur tempore, nam harum eaque expedita, aliquid vero
                  repellat ex laborum aspernatur rem adipisci saepe! Error
                  placeat itaque ea laudantium deleniti? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Laudantium saepe esse
                  minima eaque dolor nostrum obcaecati veritatis animi sed.
                  Soluta!
                </p>
              </div>
            </div>
          </div> */}

          {contactData.map((data) => (
            <div
              key={data.id}
              className="border border-border flex flex-col justify-center items-center p-10 gap-2 bg-dry rounded-lg text-center "
            >
              <span className=" flex flex-col justify-center h-10 w-10 items-center rounded-full bg-main text-subMain text-2xl ">
                {data.icon}
              </span>
              <h5 className="text-xl font-semibold mb-2">{data.tittle}</h5>
              <p className="mb-0 text-sm text-text leading-7  ">
                <a className="text-blue-600" href={`mailto:${data.contact}`}>
                  {data.contact}
                </a>
              </p>
              {data.info}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
