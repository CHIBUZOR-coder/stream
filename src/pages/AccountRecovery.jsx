import { FiLogIn } from "react-icons/fi";
import { Input } from "../Custom/Input";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MovieContext from "../Context/MovieContext";
import { RiLoader2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const AccountRecovery = () => {
  const { setInputVal } = useContext(MovieContext);
  const [Email, setEmail] = useState("");

  const [Result, setResult] = useState();
  const [loadDisplay, setLoadDiaplay] = useState("");
  const navigate = useNavigate();
  const { issLoading, setIsLoading, Alert } = useContext(MovieContext);

  const HandleAccountRecovery = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadDiaplay("Sending recovery link to your mail...");

    try {
      const res = await fetch(
        "https://streambackend-v5u9.onrender.com/accountRecovery",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: Email,
          }),
        }
      );
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
      setEmail("");
    } catch (error) {
      console.log(error.message);
      setResult(Alert(false, error.message));
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 4000);
    }
  };

  useEffect(() => {
    console.log("email", Email);
  }, [Email]);

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
              HandleAccountRecovery(e);
            }}
            className="flex flexCol gap-5 w-full "
          >
            <Input
              label={"Email"}
              placeholder={"Streamview@gmail.com"}
              type={"email"}
              setter={setEmail}
              setInputVal={setInputVal}
              mainVal={Email}
              bg={true}
              indicator={"Email_Recovery:"}
            />

            <button className="bg-subMain transi hover:bg-main flexRow gap-4 text-white p-4 rounded-lg w-full ">
              <FiLogIn /> Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AccountRecovery;
