import React, { useContext, useEffect } from "react";
import SideBar from "@/components/Navbar/SideBar";
import AddressBar from "@/components/Navbar/AddressBar";
import SuggestedSubscribers from "@/components/Card/SuggestedSubscribers";
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
        avatar: "",
      },
    },
    {
      handle: "tom",
      avatar:
        "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
      metadataInfo: {
        displayName: "Tom Handles",
        avatar: "",
      },
    },
  ];
  const post = {
    authorHandle: "test",
    body: "Hola amigos",
    createdAt: 1682760590858,
    likeCount: "3",
    dislikeCount: "2",
    commentCount: "20",
    likedStatus: "",
  };
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
            <div className="h-[40vh] overflow-y-scroll">
              {sub.map((item, id) => (
                <SuggestedSubscribers {...item} key={id} />
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
