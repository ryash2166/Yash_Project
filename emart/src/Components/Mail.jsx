import React from 'react'

const Mail = () => {
  return (
    <div className='border-t-2 border-b-2'>
      <div className='px-[15px] pt-[112px] pb-[105px] max-md:pt-[50px] max-md:pb-[45px]'>
        <div className='mx-[272px] max-lg:mx-0'>
            <div className='mx-[15px]'>
                <section className='flex justify-center items-center text-center'>
                    <div className='flex justify-center'>
                        <div className=''>
                            <div className='flex items-center justify-center pb-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="42" viewBox="0 0 52 42" fill="none">
                                    <path d="M6.00098 1H46.001C48.751 1 51.001 3.25 51.001 6V36C51.001 38.75 48.751 41 46.001 41H6.00098C3.25098 41 1.00098 38.75 1.00098 36V6C1.00098 3.25 3.25098 1 6.00098 1Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M51.001 6L26.001 23.5L1.00098 6" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div className='text-[29px] font-[Jost] pb-[16px]'>
                                Subscribe newsletter
                            </div>
                            <div className='text-muted text-[16px] pb-[38px] '>
                                Subscribe Now and get more offers
                            </div>
                            <div className=''>
                                <div className='px-[258px] max-xl:px-0'>
                                    <div className='flex justify-center items-center gap-2 max-md:block'>
                                        <div className='max-md:mb-3'>
                                        <input className="bg-[#f2f2f2] text-[#666] py-3 pr-32 pl-3 max-sm:pr-0 max-sm:w-[290px] outline-none " placeholder="Your email address..." type="email" name="email-579"  />
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <input className="bg-black text-white py-3 px-10 max-md:px-[170px] max-sm:px-0 max-sm:w-[290px]" type="submit" value="Subscribe Now"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mail
