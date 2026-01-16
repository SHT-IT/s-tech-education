/* eslint-disable @next/next/no-img-element */
"use client";

const Loader = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-white">
        <div className="relative flex justify-center items-center " >
          <div className="absolute animate-spin rounded-full h-36 w-36 border-t-4 border-b-4 border-blue-500 "></div>
          <img src="\images\logo\logo.png" alt="Loading..." className="rounded-full h-28 w-38" />
        </div>
      </div>
    </>
  );
};

export default Loader;
