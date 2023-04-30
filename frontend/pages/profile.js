import React, { useState, useEffect } from "react";
import SideBar from "@/components/Navbar/SideBar";
import AddressBar from "@/components/Navbar/AddressBar";
import MyProfile from "@/components/Card/MyProfile";
import PostCard from "@/components/Card/PostCard";
import MeetCard from "@/components/Card/MeetCard";
import SuggestedSubscribers from "@/components/Card/SuggestedSubscribers";
import Modal from "@mui/material/Modal";
import CreateMeetForm from "@/components/Forms/CreateMeet";

const Profile = () => {
  const [showPosts, setShowPosts] = useState(true);
  const [showMeet, setShowMeet] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  return (
    <div className="flex font-inter ">
      <div className="fixed w-[18vw]">
        <SideBar />
      </div>
      <div className="basis-[82%] w-[82vw] ml-[18vw] bg-[#070B13] min-h-[100vh]">
        <AddressBar />
        <section className="flex my-2">
          <div className="basis-[70%] px-5 ">
            <MyProfile
              showPosts={showPosts}
              showMeet={showMeet}
              setShowMeet={setShowMeet}
              setShowPosts={setShowPosts}
              handleOpen={handleOpen}
            />
            {showPosts && (
              <div>
                <PostCard {...post} />
              </div>
            )}
            {showMeet && (
              <div className="px-5 grid grid-cols-2 gap-5 ">
                <MeetCard />
                <MeetCard />
              </div>
            )}
            {/* {!posts && <h2>No Posts</h2>} */}
            {/* {posts && posts.map((post, id) => <PostCard {...post} key={id} />)} */}
          </div>
          <div className="basis-[30%] px-3">
            <h2 className="text-base font-medium">Suggested Followers</h2>
            <div className="h-[30vh] overflow-y-scroll">
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="overflow-y-scroll z-20 py-7"
      >
        <CreateMeetForm handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default Profile;
