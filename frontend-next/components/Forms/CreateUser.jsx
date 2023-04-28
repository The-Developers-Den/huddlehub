import { useState } from "react";
import React from "react";
// import CreateProfile from "../Buttons/CreateProfile";

const SignupForm = () => {
  const [signupInput, setSignupInput] = useState({
    handle: "",
    displayName: "",
    bio: "",
    bannerImg: "",
    avatar: "",
    operator: "",
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
    <div className="flex flex-col h-fit justify-center my-auto rounded-lg w-[80%] h-full mx-auto bg-[#13141D] px-7 py-5 border-[#414141] border">
      <section className="flex flex-col  my-1">
        <label className="text-base my-2 ">Handle (w/o @) </label>
        <input
          className="bg-[#070B13] my-1 rounded-lg border-none py-2 outline-none px-3 text-sm "
          name="handle"
          placeholder="Enter handle"
          value={signupInput.handle}
          onChange={handleOnChange}
        />
      </section>
      <div className="flex flex-col my-1">
        <label className="text-base my-2 ">Avatar URL</label>
        <input
          name="avatar"
          className="bg-[#070B13] my-1 rounded-lg border-none py-2 outline-none px-3 text-sm"
          value={signupInput.avatar}
          onChange={handleOnChange}
          placeholder="Enter avatar URL"
        />
      </div>
      <div className="flex flex-col my-1">
        <label className="text-base my-2">Name</label>
        <input
          className="bg-[#070B13] my-1 rounded-lg border-none py-2 outline-none px-3 text-sm"
          name="displayName"
          value={signupInput.displayName}
          onChange={handleOnChange}
          placeholder="Enter name"
        />
      </div>
      <div className="flex flex-col my-1">
        <label className="text-base my-2 ">Bio</label>
        <input
          className="bg-[#070B13] my-1 rounded-lg border-none py-2 outline-none px-3 text-sm"
          name="bio"
          value={signupInput.bio}
          onChange={handleOnChange}
          placeholder="Enter Bio"
        />
      </div>
      <div className="flex flex-col my-1">
        <label className="text-base  my-2 ">Operator address (optional)</label>
        <input
          className="bg-[#070B13] my-1 rounded-lg border-none py-2 outline-none px-3 text-sm "
          name="operator"
          value={signupInput.operator}
          onChange={handleOnChange}
          placeholder="Enter operator address"
        />
      </div>

      {/* <CreateProfile {...signupInput} /> */}
    </div>
  );
};

export default SignupForm;
