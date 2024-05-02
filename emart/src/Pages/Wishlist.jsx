import React from 'react'
import Navbar1 from '../Components/Navbar'
import Footer_3 from '../Components/Footer_3'

const Wishlist = () => {
  return (
    <div>
        <Navbar1/>
      <div className=''>
        <section className='py-[185px] px-[15px]' style={{backgroundImage: 'linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)'}}>
            <div className='mx-[272px] max-2xl:mx-[50px] max-lg:mx-2'>
                <div>
                    <div className=''>
                        <p className='px-[20px] text-[16px] text-[#515151] py-[15px] mb-[35px] bg-[#fff] shadow-lg shadow-slate-100'>Your Wishlist is currently empty.</p>
                        <p className='mb-[40px] hover:-translate-y-1 duration-300 ease-in-out'>
                            <a href="" className='border-[1px] px-[33px] py-[12px] text-white font-[Jost] text-[18px] bg-black'>Return to shop</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </div>
      <Footer_3/>
    </div>
  )
}

export default Wishlist
