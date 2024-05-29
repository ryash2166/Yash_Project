import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ShippingLable = () => {
  return (
    <div>
      <section className='py-[40px] border-1 bg-[#e7e2dd]'>
        <div className='row mx-[42px] max-lg:gap-y-10 max-xl:m-0'>
            <div className='col-md-6 col-xl-3'>
                <div className='flex items-center justify-center max-md:block '>
                    <div className='max-md:flex max-md:justify-center max-md:items-center cursor-pointer max-md:mb-3'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <img decoding="async" src="https://emart.wpthemedemos.com/women-fahion/wp-content/uploads/sites/5/2022/11/Free-shipping-2-10.svg" title="" alt="" loading="lazy" className='max-md:w-[60px] w-[35px] hover:-translate-x-3 duration-300 ease-out'/>
                    </AnimationOnScroll>
                    </div>
                    <div className='pl-[30px] pr-[15px] max-md:p-0'>
                        <div className='max-md:flex max-md:justify-center max-md:items-center'>
                        <AnimationOnScroll animateIn="animate__fadeInUp">

                            <p className='text-[20px] font-[Jost] mb-[8px] font-[500]'>Free shipping</p>
                        </AnimationOnScroll>
                        </div>
                        <div className='max-md:flex max-md:justify-center max-md:items-center'>
                        <AnimationOnScroll animateIn="animate__fadeInUp">

                            <p className='text-muted text-[16px] tracking-wider'>On order over $1499</p>
                        </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-xl-3'>
            <div className='flex items-center justify-center max-md:block'>
                    <div className='max-md:flex max-md:justify-center max-md:items-center cursor-pointer max-md:mb-3'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <img decoding="async"  src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Quick-payment-svg-10.svg" className="max-md:w-[40px] w-[25px] hover:-translate-x-3 duration-300 ease-out" alt="Quick-payment-svg-10" loading="lazy" />
                    </AnimationOnScroll>
                    </div>
                    <div className='pl-[30px] -mr-[15px] max-md:p-0'>
                        <div className='max-md:flex max-md:justify-center max-md:items-center'>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <p className='text-[20px] font-[Jost] mb-[8px] font-[500]'>Quick payment</p>
                        </AnimationOnScroll>
                        </div>
                        <div className='max-md:flex max-md:justify-center max-md:items-center'>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <p className='text-muted text-[16px] tracking-wider'>Online quick payment</p>
                        </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-xl-3'>
            <div className='flex items-center justify-center  max-md:block '>
                    <div className='max-md:flex max-md:justify-center max-md:items-center cursor-pointer max-md:mb-3'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <img decoding="async" src="https://emart.wpthemedemos.com/women-fahion/wp-content/uploads/sites/5/2022/11/Easy-return-1-10.svg" title="" alt="" loading="lazy" className='max-md:w-[60px] w-[35px] hover:-translate-x-3 duration-300 ease-out'/>
                    </AnimationOnScroll>
                    </div>
                    <div className='pl-[30px] -mr-[10px] max-md:pl-3 max-md:m-0'>
                        <div className='max-md:flex max-md:justify-center max-md:items-center'>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <p className='text-[20px] font-[Jost] mb-[8px] font-[500]'>Easy Return</p>
                        </AnimationOnScroll>
                        </div>
                        <div className='max-md:flex max-md:justify-center max-md:items-center'>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <p className='text-muted text-[16px] tracking-wider'>Return within 24 hours</p>
                        </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-xl-3'>
                <div className='flex items-center justify-center max-md:block '>
                    <div className='max-md:flex max-md:justify-center max-md:items-center cursor-pointer max-md:mb-3'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <img decoding="async" src="https://emart.wpthemedemos.com/women-fahion/wp-content/uploads/sites/5/2022/11/Support-1-15.svg" title="" alt="" loading="lazy" className='max-md:w-[50px] w-[35px] hover:-translate-x-3 duration-300 ease-out'/>
                    </AnimationOnScroll>
                    </div>
                    <div className='pl-[30px] pr-[15px] max-md:p-0'>
                        <div className='max-md:flex max-md:justify-center max-md:items-center'>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <p className='text-[20px] font-[Jost] mb-[8px] font-[500]'>24/7 Support</p>
                        </AnimationOnScroll>
                        </div>
                        <div className='max-md:flex max-md:justify-center max-md:items-center'>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <p className='text-muted text-[16px] tracking-wider'>Customer Support</p>
                        </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
        
    </div>
  )
}

export default ShippingLable
