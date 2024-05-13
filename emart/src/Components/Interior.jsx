import React from "react";
import wish from '../assets/heart-woocommerce.svg'
import eye from '../assets/eye-woocommerce1.svg'
import cart from '../assets/shopping-bag-woocommerce01.svg'
import { NavLink } from "react-router-dom";

const Interior = () => {
  return (
    <>
      <div className="px-[15px] pb-[73px] max-md:pb-0">
        <div className="px-[15px] pb-[36px] max-md:pb-0 ">
          <div className="text-center text-[45px] font-[Jost] max-md:text-[32px] pb-[11px]">
            <h1 className="mb-[8px]">Best Interior Plants</h1>
          </div>
          <div className="text-[16px] text-center text-muted font-[Poppins] ">
            <p>Rectangle follower library hand ellipse device strikethrough.</p>
          </div>
        </div>
        <section className="py-[50px] flex max-md:block mb-[50px] max-md:mb-0 overflow-hidden">
          <section className="w-[43%] max-md:w-[100%] mb-3 px-[30px] max-xl:px-0 overflow-hidden">
            <img
              decoding="async"
              src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plant-gallery-left-img.webp"
              className="hover:translate-x-7 duration-[400ms] ease-in-out"
              alt="plant-gallery-left-img"
              loading="lazy"
            />
          </section>

          <section className="w-[57%] pl-5 max-md:px-1 max-md:block max-md:w-[100%] max-md:p-0">
            <div className="flex flex-wrap row">
              <div className="col-6 col-md-4 px-2">
                <div className="relative">  
                  <div className="flex justify-end">
                  <div className="absolute z-1 bg-black text-white text-[13px] mr-[25px] mt-[20px] px-[12px] py-[4px]  max-md:hidden">
                      <span >-20%</span>
                    </div>
                    <div className="overflow-hidden">
                    <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="wishlist" className="img p-[12px]"><img src={wish} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="/" className="img p-[12px]"><img src={eye} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="cart" className="img p-[12px]"><img src={cart} alt=""/></NavLink>
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
                  <div className="text-center leading-10 p-4 ">
                    <h5>Monstera plant</h5>
                    <p className="text-muted ">
                      <del className="pr-[8px]">$60</del>
                      <span>$48</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 px-2 ">
                <div>
                  <div className="relative flex justify-end">
                  <div className="absolute z-1 bg-black text-white text-[13px] mr-[25px] mt-[20px] px-[12px] py-[4px]  max-md:hidden">
                  <span>-20%</span>
                    </div>
                    <div className="overflow-hidden">
                    <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="wishlist" className="img p-[12px]"><img src={wish} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="/" className="img p-[12px]"><img src={eye} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="cart" className="img p-[12px]"><img src={cart} alt=""/></NavLink>
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
                  <div className="text-center leading-10 p-4 ">
                    <h5>Haworthia</h5>
                    <p className="text-muted">
                      <del className="pr-[8px]">$87</del>
                      <span>$70</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 px-2 ">
                <div>
                  <div className="relative flex justify-end">
                  <div className="absolute z-1 bg-black text-white text-[13px] mr-[25px] mt-[20px] px-[12px] py-[4px]  max-md:hidden">
                  <span>-21%</span>
                    </div>
                    <div className="overflow-hidden">
                    <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="wishlist" className="img p-[12px]"><img src={wish} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="/" className="img p-[12px]"><img src={eye} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="cart" className="img p-[12px]"><img src={cart} alt=""/></NavLink>
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
                  <div className="text-center leading-10 p-4 ">
                    <h5>Bird's nest fern</h5>
                    <p className="text-muted">
                      <del className="pr-[8px]">$68</del>
                      <span>$54</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 px-2 ">
                <div>
                  <div className="relative flex justify-end">
                  <div className="absolute z-1 bg-black text-white text-[13px] mr-[25px] mt-[20px] px-[12px] py-[4px]  max-md:hidden">
                  <span>-11%</span>
                    </div>
                    <div className="overflow-hidden">  
                    <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="wishlist" className="img p-[12px]"><img src={wish} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="/" className="img p-[12px]"><img src={eye} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="cart" className="img p-[12px]"><img src={cart} alt=""/></NavLink>
                        </div>
                      </div>
                      <img
                        decoding="async"
                        loading="lazy"
                        alt="custom-image"
                        className="hover:scale-110 duration-[2000ms] ease-in-out"
                        src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp"
                      />
                    </div>
                  </div>
                  <div className="text-center leading-10 p-4 ">
                    <h5>Peace lily</h5>
                    <p className="text-muted">
                      <del className="pr-[8px]">$72</del>
                      <span>$64</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 px-2 ">
                <div>
                  <div className="relative flex justify-end">
                  {/* <div className="absolute z-1 bg-black text-white text-[13px] mr-[25px] mt-[20px] px-[12px] py-[4px]  max-md:hidden">
                      as
                    </div> */}
                    <div className="overflow-hidden">
                    <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="wishlist" className="img p-[12px]"><img src={wish} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="/" className="img p-[12px]"><img src={eye} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="cart" className="img p-[12px]"><img src={cart} alt=""/></NavLink>
                        </div>
                      </div>
                      <img
                        decoding="async"
                        loading="lazy"
                        alt="custom-image"
                        className="hover:scale-110 duration-[2000ms] ease-in-out"
                        src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/barrel-cactus-01.webp"
                      />
                    </div>
                  </div>
                  <div className="text-center leading-10 p-4 ">
                    <h5>Barrel cactus</h5>
                    <p className="text-muted ">
                      <span>$67.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 px-2 ">
                <div>
                  <div className="relative flex justify-end">
                    <div className="absolute z-1 bg-black text-white text-[13px]  mr-[25px] mt-[20px] px-[12px] py-[4px] max-md:hidden">
                      <span className="">-26%</span>
                    </div>
                    <div className="overflow-hidden">
                    <div className="absolute icon-effect items-center z-1 ml-[25px] mt-[20px] max-lg:hidden">
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="wishlist" className="img p-[12px]"><img src={wish} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="/" className="img p-[12px]"><img src={eye} alt=""/></NavLink>
                        </div>
                        <div className="bg-white icon rounded-full justify-center flex items-center mb-3">
                          <NavLink to="cart" className="img p-[12px]"><img src={cart} alt=""/></NavLink>
                        </div>
                      </div>
                      <img
                        decoding="async"
                        loading="lazy"
                        alt="custom-image"
                        className="hover:scale-110 duration-[2000ms] ease-in-out"
                        src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Snake-Plant.webp"
                      />
                    </div>
                    
                  </div>
                  <div className="text-center leading-10 p-4 px-md-2 text-sm-[12px]">
                    <h5>Snake plant</h5>
                    <p className="text-muted ">
                      <del className="pr-[8px]">$54</del>
                      <span>$40</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Interior;
