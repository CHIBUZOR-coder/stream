import { Input } from "../../Custom/Input";
import SideBar from "./Components/Profile/SideBar";
import Uploader from "./Components/Profile/Uploader";

const Profile = () => {
  return (
    <div className="flex md:flex-row flex-col min-h-screen bg-main py-3 px-4 gap-10 md:gap-8 md:px-10 ">
      <div className=" w-full md:w-[25%] relative">
        <SideBar />
      </div>

      <div className=" w-full md:w-[75%] rounded-md ">
        <div className=" p-4 flex flex-col gap-6 text-white bg-dry border border-gray-800 rounded-md">
          <p className="text-xl font-bold">Profile</p>

          <Uploader />
          <Input label={"Full Name"} placeholder={"John Doe"} type={"text"} />

          <Input
            label={"Email"}
            placeholder={"Streamview@gmail.com"}
            type={"email"}
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
    </div>
  );
};

export default Profile;
