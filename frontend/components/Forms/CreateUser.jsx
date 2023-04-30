import { useState, useRef } from "react";
import React from "react";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import { AiOutlinePicture } from "react-icons/ai";
import CreateProfile from "../Buttons/CreateProfile";

const SignupForm = () => {
  const { address } = useAccount();
  const avatarRef = useRef();
  const [avatar, setAvatar] = useState("");
  const [signupInput, setSignupInput] = useState({
    handle: "",
    userName: "",
    profilePic: "",
    bio: "",
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

  const handleAvatarChange = async () => {
    const file = avatarRef.current.files[0];
    if (!file) {
      setAvatar("");
      return;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = file;
    if (!fileTypes.includes(type)) {
      toast.error("File format must be either png or jpg");
      return false;
    }
    // Check file size to ensure it is less than 2MB.
    if (size / 1024 / 1024 > 2) {
      toast.error("File size exceeded the limit of 2MB");
      return false;
    }
    setSignupInput({
      ...signupInput,
      profilePic: file,
    });
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onload = (readerEvent) => {
      setAvatar(readerEvent.target.result.toString());
    };
  };

  return (
    <div className="flex flex-col rounded-xl w-full bg-[#13141D] px-7 py-1 border-[#414141] border text-start overflow-y-scroll">
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

      <label className="text-base my-2 mt-4">Bio</label>
      <input
        className="bg-[#070B13] my-1 rounded-lg  border-none p-3 outline-none w-[85%] text-sm "
        name="bio"
        value={signupInput.bio}
        onChange={handleOnChange}
        placeholder="I am a developer"
      />

      <label className="text-base my-2 mt-4">Address</label>
      <input
        className="bg-[#070B13] my-1 rounded-lg  border-none p-3 outline-none w-[85%] text-sm "
        name="address"
        disabled={true}
        placeholder={signupInput.address}
      />
      <label className="text-base my-2 mt-4">Profile Image</label>
      <div className="w-[65%] border-2 relative border-dashed text-slate-400 border-slate-400 mt-4 rounded-xl flex aspect-video  items-center justify-center ">
        <input
          type="file"
          ref={avatarRef}
          onChange={handleAvatarChange}
          hidden
          name="profilePic"
          id="profilePic"
        />
        {!avatar && (
          <button
            onClick={() => avatarRef.current.click()}
            className="bg-[#070B13] transition duration-300 font-normal text-sm p-4 text-slate-300 hover:text-slate-100 hover:bg-[#070b13b6] rounded-full flex text-center justify-center "
          >
            <AiOutlinePicture className="h-4 w-4 my-auto mr-1" />
            <h2>Upload avatar</h2>
          </button>
        )}
        {avatar && (
          <>
            <img
              src={avatar}
              alt="profile-picture"
              className="h-full w-full rounded-xl "
            />
            <button
              onClick={() => setAvatar(null)}
              className="absolute bg-red-500 text-white text-xs right-2 top-2 px-2 rounded-lg"
            >
              Reset
            </button>
          </>
        )}
      </div>

      <CreateProfile {...signupInput} />
    </div>
  );
};

export default SignupForm;
