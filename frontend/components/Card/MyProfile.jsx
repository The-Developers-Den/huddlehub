import React, { useContext, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { ProfileContext } from "@/context/profile";

const MyProfile = ({
  showPosts,
  showMeet,
  setShowMeet,
  setShowPosts,
  handleOpen,
}) => {
  const { primaryProfile } = useContext(ProfileContext);
  const [profile, setProfile] = React.useState(null);
  useEffect(() => {
    primaryProfile?.metadata &&
      axios.get(primaryProfile.metadata).then((res) => {
        setProfile(res.data);
      });
  });

  return (
    <div className="relative bg-[#13141D] border-[#414141] border rounded-lg flex flex-col w-[95%] mx-auto my-2 mb-9">
      <section className="basis-[30%]">
        <Image
          src={
            profile?.banner ||
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1200&fit=crop&crop=faces"
          }
          alt="profile-pic"
          width="400"
          height="300"
          className="rounded-t-lg h-44 w-full"
        />
      </section>
      <section className="basis-[15%] flex justify-end relative py-3">
        <Image
          src={profile?.profile_pic || "/assets/default-user.jpg"}
          alt="profile-pic"
          width="150"
          height="150"
          className="rounded-full w-24 border-[#13141D] border-4 h-24 mx-auto absolute -top-12 left-5"
        />
        <button
          className="border outline-none py-1 px-3 rounded-lg mx-3 text-sm text-[rgb(253,91,116)] border-[#FD5B74] transition duration-300 hover:bg-[#FD5B74] hover:text-[#f2f2f2]"
          onClick={handleOpen}
        >
          Create Meet
        </button>
      </section>
      <section className="basis-[55%] px-7">
        <h2 className="text-base">{profile?.display_name || "John Doe"}</h2>
        <h3 className="text-sm text-[#8f8f8f] ">
          @{primaryProfile?.username || "johndoe"}
        </h3>
        <h2 className="text-sm my-2">23 Followers 2 Followings</h2>
        <h2 className="text-sm mb-2">
          {profile?.bio ||
            "I love Filecoin and huddle. I am a crypto enthusiast."}
        </h2>
        <div className="flex justify-around my-2 text-sm text-[#8f8f8f] mt-5">
          <button
            className={`${
              showPosts ? "text-[#F2F2F2]" : ""
            } mx-1 hover:text-[#f2f2f2] `}
            onClick={() => {
              setShowPosts(true);
              setShowMeet(false);
            }}
          >
            Posts
          </button>
          <button
            className={`${
              showMeet ? "text-[#F2F2F2]" : ""
            } mx-1 hover:text-[#f2f2f2] text-center`}
            onClick={() => {
              setShowPosts(false);
              setShowMeet(true);
            }}
          >
            Meet
          </button>
        </div>
      </section>
      <span className="absolute top-2 right-2 rounded-full bg-[#ffffffd6] p-2 text-[#FD5B74] z-10 text-lg cursor-pointer hover:scale-95 transition duration-300">
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default MyProfile;
