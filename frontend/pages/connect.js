import React, { useState, useEffect, useContext } from "react";
import SideBar from "@/components/Navbar/SideBar";
import AddressBar from "@/components/Navbar/AddressBar";
import Image from "next/image";
import SuggestedSubscribers from "@/components/Card/SuggestedSubscribers";
import { ProfileContext } from "@/context/profile";
import { useContractRead, useAccount } from "wagmi";
import HuddleContract from "@/abi/HuddleHubContract.json";
import UserCard from "../components/Card/UserCard";

const Connect = () => {
  const { address } = useAccount();
  const [open, setOpen] = useState(false);
  const { setUsers, primaryProfile, setPrimaryProfile } =
    useContext(ProfileContext);
  const { data } = useContractRead({
    address: HuddleContract.address,
    abi: HuddleContract.abi,
    functionName: "getUsers",
  });
 

  useEffect(() => {
    setUsers(data);
    if (data?.length > 0 && !primaryProfile) {
      const resp = data.find((user) => user.account === address);
      setPrimaryProfile(resp);
    }
  }, []);
  return (
    <div className="flex font-inter ">
      <div className="fixed w-[18vw]">
        <SideBar />
      </div>
      <div className="basis-[82%] w-[82vw] ml-[18vw] bg-[#070B13] min-h-[100vh]">
        <AddressBar />
        <h2 className="text-3xl mx-3 font-medium">Connect</h2>
        <h3 className="mx-3 text-base text-[#8F8F8F] ">
          Connect with new peers, share experiance.
        </h3>
        <section className="flex my-2 mt-5 h-[75vh]">
          <div className="basis-[70%] flex mx-3 border rounded-xl border-[#8f8f8f]">
            <div className="basis-[40%] border-r  h-full overflow-y-scroll border-[#8f8f8f] flex flex-col p-3">
              <div className="flex border rounded-xl w-[95%] my-2 mx-auto h-fit bg-[#13141D] ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="my-auto mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <input
                  placeholder="Search"
                  className="w-[90%] border-none decoration-none py-2 outline-none bg-[#13141D]  text-white rounded-xl  "
                />
              </div>
              <UserCard
                msg="This app is awesome.."
                name="satoshi.eth"
                handle="unkwn"
                img="https://banner2.cleanpng.com/20181128/rch/kisspng-pizza-pixel-art-youtube-drawing-pixilart-pizza-peperoni-by-mathgo-5bff20afa3e918.1782233815434467036714.jpg"
              />
              <UserCard msg="love huddle" name="Pratham" handle="devboi" />
              <UserCard
                msg="fvm is nice"
                name="polygon.eth"
                handle="polygn"
                img="https://riseangle.com/storage/events/pBvDzkcPSxCZEb8M2luT5Xh4LE0qTjdp3R0st2J2.png"
              />
              <UserCard
                msg="hello wanna connect ? "
                name="Sam"
                handle="samm"
                img="https://nft-cdn.alchemy.com/matic-mainnet/28d5be02c678e23cf5ab3359916daac0"
              />
              <UserCard
                msg="Lets meet"
                name="all.eth"
                handle="truepeep"
                img="https://media.istockphoto.com/id/1403085717/vector/ape-with-bored-face-in-urban-street-graffity-style-monkey-nft-artwork-crypto-graphic-asset.jpg?s=612x612&w=0&k=20&c=_VVUPtfo_c5ago7oO_t6A9DTR0wIM0YOhwO33kXDv84="
              />
            </div>
            <div className="basis-[60%] flex flex-col justify-between">
              <div className="basis-[15%] border-b border-[#8f8f8f] w-full flex justify-start font-inter">
                <Image
                  src="/assets/default-user.jpg"
                  width="150"
                  height="150"
                  alt="profile-pic"
                  className="rounded-full my-auto basis-[17%] aspect-square w-5 p-2"
                />
                <section className="mx-2 flex flex-col justify-around py-3 items-center">
                  <h2 className="text-base mr-1">Pratham</h2>
                  <h2 className="text-sm text-[#8F8F8F]">@prathamm</h2>
                </section>
              </div>
              <section className="flex my-3 justify-start w-[95%] mx-auto">
                <Image
                  src={"/assets/default-user-2.png"}
                  alt=""
                  height="100"
                  width="100"
                  className="rounded-full w-10 h-10 mr-2 "
                />
                <div className="flex justify-between basis-[90%] bg-[#13141D] rounded-lg p-1">
                  <input
                    type="text"
                    placeholder="Start a new message"
                    className="p-2 bg-[#13141D] w-[95%] outline-none border-none text-sm rounded-lg text-white font-medium"
                  />

                  <button className="mr-4 text-[#667085]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </section>
            </div>
          </div>
          <div className="basis-[30%] px-3">
            <h2 className="text-base font-medium">Suggested Followers</h2>
            <div className="h-[37vh] overflow-y-scroll">
              {data &&
                data.map((user, id) => (
                  <SuggestedSubscribers {...user} key={id} />
                ))}
            </div>
            <h2 className="text-base font-medium mt-4">Latest Activity</h2>
            <h3 className="text-sm mx-auto text-[#414141] text-center my-4">
              No Recent activities
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Connect;
