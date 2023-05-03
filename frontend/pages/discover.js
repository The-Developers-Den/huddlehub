import React, { useState, useEffect, useContext } from "react";
import SideBar from "@/components/Navbar/SideBar";
import AddressBar from "@/components/Navbar/AddressBar";
import { ProfileContext } from "@/context/profile";
import MeetCard from "@/components/Card/MeetCard";

const Discover = () => {
  //   const { initialize, isInitialized } = useHuddle01();
  const [showFree, setShowFree] = useState(false);
  const [showPaid, setShowPaid] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const { meets } = useContext(ProfileContext);

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
            General
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
            Gated
          </button>
        </nav>
        <div>
          {showAll && (
            <div className="grid grid-cols-4 gap-5 p-5">
              {meets.map((meet) => (
                <MeetCard {...meet} />
              ))}
            </div>
          )}
          {showFree && (
            <div className="grid grid-cols-4 gap-5 p-5">
              {meets.map((meet) => {
                if (meet.type === "general") {
                  return <MeetCard {...meet} />;
                }
              })}
            </div>
          )}
          {showPaid && (
            <div className="grid grid-cols-4 gap-5 p-5">
              {meets.map((meet) => {
                if (meet.type === "gated") {
                  return <MeetCard {...meet} />;
                }
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
