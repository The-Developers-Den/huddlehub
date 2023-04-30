import React, { useState, useEffect } from "react";
import SideBar from "@/components/Navbar/SideBar";
import AddressBar from "@/components/Navbar/AddressBar";
import { useAccount } from "wagmi";
import { useHuddle01 } from "@huddle01/react";
import { useLobby } from "@huddle01/react/hooks";
import MeetCard from "@/components/Card/MeetCard";

const Discover = () => {
  //   const { initialize, isInitialized } = useHuddle01();
  const [showFree, setShowFree] = useState(false);
  const [showPaid, setShowPaid] = useState(false);
  const [showAll, setShowAll] = useState(true);
  //   const { joinLobby, leaveLobby, isLoading, isLobbyJoined, error } = useLobby();

  //   useEffect(() => {
  //     initialize(process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID);
  //   }, []);
  return (
    <div className="flex font-inter ">
      <div className="fixed w-[18vw]">
        <SideBar />
      </div>
      <div className="basis-[82%] w-[82vw] ml-[18vw] bg-[#070B13] min-h-[100vh]">
        <AddressBar />
        <h2 className="text-3xl font-medium mx-3">Discover</h2>
        <h3 className=" mx-3 text-base text-[#8F8F8F] ">
          Disover new Meets, share wisdom world.
        </h3>
        <nav className="transition duration-300  flex justify-end my-2 px-5 py-2 text-base text-[#8f8f8f] ">
          <button
            onClick={() => {
              setShowAll(true);
              setShowFree(false);
              setShowPaid(false);
            }}
            className={`${
              showAll ? "text-[#F2F2F2] bg-[#4a464681] " : ""
            } mx-1 hover:text-[#f2f2f2] hover:bg-[#4a464681] rounded-lg text-center p-1 px-2 `}
          >
            All
          </button>
          <button
            onClick={() => {
              setShowFree(true);
              setShowAll(false);
              setShowPaid(false);
            }}
            className={`${
              showFree ? "text-[#F2F2F2] bg-[#4a464681]" : ""
            } mx-1 hover:text-[#f2f2f2]  hover:bg-[#4a464681] rounded-lg text-center p-1 px-2 `}
          >
            Free
          </button>
          <button
            className={`${
              showPaid ? "text-[#F2F2F2] bg-[#4a464681] " : ""
            } mx-1 hover:text-[#f2f2f2] hover:bg-[#4a464681] rounded-lg text-center p-1 px-2 `}
            onClick={() => {
              setShowFree(false);
              setShowAll(false);
              setShowPaid(true);
            }}
          >
            Paid
          </button>
        </nav>
        <div>
          {showAll && (
            <div className="grid grid-cols-4 gap-5 p-5">
              <MeetCard roomId={"jby-qqjp-ezf"} />
            </div>
          )}
          {showFree && (
            <div>
              <div className="grid grid-cols-4 gap-5 p-5">
                <MeetCard />
                <MeetCard
                  image={
                    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/how-to-invest-in-crypto-yotube-thumbnail-design-template-17f19deb438808e63caaa66ef69a1b7e_screen.jpg?ts=1667100318"
                  }
                />
                <MeetCard
                  image={
                    "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/611b82bf1d9d4_json_image_1629192895.webp"
                  }
                />
                <MeetCard
                  image={
                    "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/611b82bf1d9d4_json_image_1629192895.webp"
                  }
                />

                <MeetCard
                  image={
                    "https://cdn.pixelied.com/thumbnails/9ee3ad61-15b7-4340-98d1-fc8c37e8683c.jpeg?ts=1622385580145"
                  }
                />
              </div>
            </div>
          )}
          {showPaid && (
            <div className="grid grid-cols-4 gap-5 p-5">
              <MeetCard
                image={
                  "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/611b82bf1d9d4_json_image_1629192895.webp"
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
