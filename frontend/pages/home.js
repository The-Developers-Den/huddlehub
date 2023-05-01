import React, { useContext, useEffect } from "react";
import SideBar from "@/components/Navbar/SideBar";
import AddressBar from "@/components/Navbar/AddressBar";
import SuggestedSubscribers from "@/components/Card/SuggestedSubscribers";
import PostInput from "@/components/Card/PostInput";
import PostCard from "@/components/Card/PostCard";
import { useContractRead, useAccount } from "wagmi";
import { ProfileContext } from "@/context/profile";
import HuddleContract from "@/abi/HuddleHubContract.json";

const Home = () => {
  const { setUsers, setPrimaryProfile, primaryProfile } =
    useContext(ProfileContext);
  const { address } = useAccount();

  const { data } = useContractRead({
    address: HuddleContract.address,
    abi: HuddleContract.abi,
    functionName: "getUsers",
  });
  useEffect(() => {
    setUsers(data);
    if (data?.length > 0 && !primaryProfile) {
      const resp = data.find((user) => user.account === address);
      setPrimaryProfile(resp);
    }
  }, []);

  const post = {
    authorHandle: "test",
    body: "Hola amigos",
    createdAt: 1682760590858,
    likeCount: "3",
    dislikeCount: "2",
    commentCount: "20",
    likedStatus: "",
  };

  return (
    <div className="flex font-inter ">
      <div className="fixed w-[18vw]">
        <SideBar />
      </div>
      <div className="basis-[82%] w-[82vw] ml-[18vw] bg-[#070B13] min-h-[100vh]">
        <AddressBar />
        <h2 className="text-3xl mx-3 font-medium">Home</h2>
        <h3 className="mx-3 text-base text-[#8F8F8F] ">
          Get your latest posts, share with world.
        </h3>
        <section className="flex my-2">
          <div className="basis-[70%] px-5 h-[80vh] overflow-y-scroll">
            <PostInput />
            {/* {!posts && <h2>No Posts</h2>} */}
            <PostCard {...post} />
            {/* {posts && posts.map((post, id) => <PostCard {...post} key={id} />)} */}
          </div>
          <div className="basis-[30%] px-3">
            <h2 className="text-base font-medium">Suggested Followers</h2>
            <div className="h-[37vh] overflow-y-scroll">
              {data &&
                data.map((user, id) => (
                  <SuggestedSubscribers {...user} key={id} />
                ))}
            </div>
            <h2 className="text-base font-medium mt-4">Latest Activity</h2>
            <h3 className="text-sm mx-auto text-[#414141] text-center my-4">
              No Recent activities
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
