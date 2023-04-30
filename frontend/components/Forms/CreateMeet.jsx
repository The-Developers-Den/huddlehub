import { useState, useRef } from "react";
import React from "react";
import { useAccount } from "wagmi";
import { Bars } from "react-loader-spinner";
import { toast } from "react-toastify";
import { AiOutlinePicture } from "react-icons/ai";

import CreateMeet from "../Buttons/CreateMeet";

const CreateMeetForm = ({ handleClose }) => {
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const thumbnailRef = useRef();
  const [thumbnail, setThumbnail] = useState("");
  const [general, setGeneral] = useState(true);
  const [meetInput, setMeetInput] = useState({
    title: "",
    host: address,
    thumbnail: "",
    type: "general",
    tokenType: "",
    chain: "",
    contractAddress: "",
  });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMeetInput({
      ...meetInput,
      [name]: value,
    });
  };

  const handleThumbnailChange = async () => {
    const file = thumbnailRef.current.files[0];
    if (!file) {
      setThumbnail("");
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
    setMeetInput({
      ...meetInput,
      thumbnail: file,
    });
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onload = (readerEvent) => {
      setThumbnail(readerEvent.target.result.toString());
    };
  };

  return (
    <div className="flex flex-col  rounded-xl w-[40%] mx-auto bg-[#13141D] px-5 border-[#414141] border text-start justify-center min-h-fit overflow-y-scroll relative">
      <div
        className={`${
          !loading && "hidden"
        } absolute w-[80%] top-1/3 flex justify-center  z-20 `}
      >
        <Bars
          height="80"
          width="80"
          color="#fff"
          className="my-auto"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      <label className="text-base my-2 mt-3 ">Title</label>
      <input
        className="bg-[#070B13] my-1 rounded-lg border-none p-3 w-[85%] outline-none text-sm "
        name="title"
        placeholder="First Meetup"
        value={meetInput.handle}
        onChange={handleOnChange}
      />

      <label className="text-base my-2 mt-4">Host</label>
      <input
        className="bg-[#070B13] my-1 rounded-lg border-none p-3 w-[85%] outline-none text-sm"
        name="host"
        value={meetInput.host}
        onChange={handleOnChange}
        placeholder={meetInput.address}
      />

      <label className="text-base my-2 mt-4">Thumbnail</label>
      <div className="h-40 w-[80%] border-2 relative overflow-hidden border-dashed text-slate-400 border-slate-400 my-4 rounded-xl aspect-video flex items-center justify-center">
        <input
          type="file"
          ref={thumbnailRef}
          onChange={handleThumbnailChange}
          hidden
          name="thumbnail-input"
          id="thumbnail-input"
        />
        {!thumbnail && (
          <button
            onClick={() => thumbnailRef.current.click()}
            className="bg-[#070B13] transition duration-300 font-normal text-sm px-4 py-2 text-slate-300 hover:text-slate-100 hover:bg-[#070b13b6] rounded-full flex text-center justify-center"
          >
            <AiOutlinePicture className="h-4 w-4 my-auto mr-1" />
            <h2>Upload thumbnail</h2>
          </button>
        )}
        {thumbnail && (
          <img
            src={thumbnail}
            alt="profile-picture"
            className="h-full w-full "
          />
        )}
        {thumbnail && (
          <button
            onClick={() => setThumbnail(null)}
            className="absolute bg-red-500 text-white text-xs right-2 top-2 px-2 rounded-lg"
          >
            Reset
          </button>
        )}
      </div>

      <label className="text-base  my-2 mt-4 ">Meet Type</label>
      <div className="flex text-[#8f8f8f] my-3">
        <button
          className={`${
            general ? "text-white" : ""
          } p-2 bg-[#070B13] rounded-lg mr-2`}
          onClick={() => {
            setGeneral(true);
            setMeetInput({
              ...meetInput,
              type: "general",
            });
          }}
        >
          General
        </button>
        <button
          className={`${
            !general ? "text-white" : ""
          } p-2 bg-[#070B13] rounded-lg ml-2`}
          onClick={() => {
            setGeneral(false);
            setMeetInput({
              ...meetInput,
              type: "tokenGated",
            });
          }}
        >
          Token Gated
        </button>
      </div>
      {!general && (
        <div className="flex flex-col">
          <label className="text-base  my-2 mt-4 ">Token Type</label>
          <select
            name="tokenType"
            className="bg-[#070B13] my-1 rounded-lg  border-none p-3 outline-none w-[35%] text-sm"
            onChange={handleOnChange}
          >
            <option value="ERC20">ERC20</option>
            <option value="ERC720">ERC720</option>
            <option value="ERC115">ERC115</option>
          </select>
          {meetInput?.tokenType && (
            <>
              <label className="text-base  my-2 mt-4">Chain</label>
              <select
                name="chain"
                className="bg-[#070B13] my-1 rounded-lg  border-none p-3 outline-none w-[35%] text-sm"
                onChange={handleOnChange}
              >
                <option value="ETHEREUM">Etheruem</option>
                <option value="POLYGON">Polygon</option>
                <option value="SOLANA">Solana</option>
                <option value="COSMOS">Cosmos</option>
                <option value="TEZOS">Tezos</option>
                <option value="BSC">Bsc</option>
              </select>
            </>
          )}
          {meetInput?.chain && (
            <>
              <label className="text-base  my-2 mt-4">Contract Address</label>
              <input
                className="bg-[#070B13] my-1 rounded-lg  border-none p-3 outline-none w-[85%] text-sm "
                name="contractAddress"
                onChange={handleOnChange}
                type="text"
              />
            </>
          )}
        </div>
      )}

      <CreateMeet
        {...meetInput}
        handleClose={handleClose}
        setLoading={setLoading}
      />
    </div>
  );
};

export default CreateMeetForm;
