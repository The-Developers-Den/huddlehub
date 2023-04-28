import React from "react";
import Image from "next/image";
import { useConnect } from "wagmi";

const WalletConnect = ({ connector, id }) => {
  const { connect } = useConnect();
  const img = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png",
    "https://seeklogo.com/images/C/coinbase-coin-logo-C86F46D7B8-seeklogo.com.png",
    "https://studio.apereunion.xyz/walletconnect.png",
  ];
  return (
    <section className="bg-[#13141D] border border-[#414141] w-[60%] mx-auto m-2 my-3 flex  rounded-xl hover:scale-95 hover:bg-[#24252d] cursor-pointer h-16 justify-start transition duration-300">
      <Image
        src={img[id]}
        width="140"
        height="140"
        alt={"wallet-logo"}
        className="basis-[8%] w-10 h-10 mx-3 my-3"
      />

      <button
        disabled={!connector.ready}
        key={connector.id}
        onClick={() => connect({ connector })}
        className="text-white font-semibold text-base basis-[92%] text-start px-2 h-full"
      >
        {connector.name}
      </button>
    </section>
  );
};

export default WalletConnect;
