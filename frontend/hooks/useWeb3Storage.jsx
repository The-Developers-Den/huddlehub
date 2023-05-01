import React from "react";
import toast from "react-toastify";
import { Web3Storage } from "web3.storage";

const useWeb3Storage = () => {
  const makeStorageClient = () => {
    return new Web3Storage({
      token: process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY,
    });
  };

  const storeFile = async (file, token) => {
    try {
      const client = makeStorageClient();
      const cid = await client.put([file]);
      return "https://" + cid + ".ipfs.w3s.link/" + file.name;
    } catch (err) {
      console.error(err);
    }
  };

  const retrieveFile = async (cid) => {
    const client = makeStorageClient();
    const res = await client.get(cid);
    if (!res.ok) {
      throw new Error(
        `Failed to get ${cid} - [${res.status}] ${res.statusText}`
      );
    }
    const file = await res.files();
    return file[0];
  };

  return { makeStorageClient, storeFile, retrieveFile };
};

export default useWeb3Storage;
