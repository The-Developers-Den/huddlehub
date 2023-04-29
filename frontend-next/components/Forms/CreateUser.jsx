import { useState } from "react";
import React from "react";
import { useAccount } from "wagmi";
import CreateProfile from "../Buttons/CreateProfile";

const SignupForm = () => {
  const { address } = useAccount();
  const [signupInput, setSignupInput] = useState({
    handle: "",
    userName: "",
    profilePic: "",
    address: address,
  });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignupInput({
      ...signupInput,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col h-full rounded-xl w-full bg-[#13141D] p-7 border-[#414141] border text-start justify-center ">
      <label className="text-base my-2 mt-3 ">Handle</label>
      <input
        className="bg-[#070B13] my-1 rounded-lg border-none p-3 w-[85%] outline-none text-sm "
        name="handle"
        placeholder="johndoe"
        value={signupInput.handle}
        onChange={handleOnChange}
      />

      <label className="text-base my-2 mt-4">UserName</label>
      <input
        className="bg-[#070B13] my-1 rounded-lg border-none p-3 w-[85%] outline-none text-sm"
        name="userName"
        value={signupInput.userName}
        onChange={handleOnChange}
        placeholder="John Doe"
      />

      <label className="text-base my-2 mt-4">Profile Image</label>
      <input
        name="profilePic"
        className="bg-[#070B13] my-1 rounded-lg border-none p-3 w-[85%] outline-none text-sm"
        value={signupInput.avatar}
        onChange={handleOnChange}
        placeholder="Enter avatar URL"
      />

      <label className="text-base  my-2 mt-4">Address</label>
      <input
        className="bg-[#070B13] my-1 rounded-lg  border-none p-3 outline-none w-[85%] text-sm "
        name="address"
        disabled={true}
        placeholder={signupInput.address}
      />

      <CreateProfile {...signupInput} />
    </div>
  );
};

export default SignupForm;
