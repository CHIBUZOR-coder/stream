import { useContext, useState } from "react";
import { Input } from "../../../../Custom/Input";
import Uploader from "../UpdateProfile/Uploader";
import MovieContext from "../../../../Context/MovieContext";

const UpdateProfile = () => {
  const { setInputVal, handleFileUploaded } = useContext(MovieContext);
  const [previewImage, setpreviewImage] = useState();
  const [profileImages, setProfileImages] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [changeEmail, setChangeEmail] = useState(false);
  const [NewEmail, setNewEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Result, setResult] = useState();

  const {
    issLoading,
    setIsLoading,
    Alert,
    HandleGetUser,
    IdUpdate,
  
  } = useContext(MovieContext);



  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const HandleUpdateProfile = async (e) => {
    e.preventDefault();

    setTimeout(() => {
      setResult(null);
    }, 2000);

    const formData = new FormData();

    formData.append("name", Name);
    formData.append("Id", userInfo.id);
    formData.append("image", profileImages || null);
    formData.append("newEmail", NewEmail);
    formData.append("password", Password);

    // formData.append("email", Email);

    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:5000/updateProfile", {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      console.log("Getting updated details");
      // HandleGetUser(IdUpdate);
      setResult(Alert(true, data.message));
    } catch (error) {
      setResult(Alert(false, error.message || "Unexpected error occurred."));
    } finally {
      setIsLoading(false);
      setTimeout(() => setResult(null), 2000);
    }
  };

  return (
    <div className=" w-full rounded-md relative">
      <div
        className={` ${
          Result ? "Animate" : "hidden"
        } fixed Alert  left-0 w-full z-40 flex justify-center items-center `}
      >
        <div className=" bg-text text-dry w-1/2 rounded-md border-[3px] border-subMain flex justify-center items-center p-4">
          {Result && <p>{Result}</p>}
        </div>
      </div>
      <div className=" p-4 flex flex-col gap-9 text-white bg-dry border border-gray-800 rounded-md">
        <p className="text-xl font-bold">Profile</p>

        <Uploader
          onFileUploaded={handleFileUploaded}
          prviewSetter={setpreviewImage}
          MainImageSetter={setProfileImages}
          For={"image"}
        />
        {/* PreviewImage */}
        <div className=" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
          <div className="flex gap-4 flex-wrap">
            {profileImages.path ? (
              <div className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center">
                <img
                  src={previewImage}
                  alt={`Uploaded Preview ${previewImage}`}
                  className="object-cover w-full h-full rounded"
                />
              </div>
            ) : (
              <p className="text-sm text-gray-500 p-4 rounded-md border border-border bg-main">
                No images selected
              </p>
            )}
          </div>
        </div>
        <Input
          label={"Full Name"}
          placeholder={"John Doe"}
          type={"text"}
          setter={setName}
          setInputVal={setInputVal}
          mainVal={Name}
          indicator={"Full Name"}
          labelFor={"name"}
        />

        <div>
          <p>Do you wish to change your email?</p>
          <div className="flex justify-start items-center gap-7">
            <label>
              <input
                onClick={() => {
                  setChangeEmail(true);
                }}
                type="radio"
                name="option"
                value="option1"
              ></input>
              Yes
            </label>

            <label>
              <input
                onClick={() => setChangeEmail(false)}
                type="radio"
                name="option"
                value="option2"
              ></input>
              No
            </label>
          </div>
        </div>

        <Input
          label={"Password"}
          placeholder={"Enter password"}
          type={"password"}
          setter={setPassword}
          setInputVal={setInputVal}
          mainVal={Password}
          labelFor={"password"}
          indicator={"password"}
        />
        <div>
          {changeEmail ? (
            <Input
              label={"New Email"}
              placeholder={"NewEmail@gmail.com"}
              type={"email"}
              setter={setNewEmail}
              setInputVal={setInputVal}
              mainVal={NewEmail}
              labelFor={"newEmail"}
              indicator={"New Email"}
            />
          ) : (
            ""
          )}
        </div>

        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center">
          <button className="bg-subMain font-medium transi hover:bg-main  gap-4 text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto ">
            Delete Account
          </button>
          <button
            onClick={(e) => {
              HandleUpdateProfile(e);
            }}
            className="bg-main font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
