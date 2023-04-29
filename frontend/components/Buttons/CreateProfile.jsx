import { useAccount, useContract, useSignMessage, useSigner } from "wagmi";
import HuddleContract from "@/abi/HuddleHubContract.json";

const CreateProfile = ({ handle, userName, profilePic }) => {
  const { address } = useAccount();
  const { data: signer } = useSigner();

  const contract = useContract({
    address: HuddleContract.address,
    abi: HuddleContract.abi,
    signerOrProvider: signer,
  });

  const handleOnClick = async () => {
    const profileName = userName;
    const profileHandle = handle;
    const profileAvatar = profilePic;
    const metadata = {
      display_name: profileName,
      profile_pic: profileAvatar,
    };
    console.log(contract);
    //upload to filecoin
  };

  return (
    <button
      className="rounded-lg px-5 mx-2 py-2 hover:scale-95 ease-in-out duration-300 min-w-fit w-[30%]  bg-gradient-to-r from-[#B537E5] via-[#F44A9B]  to-[#FF876E] my-10"
      onClick={handleOnClick}
    >
      Create Profile
    </button>
  );
};

export default CreateProfile;
