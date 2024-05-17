import React from 'react'
import visa from '../assets/visa.svg'
import maestro from '../assets/maestro.svg'
import american from '../assets/american.svg'
import { NavLink } from 'react-router-dom'

const Footer_3 = () => {
  return (
    <div>
      <footer className='bg-[#F2F2F2]'>
        <div>
            <section className='pb-[28px] pt-[90px] px-[15px] '>
                <div className="mx-[265px] max-2xl:mx-[100px] max-xl:mx-0">
                    <div>
                        <div>
                            <section className='flex max-[1024px]:block '>
                                <div>
                                    <div className="pr-[39px]">
                                        <div className='pb-[40px]'>
                                            <p className='font-[Jost] text-[26px]'>Newsletter</p>
                                        </div>
                                        <div>
                                            <div className='text-[16px] flex items-center pb-[20px] text-[#505050]'>Get free 20% discount for all products on your first order</div>
                                        </div>
                                        <div>
                                            <div className=''>
                                                <div className='col-lg-12 col-md-12 col-xs-12'>
                                                    <div className=''>
                                                        <div>
                                                            <p className='mt-2'>
                                                                <span className=''>
                                                                <input size="40" className="w-[100%]  h-[50px] mb-[20px] border-[1px] border-solid border-[#d9d9d9] bg-[#E7E7E7] outline-none leading-[28px] text-[16px] pl-[20px] " aria-required="true" aria-invalid="false" placeholder="Your Email" type="email" />
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className='relative flex justify-end'>
                                                            {/* <input class=" " type="submit" value="Send"/> */}
                                                            <div className='absolute bg-[#B23E24] -mt-[69px]'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[74px]  h-[48px] px-[6px] py-[10px] flex justify-center items-center hover:translate-x-3 max-md:hover:translate-x-2 duration-200 ease-in-out sepia-1 invert saturate-100 hue-rotate-[170deg]">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                                </svg>
                                                            </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex max-md:block max-[1024px]:pt-[20px]'>
                                    <div className=''>
                                        <div className='px-[51px] max-xl:px-0 pb-[20px]'>
                                            <div className='col-lg-12 col-md-12 col-xs-12'>
                                                <div className="pb-[30px] ">
                                                    <p className='text-[26px] text-[#000A12] font-[Jost]'> Quick contact </p>
                                                </div>
                                                <div className='pr-[80px] pb-[20px]'>
                                                    <p className='text-[16px] text-[#505050]'>
                                                        121 King St, Melbourne VIC 3000,Australia
                                                    </p>
                                                </div>
                                                <div className='col-lg-12 col-md-12 col-xs-12'>
                                                    <div className=''>
                                                        <NavLink to="" role='button' className='border-[1px] rounded-full inline-block px-[25px] py-[10px] border-[#8581ac] tracking-[0.1em] leading-[30px] '>
                                                            <span className='flex items-center justify-center'>
                                                                <span className='mr-3'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 23 23" fill="none">
                                                                        <path d="M17.8887 1L21.8887 5L17.8887 9" stroke="#B23E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M13.8887 5H21.8887" stroke="#B23E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M20.8881 16.9201V19.9201C20.8892 20.1986 20.8322 20.4743 20.7206 20.7294C20.6091 20.9846 20.4454 21.2137 20.2402 21.402C20.035 21.5902 19.7927 21.7336 19.5289 21.8228C19.265 21.912 18.9855 21.9452 18.7081 21.9201C15.631 21.5857 12.6751 20.5342 10.0781 18.8501C7.66194 17.3148 5.61345 15.2663 4.07812 12.8501C2.38809 10.2413 1.33636 7.27109 1.00812 4.1801C0.983127 3.90356 1.01599 3.62486 1.10462 3.36172C1.19324 3.09859 1.33569 2.85679 1.52288 2.65172C1.71008 2.44665 1.93792 2.28281 2.19191 2.17062C2.44589 2.05843 2.72046 2.00036 2.99812 2.0001H5.99812C6.48342 1.99532 6.95391 2.16718 7.32188 2.48363C7.68985 2.80008 7.93019 3.23954 7.99812 3.7201C8.12474 4.68016 8.35957 5.62282 8.69812 6.5301C8.83266 6.88802 8.86178 7.27701 8.78202 7.65098C8.70227 8.02494 8.51698 8.36821 8.24812 8.6401L6.97812 9.9101C8.40167 12.4136 10.4746 14.4865 12.9781 15.9101L14.2481 14.6401C14.52 14.3712 14.8633 14.1859 15.2372 14.1062C15.6112 14.0264 16.0002 14.0556 16.3581 14.1901C17.2654 14.5286 18.2081 14.7635 19.1681 14.8901C19.6539 14.9586 20.0975 15.2033 20.4146 15.5776C20.7318 15.9519 20.9003 16.4297 20.8881 16.9201Z" stroke="#B23E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className='text-[16px] text-[#333333]'>
                                                                    (888) 123 4567
                                                                </span>
                                                            </span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='max-[1024px]:ml-[100px] max-md:ml-0 '>
                                        <div className='pb-[25px]'>
                                            <p className='text-[26px] text-[#000A12] font-[Jost] tracking-tight'>Follow us</p>
                                        </div>
                                        <div>
                                            <ul className='flex items-center '>
                                                <li className=''>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none" className='mr-[11px]'>
                                                            <circle cx="21" cy="21" r="21" fill="#120B20"></circle>
                                                            <path d="M25 14H22.8182C21.8538 14 20.9288 14.3951 20.2469 15.0983C19.5649 15.8016 19.1818 16.7554 19.1818 17.75V20H17V23H19.1818V29H22.0909V23H24.2727L25 20H22.0909V17.75C22.0909 17.5511 22.1675 17.3603 22.3039 17.2197C22.4403 17.079 22.6253 17 22.8182 17H25V14Z" fill="#D9D9D9"></path>
                                                        </svg>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none" className='mr-[11px]'>
                                                            <ellipse cx="21.5" cy="21" rx="21.5" ry="21" fill="#120B20"></ellipse>
                                                            <path d="M30 15.0073C29.26 15.4967 28.4407 15.871 27.5736 16.1158C27.1083 15.6141 26.4898 15.2585 25.8018 15.0971C25.1138 14.9357 24.3896 14.9763 23.7271 15.2134C23.0645 15.4505 22.4956 15.8726 22.0973 16.4227C21.699 16.9728 21.4905 17.6244 21.5 18.2892V19.0137C20.142 19.0467 18.7964 18.7643 17.5831 18.1917C16.3697 17.6191 15.3262 16.774 14.5455 15.7318C14.5455 15.7318 11.4545 22.2522 18.4091 25.1501C16.8177 26.1629 14.9219 26.6708 13 26.5991C19.9545 30.2216 28.4545 26.5991 28.4545 18.2675C28.4538 18.0657 28.4331 17.8644 28.3927 17.6662C29.1814 16.937 29.7379 16.0163 30 15.0073V15.0073Z" fill="#D9D9D9"></path>
                                                        </svg>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                                        <circle cx="21" cy="21" r="21" fill="#120B20"></circle>
                                                        <path d="M25.1381 13.7969H17.4731C15.3565 13.7969 13.6406 15.5127 13.6406 17.6294V25.2943C13.6406 27.411 15.3565 29.1268 17.4731 29.1268H25.1381C27.2547 29.1268 28.9706 27.411 28.9706 25.2943V17.6294C28.9706 15.5127 27.2547 13.7969 25.1381 13.7969Z" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M24.3723 20.9795C24.4669 21.6175 24.3579 22.269 24.0609 22.8414C23.7639 23.4138 23.2939 23.878 22.7179 24.1679C22.1418 24.4579 21.489 24.5588 20.8523 24.4563C20.2156 24.3539 19.6275 24.0533 19.1714 23.5973C18.7154 23.1413 18.4148 22.5531 18.3124 21.9164C18.2099 21.2797 18.3108 20.6269 18.6008 20.0508C18.8907 19.4748 19.3549 19.0048 19.9273 18.7078C20.4997 18.4108 21.1512 18.3019 21.7892 18.3964C22.4399 18.4929 23.0423 18.7961 23.5074 19.2613C23.9726 19.7264 24.2758 20.3288 24.3723 20.9795Z" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M25.5212 17.2461H25.5292" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='px-[15px] max-md:pt-[20px] max-2xl:px-0 mt-2 border-t-[1px] border-solid border-[#9c9c9c] max-md:border-0'>
                                <div className='flex justify-around  max-md:block '>
                                    <div className='w-[50%] max-md:w-[100%] max-md:border-t-[1px] max-md:border-solid max-md:border-[#9c9c9c] py-[10px]'>
                                        <div>
                                            <ul className='flex items-center'>
                                                <li>
                                                    <span>
                                                        <img src={visa} alt="" className='mr-[15px]' />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src={american} alt="" className='mr-[15px]' />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src={maestro} alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='w-[50%] max-md:w-[100%] max-md:justify-start max-md:border-t-[1px] max-md:border-solid max-md:border-[#9c9c9c] py-[10px] flex justify-end items-center'>
                                        <div className=''>
                                            <p className='text-[16px] text-[#505050] leading-[1.625rem] tracking-[0.1em] font-[Jost] max-md:mt-3'>Designed by: 
                                                <span className='text-[#000000] text-[16px] font-[500] font-[Jost]'>&nbsp; Yash</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </footer>
    </div>
  )
}

export default Footer_3
