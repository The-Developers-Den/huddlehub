import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import useWeb3Storage from "@/hooks/useWeb3Sorage";
import axios from "axios";

const CreateMeet = ({
  title,
  host,
  thumbnail,
  setLoading,
  type,
  tokenType,
  chain,
  contractAddress,
  handleClose,
}) => {
  const { address } = useAccount();
  const { storeFile } = useWeb3Storage();
  const handleOnClick = async () => {
    setLoading(true);
    thumbnail = await storeFile(thumbnail);
    var response;
    type === "general"
      ? (response = await axios.post(
          "https://iriko.testing.huddle01.com/api/v1/create-room",
          {
            title: title,
            hostWallets: [host],
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.NEXT_PUBLIC_HUDDLE_API_KEY,
            },
          }
        ))
      : (response = await axios.post(
          "https://iriko.testing.huddle01.com/api/v1/create-room",
          {
            title: title,
            hostWallets: [host],
            tokenType: tokenType,
            chain: chain,
            contractAddress: [contractAddress],
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.NEXT_PUBLIC_HUDDLE_API_KEY,
            },
          }
        ));

    const resp = response.data.data;
    console.log(resp);
    const meetMetadata = {
      thumbnail: thumbnail,
      roomId: resp.roomId,
      creator: address,
      type: type,
    };
    console.log(meetMetadata);
    setLoading(false);
    toast.success("Meet Created", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      handleClose();
    }, 2000);
  };
  //   creator
  // :
  // "0x9d8c061125e2c416F472feC3A18C3fD48E88bA18"
  // roomId
  // :
  // "jby-qqjp-ezf"
  // thumbnail
  // :
  // "https://bafybeiew67u4h6rqtc2j6lgn2h3qlhtluyux4gmearzyatotr6xpo4kyjy.ipfs.w3s.link/Screenshot 2023-04-14 031205.png"
  // type
  // :
  // "general"

  return (
    <>
      <button
        className="rounded-lg px-5 mx-2 py-2 hover:scale-95 ease-in-out duration-300 min-w-fit w-[30%]  bg-gradient-to-r from-[#B537E5] via-[#F44A9B]  to-[#FF876E] my-10"
        onClick={handleOnClick}
      >
        Create
      </button>
    </>
  );
};

export default CreateMeet;
