import React from "react";
import { useEventListener } from "@huddle01/react";
import { FiMic, FiMicOff, FiVideo, FiVideoOff } from "react-icons/fi";
import {
  useLobby,
  useAudio,
  useVideo,
  useRoom,
  usePeers,
} from "@huddle01/react/hooks";
import { useDisplayName } from "@huddle01/react/app-utils";
import { RxCross2 } from "react-icons/rx";

const LobbyCard = ({ handleClose, roomId, videoRef }) => {
  const { peers } = usePeers();
  const [displayNameText, setDisplayNameText] = React.useState("Guest");
  const { joinRoom, leaveRoom, isRoomJoined, error } = useRoom();
  const { setDisplayName, error: displayNameError } = useDisplayName();

  const {
    joinLobby,
    leaveLobby,
    isLoading,
    isLobbyJoined,
    error: lobbbyerr,
  } = useLobby();
  const {
    fetchAudioStream,
    stopAudioStream,
    isProducing: isAudio,
    stream: audioStream,
    error: audioerr,
  } = useAudio();
  const {
    fetchVideoStream,
    stopVideoStream,
    produceVideo,
    isProducing: isVideo,
    stream: videoStream,
    error: viderr,
  } = useVideo();
  useEventListener("lobby:cam-on", () => {
    if (videoStream && videoRef.current)
      videoRef.current.srcObject = videoStream;
  });
  useEventListener("room:joined", () => {
    handleClose();
  });
  React.useEffect(() => {
    isRoomJoined && handleClose();
  }, []);
  return (
    <div className="bg-[#13141D] rounded-lg mx-auto w-[50%] h-fit px-5 py-3 font-worksans text-center relative ">
      <RxCross2
        className="absolute top-5 right-5 cursor-pointer"
        onClick={handleClose}
        size={"1.5rem"}
      />
      {!isLobbyJoined ? (
        <div className="flex flex-col text-center">
          <h2 className="text-2xl font-medium my-4">Join Lobby</h2>
          <label className="text-base  my-2 mt-4">Room ID</label>
          <input
            className="bg-[#070B13] my-1 rounded-lg mx-auto border-none p-3 outline-none w-[85%] text-sm "
            name="address"
            disabled={true}
            placeholder={roomId}
          />
          <label className="text-base  my-2 mt-4">
            Access Token (Optional)
          </label>
          <input
            className="bg-[#070B13] my-1 rounded-lg mx-auto border-none p-3 outline-none w-[85%] text-sm "
            name="address"
            placeholder={"Access Token"}
          />
          <button
            className="rounded-lg px-5 mx-auto py-2 hover:scale-95 ease-in-out duration-300 min-w-fit w-[20%]  bg-gradient-to-r from-[#B537E5] via-[#F44A9B]  to-[#FF876E] my-5"
            disabled={!joinLobby.isCallable}
            onClick={() => joinLobby(roomId)}
          >
            Join Lobby
          </button>
        </div>
      ) : (
        isLobbyJoined && (
          <div className="flex flex-col">
            <h2 className="text-xl font-medium my-4">Lobby</h2>
            <div className={"mx-auto relative w-[50%] h-52 my-5"}>
              {videoStream ? (
                <video ref={videoRef} autoPlay muted className="rounded-xl" />
              ) : (
                <div className="bg-[#635e5e77] w-full h-full rounded-xl flex items-center">
                  <img
                    src="/assets/default-user.jpg"
                    alt="user"
                    className="rounded-full w-20 h-20 mx-auto "
                  />
                </div>
              )}

              {stopAudioStream.isCallable ? (
                <button
                  className="p-2 text-[#f2f2f2] bg-[#070B13] rounded-lg absolute bottom-1 hover:scale-95 transition duration-300 hover:bg-[#ffffff38] left-1/3"
                  onClick={stopAudioStream}
                >
                  <FiMic size={"1.3rem"} />
                </button>
              ) : (
                <button
                  className="p-2 text-[#8f8f8f] bg-[#070B13] rounded-lg absolute bottom-1 hover:scale-95 transition duration-300 left-1/3"
                  onClick={fetchAudioStream}
                >
                  <FiMicOff size={"1.3rem"} />
                </button>
              )}
              {stopVideoStream.isCallable ? (
                <button
                  className="p-2 text-[#f2f2f2] bg-[#070B13] rounded-lg absolute bottom-1 hover:scale-95 transition duration-300 right-1/3"
                  onClick={stopVideoStream}
                >
                  <FiVideo size={"1.3rem"} />
                </button>
              ) : (
                <button
                  className="p-2 text-[#8f8f8f] bg-[#070B13] rounded-lg absolute bottom-1 hover:scale-95 transition duration-300 right-1/3"
                  onClick={fetchVideoStream}
                >
                  <FiVideoOff size={"1.3rem"} />
                </button>
              )}
            </div>
            <label className="text-base  my-2 mt-4">Display Name</label>
            <input
              type="text"
              placeholder="What should we call you ?"
              value={displayNameText}
              onChange={(e) => setDisplayNameText(e.target.value)}
              className=" bg-[#070B13] my-1 rounded-lg  mx-auto border-none p-3 outline-none w-[45%] text-sm"
            />
            <div className="flex my-4">
              <button
                disabled={!leaveLobby.isCallable}
                className="rounded-lg mx-auto p-2 hover:scale-95 ease-in-out duration-300 min-w-fit w-[20%]  bg-[#FF876E] my-5"
                onClick={leaveLobby}
              >
                Leave
              </button>

              <button
                className="rounded-lg mx-auto p-2 hover:scale-95 ease-in-out duration-300 min-w-fit w-[20%]  bg-gradient-to-r from-[#B537E5] via-[#F44A9B]  to-[#FF876E] my-5"
                disabled={!joinRoom.isCallable}
                onClick={joinRoom}
              >
                Join Room
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default LobbyCard;
