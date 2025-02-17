import { FiLogIn } from "react-icons/fi";
import { Input } from "../Custom/Input";
import Layout from "../Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MovieContext from "../Context/MovieContext";
import { RiLoader2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const { setInputVal } = useContext(MovieContext);
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Password, setPassword] = useState("");
  const [Result, setResult] = useState();
  const [loadDisplay, setLoadDiaplay] = useState("");
  const navigate = useNavigate();
  const { issLoading, setIsLoading, Alert, GetUser } = useContext(MovieContext);
  const { token } = useParams();
  const HandleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadDiaplay("Updating  password...");

    try {
      const res = await fetch(`http://localhost:5000/resetPassword/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          newPassword: Password,
          confirmPassword: ConfirmPassword,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        setResult(Alert(false, data.message));
        console.log(data);
      } else {
        setResult(Alert(true, data.message));
        setIsLoading(false);
      }

      console.log(data);

      if (data.success === true) {
        localStorage.setItem("IsLogin", true);
        setTimeout(() => {
          navigate("/login");
        }, 3200);
      }
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error.message);
      setResult(Alert(false, error.message));
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 3000);
    }
  };

  useEffect(() => {
    console.log("pass", Password);
    console.log("Confirmpass", ConfirmPassword);
  }, [Password, ConfirmPassword]);

  useEffect(() => {
    console.log("result:", Result);
  }, [Result]);

  return (
    <Layout>
      <div className="mx-auto relative px-6 pb-4   flexCol ">
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
        <div className="p-6 md:p-4 md:w-[70%]  lg:w-[40%] bg-dry  rounded-lg flexCol justify-center items-center border-2 border-border my-auto md:my-9 ">
          <div className="rounded-full   login_logo">
            <img
              src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1739151976/logoround_awixqx.png"
              alt="logo"
              className=" w-36 h-36 object-contain"
            />
          </div>

          <form
            onSubmit={(e) => {
              HandleResetPassword(e);
            }}
            className="flex flexCol gap-5 w-full "
          >
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

            <Input
              label={"confirmPassword"}
              placeholder={"Streamview@gmail.com"}
              type={"password"}
              setter={setConfirmPassword}
              setInputVal={setInputVal}
              mainVal={ConfirmPassword}
              bg={true}
              indicator={"ConfirmPassword"}
            />

            <button className="bg-subMain transi hover:bg-main flexRow gap-4 text-white p-4 rounded-lg w-full ">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
