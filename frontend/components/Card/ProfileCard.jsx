import React, { useContext } from "react";
import Image from "next/image";
import { useDisconnect } from "wagmi";
import axios from "axios";
import { ProfileContext } from "@/context/profile";
import { useRouter } from "next/router";

const ProfileCard = () => {
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const { primaryProfile } = useContext(ProfileContext);
  const [profile, setProfile] = React.useState(null);
  React.useEffect(() => {
    primaryProfile?.metadata &&
      axios.get(primaryProfile.metadata).then((res) => {
        setProfile(res.data);
      });
  }, []);

  const handleClick = () => {
    disconnect();
    router.replace("/connectwallet");
  };

  return (
    <div className="flex my-2 justify-between font-inter">
      <div className="flex basis-[95%]">
        <Image
          src={profile?.profile_pic || "/assets/default-user.jpg"}
          width="150"
          height="150"
          alt="profile-pic"
          className="rounded-full my-auto basis-[28%] w-10 h-12 "
        />
        <section className="mx-2 basis-[67%] my-auto">
          <h2 className="text-sm">{profile?.display_name || "John Doe"}</h2>
          <h2 className="text-xs text-[#8F8F8F]">
            @{primaryProfile?.username || "johndoe"}
          </h2>
        </section>
      </div>
      <button className="my-auto basis-[5%]" onClick={handleClick}>
        <svg
          width="17"
          height="17"
          viewBox="0 0 15 15"
          className="text-[#98A2B3]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H12V13H4.5C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14H12C12.5523 14 13 13.5523 13 13V2C13 1.44772 12.5523 1 12 1H4.5ZM6.60355 4.89645C6.40829 4.70118 6.09171 4.70118 5.89645 4.89645C5.70118 5.09171 5.70118 5.40829 5.89645 5.60355L7.29289 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H7.29289L5.89645 9.39645C5.70118 9.59171 5.70118 9.90829 5.89645 10.1036C6.09171 10.2988 6.40829 10.2988 6.60355 10.1036L8.85355 7.85355C9.04882 7.65829 9.04882 7.34171 8.85355 7.14645L6.60355 4.89645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ProfileCard;
