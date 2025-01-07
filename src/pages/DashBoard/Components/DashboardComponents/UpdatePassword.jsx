import { useContext, useState } from "react";
import { Input } from "../../../../Custom/Input";
import MovieContext from "../../../../Context/MovieContext";

const UpdatePassword = () => {
  const { setInputVal } = useContext(MovieContext);
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  return (
    <div className=" p-4 flex flex-col gap-6 text-white bg-dry ">
      <p className="text-xl font-bold">Change Password</p>

      <Input
        label={"Previous Password"}
        placeholder={"******"}
        type={"password"}
        setInputVal={setInputVal}
        setter={setPrevPassword}
        mainVal={prevPassword}
      />

      <Input
        label={"New Password"}
        placeholder={"******"}
        type={"password"}
        setInputVal={setInputVal}
        setter={setNewPassword}
        mainVal={newPassword}
      />

      <Input
        label={"Confirm Password"}
        placeholder={"******"}
        type={"password"}
        setInputVal={setInputVal}
        setter={setconfirmPassword}
        mainVal={confirmPassword}
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
