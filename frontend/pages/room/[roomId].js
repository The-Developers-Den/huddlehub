import React, { useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/router";
import { FiMic, FiMicOff, FiVideo, FiVideoOff } from "react-icons/fi";
import { BiVideoRecording } from "react-icons/bi";
import { MdCallEnd } from "react-icons/md";
import { Audio, Video } from "@huddle01/react/components";
import { useHuddle01, useEventListener } from "@huddle01/react";
import LobbyCard from "@/components/Card/LobbyCard";
import { usePeers, useRoom, useAudio, useVideo } from "@huddle01/react/hooks";
const Room = () => {
  const { peers } = usePeers();
  const videoRef = useRef(null);
  const { joinRoom, leaveRoom, isRoomJoined, error } = useRoom();
  const router = useRouter();
  const { roomId } = router.query;
  console.log(peers);
  const {
    fetchAudioStream,
    produceAudio,
    stopAudioStream,
    stopProducingAudio,
    stream: micStream,
  } = useAudio();
  const {
    fetchVideoStream,
    produceVideo,
    stopVideoStream,
    stopProducingVideo,
    stream: camStream,
  } = useVideo();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { initialize, isInitialized } = useHuddle01();
  React.useEffect(() => {
    initialize(process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID);
    !isRoomJoined && handleOpen();
    console.log("isRoomJoined", isRoomJoined);
  }, []);

  useEventListener("room:joined", () => {
    console.log("room:joined");
    if (camStream && videoRef.current) videoRef.current.srcObject = camStream;
  });

  return (
    <div className="bg-[#13141D]  w-full h-[100vh] overflow-y-scroll relative">
      {/* Meet menu */}
      <div className="flex justify-around shadow-xl absolute bottom-3 w-[30%] p-2 left-1/2 -translate-x-1/2  rounded-xl bg-[#070B13]">
        <button
          className="p-2 text-[#f2f2f2] cursor-pointer rounded-full hover:scale-95 transition duration-300 hover:bg-[#8484843f] "
          // disabled={!stopProducingAudio.isCallable}
          // onClick={() => stopProducingAudio()}
        >
          <BiVideoRecording size={"1.6rem"} />
        </button>
        {produceAudio.isCallable ? (
          <button
            className="p-2 text-[#f2f2f2] cursor-pointer  rounded-full hover:scale-95 transition duration-300 hover:bg-[#8484843f] "
            disabled={!produceAudio.isCallable}
            onClick={() => produceAudio(micStream)}
          >
            <FiMicOff size={"1.5rem"} />
          </button>
        ) : (
          <button
            className="p-2 text-[#f2f2f2] cursor-pointer rounded-full hover:scale-95 transition duration-300 hover:bg-[#ffffff38] "
            disabled={!stopProducingAudio.isCallable}
            onClick={() => stopProducingAudio()}
          >
            <FiMic size={"1.5rem"} />
          </button>
        )}
        {produceVideo.isCallable ? (
          <button
            className="p-2 text-[#f2f2f2] cursor-pointer bg-[#070B13] rounded-full hover:scale-95 transition duration-300 hover:bg-[#8484843f] "
            disabled={!produceVideo.isCallable}
            onClick={() => produceVideo(camStream)}
          >
            <FiVideoOff size={"1.5rem"} />
          </button>
        ) : (
          <button
            className="p-2 text-[#f2f2f2] cursor-pointer rounded-full hover:scale-95 transition duration-300 hover:bg-[#8484843f] "
            disabled={!stopProducingVideo.isCallable}
            onClick={() => stopProducingVideo()}
          >
            <FiVideo size={"1.5rem"} />
          </button>
        )}
        <button
          className="p-2 text-[#f2f2f2] cursor-pointer rounded-full hover:scale-95 transition duration-300 hover:bg-[#8484843f] "
          disabled={!leaveRoom.isCallable}
          onClick={() => {
            leaveRoom();
            router.push("/room/thanks");
          }}
        >
          <MdCallEnd size={"1.5rem"} />
        </button>
      </div>
      {/* {stopProducingVideo.isCallable && */}
      {/* <video ref={videoRef} autoPlay muted /> */}
      {/* } */}
      <div className="grid grid-rows-4 gap-5">
        {Object.values(peers)
          .filter((peer) => peer.cam)
          .map((peer) => (
            <div className="rounded-lg w-56 h-56 relative">
              <Video
                key={peer.peerId}
                peerId={peer.peerId}
                // track={peer.cam}
                debug
                className="rounded-lg h-full w-full"
              />
              <h2 className="absolute bottom-0 left-1">{peer.displayName}</h2>
            </div>
          ))}
        {Object.values(peers)
          .filter((peer) => peer.mic)
          .map((peer) => (
            <Audio key={peer.peerId} peerId={peer.peerId} track={peer.mic} />
          ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <LobbyCard
          handleClose={handleClose}
          roomId={roomId}
          videoRef={videoRef}
          camStream={camStream}
        />
      </Modal>
    </div>
  );
};

export default Room;
