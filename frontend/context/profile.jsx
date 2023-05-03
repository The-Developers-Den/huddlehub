import React, { createContext, useState, useEffect } from "react";
import { useAccount, useNetwork, useSigner } from "wagmi";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const ProfileContext = createContext(null);

export const ProfileContextProvider = ({ children }) => {
  const [primaryProfile, setPrimaryProfile] = useState(null);
  const { isConnected, address } = useAccount();
  const [users, setUsers] = useState([]);
  const [meets, setMeets] = useState([
    {
      creator: "0x9d8c061125e2c416F472feC3A18C3fD48E88bA18",
      type: "general",
      roomId: "sfo-sodv-djm",
      thumbnail:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/how-to-invest-in-crypto-yotube-thumbnail-design-template-17f19deb438808e63caaa66ef69a1b7e_screen.jpg?ts=1667100318",
      title: "Investing 101",
    },
    {
      creator: "0x9d8c061125e2c416F472feC3A18C3fD48E88bA18",
      type: "general",
      roomId: "jby-qqjp-ezf",
      thumbnail:
        "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/611b82bf1d9d4_json_image_1629192895.webp",
      title: "Play & Earn",
    },
    {
      creator: "0x9d8c061125e2c416F472feC3A18C3fD48E88bA18",
      type: "gated",
      roomId: "dpz-gicq-quf",
      thumbnail:
        "https://cdn.pixelied.com/thumbnails/9ee3ad61-15b7-4340-98d1-fc8c37e8683c.jpeg?ts=1622385580145",
      title: "WTF is Bitcoin ?",
    },
  ]);
  const { chain } = useNetwork();
  const [loader, setLoader] = useState(false);
  const { data: signer } = useSigner();
  const router = useRouter();

  useEffect(() => {
    !isConnected && router.push("/");
  }, [isConnected]);

  useEffect(() => {
    if (chain && chain.id !== 3141) {
      toast.error("Connect to Hyperspace Testnet", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      router.push("/");
    }
  }, [chain]);

  return (
    <ProfileContext.Provider
      value={{
        primaryProfile,
        users,
        loader,
        meets,
        setMeets,
        setLoader,
        setPrimaryProfile,
        setUsers,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
