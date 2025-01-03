import { Input } from "../../Custom/Input";
import Uploader from "./Components/Dashboard/Uploader";

const UpdatePassword = () => {
  return (
    <div className=" p-4 flex flex-col gap-6 text-white bg-dry border border-gray-800 rounded-md">
      <p className="text-xl font-bold">Profile</p>

      <Uploader />
      <Input
        label={"Previous Password"}
        placeholder={"******"}
        type={"password"}
      />

      <Input label={"New Password"} placeholder={"******"} type={"password"} />

      <Input
        label={"Confirm Password"}
        placeholder={"******"}
        type={"password"}
      />

      <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-start items-center">
        <button className="bg-main font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto ">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default UpdatePassword;
