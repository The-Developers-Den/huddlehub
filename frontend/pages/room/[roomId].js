import React, { useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import Clock from "react-live-clock";
import useSound from "use-sound";
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
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const { joinRoom, leaveRoom, isRoomJoined, error } = useRoom();
  const router = useRouter();
  const { roomId } = router.query;
  const [playEnter] = useSound("/assets/sound/enter.mp3");
  const [playExit] = useSound("/assets/sound/exit.mp3");
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
  }, []);

  useEventListener("room:new-peer", () => {
    // playEnter();
  });
  useEventListener("room:peer-left", () => {
    // playExit();
  });
  if (camStream && videoRef.current) {
    console.log("camStream", camStream);
    videoRef.current.srcObject = camStream;
  }

  return (
    <div className="bg-[#13141D]  w-[100vw] h-[100vh] overflow-y-hidden relative">
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
            onClick={() => {
              setShowVideo(true);
              produceVideo(camStream);
            }}
          >
            <FiVideoOff size={"1.5rem"} />
          </button>
        ) : (
          <button
            className="p-2 text-[#f2f2f2] cursor-pointer rounded-full hover:scale-95 transition duration-300 hover:bg-[#8484843f] "
            disabled={!stopProducingVideo.isCallable}
            onClick={() => {
              setShowVideo(false);
              stopProducingVideo();
            }}
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

      <div className="absolute bottom-5 left-7 font-worksans text-lg font-medium">
        <h2>
          <Clock format={"h:mm a"} ticking={true} /> | {roomId}
        </h2>
      </div>

      {isRoomJoined && showVideo ? (
        <div className="absolute bottom-5 right-7 aspect-video w-60">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="-scale-x-100 rounded-xl"
          />
        </div>
      ) : (
        <div className="absolute bottom-5 right-7 bg-[#635e5e77] aspect-video w-60  rounded-xl flex items-center">
          <img
            src="/assets/default-user.jpg"
            alt="user"
            className="rounded-full w-20 h-20 mx-auto "
          />
        </div>
      )}

      <div className="h-[85%] mt-5 grid grid-cols-3 grid-rows-3 overflow-y-scroll gap-5 p-4 items-center content-center font-worksans">
        {console.log("peer", peers)}
        {Object.values(peers)
          // .slice(1)
          .filter((peer) => peer.cam)
          .map((peer) => (
            <div className="relative bg-[#635e5e77] rounded-xl flex items-center">
              <Video
                key={peer.peerId}
                peerId={peer.peerId}
                track={peer.cam}
                className="object-fill rounded-xl w-full -scale-x-100"
              />
              <h2 className="absolute bottom-1 left-2">{peer.displayName}</h2>
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
