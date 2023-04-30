import React from "react";
import Link from "next/link";
const ThankPage = () => {
  return (
    <div className="bg-[#13141D]  w-full h-[100vh] flex justify-center items-center font-worksans text-clip">
      <section className="text-center">
        <h1 className="text-4xl">Thank you for attending !</h1>
        <Link
          href="/home"
          className="text-2xl my-6 hover:underline underline-offset-3"
        >
          Go to Home 🏠
        </Link>
      </section>
    </div>
  );
};

export default ThankPage;
