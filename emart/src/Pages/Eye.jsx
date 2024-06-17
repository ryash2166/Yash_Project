import React, { useEffect } from "react";
import Mail from "../Components/Mail";
import Footer_1 from "../Components/Footer_1";
import Fern from "../assets/Birds-nest-fern-01.webp";
import heart from "../assets/SVG/heart.svg";
import { RxStar } from "react-icons/rx";
import { RxStarFilled } from "react-icons/rx";
import fire from "../assets/SVG/fire.svg";
import tick from "../assets/SVG/tick.svg";
import { NavLink } from "react-router-dom";
const Eye = () => {
  return (
    <div className="">
      <div className="mx-[272px] pt-[20px] px-[15px]">
        <div className="row">
          <div className="pt-[90px] pr-[15px] pb-[20px]">
            <section>
              <p>Home / OutDoor Plants</p>
            </section>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="flex">
              <div className="pr-[7px]">
                <div className="mb-[32px]">
                  <div>
                    <div>
                      <img
                        src={Fern}
                        alt=""
                        className="w-[664px] h-[900px] object-cover"
                      />
                    </div>
                    <ol className="mt-[16px] flex">
                      <li className="mr-[16px]">
                        <img
                          src={Fern}
                          alt=""
                          className="p-[7px] w-[132px] h-[134px] object-cover"
                        />
                      </li>
                      <li className="mr-[16px]">
                        <img
                          src={Fern}
                          alt=""
                          className="p-[7px] w-[132px] h-[134px] object-cover"
                        />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="pl-[60px] pr-[40px] pb-[45px] mb-[32px] ">
                <div className="flex">
                  <h4 className="mb-[18px] font-[Jost] text-[25px] text-black ">
                    Bird's nest fern
                  </h4>
                  <div className="border-[1px] rounded-full p-[20px] relative -right-96">
                    <img src={heart} alt="" />
                  </div>
                </div>
                <div className="flex items-center mb-[18px]">
                  <RxStarFilled />
                  <RxStarFilled />
                  <RxStarFilled />
                  <RxStar />
                  <RxStar />
                  <span className="text-slate-500  text-[18px] ml-[10px]">
                    (1 Review)
                  </span>
                </div>
                <div className="flex mb-[7px] items-center">
                  <img src={fire} alt="" className="w-[18px] " />
                  <span className="text-[20px] ml-[10px] font-[Jost] text-red-500 font-[500]">
                    Hot Deal Ends Soon
                  </span>
                </div>
                <p className="my-[10px] flex items-center">
                  <del className="pr-[10px] text-[18px]">$68.00</del>
                  <span className="text-[22px] font-[600] pr-[10px]">
                    $54.00
                  </span>
                  <span className="border-l-[1px] ml-[3px] pl-[10px] text-[18px] text-green-500 font-[500]">
                    -21%
                  </span>
                </p>
                <div className="flex items-center">
                  <div className="bg-green-600 rounded-full  mr-[7px] p-[2px]">
                    <img src={tick} alt="" className="w-[16px] h-[16px] " />
                  </div>
                  <span className="text-[18px]">
                    Hurry Up!! only <span className="text-green-600">15</span>{" "}
                    items left
                  </span>
                </div>
                <button className="mt-[20px] border-[1px] border-black px-[33px] py-[11px] w-full font-[500] hover:-translate-y-2 duration-300 ease-in-out">
                  Add To Cart
                </button>
                <NavLink to="/shopnow">
                  <button className="mt-[14px] border-[1px] border-black px-[33px] py-[11px] w-full text-white bg-black font-[500] hover:-translate-y-2 duration-300 ease-in-out">
                    Return To Shop
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mail />
      <Footer_1 />
    </div>
  );
};

export default Eye;
