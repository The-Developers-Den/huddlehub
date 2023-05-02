import React, { useContext, useRef } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import CreatePost from "@/components/Buttons/CreatePost";
import { ProfileContext } from "@/context/profile";
import Image from "next/image";

const PostInput = () => {
  const [profile, setProfile] = React.useState(null);
  const [img, setImg] = React.useState("");
  const imgRef = useRef();
  const { primaryProfile } = useContext(ProfileContext);

  React.useEffect(() => {
    primaryProfile?.metadata &&
      axios.get(primaryProfile.metadata).then((res) => {
        setProfile(res.data);
      });
  }, [primaryProfile]);
  const [content, setContent] = React.useState({
    image: "",
    body: "",
    profileMetadata: primaryProfile?.metadata || "",
    username: primaryProfile?.username || "",
  });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContent({
      ...content,
      [name]: value,
    });
  };

  const handleImageChange = async () => {
    const file = imgRef.current.files[0];
    if (!file) {
      setImg("");
      return;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = file;
    if (!fileTypes.includes(type)) {
      toast.error("File format must be either png or jpg");
      return false;
    }
    // Check file size to ensure it is less than 2MB.
    if (size / 1024 / 1024 > 2) {
      toast.error("File size exceeded the limit of 2MB");
      return false;
    }
    setContent({
      ...content,
      image: file,
    });
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result.toString());
    };
  };

  return (
    <div className="bg-[#13141D] border-[#414141] border rounded-lg flex w-[95%] py-4  mx-auto my-2 mb-9">
      <section className="basis-[12%]">
        <Image
          src={profile?.profile_pic || "/assets/default-user.jpg"}
          alt="profile-pic"
          width="150"
          height="150"
          className="rounded-full w-14 h-14 mx-auto"
        />
      </section>
      <section className="basis-[85%] pr-3 pl-1">
        <div className="flex bg-[#070B13] rounded-lg">
          <input
            type="text"
            name="body"
            value={content.body}
            placeholder="Whats on your mind?"
            onChange={handleOnChange}
            className="basis-[90%] outline-none p-3 text-base rounded-lg bg-[#070B13] text-white"
          />
        </div>
        <div className="flex justify-between my-4">
          <div className="flex text-[#ffffffd3] px-3">
            <div>
              <input
                type="file"
                ref={imgRef}
                onChange={handleImageChange}
                hidden
                name="image"
                id="image"
              />

              <button
                onClick={() => imgRef.current.click()}
                disabled={img}
                className="text-slate-300 hover:text-slate-100 "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              className="mx-1 cursor-pointer rounded-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82708 7.49972C1.82708 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82708 10.6327 1.82708 7.49972ZM5.03747 9.21395C4.87949 8.98746 4.56782 8.93193 4.34133 9.08991C4.11484 9.24789 4.05931 9.55956 4.21729 9.78605C4.93926 10.8211 6.14033 11.5 7.50004 11.5C8.85974 11.5 10.0608 10.8211 10.7828 9.78605C10.9408 9.55956 10.8852 9.24789 10.6587 9.08991C10.4323 8.93193 10.1206 8.98746 9.9626 9.21395C9.41963 9.99238 8.51907 10.5 7.50004 10.5C6.481 10.5 5.58044 9.99238 5.03747 9.21395ZM5.37503 6.84998C5.85828 6.84998 6.25003 6.45815 6.25003 5.97498C6.25003 5.4918 5.85828 5.09998 5.37503 5.09998C4.89179 5.09998 4.50003 5.4918 4.50003 5.97498C4.50003 6.45815 4.89179 6.84998 5.37503 6.84998ZM10.5 5.97498C10.5 6.45815 10.1083 6.84998 9.62503 6.84998C9.14179 6.84998 8.75003 6.45815 8.75003 5.97498C8.75003 5.4918 9.14179 5.09998 9.62503 5.09998C10.1083 5.09998 10.5 5.4918 10.5 5.97498Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              className="mx-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5C9 4.32843 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5ZM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.70948 5.85888 5.71836 7 5.94999V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V5.94999Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              className="mx-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V4H5V1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5V4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H4V10H1.5C1.22386 10 1 10.2239 1 10.5C1 10.7761 1.22386 11 1.5 11H4V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V11H10V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H11V5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H11V1.5ZM10 10V5H5V10H10Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <CreatePost {...content} />
        </div>

        {img && (
          <div className="w-[45%] relative border-2 border-dashed text-slate-400 border-slate-400 mt-4 rounded-xl flex aspect-video  items-center justify-center ">
            <img
              src={img}
              alt="profile-picture"
              className="h-full w-full rounded-xl "
            />
            <button
              onClick={() => setImg(null)}
              className="absolute bg-red-500 text-white text-xs right-2 top-1 p-1 rounded-lg"
            >
              <RxCross2 />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default PostInput;
