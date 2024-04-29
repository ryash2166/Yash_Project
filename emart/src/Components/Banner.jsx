import React from "react";

function Banner() {
  return (
    <div className="overflow-hidden">
      <section className=" pt-[90px] py-[15px] pb-[109px] max-md:pb-[40px] text-center overflow-hidden ">
        <div className="mx-[55px] flex max-md:block text-center max-xl:text-start max-2xl:mx-[15px]">
          <div className=" flex  items-center justify-center text-wrap text-center max-lg:text-start pr-[100px] max-lg:pr-0">
            <div className="">
              <div className="">
                <div className="">
                  <div className="max-md:text-[50px] max-lg:text-[66px] text-[88px] mb-[25px]">
                    <h1 className="">Plant a tree for better world</h1>
                  </div>
                </div>
              </div>
              <div className="mb-[56px]  max-md:mb-[45px]">
                <div className="text-[16px] font-light max-md:text-[15px] text-muted">
                  Rectangle follower distribute device layer. Library hand ellipse device strikethrough.
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="shop">
                    <a href="/" className="border-1 border-black px-[40px] py-[12px]" role="button">
                        <span className="font-normal">shop now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[55%] mr-5 mt-20 max-xl:mr-2">
            <div className=" max-md:hidden ">
              <div className="">
                <div className="">
                  <img
                    decoding="async"
                    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plants-banner-first.webp"
                    className="hover:ms-[15px] duration-300 ease-in-out "
                    loading="lazy"
                    alt="plants-banner-first "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <div className="ml-[15px] max-lg:ml-0 max-xl:ml-2 ">
                  <img
                    decoding="async"
                    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plants-banner-2nd.webp"
                    className="w-[950px] max-lg:w-[450px] max-xl:w-[600px] max-md:w-auto hover:pl-[10px] duration-300 ease-in-out"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
