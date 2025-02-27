import { Link } from "react-router-dom";

const Footer = () => {
  const User = JSON.parse(localStorage.getItem("userInfo"));
  let dash;
  let fav;
  if (!User) {
    // console.log("No user info yet");
    dash = "/login";
  } else {
    dash =
      User.role === "ADMIN"
        ? `/dash/ad/${User.name}`
        : User.role === "USER"
        ? `/dash/us/${User.name}`
        : "NOT";

    fav = `/favouritpage/${User.name}`;
  }

  const action = "Action";
  const Links = [
    {
      title: "Company",
      path: "",
      links: [
        {
          title: "Home",
        },
        {
          title: "About Us",
          path: "about",
        },
        {
          title: "Contact Us",
          path: "contact",
        },
      ],
    },
    {
      title: "Top Cartegories",
      path: "",
      links: [
        {
          title: "Action",
          path: "action",
        },
        {
          title: "Romance",
          path: "romance",
        },
        {
          title: "Dramma",
          path: "dramma",
        },
        {
          title: "tech",
          path: "tech",
        },
      ],
    },
  ];
  return (
    <div className="bg-dry py-24 md:py-32 px-4 border-2 border-black w-full">
      <div className="md:flex grid grid-cols-2 justify-between  items-start w-full  gap-10 text-[10px] litlle md:text-[16px] ">
        {Links.map((link, index) => (
          <div
            key={index}
            className="flex flex-col justify-start   items-start my-2 md:my-0 footText gap-5 md:gap-6 "
          >
            <p className=" font-semibold">{link.title}</p>

            <div className="flex flex-col gap-4 justify-start items-start w-full md:w-auto">
              {link.links.map((item, index) => (
                <Link
                  to={item.path ? `/${item.path}` : "/"}
                  key={index}
                  className="text-border transi hover:text-subMain cursor-pointer  "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" flex justify-center items-center "
        >
          <div className=" w-28 h-28 md:w-48 md:h-48   bg-[url('https://res.cloudinary.com/dtjgj2odu/image/upload/v1739151976/logoround_awixqx.png')] bg-center bg-cover"></div>
        </Link>
        <div className=" flex flex-col justify-start items-center gap-5 md:gap-6    ">
          <div className="flex w-full footText text-border flex-col  gap-4 item-center">
            <p>198 Unity Road, </p>

            <p> Suit 200 Ikeja, Lagos</p>
            <p>Tell: +234 907 463 9302</p>
            <p>Email: chibuzormekala@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
