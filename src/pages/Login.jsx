import Layout from "../Layout/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="mx-auto relative px-2 my-4 flexCol ">
        <div className="p-4  md:min-w-1/4  rounded-lg flex justify-center items-center  ">
          <div className="rounded-full border-2 border-border  login_logo">
            <img
              src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1734517937/StreamLogo_ao5f75.png"
              alt="logo"
              className=" w-36 h-36 object-contain"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
