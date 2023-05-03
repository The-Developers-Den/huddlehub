import React from "react";
import Image from "next/image";

const UserCard = ({ img, handle, name, msg }) => {
  return (
    <div className="flex my-3 justify-start rounded-lg transition duration-300 hover:scale-95 cursor-pointer font-inter hover:bg-[#8f8f8f21]">
      <Image
        src={img || "/assets/default-user.jpg"}
        width="150"
        height="150"
        alt="profile-pic"
        className="rounded-full my-auto basis-[28%] aspect-square w-5 p-2"
      />
      <section className="mx-2 flex flex-col justify-between py-3">
        <div className="flex">
          <h2 className="text-sm mr-1">{name || "John Doe"}</h2>
          <h2 className="text-sm text-[#8F8F8F]">@{handle || "johndoe"}</h2>
        </div>
        <h2 className="text-[#f2f2f2a8]">{msg}</h2>
      </section>
    </div>
  );
};

export default UserCard;
