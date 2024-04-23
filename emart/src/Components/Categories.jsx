import React from 'react'
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img4 from '../assets/4.webp'



const Categories = () => {
  return (
    <div className='mx-[30px] max-lg:mx-[15px] pb-[50px]'>
      <div className='flex justify-end text-[45px] font-[Jost] px-[15px] pb-[19px] max-xl:justify-start max-md:justify-center max-md:text-[30px] '>
        <h1 className='tracking-normal'>Shop by categories</h1>
      </div>
      <div className=' pb-[108px]'>
        <div className='flex gap-4 max-xl:block '>
            <div className='row  max-md:block max-xl:mb-2 '>
            <div className='  col max-md:mb-2 '>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <div>Aloe Vera</div>
                    <div></div>
                </div>
            </div>
            <div className='col'>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <div>Old Lady Cactus</div>
                    <div></div>
                </div>
            </div>
            </div>
            <div className='row  max-md:block'>
            <div className='col max-md:mb-2'>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <div>Calathea Ornata</div>
                    <div></div>
                </div>
            </div>
            <div className='col'>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div>
                    <div>Green Aloevera</div>
                    <div></div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
