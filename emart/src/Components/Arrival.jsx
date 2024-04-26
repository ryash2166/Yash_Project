import React from "react";
import wish from "../assets/heart-woocommerce.svg";
import eye from "../assets/eye-woocommerce1.svg";
import cart from "../assets/shopping-bag-woocommerce01.svg";

const Arrival = () => {
  return (
    <div>
      <section className="pt-[110px] px-[15px] pb-[20px] max-lg:pt-[50px] max-lg:pb-[37px]">
        <div className="mx-[42px] max-lg:mx-0 max-sm:flex max-sm:justify-center">
          <div className="mb-[8px]">
            <h1 className="font-[Jost] text-[45px] max-md:text-[32px]">
              New arrivals
            </h1>
          </div>
        </div>
      </section>
      <section className="px-[15px] pb-[65px]">
        <div className="max-lg:ml-0">
          <div className="row flex flex-wrap max-lg:justify-evenly justify-around ">
            <div className="col-5 col-lg-2">
              <div className="relative flex justify-end ">
                <div className="absolute z-1 bg-black text-white text-[13px] mr-[25px] mt-[20px] px-[12px] py-[4px]  max-md:hidden">
                  <span>-33%</span>
                </div>
                <div className="overflow-hidden">
                  <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={wish} alt="" />
                      </a>
                    </div>
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={eye} alt="" />
                      </a>
                    </div>
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={cart} alt="" />
                      </a>
                    </div>
                  </div>
                  <img
                    decoding="async"
                    loading="lazy"
                    alt="custom-image"
                    className="hover:scale-110 duration-[2000ms] ease-in-out"
                    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-Nest-Leslie-Fern.webp"
                  />
                </div>
              </div>
              <div className="text-center leading-10 pt-2">
                <h5>Bird's nest fern</h5>
                <p className="text-muted">
                  <del className="pr-[8px]">$45</del>
                  <span>$30</span>
                </p>
              </div>
            </div>
            <div className="col-5 col-lg-2">
            <div className="relative flex justify-end">
                <div className="absolute z-1 bg-black text-white text-[13px] mr-[25px] mt-[20px] px-[12px] py-[4px]  max-md:hidden">
                  <span>-20%</span>
                </div>
                <div className="overflow-hidden">
                  <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={wish} alt="" />
                      </a>
                    </div>
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={eye} alt="" />
                      </a>
                    </div>
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={cart} alt="" />
                      </a>
                    </div>
                  </div>
                  <img
                    decoding="async"
                    loading="lazy"
                    alt="custom-image"
                    className="hover:scale-110 duration-[2000ms] ease-in-out"
                    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp"
                  />
                </div>
              </div>
              <div className="text-center leading-10 pt-[15px] max-md:pt-[10px]">
                <h5>Monstera plant</h5>
                <p className="text-muted">
                  <del className="pr-[8px]">$60</del>
                  <span>$48</span>
                </p>
              </div>
            </div>
            <div className="col-5 col-lg-2">
            <div className="relative flex justify-end">
                <div className="absolute z-1 bg-black text-white text-[13px] mr-[25px] mt-[20px] px-[12px] py-[4px]  max-md:hidden">
                  <span>-20%</span>
                </div>
                <div className="overflow-hidden">
                  <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={wish} alt="" />
                      </a>
                    </div>
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={eye} alt="" />
                      </a>
                    </div>
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={cart} alt="" />
                      </a>
                    </div>
                  </div>
                  <img
                    decoding="async"
                    loading="lazy"
                    alt="custom-image"
                    className="hover:scale-110 duration-[2000ms] ease-in-out"
                    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Haworthia.webp"
                  />
                </div>
              </div>
              <div className="text-center leading-10 pt-[15px] max-md:pt-[10px]">
                <h5>Haworthia</h5>
                <p className="text-muted">
                  <del className="pr-[8px]">$87</del>
                  <span>$50</span>
                </p>
              </div>
            </div>
            <div className="col-5 col-lg-2">
            <div className="relative flex justify-end">
                {/* <div className="absolute z-1 bg-black text-white text-[13px] mr-[25px] mt-[20px] px-[12px] py-[4px]  max-md:hidden">
                  <span>-33%</span>
                </div> */}
                <div className="overflow-hidden">
                  <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={wish} alt="" />
                      </a>
                    </div>
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={eye} alt="" />
                      </a>
                    </div>
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={cart} alt="" />
                      </a>
                    </div>
                  </div>
                  <img
                    decoding="async"
                    loading="lazy"
                    alt="custom-image"
                    className="hover:scale-110 duration-[2000ms] ease-in-out"
                    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp"
                  />
                </div>
              </div>
              <div className="text-center leading-10 pt-[15px] max-md:pt-[10px]">
                <h5>Monsterae platn</h5>
                <p className="text-muted">
                  {/* <del className="pr-[8px]">$45</del> */}
                  <span>$60.00</span>
                </p>
              </div>
            </div>
            <div className="col-5 col-lg-2">
            <div className="relative flex justify-end">
                <div className="absolute z-1 bg-black text-white text-[13px] mr-[25px] mt-[20px] px-[12px] py-[4px]  max-md:hidden">
                  <span>-21%</span>
                </div>
                <div className="overflow-hidden">
                  <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={wish} alt="" />
                      </a>
                    </div>
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={eye} alt="" />
                      </a>
                    </div>
                    <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                      <a href="" className="img p-[12px]">
                        <img src={cart} alt="" />
                      </a>
                    </div>
                  </div>
                  <img
                    decoding="async"
                    loading="lazy"
                    alt="custom-image"
                    className="hover:scale-110 duration-[2000ms] ease-in-out"
                    src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-nest-fern-01.webp"
                  />
                </div>
              </div>
              <div className="text-center leading-10 pt-[15px] max-md:pt-[10px]">
                <h5>Bird's nest fern</h5>
                <p className="text-muted">
                  <del className="pr-[8px]">$68</del>
                  <span>$54</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arrival;
