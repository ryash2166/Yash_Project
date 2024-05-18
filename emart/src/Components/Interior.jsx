import React from "react";
import heart from '../assets/heart.svg'
import eye from '../assets/Eyes.svg'
import cart from '../assets/Cart.svg'
import { NavLink } from "react-router-dom";
import Monstera from '../assets/Monstera.webp'
import Haworthia from '../assets/Haworthia.webp'
import BirdsNest from '../assets/Birds-nest-fern-01.webp'
import PeaceLily from '../assets/peace-lily-02.webp'
import BarrelCactus from '../assets/barrel-cactus-01.webp'
import SnakePlant from '../assets/Snake-Plant.webp'

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
              className="hover:-translate-x-5 duration-[250ms] ease-in-out"
              alt="plant-gallery-left-img"
              loading="lazy"
            />
          </section>

          <section className="w-[57%] pl-5 max-md:px-1 max-md:block max-md:w-[100%] max-md:p-0">
            <div className="flex flex-wrap row">
              <div className="col-6 col-md-4 px-2 relative">
                <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-20%</span>
                </div>
                <div className='relative primary-img'>
                    <div className='overflow-hidden relative '>
                        <img  src={Monstera} loading='lazy' className='hover:scale-110 duration-[2000ms] ease-in-out' />
                    </div>
                    <div className='absolute left-[25px] top-[20px] max-sm:left-1 max-sm:top-1 max-lg: z-1 shop-icon'>
                        <div className=''>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <NavLink to="" className='p-[12px]'>
                                    <img src={heart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <button className='p-[12px]'>
                                    <img src={eye} alt="" loading='lazy' />
                                </button>
                            </div>
                            <div className=' flex justify-center bg-white rounded-full icon-1 mb-3'>
                                <NavLink to='shopnow' className='p-[12px]'>
                                    <img src={cart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
                      <h5>Monstera plant</h5>
                      <p className='text-muted '>
                          <del className='pr-[8px]'>$60</del>
                          <span>$48</span>
                      </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 px-2 relative">
                <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-20%</span>
                </div>
                <div className='relative primary-img'>
                    <div className='overflow-hidden relative '>
                        <img  src={Haworthia} loading='lazy' className='hover:scale-110 duration-[2000ms] ease-in-out' />
                    </div>
                    <div className='absolute left-[25px] top-[20px] max-sm:left-1 max-sm:top-1 max-lg: z-1 shop-icon'>
                        <div className=''>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <NavLink to="" className='p-[12px]'>
                                    <img src={heart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <button className='p-[12px]'>
                                    <img src={eye} alt="" loading='lazy' />
                                </button>
                            </div>
                            <div className=' flex justify-center bg-white rounded-full icon-1 mb-3'>
                                <NavLink to='shopnow' className='p-[12px]'>
                                    <img src={cart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
                      <h5>Haworthia</h5>
                      <p className='text-muted '>
                          <del className='pr-[8px]'>$87</del>
                          <span>$70</span>
                      </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 px-2 relative">
                <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-21%</span>
                </div>
                <div className='relative primary-img'>
                    <div className='overflow-hidden relative '>
                        <img  src={BirdsNest} loading='lazy' className='hover:scale-110 duration-[2000ms] ease-in-out' />
                    </div>
                    <div className='absolute left-[25px] top-[20px] max-sm:left-1 max-sm:top-1 max-lg: z-1 shop-icon'>
                        <div className=''>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <NavLink to="" className='p-[12px]'>
                                    <img src={heart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <button className='p-[12px]'>
                                    <img src={eye} alt="" loading='lazy' />
                                </button>
                            </div>
                            <div className=' flex justify-center bg-white rounded-full icon-1 mb-3'>
                                <NavLink to='shopnow' className='p-[12px]'>
                                    <img src={cart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
                      <h5>Bird's nest fern</h5>
                      <p className='text-muted '>
                          <del className='pr-[8px]'>$68</del>
                          <span>$54</span>
                      </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 px-2 relative">
                <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-11%</span>
                </div>
                <div className='relative primary-img'>
                    <div className='overflow-hidden relative '>
                        <img  src={PeaceLily} loading='lazy' className='hover:scale-110 duration-[2000ms] ease-in-out' />
                    </div>
                    <div className='absolute left-[25px] top-[20px] max-sm:left-1 max-sm:top-1 max-lg: z-1 shop-icon'>
                        <div className=''>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <NavLink to="" className='p-[12px]'>
                                    <img src={heart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <button className='p-[12px]'>
                                    <img src={eye} alt="" loading='lazy' />
                                </button>
                            </div>
                            <div className=' flex justify-center bg-white rounded-full icon-1 mb-3'>
                                <NavLink to='shopnow' className='p-[12px]'>
                                    <img src={cart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
                      <h5>Haworthia</h5>
                      <p className='text-muted '>
                          <del className='pr-[8px]'>$72</del>
                          <span>$64</span>
                      </p>
                  </div>
                </div>
              </div>
              
              <div className="col-6 col-md-4 px-2 relative">
                
                <div className='relative primary-img'>
                    <div className='overflow-hidden relative '>
                        <img  src={BarrelCactus} loading='lazy' className='hover:scale-110 duration-[2000ms] ease-in-out' />
                    </div>
                    <div className='absolute left-[25px] top-[20px] max-sm:left-1 max-sm:top-1 max-lg: z-1 shop-icon'>
                        <div className=''>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <NavLink to="" className='p-[12px]'>
                                    <img src={heart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <button className='p-[12px]'>
                                    <img src={eye} alt="" loading='lazy' />
                                </button>
                            </div>
                            <div className=' flex justify-center bg-white rounded-full icon-1 mb-3'>
                                <NavLink to='shopnow' className='p-[12px]'>
                                    <img src={cart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
                      <h5>Haworthia</h5>
                      <p className='text-muted '>
                          <span>$67</span>
                      </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 px-2 relative">
                <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-26%</span>
                </div>
                <div className='relative primary-img'>
                    <div className='overflow-hidden relative '>
                        <img  src={SnakePlant} loading='lazy' className='hover:scale-110 duration-[2000ms] ease-in-out' />
                    </div>
                    <div className='absolute left-[25px] top-[20px] max-sm:left-1 max-sm:top-1 max-lg: z-1 shop-icon'>
                        <div className=''>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <NavLink to="" className='p-[12px]'>
                                    <img src={heart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                            <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                <button className='p-[12px]'>
                                    <img src={eye} alt="" loading='lazy' />
                                </button>
                            </div>
                            <div className=' flex justify-center bg-white rounded-full icon-1 mb-3'>
                                <NavLink to='shopnow' className='p-[12px]'>
                                    <img src={cart} alt="" loading='lazy' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                  <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
                      <h5>Haworthia</h5>
                      <p className='text-muted '>
                          <del className='pr-[8px]'>$54</del>
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
