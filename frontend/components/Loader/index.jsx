import React, { useContext } from "react";
import { ProfileContext } from "@/context/profile";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  const { loader } = useContext(ProfileContext);
  return (
    <div>
      {loader && (
        <div className="absolute top-0 w-[100vw] h-[100vh] flex bg-[#0000004a] z-50 justify-center items-center">
          <Bars
            height="80"
            width="80"
            color="#fff"
            className="my-auto"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default Loader;
