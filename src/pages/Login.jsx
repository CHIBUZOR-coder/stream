import { FiLogIn } from "react-icons/fi";
import { Input } from "../Custom/Input";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const Login = () => {
  const HandleSelect = () => {};
  return (
    <Layout>
      <div className="mx-auto relative px-6 my-14 md:my-20 flexCol ">
        <div className="p-6 md:p-4  md:w-[40%] bg-dry  rounded-lg flexCol justify-center items-center border-2 border-border  ">
          <div className="rounded-full   login_logo">
            <img
              src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1734517937/StreamLogo_ao5f75.png"
              alt="logo"
              className=" w-32 h-32 object-contain"
            />
          </div>

          <form className="flex flexCol gap-5 w-full">
            <Input
              label={"Email"}
              placeholder={"Streamview@gmail.com"}
              type={"email"}
            />

            <Input
              label={"Password"}
              placeholder={"********"}
              type={"password"}
            />

            <button className="bg-subMain transi hover:bg-main flexRow gap-4 text-white p-4 rounded-lg w-full ">
              <FiLogIn /> Login
            </button>
            <p className="text-center text-border">
              Don't have an account?
              <Link
                to="/stream/register"
                className="text-dryGray transi hover:text-blue-400 font-semibold"
              >
                {" "}
                Signin
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
