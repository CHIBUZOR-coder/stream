const Footer = () => {
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
        },
        {
          title: "Contact Us",
        },
        {
          title: "Movies",
        },
      ],
    },
    {
      title: "Top Cartegories",
      path: "",
      links: [
        {
          title: "Action",
        },
        {
          title: "Romance",
        },
        {
          title: "Dramma",
        },
        {
          title: "Historical",
        },
      ],
    },
    {
      title: "My Account",
      path: "",
      links: [
        {
          title: "Dashboard",
        },
        {
          title: "My Favourites",
        },
        {
          title: "Profile",
        },
        {
          title: "Change Password",
        },
      ],
    },
  ];
  return (
    <div className="bg-dry py-4  px-4 border-2 border-black w-full">
      <div className="flex  flex-wrap gap-4 md:gap-10  items-center w-full justify-between md:justify-center">
        {Links.map((link, index) => (
          <div key={index} className="flex flex-col justify-start  items-start my-2 md:my-0 footText gap-5 md:gap-6 w-[40%] md:w-[20%] ">
            <p className=" font-semibold">{link.title}</p>
            <div className="flex flex-col gap-4 justify-start items-start">
              {link.links.map((item, index) => (
                <p key={index} className="text-border transi hover:text-subMain cursor-pointer  ">
                  {item.title}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className=" flex flex-col justify-start items-center gap-5 md:gap-6 w-[40%] md:w-[24%] ">
          <div className="w-full flex justify-center items-center ">
            <div className="w-10 h-10   bg-[url('https://res.cloudinary.com/dtjgj2odu/image/upload/v1734517937/StreamLogo_ao5f75.png')] bg-center bg-cover"></div>
          </div>
          <div className="flex footText text-border flex-col gap-4 item-center">
            <p>lorem 198 Unity Road, Suit 200</p>
            <p> Ikeja, Lagos</p>
            <p>Tell: +234 907 463 9302</p>
            <p>Email: chibuzormekala@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
