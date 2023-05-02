import React from "react";
import Image from "next/image";
import dateFormat from "dateformat";
import axios from "axios";
import ethers from "ethers";
import { ProfileContext } from "@/context/profile";
import { useSigner } from "wagmi";

const PostCard = ({ id, content, created, owner }) => {
  const { data: signer } = useSigner();
  const [profile, setProfile] = React.useState(null);
  const [postData, setPostData] = React.useState(null);
  const likedStatus = "";
  const { primaryProfile } = React.useContext(ProfileContext);

  React.useEffect(() => {
    primaryProfile?.metadata &&
      axios.get(primaryProfile.metadata).then((res) => {
        setProfile(res.data);
      });
    content &&
      axios.get(content).then((res) => {
        setPostData(res.data);
      });
  }, []);
  const handleLike = async () => {};
  const handleDisLike = async () => {};
  const handleCancelReaction = async () => {};

  return (
    <div className="bg-[#13141D] border-[#414141] border rounded-lg py-3 px-5 w-[95%] mx-auto my-3">
      <section className="flex justify-between">
        <div className="basis-[75%] flex justify-start my-3">
          <Image
            src={postData?.profile_pic || "/assets/default-user-2.png"}
            alt=""
            height="100"
            width="100"
            className="rounded-full w-14 h-14"
          />
          <span className="ml-2">
            <h2 className="text-base font-medium mt-1">
              {postData?.display_name || "Sam Miller"}
            </h2>
            <h2 className="text-sm">@{postData?.username}</h2>
          </span>
        </div>
        <h2 className="text-xs text-[#8F8F8F] my-auto">
          {" "}
          {/* {dateFormat(
            new Date(ethers.utils.formatEther(created)),
            "dddd, mmmm dS yyyy"
          )} */}
          {dateFormat(new Date(), "dddd, mmmm dS yyyy")}
        </h2>
      </section>
      <div>
        <h2 className="text-sm my-3">{postData?.body}</h2>
        {postData?.image && (
          <Image
            src={postData?.image || "/assets/img2.png"}
            alt="post-img"
            width="300"
            height="300"
            className="rounded my-2"
          />
        )}
      </div>
      <section className="flex justify-between my-4">
        <h2 className="text-xs text-[#667085]">Liked by john and 14 others</h2>
        <div className="flex justify-around">
          <span className="flex text-xs mx-2">
            {likedStatus.liked ? (
              <button onClick={handleCancelReaction}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="mr-1 text-[#FD5B74] "
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            ) : (
              <button onClick={handleLike}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            )}

            <h3>{20}</h3>
          </span>
          <span className="flex text-xs mx-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 15 15"
              fill="none"
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3>{4}</h3>
          </span>
          <span className="flex text-xs ">
            {likedStatus.disliked ? (
              <button onClick={handleCancelReaction}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="mr-1 text-[#FD5B74]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            ) : (
              <button onClick={handleDisLike}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 15 15"
                  className="mr-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 5.00006C3.22386 5.00006 3 5.22392 3 5.50006L3 11.5001C3 11.7762 3.22386 12.0001 3.5 12.0001L11.5 12.0001C11.7761 12.0001 12 11.7762 12 11.5001L12 5.50006C12 5.22392 11.7761 5.00006 11.5 5.00006L10.25 5.00006C9.97386 5.00006 9.75 4.7762 9.75 4.50006C9.75 4.22392 9.97386 4.00006 10.25 4.00006L11.5 4.00006C12.3284 4.00006 13 4.67163 13 5.50006L13 11.5001C13 12.3285 12.3284 13.0001 11.5 13.0001L3.5 13.0001C2.67157 13.0001 2 12.3285 2 11.5001L2 5.50006C2 4.67163 2.67157 4.00006 3.5 4.00006L4.75 4.00006C5.02614 4.00006 5.25 4.22392 5.25 4.50006C5.25 4.7762 5.02614 5.00006 4.75 5.00006L3.5 5.00006ZM7 1.6364L5.5682 3.0682C5.39246 3.24393 5.10754 3.24393 4.9318 3.0682C4.75607 2.89246 4.75607 2.60754 4.9318 2.4318L7.1818 0.181802C7.26619 0.09741 7.38065 0.049999 7.5 0.049999C7.61935 0.049999 7.73381 0.09741 7.8182 0.181802L10.0682 2.4318C10.2439 2.60754 10.2439 2.89246 10.0682 3.0682C9.89246 3.24393 9.60754 3.24393 9.4318 3.0682L8 1.6364L8 8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5L7 1.6364Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            )}

            <h3>{2}</h3>
          </span>
        </div>
      </section>
      <section className="flex my-3 justify-start">
        <Image
          src={profile?.profile_pic || "/assets/default-user.jpg"}
          alt=""
          height="100"
          width="100"
          className="rounded-full w-10 h-10 mr-2 "
        />
        <div className="flex justify-between basis-[90%] bg-[#070B13] rounded-lg p-1">
          <input
            type="text"
            placeholder="Comment"
            className="p-2 bg-[#070B13] w-[95%] outline-none border-none text-sm rounded-lg text-white font-medium"
          />

          <button className="mr-4 text-[#667085]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default PostCard;
