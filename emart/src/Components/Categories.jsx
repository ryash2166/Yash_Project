import React from "react";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="mx-[30px] max-lg:mx-[15px] pb-[50px] max-md:pb-0">
      <div className="flex justify-end text-[45px] font-[Jost] px-[15px] pb-[19px] max-xl:justify-start max-md:justify-center max-md:text-[30px] ">
        <h1 className="tracking-normal">Shop by categories</h1>
      </div>
      <div className=" pb-[108px] max-md:pb-[50px]">
        <div className="flex gap-4 max-xl:block overflow-hidden ">
          <div className="row  max-md:block max-xl:mb-6 max-md:mb-0">
            <div className="col image-container max-md:mb-2 up">
              <img src={img1} alt="Your Image" />
              <div className="overlay pr-[25px] max-lg:px-0 max-lg:pr-[25px]">
                <p className="font-[Jost] text-[25px]">Aloe Vera</p>
                <NavLink to="shopnow" className="side pr-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none" className="side">
                        <path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path>
                        <path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </NavLink>
              </div>
            </div>
            <div className="col image-container max-md:mb-2 up">
              <img src={img2}  alt="Your Image" />
              <div className="overlay pr-[25px] max-lg:px-0 max-lg:pr-[25px]">
                <p className="font-[Jost] text-[25px]">Old Lady Cactus</p>
                <NavLink to="shopnow" className="side pr-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none" className="side">
                        <path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path>
                        <path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="row max-md:block overflow-hidden">
            <div className="col image-container max-md:mb-2 up">
              <img src={img3} alt="Your Image"/>
              <div className="overlay pr-[25px] max-lg:px-0 max-lg:pr-[25px]">
                <p className="font-[Jost] text-[25px]">Calathea Ornata</p>
                <NavLink to="shopnow" className="side pr-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none" className="side">
                        <path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path>
                        <path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </NavLink>
              </div>
            </div>
            <div className="col image-container max-md:mb-2 up">
              <img src={img4} alt="Your Image" />
              <div className="overlay pr-[25px] max-lg:px-0 max-lg:pr-[25px]">
                <p className="font-[Jost] text-[25px]">Green Aloevera</p>
                <NavLink to="shopnow" className="side pr-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                        <path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path>
                        <path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
