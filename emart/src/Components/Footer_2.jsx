import React from 'react'
import visa from '../assets/visa.svg'
import web from '../assets/web.svg'
import maestro from '../assets/maestro.svg'
import discover from '../assets/discover.svg'
import american from '../assets/american.svg'

const Footer_2 = () => {
  return (
    <div>
      <footer className=''>
        <div className='bg-[#efefef]'>
            <section className='pt-[78px] px-[15px] pb-[90px] max-md:pt-[20px]  max-lg:px-0 max-lg:pb-[40px] '>
                <div className="mx-[200px] row max-md:block max-lg:mx-0 max-2xl:mx-[20px] max-lg:pl-[10px]">
                    <div className='col-md-6 col-lg-6 col-xl-3'>
                        <div className='pt-[20px]  max-2xl:pr-0 max-md:px-0 max-md:mr-0 pr-3 -mr-[15px] border-e-[1px] border-solid border-[#d2d2d2] max-xl:border-0'>
                            <div>
                                <div className='pb-[20px] max-md:pb-4'>
                                <img width="148" height="39" src="https://emart.wpthemedemos.com/wp-content/uploads/2023/02/e-mart-logo-03.svg" className="" alt="" loading="lazy" />
                                </div>
                            </div>
                            <div className=''>
                                <div className='pb-[33px] pt-[20px] font-[Jost] text-[18px] text-[#585858] max-md:pb-4'>
                                    Molestie vitae massa felis, aliquam lectus at. Ultricies et, quis sit fermentum.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-3'>
                        <div className="mx-[15px]  pl-[41px] max-md:mx-0 max-md:pl-0  max-md:pt-2">
                            <div className='pb-[20px] text-[19px] font-[Jost] font-[500] max-md:pb-3'>Quick Link</div>
                            <div>
                                <ul className='text-[#585858] text-[18px] '>
                                    <li className='mb-2 font-[Jost]'>About</li>
                                    <li className='mb-2 font-[Jost]'>Product</li>
                                    <li className='mb-2 font-[Jost]'>Responsibilty</li>
                                    <li className='mb-2 font-[Jost]'>Career</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-3'>
                        <div className="mx-[15px]  pl-[41px] max-md:mx-0 max-md:pl-0 max-xl:mx-0 max-xl:pl-[10px] max-xl:pt-2">
                            <div className='pb-[20px] text-[19px] font-[Jost] font-[500] max-md:pb-3'>Service</div>
                            <div>
                                <ul className='text-[#585858] text-[18px] font-[Jost]'>
                                    <li className='mb-2 font-[Jost]'>My Account</li>
                                    <li className='mb-2 font-[Jost]'>Checkout Page</li>
                                    <li className='mb-2 font-[Jost]'>Help Center</li>
                                    <li className='mb-2 font-[Jost]'>Terms & Condition</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-3'>
                        <div className="mx-[15px] pl-[41px] max-md:mx-0 max-md:pl-0 max-xl:pt-2">
                            <div className='pb-[20px] text-[19px] font-[Jost] font-[500] max-md:pb-3'>More</div>
                            <div>
                                <ul className='text-[#585858] text-[18px]'>
                                    <li className='mb-2 font-[Jost]'>Gift Card</li>
                                    <li className='mb-2 font-[Jost]'>Lookbook</li>
                                    <li className='mb-2 font-[Jost]'>Rewards Program</li>
                                    <li className='mb-2 font-[Jost]'>Wedding Dress</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='border-t-[1px] bg-[#efefef] border-[#c8c8c8] border-solid py-[20px] px-[15px]'>
                <div className='mx-[200px] flex max-lg:mx-0 max-2xl:mx-[20px] max-md:block items-center justify-center'>
                    <div className='w-[50%] max-md:w-auto'>
                        <div className='mr-[15px] max-md:mr-0'>
                            <div>
                                <ul className='flex gap-x-5 max-md:gap-x-2'>
                                    <li>
                                        <span>
                                            <img src={visa} alt="" className='w-[45px]' />
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={web} alt="" className='w-[45px]' />
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={maestro} alt="" className='w-[45px]' />
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={discover} alt="" className='w-[45px] mr-[15px]' />
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={american} alt="" className='w-[45px] mr-[15px]' />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] max-md:w-auto max-md:text-start text-right max-md:pt-3'>
                        <div className='ml-[15px] max-md:ml-0'>
                            <div>
                                <p className='font-[Jost] text-[18px] text-[#666]'>Designed by: <b>Yash</b> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </footer>
    </div>
  )
}

export default Footer_2
