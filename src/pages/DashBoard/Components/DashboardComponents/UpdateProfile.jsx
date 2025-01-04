import { Input } from "../../../../Custom/Input";
import Uploader from "../UpdateProfile/Uploader";

const UpdateProfile = () => {
  return (
    <div className=" w-full rounded-md ">
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
  );
};

export default UpdateProfile;
