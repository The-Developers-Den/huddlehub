import React from "react";
import Image from "next/image";

const SuggestedSubscribers = ({ handle, avatar, metadataInfo }) => {
  return (
    <div className="flex my-3 justify-between border border-[#5B5B5B] bg-[#13141D] rounded-xl px-4 py-3 mx-auto font-inter">
      <div className="basis-[70%] flex">
        <Image
          src={avatar || metadataInfo?.avatar || "/assets/default-user.jpg"}
          width="100"
          height="100"
          alt="profile-pic"
          className="rounded-full w-12 h-12"
        />
        <section className="mx-2 my-auto">
          <h2 className="text-sm mb-1 font-medium">
            {metadataInfo?.displayName || "John Doe"}
          </h2>
          <h2 className="text-xs text-[#FD5B74]">@{handle}</h2>
        </section>
      </div>
      <button className="my-auto border border-[#FD5B74] py-2 px-3  rounded-lg text-[#FD5B74] hover:bg-[#FD5B74] hover:text-white transition duration-300 ease-in-out text-sm font-medium">
        <h2 className="text-sm"> Follow</h2>
      </button>
    </div>
  );
};

export default SuggestedSubscribers;
