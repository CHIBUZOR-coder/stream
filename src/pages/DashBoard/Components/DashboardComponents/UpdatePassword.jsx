import { useContext, useState } from "react";
import { Input } from "../../../../Custom/Input";
import MovieContext from "../../../../Context/MovieContext";
import { RiLoader2Fill } from "react-icons/ri";

const UpdatePassword = ({ setIsLoading, setResult, setLoadDiaplay }) => {
  const { setInputVal } = useContext(MovieContext);
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const { Alert, Result } = useContext(MovieContext);

  const HandleUpdatePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadDiaplay("Updating password...");

    try {
      const res = await fetch("http://localhost:5000/updatepassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: prevPassword,
          newPassword: newPassword,
          confirmpassword: confirmPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        setResult(Alert(false, data.message));
        setIsloading(false);
      }
      console.log(data);
      setIsloading(false);
      setResult(Alert(true, data.message));
          setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setResult(Alert(true, error.message));
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 3000);
    }
  };
  return (
    <div className=" p-4 relative flex flex-col gap-6 text-white bg-dry ">
      <div
        className={` ${
          Result ? "Animate" : "hidden"
        } fixed Alert  left-0 w-full z-40 flex justify-center items-center `}
      >
        <div className=" bg-text text-dry w-1/2 rounded-md border-[3px] border-subMain flex justify-center items-center p-4">
          {Result && <p>{Result}</p>}
        </div>
      </div>

      <p className="text-xl font-bold">Change Password</p>

      <Input
        label={"Email"}
        placeholder={"exampl@gmail.com"}
        type={"email"}
        setInputVal={setInputVal}
        setter={setEmail}
        mainVal={Email}
        indicator={"Email"}
        labelFor={"email"}
      />

      <Input
        label={"Previous Password"}
        placeholder={"******"}
        type={"password"}
        setInputVal={setInputVal}
        setter={setPrevPassword}
        mainVal={prevPassword}
        indicator={"Password"}
        labelFor={"password"}
      />

      <Input
        label={"New Password"}
        placeholder={"******"}
        type={"password"}
        setInputVal={setInputVal}
        setter={setNewPassword}
        mainVal={newPassword}
        indicator={"NewPassword"}
        labelFor={"newPassword"}
      />

      <Input
        label={"Confirm Password"}
        placeholder={"******"}
        type={"password"}
        setInputVal={setInputVal}
        setter={setconfirmPassword}
        mainVal={confirmPassword}
        indicator={"Confirmpassword"}
        labelFor={"confirmpassword"}
      />

      <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-start items-center">
        <button
          onClick={(e) => HandleUpdatePassword(e)}
          className="bg-main font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto "
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default UpdatePassword;
