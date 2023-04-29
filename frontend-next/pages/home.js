import React, { useContext, useEffect } from "react";
import SideBar from "@/components/Navbar/SideBar";
import AddressBar from "@/components/Navbar/AddressBar";
// import SuggestedSubscribers from "../components/Card/SuggestedSubscribers";
import PostInput from "@/components/Card/PostInput";
import PostCard from "@/components/Card/PostCard";
import { useAccount } from "wagmi";

const Home = () => {
  const { address } = useAccount();
  const sub = [
    {
      handle: "marry",
      avatar:
        "https://png.pngtree.com/png-vector/20211106/ourlarge/pngtree-pizza-pixel-png-image_4023257.png",
      metadataInfo: {
        displayName: "Marry",
        bio: "",
        avatar: "",
      },
      profileID: 134,
      followerCount: 21,
      subscriberCount: 23,
      isSubscribedByMe: false,
      isFollowedByMe: false,
      subscribeMw: {
        type: "SUBSCRIBE_FREE",
        contractAddress: "0x0000000000000000000000000000000000000000",
        data: "",
      },
    },
    {
      handle: "tom",
      avatar:
        "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
      metadataInfo: {
        displayName: "Tom Handles",
        bio: "",
        avatar: "",
      },
      profileID: 1126,
      followerCount: 21,
      subscriberCount: 23,
      isSubscribedByMe: false,
      isFollowedByMe: false,
      subscribeMw: {
        type: "SUBSCRIBE_PAID",
        contractAddress: "0x751fc06566D17271614578849eb6C28FB1142CCc",
        data: '{"Namespace":"0x57e12b7a5f38a7f9c23ebd0400e6e53f2a45f271","ProfileId":1126,"Amount":"1000000000000000000","Recipient":"0x0b5da8e8928b28c14aeb99728efa89eec325231e","Currency":"0x84b9b910527ad5c03a9ca831909e21e236ea7b06","NftRequired":false,"NftAddress":"0x0000000000000000000000000000000000000000"}',
      },
    },
  ];
  //   useEffect(() => {
  //     if (!(accessToken && primaryProfile)) {
  //       return;
  //     }
  //     const fetch = async () => {
  //       try {
  //         const res = await getPrimaryProfilePosts({
  //           variables: {
  //             address: address,
  //           },
  //         });
  //         var allPosts: any = [];
  //         const posts1 = res?.data?.address?.wallet?.primaryProfile?.posts?.edges;

  //         posts1.map((post: { node: any }) => {
  //           allPosts.push({ ...post.node, comments: post.node.comments.edges });
  //         });
  //         setPosts(allPosts);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetch();
  //   }, [address, accessToken, primaryProfile]);
  return (
    <div className="flex font-inter ">
      <div className="fixed w-[18vw]">
        <SideBar />
      </div>
      <div className="basis-[82%] w-[82vw] ml-[18vw] bg-[#070B13] min-h-[100vh]">
        <AddressBar />
        <h2 className="text-3xl mx-3 font-medium">Home</h2>
        <h3 className="mx-3 text-base text-[#8F8F8F] ">
          Get your latest posts, manage your finance.
        </h3>
        <section className="flex my-2">
          <div className="basis-[72%] px-3">
            <PostInput />
            {/* {!posts && <h2>No Home</h2>} */}
            {/* {posts && posts.map((post, id) => <PostCard {...post} key={id} />)} */}
          </div>
          <div className="basis-[28%] px-3">
            <h2 className="text-base font-medium">Suggested Subscribers</h2>
            {/* {sub.map((item, id) => (
              <SuggestedSubscribers {...item} key={id} /> */}
            {/* ))} */}
            <h2 className="text-base font-medium">Latest Activity</h2>
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
