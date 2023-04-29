import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfileCard from "../Card/ProfileCard";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between font-inter h-[100vh] bg-[#13141D] py-3 px-4">
      <section className="">
        <section>
          <h2 className="my-5 mx-auto text-xl font-[590] font-worksans">
            HuddleHub
          </h2>
        </section>
        <div className="flex border rounded-xl mb-5 h-fit  ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            className="my-auto mx-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <input
            placeholder="Search"
            className="w-[90%] border-none decoration-none py-2 outline-none bg-[#13141D] text-white rounded-xl  "
          />
        </div>
        <Link
          href="/home"
          className={`${
            router.pathname === "/home" && "text-[#FD5B74]"
          } flex justify-start my-3 text-base text-[#8F8F8F] hover:text-white transition duration-300`}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 15 15"
            fill="none"
            className="mr-3 my-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <label className="cursor-pointer">Home</label>
        </Link>
        <Link
          href="/discover"
          className={`${
            router.pathname === "/discover" && "text-[#FD5B74]"
          } flex justify-start my-3 text-base text-[#8F8F8F] hover:text-white transition duration-300`}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 15 15"
            className="mr-3 my-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.75432 0.819537C7.59742 0.726821 7.4025 0.726821 7.24559 0.819537L1.74559 4.06954C1.59336 4.15949 1.49996 4.32317 1.49996 4.5C1.49996 4.67683 1.59336 4.84051 1.74559 4.93046L7.24559 8.18046C7.4025 8.27318 7.59742 8.27318 7.75432 8.18046L13.2543 4.93046C13.4066 4.84051 13.5 4.67683 13.5 4.5C13.5 4.32317 13.4066 4.15949 13.2543 4.06954L7.75432 0.819537ZM7.49996 7.16923L2.9828 4.5L7.49996 1.83077L12.0171 4.5L7.49996 7.16923ZM1.5695 7.49564C1.70998 7.2579 2.01659 7.17906 2.25432 7.31954L7.49996 10.4192L12.7456 7.31954C12.9833 7.17906 13.2899 7.2579 13.4304 7.49564C13.5709 7.73337 13.4921 8.03998 13.2543 8.18046L7.75432 11.4305C7.59742 11.5232 7.4025 11.5232 7.24559 11.4305L1.74559 8.18046C1.50786 8.03998 1.42901 7.73337 1.5695 7.49564ZM1.56949 10.4956C1.70998 10.2579 2.01658 10.1791 2.25432 10.3195L7.49996 13.4192L12.7456 10.3195C12.9833 10.1791 13.2899 10.2579 13.4304 10.4956C13.5709 10.7334 13.4921 11.04 13.2543 11.1805L7.75432 14.4305C7.59742 14.5232 7.4025 14.5232 7.24559 14.4305L1.74559 11.1805C1.50785 11.04 1.42901 10.7334 1.56949 10.4956Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <label className="cursor-pointer">Discover</label>
        </Link>
        <Link
          href="/profile"
          className={`${
            router.pathname === "/profile" && "text-[#FD5B74]"
          } flex justify-start my-3 text-base text-[#8F8F8F] hover:text-white transition duration-300`}
        >
          <svg
            width="21"
            height="21"
            className="mr-3 my-auto"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <label className="cursor-pointer">Profile</label>
        </Link>

        <Link
          href="/connect"
          className={`${
            router.pathname === "/connect" && "text-[#FD5B74]"
          } flex justify-start my-3 text-base text-[#8F8F8F] hover:text-white transition duration-300`}
        >
          <svg
            width="21"
            height="21"
            className="mr-3 my-auto"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6788 2.95419C10.0435 2.53694 9.18829 2.54594 8.51194 3.00541C8.35757 3.11027 8.1921 3.27257 7.7651 3.69957L7.14638 4.31829C6.95112 4.51355 6.63454 4.51355 6.43928 4.31829C6.24401 4.12303 6.24401 3.80645 6.43928 3.61119L7.058 2.99247C7.0725 2.97797 7.08679 2.96366 7.1009 2.94955C7.47044 2.57991 7.70691 2.34336 7.95001 2.17822C8.94398 1.50299 10.2377 1.46813 11.2277 2.11832C11.4692 2.27689 11.7002 2.508 12.0515 2.85942C12.0662 2.8741 12.081 2.88898 12.0961 2.90408C12.1112 2.91917 12.1261 2.93405 12.1408 2.94871C12.4922 3.30001 12.7233 3.53102 12.8819 3.77248C13.5321 4.76252 13.4972 6.05623 12.822 7.0502C12.6568 7.2933 12.4203 7.52976 12.0507 7.89929C12.0366 7.9134 12.0222 7.92771 12.0077 7.94221L11.389 8.56093C11.1938 8.7562 10.8772 8.7562 10.6819 8.56093C10.4867 8.36567 10.4867 8.04909 10.6819 7.85383L11.3006 7.23511C11.7276 6.80811 11.8899 6.64264 11.9948 6.48827C12.4543 5.81192 12.4633 4.95675 12.046 4.32141C11.9513 4.17714 11.8009 4.02307 11.389 3.61119C10.9771 3.1993 10.8231 3.04893 10.6788 2.95419ZM4.31796 6.43961C4.51322 6.63487 4.51322 6.95146 4.31796 7.14672L3.69924 7.76544C3.27224 8.19244 3.10993 8.35791 3.00507 8.51227C2.54561 9.18863 2.53661 10.0438 2.95385 10.6791C3.0486 10.8234 3.19896 10.9775 3.61085 11.3894C4.02274 11.8012 4.17681 11.9516 4.32107 12.0464C4.95642 12.4636 5.81158 12.4546 6.48794 11.9951C6.6423 11.8903 6.80777 11.728 7.23477 11.301L7.85349 10.6823C8.04875 10.487 8.36533 10.487 8.5606 10.6823C8.75586 10.8775 8.75586 11.1941 8.5606 11.3894L7.94188 12.0081C7.92738 12.0226 7.91307 12.0369 7.89897 12.051C7.52943 12.4206 7.29296 12.6572 7.04986 12.8223C6.05589 13.4976 4.76219 13.5324 3.77214 12.8822C3.53068 12.7237 3.29967 12.4925 2.94837 12.1411C2.93371 12.1264 2.91883 12.1116 2.90374 12.0965C2.88865 12.0814 2.87377 12.0665 2.8591 12.0518C2.50766 11.7005 2.27656 11.4695 2.11799 11.2281C1.4678 10.238 1.50265 8.94432 2.17788 7.95035C2.34303 7.70724 2.57957 7.47077 2.94922 7.10124C2.96333 7.08713 2.97763 7.07283 2.99213 7.05833L3.61085 6.43961C3.80611 6.24435 4.12269 6.24435 4.31796 6.43961Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <label className="cursor-pointer">Connect</label>
        </Link>
      </section>
      <section className="flex flex-col">
        <Link
          href="/home"
          className="flex justify-start text-base text-[#8F8F8F] hover:text-white transition duration-300"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 15 15"
            className="mr-3 my-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.877197 7.49984C0.877197 3.84216 3.84234 0.877014 7.50003 0.877014C11.1577 0.877014 14.1229 3.84216 14.1229 7.49984C14.1229 11.1575 11.1577 14.1227 7.50003 14.1227C3.84234 14.1227 0.877197 11.1575 0.877197 7.49984ZM7.50003 1.82701C4.36702 1.82701 1.8272 4.36683 1.8272 7.49984C1.8272 10.6328 4.36702 13.1727 7.50003 13.1727C10.633 13.1727 13.1729 10.6328 13.1729 7.49984C13.1729 4.36683 10.633 1.82701 7.50003 1.82701ZM7.12457 9.00001C7.06994 9.12735 6.33165 11.9592 6.33165 11.9592C6.26018 12.226 5.98601 12.3843 5.71928 12.3128C5.45255 12.2413 5.29425 11.9672 5.36573 11.7004C5.36573 11.7004 6.24661 8.87268 6.24661 8.27007V6.80099L4.28763 6.27608C4.0209 6.20461 3.86261 5.93045 3.93408 5.66371C4.00555 5.39698 4.27972 5.23869 4.54645 5.31016C4.54645 5.31016 6.20042 5.87268 6.84579 5.87268H8.15505C8.80042 5.87268 10.4534 5.31042 10.4534 5.31042C10.7202 5.23895 10.9943 5.39724 11.0658 5.66397C11.1373 5.93071 10.979 6.20487 10.7122 6.27635L8.74661 6.80303V8.27007C8.74661 8.87268 9.62663 11.6971 9.62663 11.6971C9.6981 11.9639 9.5398 12.238 9.27307 12.3095C9.00634 12.381 8.73217 12.2227 8.6607 11.956C8.6607 11.956 7.91994 9.12735 7.86866 9.00001C7.81994 8.87268 7.65006 8.87268 7.65006 8.87268H7.34317C7.34317 8.87268 7.16994 8.87268 7.12457 9.00001ZM7.50043 5.12007C8.12175 5.12007 8.62543 4.61639 8.62543 3.99507C8.62543 3.37375 8.12175 2.87007 7.50043 2.87007C6.87911 2.87007 6.37543 3.37375 6.37543 3.99507C6.37543 4.61639 6.87911 5.12007 7.50043 5.12007Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <label className="cursor-pointer">Support</label>
        </Link>
        <Link
          href="/home"
          className="flex justify-start my-3 text-base cursor-pointer  border-b pb-4  border-b-white text-[#8F8F8F] hover:text-white transition duration-300"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 15 15"
            className="mr-3 my-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.62492.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 
              2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <label className="cursor-pointer">Settings</label>
        </Link>
        <ProfileCard
          name="Pratham"
          handle="coder"
          img="https://i.pinimg.com/236x/11/47/a6/1147a6af84fffc4627dab3f84b3998d0.jpg"
        />
      </section>
    </div>
  );
};

export default SideBar;
