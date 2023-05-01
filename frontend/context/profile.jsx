import React, { createContext, useState, useEffect } from "react";
import {
  useAccount,
  useNetwork,
  useSigner,
  useContract,
  useContractRead,
} from "wagmi";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import HuddleContract from "@/abi/HuddleHubContract.json";

export const ProfileContext = createContext(null);

export const ProfileContextProvider = ({ children }) => {
  const [primaryProfile, setPrimaryProfile] = useState(null);
  const [users, setUsers] = useState([]);
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data: signer } = useSigner();
  const router = useRouter();

  useEffect(() => {
    if (chain.id !== 3141) {
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
      router.push("/connectwallet");
    }
  }, [chain]);

  // useEffect(() => {
  //   const profiles = localStorage.getItem("users");
  //   if (profiles?.length > 0 && !primaryProfile) {
  //     const data = profiles.find((user) => user.account === address);
  //     console.log(data);
  //     setPrimaryProfile(data);
  //   }
  // }, []);
  // useEffect(() => {
  //   console.log(users);
  //   if (users.length > 0) {
  //     localStorage.setItem("users", [users]);
  //   }
  // }, []);

  return (
    <ProfileContext.Provider
      value={{
        primaryProfile,
        setPrimaryProfile,
        users,
        setUsers,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
