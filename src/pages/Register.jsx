import { FiLogIn } from "react-icons/fi";
import { Input } from "../Custom/Input";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MovieContext from "../Context/MovieContext";
import Uploader from "./DashBoard/Components/UpdateProfile/Uploader";

const Register = () => {
  const { setInputVal, handleFileUploaded } = useContext(MovieContext);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [userImage, setUserImage] = useState([]);
  const [preview, setPreview] = useState(null);
  const [Name, setName] = useState("");
  const [phone, setPhone] = useState("")
  return (
    <Layout>
      <div className="mx-auto relative px-2 my-4 flexCol ">
        <div className="p-4  md:w-[70%] lg:w-[40%] bg-dry  rounded-lg flexCol justify-center items-center border-2 border-border  ">
          <div className="rounded-full login_logo">
            <img
              src="https://res.cloudinary.com/dtjgj2odu/image/upload/v1734517937/StreamLogo_ao5f75.png"
              alt="logo"
              className=" w-32 h-32 object-contain"
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
            <Input
              label={"Phone"}
              placeholder={"+1 234 567 890"}
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
              type={"password"}
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
              type={"password"}
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
            <button className="bg-subMain transi hover:bg-main flexRow gap-4 text-white p-4 rounded-lg w-full ">
              <FiLogIn /> Signup
            </button>
            <p className="text-center text-border">
              Already have an account?
              <Link
                to="/stream/login"
                className="text-dryGray transi hover:text-blue-400 font-semibold"
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
