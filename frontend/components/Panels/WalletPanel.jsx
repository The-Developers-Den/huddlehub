import React from "react";
import Image from "next/image";

const WalletPanel = ({ heading }) => {
  return (
    <div>
      <Image
        src="/assets/bg.png"
        width={200}
        height={200}
        alt="bg-image"
        className="w-full h-[100vh]"
      />
      <Image
        src="/assets/Texture.png"
        width={200}
        height={200}
        alt="bg-image"
        className="absolute top-0 w-full h-[100vh] z-10 opacity-30"
      />
      <Image
        src="/assets/spiral.png"
        width={310}
        height={300}
        alt="bg-image"
        className="absolute top-0 z-20 "
      />
      <h2 className="text-5xl text-black font-semibold absolute bottom-28 left-5  mx-10">
        {heading?.split(" ")[0]}
      </h2>
      <h2 className="text-5xl text-black font-semibold absolute bottom-14  left-6 mx-10 ">
        {heading?.split(" ")[1]}.
      </h2>
    </div>
  );
};

export default WalletPanel;
