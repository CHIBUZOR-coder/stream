import { useContext, useState } from "react";
import { Input } from "../../../../Custom/Input";
import Uploader from "../UpdateProfile/Uploader";
import MovieContext from "../../../../Context/MovieContext";

const UpdateProfile = () => {
  const { setInputVal, handleFileUploaded } = useContext(MovieContext);
  const [previewImage, setpreviewImage] = useState([]);
  const [profileImages, setProfileImages] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  return (
    <div className=" w-full rounded-md ">
      <div className=" p-4 flex flex-col gap-6 text-white bg-dry border border-gray-800 rounded-md">
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
            {profileImages.length > 0 ? (
              profileImages.map((image, index) => (
                <div
                  key={index}
                  className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center"
                >
                  <img
                    src={previewImage}
                    alt={`Uploaded Preview ${previewImage}`}
                    className="object-cover w-full h-full rounded"
                  />
                </div>
              ))
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
        />

        <Input
          label={"Email"}
          placeholder={"Streamview@gmail.com"}
          type={"email"}
          setter={setEmail}
          setInputVal={setInputVal}
          mainVal={Email}
        />

        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center">
          <button className="bg-subMain font-medium transi hover:bg-main  gap-4 text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto ">
            Delete Account
          </button>
          <button className="bg-main font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto ">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
