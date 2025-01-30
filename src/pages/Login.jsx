import { FiLogIn } from "react-icons/fi";
import { Input } from "../Custom/Input";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MovieContext from "../Context/MovieContext";
import { RiLoader2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setInputVal } = useContext(MovieContext);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Result, setResult] = useState();
  const [loadDisplay, setLoadDiaplay] = useState("");
  const navigate = useNavigate();
  const { issLoading, setIsLoading, Alert, GetUser } = useContext(MovieContext);

  const logAgain = localStorage.getItem("relogin") || null;
  const InactiveLogout = localStorage.getItem("InactiveLogout") || null;
  useEffect(() => {
    if (InactiveLogout === "true") {
      setResult(
        Alert(
          false,
          "You have been logged out due to inactivity. Please login again"
        )
      );
      setTimeout(() => {
        setResult(null);
        localStorage.removeItem("InactiveLogout");
      }, 6000);
    } else if (logAgain === "true") {
      setResult(Alert(false, "Your session has expired. Please login again"));
      setTimeout(() => {
        setResult(null);
        localStorage.removeItem("relogin");
      }, 6000);
    } else {
      console.log("no action");
    }
  }, []);

  const HandleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadDiaplay("Logging in...");

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        setResult(Alert(false, data.message));
        console.log(data);
      }

      setIsLoading(false);
      setResult(Alert(true, data.message));
      console.log(data);

      localStorage.setItem("UserInfo", JSON.stringify(data));
      localStorage.setItem("IsLogin", true);

      if (data.success === true) {
        localStorage.setItem("IsLogin", true);
        setTimeout(() => {
          navigate("/stream/");
        }, 100);
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
      setResult(Alert(false, error.message));
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 2000);
    }
  };

  useEffect(() => {
    console.log("email", Email);
  }, [Email]);

  useEffect(() => {
    console.log("pass", Password);
  }, [Password]);

  useEffect(() => {
    console.log("result:", Result);
  }, [Result]);

  return (
    <Layout>
      <div className="mx-auto relative px-6  md:my-20 flexCol ">
        <div
          className={` ${
            Result ? "Animate" : "hidden"
          } fixed Alert  left-0 w-full z-40 flex justify-center items-center `}
        >
          <div className=" bg-text text-dry w-1/2 rounded-md border-[3px] border-subMain flex justify-center items-center p-4">
            {Result && <p>{Result}</p>}
          </div>
        </div>

        <div
          className={`${
            issLoading ? "" : "hidden"
          } absolute top-0 left-0 w-full h-full flex justify-center  bg-modal z-40`}
        >
          {issLoading && (
            <div className=" fixed top-[200px] h-24 w-1/2 rounded-md border-border text-white  flex flex-col justify-center items-center ">
              <RiLoader2Fill className="h-10 w-10 animate-spin" />
              <p className="font-semibold">{loadDisplay}</p>
              {/* <p className="font-semibold">this will take about two minutes</p> */}
            </div>
          )}
        </div>
        <div className="p-6 md:p-4 md:w-[70%]  lg:w-[40%] bg-dry  rounded-lg flexCol justify-center items-center border-2 border-border  ">
          <div className="rounded-full   login_logo">
            <img
              src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1734517937/StreamLogo_ao5f75.png"
              alt="logo"
              className=" w-28 h-28 object-contain"
            />
          </div>

          <form className="flex flexCol gap-5 w-full">
            <Input
              label={"Email"}
              placeholder={"Streamview@gmail.com"}
              type={"email"}
              setter={setEmail}
              setInputVal={setInputVal}
              mainVal={Email}
              bg={true}
              indicator={"Email"}
            />

            <Input
              label={"Password"}
              placeholder={"********"}
              type={"password"}
              setter={setPassword}
              setInputVal={setInputVal}
              mainVal={Password}
              bg={true}
              indicator={"password"}
            />

            <button
              onClick={(e) => HandleLogin(e)}
              className="bg-subMain transi hover:bg-main flexRow gap-4 text-white p-4 rounded-lg w-full "
            >
              <FiLogIn /> Login
            </button>
            <p className="text-center text-border">
              Don't have an account?
              <Link
                to="/stream/register"
                className="text-dryGray transi hover:text-subMain font-semibold"
              >
                {" "}
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
