import React, { useState } from "react";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import LobbyCard from "@/components/Card/LobbyCard";
import { useLobby } from "@huddle01/react/hooks";
import { BsFillCircleFill } from "react-icons/bs";

const MeetCard = ({ roomId, image }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex flex-col relative hover:scale-[.98] ease-in-out duration-300  min-h-fit min-w-fit  rounded-lg  bg-[#13141D] shadow-sm border border-[#414141] ">
      <Image
        src={
          image ||
          "https://mobilegrowthassociation.com/wp-content/uploads/2022/10/MGS22-93-MGS-WEB3NFT-Thumbnail.jpg"
        }
        alt="event"
        height="320"
        width="300"
        className="basis-[80%] w-full h-full rounded-t-lg"
      />
      <div className="basis-[20%] relative">
        <button
          className="rounded-lg p-2 my-4 mx-auto  hover:scale-95 ease-in-out duration-300 text-base w-[40%] bg-gradient-to-r from-[#B537E5] via-[#F44A9B]  to-[#FF876E] absolute -top-10 left-1/2 transform -translate-x-1/2 "
          onClick={handleOpen}
        >
          Join
        </button>
        <h2 className="text-lg text-center text-[#f2f2f2] my-2 mt-5">
          Web Masters
        </h2>
      </div>
      <section className="absolute top-0 right-0 bg-[#13141dc4] rounded-lg flex p-1 m-1 text-xs px-2">
        <BsFillCircleFill className="my-auto text-[#ff4524] " size={"11px"} />
        <h2 className="my-auto mx-1">Live</h2>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <LobbyCard handleClose={handleClose} roomId={roomId} />
      </Modal>
    </div>
  );
};

export default MeetCard;
