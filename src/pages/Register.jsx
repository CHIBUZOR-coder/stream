import { FiLogIn } from "react-icons/fi";
import { Input } from "../Custom/Input";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MovieContext from "../Context/MovieContext";
import Uploader from "./DashBoard/Components/UpdateProfile/Uploader";
import { RiLoader2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { setInputVal, handleFileUploaded } = useContext(MovieContext);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [userImage, setUserImage] = useState([]);
  const [preview, setPreview] = useState(null);
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [Result, setResult] = useState();
  const [loadDisplay, setLoadDiaplay] = useState("");
  const navigate = useNavigate();

  const {
    issLoading,
    setIsLoading,
    Alert,
    visibleII,
    setVisibleII,
    visible,
    setVisible,
  } = useContext(MovieContext);
  const HandleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadDiaplay("Creating User...");

    const formData = new FormData();
    formData.append("name", Name);
    formData.append("userName", UserName);
    formData.append("email", Email);
    formData.append("phone", phone);
    formData.append("password", Password);
    formData.append("confirmpassword", ConfirmPassword);
    formData.append("image", userImage);

    try {
      const res = await fetch(
        "https://streambackend-nbbc.onrender.com/api/register",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        // Read as text to handle non-JSON responses
        console.error("Server error:", data.message);
        setResult(Alert(false, data.message));
        setIsLoading(false);
        return;
      }

      // Parse JSON only if the response is valid
      setResult(Alert(true, data.message));
      setIsLoading(false);

      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setPreview(null);
      setUserImage([]);
    } catch (error) {
      console.error("Error during registration:", error);
      setResult(
        Alert(false, "An unexpected error occurred. Please try again.")
      );
      setIsLoading(false);
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 7000);
    }
  };

  return (
    <Layout>
      <div className="mx-auto relative px-6  my-4 flexCol">
        <div
          className={` ${
            Result ? "Animate" : "hidden"
          } fixed Alert  left-0 w-full z-40 flex justify-center items-center `}
        >
          <div className=" bg-text text-dry w-1/2 rounded-md border-[3px] border-subMain flex justify-center items-center p-4">
            {Result && <p>{Result}</p>}
          </div>
          1
        </div>

        <div
          className={`${
            issLoading ? "" : "hidden"
          } absolute top-0 left-0 w-full h-full flex justify-center  bg-modal z-40`}
        >
          {issLoading && (
            <div className=" fixed top-[200px] h-24 w-1/2 rounded-md border-border text-white  flex flex-col justify-center items-center ">
              <RiLoader2Fill className="h-10 w-10 animate-spin" />
              <p className="font-semibold w-full text-center">{loadDisplay}</p>
              <p className="font-semibold">this will take about two minutes</p>
            </div>
          )}
        </div>

        <div className="p-4  md:w-[70%] lg:w-[40%] bg-dry  rounded-lg flexCol justify-center items-center border-2 border-border  ">
          <div className="rounded-full login_logo">
            <img
              src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1739151976/logoround_awixqx.png"
              alt="logo"
              className=" w-36 h-36 object-contain"
            />
          </div>

          <form className="flex flexCol gap-5 w-full">
            <Input
              label={"Full Name"}
              placeholder={"John Doe"}
              type={"text"}
              setter={setName}
              mainVal={Name}
              labelFor={"name"}
              setInputVal={setInputVal}
              indicator={"Full Name"}
              bg={true}
            />
            <Input
              label={"User Name"}
              placeholder={"Zoe"}
              type={"text"}
              setter={setName}
              mainVal={UserName}
              labelFor={"User Name"}
              setInputVal={setInputVal}
              indicator={"User Name"}
              bg={true}
            />

            <Input
              label={"Email"}
              placeholder={"Streamview@gmail.com"}
              type={"email"}
              setter={setEmail}
              setInputVal={setInputVal}
              mainVal={Email}
              bg={true}
              labelFor={"email"}
              indicator={"Email"}
            />

            {/* gg */}
            <Input
              label={"Phone"}
              placeholder={"O9074639302"}
              required={true}
              type={"text"}
              setter={setPhone}
              setInputVal={setInputVal}
              mainVal={phone}
              bg={true}
              labelFor={"phone"}
              indicator={"Phone"}
            />

            <Input
              label={"Password"}
              placeholder={"********"}
              type={visible === true ? "text" : "password"}
              setter={setPassword}
              setInputVal={setInputVal}
              mainVal={Password}
              bg={true}
              labelFor={"password"}
              indicator={"Password"}
            />

            <Input
              label={"Confirm Password"}
              placeholder={"********"}
              type={visibleII === true ? "text" : "password"}
              setter={setConfirmPassword}
              setInputVal={setInputVal}
              mainVal={ConfirmPassword}
              bg={true}
              labelFor={"confirmpassword"}
              indicator={"Confirm Password"}
            />

            <div className="">
              <Uploader
                onFileUploaded={handleFileUploaded}
                prviewSetter={setPreview}
                MainImageSetter={setUserImage}
                For={"image"}
              />
            </div>

            <div className=" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center cursor-default ">
              <div className="flex gap-4 flex-wrap">
                {userImage.path ? (
                  <div className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center">
                    <img
                      src={preview}
                      alt={`Uploaded Preview ${userImage}`}
                      className="object-cover w-full h-full rounded"
                    />
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 p-4 rounded-md border border-border bg-main">
                    No images added
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={(e) => HandleRegister(e)}
              className="bg-subMain transi hover:bg-main flexRow gap-4 text-white p-4 rounded-lg w-full "
            >
              <FiLogIn /> Signup
            </button>
            <p className="text-center text-border">
              Already have an account?
              <Link
                to="/login"
                className="text-dryGray transi hover:text-subMain font-semibold"
              >
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
