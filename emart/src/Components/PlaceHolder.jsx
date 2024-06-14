import React from "react";
import Loader from "./Common/Loader";

const PlaceHolder = () => {
  return (
    <div className="translate-y-[8%] cursor-wait">
      <div className="flex w-full">
        <Loader />
        <Loader />
        <Loader />
      </div>
      <div className="flex w-full">
        <Loader />
        <Loader />
        <Loader />
      </div>
      <div className="flex w-full">
        <Loader />
        <Loader />
        <Loader />
      </div>
    </div>
  );
};

export default PlaceHolder;
