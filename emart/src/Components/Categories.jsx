import React from 'react'
import img from '../assets/1.webp'


const Categories = () => {
  return (
    <div className=''>
      <div className='flex justify-end text-[45px] font-[Jost] px-[15px] pb-[19px] max-xl:justify-start'>
        <h1>Shop by categories</h1>
      </div>
      <div className=' pb-[108px]'>
        <div className='flex gap-2 max-xl:block mx-[42px] '>
            <div className='row gap-2 max-md:block max-xl:mb-2 '>
            <div className=' bg-green-400 col max-md:mb-2 '>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <div>Aloe Vera</div>
                    <div></div>
                </div>
            </div>
            <div className=' bg-green-400 col '>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <div>Old Lady Cactus</div>
                    <div></div>
                </div>
            </div>
            </div>
            <div className='row gap-2  max-md:block'>
            <div className=' bg-green-400 col max-md:mb-2'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <div>Calathea Ornata</div>
                    <div></div>
                </div>
            </div>
            <div className=' bg-green-400 col '>
                <div>
                    <img src={img} alt="" />
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
