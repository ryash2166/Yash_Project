import React from "react";
import heart from '../assets/heart.svg'
import eye from '../assets/Eyes.svg'
import cart from '../assets/Cart.svg'
import Monstera from '../assets/Monstera.webp'
import Haworthia from '../assets/Haworthia.webp'
import BirdsNest from '../assets/Birds-nest-fern-01.webp'
import BirdsLeslie from '../assets/Birds-Nest-Leslie-Fern.webp'
import { NavLink } from "react-router-dom";

const Arrival = () => {
  

  return (
    <div>
      <section className="pt-[110px] px-[15px] pb-[20px] max-lg:pt-[50px] max-lg:pb-[37px]">
        <div className="mx-[42px] max-lg:mx-0 max-lg:flex max-lg:justify-center">
          <div className="mb-[8px]">
            <h1 className="font-[Jost] text-[45px] max-md:text-[32px]">
              New arrivals
            </h1>
          </div>
        </div>
      </section>
      <section className="px-[15px] max-md:px-0 pb-[65px]">
        <div className="max-lg:ml-0">
          <div className="flex flex-wrap row justify-evenly g-0">
            <div className="col-5 col-lg-2 relative">
              <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-33%</span>
                </div>
                <div className='relative primary-img'>
                    <div className='overflow-hidden'>
                        <img  src={BirdsLeslie} loading='lazy' className='hover:scale-110  duration-[2000ms] ease-in-out' />
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
                      <h5>Bird's nest leslie</h5>
                      <p className='text-muted '>
                          <del className='pr-[8px]'>$45</del>
                          <span>$30</span>
                      </p>
                  </div>
                </div>
            </div>
            <div className="col-5 col-lg-2 relative">
              <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-20%</span>
                </div>
                <div className='relative primary-img'>
                    <div className='overflow-hidden'>
                        <img  src={Monstera} loading='lazy' className='hover:scale-110  duration-[2000ms] ease-in-out' />
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
            <div className="col-5 col-lg-2 relative">
              <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-20%</span>
                </div>
                <div className='relative primary-img'>
                    <div className='overflow-hidden'>
                        <img  src={Haworthia} loading='lazy' className='hover:scale-110  duration-[2000ms] ease-in-out' />
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
                      <h5>Hawortiha</h5>
                      <p className='text-muted '>
                          <del className='pr-[8px]'>$87</del>
                          <span>$70</span>
                      </p>
                  </div>
                </div>
            </div>

            <div className="col-5 col-lg-2 relative">
              <div className='relative primary-img'>
                  <div className='overflow-hidden'>
                      <img  src={Monstera} loading='lazy' className='hover:scale-110  duration-[2000ms] ease-in-out' />
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
                        <span>$60</span>
                    </p>
                </div>
              </div>
            </div>

            <div className="col-5 col-lg-2 relative">
              <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-21%</span>
                </div>
                <div className='relative primary-img '>
                    <div className='overflow-hidden'>
                        <img  src={BirdsNest} loading='lazy' className='hover:scale-110  duration-[2000ms] ease-in-out' />
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arrival;
