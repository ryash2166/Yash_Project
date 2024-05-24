import React, { useRef } from 'react'
import Mail from '../Components/Mail'
import Footer_1 from '../Components/Footer_1'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Checkout = () => {
  const CartData = useSelector((state) => state.Reducer)
  const CheckOut = useRef()
  const amount = CartData.length && CartData.map((item) => item.d_price * item.quantity).reduce((prev, next) => prev += next)
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
  return (
    <div>
        {CartData.length === 0 ? (
          <div className=''>
              <section className='py-[180px] px-[15px] ' style={{backgroundImage: 'linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)'}}>
                  <div className='mx-[272px] max-2xl:mx-[50px] max-lg:mx-2'>
                      <div>
                          <div className=''>
                              <p className='px-[20px] text-[16px] text-[#515151] py-[15px] mb-[35px] bg-[#fff] shadow-lg shadow-slate-100'>Your cart is currently empty.</p>
                              <p className='mb-[40px] hover:-translate-y-1 duration-300 ease-in-out'>
                                  <NavLink to="/shopnow" className='border-[1px] px-[33px] py-[12px] text-white font-[Jost] text-[18px] bg-black'>Return to shop</NavLink>
                              </p>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
        ) : (
          <div className='py-[120px] px-[15px] max-[1024px]:py-20' style={{backgroundImage: 'linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)'}}>
            <div className='mx-[272px] max-2xl:mx-[50px] max-lg:mx-0'>
              <div>
                <div className='mb-[20px] bg-[#fff] shadow-lg'>    
                  <div className='px-[25px] py-[15px] text-[#565656]'>
                    Have a coupon? &nbsp; <span className='hover:text-black cursor-pointer'> Click here to enter your code </span> 
                  </div>
                </div>
                <div className=''>
                  <form action="https://formspree.io/f/xqkrodla" method="POST" className='flex justify-between max-[1024px]:block' ref={CheckOut}>
                    <div className='bg-[#fff] w-[65%] px-[25px] py-[30px] shadow-lg max-[1024px]:w-auto max-[1024px]:mb-[20px]'>
                      <div className="">
                        <h4 className='text-[25px] font-[Jost] text-[#00a12] mb-[20px] '>Billing Details</h4>
                        <div className=''>
                          <div className='row max-[1024px]:block'>  
                            <p className='mb-[15px] w-1/2 max-[1024px]:w-full'>
                              <span className=''>
                                <input type="text" name='First Name' placeholder='First Name' className='border-[1px] placeholder-black px-[20px] py-[12px] w-full outline-none' />
                              </span>
                            </p>
                            <p className='mb-[15px] w-1/2 max-[1024px]:w-full'>
                              <span className=''>
                                <input type="text" name='Last Name' placeholder='Last Name' className='border-[1px] placeholder-black px-[20px] py-[12px] w-full outline-none' />
                              </span>
                            </p>
                          </div>
                          <p className='mb-[15px]'>
                            <span>
                              <input type="text" name='Company Name' placeholder='Company Name' className='border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full' />
                            </span>
                          </p>
                          <p className='mb-[15px]'>
                            <span>
                              <input type="text" name='Country' placeholder='Country' className='border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full' />
                            </span>
                          </p>
                          <p className='mb-[15px]'>
                            <span>
                              <input type="text" name='Address Line 1' placeholder='Address' className='border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full' />
                            </span>
                          </p>
                          <p className='mb-[15px]'>
                            <span>
                              <input type="text" name='Address Line 2' placeholder='Aprtment, suite, unit, etc. (optional)' className='border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full' />
                            </span>
                          </p>
                          <p className='mb-[15px]'>
                            <span>
                              <input type="text" name='City' placeholder='City' className='border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full' />
                            </span>
                          </p>
                          <p className='mb-[15px]'>
                            <span>
                              <input type="text" name='State' placeholder='State' className='border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full' />
                            </span>
                          </p>
                          <p className='mb-[15px]'>
                            <span>
                              <input type="number" name='Postcode' placeholder='Postcode / Zip' className='border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full' />
                            </span>
                          </p>
                          <p className='mb-[15px]'>
                            <span>
                              <input type="number" name='Phone Number' placeholder='Phone' className='border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full' />
                            </span>
                          </p>
                          <p className='mb-[15px]'>
                            <span>
                              <input type="text" name='Email Address' placeholder='Email Address' className='border-[1px] placeholder-black px-[20px] py-[12px] outline-none w-full' />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <p className='mb-[20px]'>
                          <input type="checkbox" name='Checkbox' className='mr-[10px]'/>
                          <span className='align-middle font-[Jost] text-[16px]'>Ship to a different address?</span>
                        </p>
                        <p className=''>
                          <span className=''>
                          <textarea cols="40" rows="10" className="w-[100%] h-[150px] border-1 text-[16px] pl-[20px] pt-[20px] placeholder-black outline-none" aria-required="true" aria-invalid="false" placeholder="Notes about your order, e.g. special notes for delivery" name="message"></textarea>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='bg-[#fff] w-[33%] px-[25px] py-[30px] shadow-lg max-[1024px]:w-auto'>
                      <h4 className='mb-[20px] text-[#00a12] font-[Jost] leading-[1.45rem] text-[25px]'>Your Order</h4>
                      <table className='text-left table-fixed w-full'>
                        <thead>
                          <tr>
                            <th className='pb-[9px] pr-[12px]'></th>
                            <th className='pb-[9px] pr-[12px]'></th>
                          </tr>
                        </thead>
                        {CartData.map((item) => {
                          return(
                            <tbody key={item.id}>
                              <tr className=''>
                                <td className='py-[25px] pr-[12px] border-t-1'>
                                  <img src={item.img} alt="" className='w-[70px] h-[70px] object-cover' />
                                </td>
                                <td className='border-t-1 py-[10px] mr-[12px]'>
                                  <div className='text-[15px]'>{item.name}</div>
                                  <div className='mt-[5px] text-[15px] font-[600]'>$ {item.d_price * item.quantity}.00</div>
                                </td>
                                <td className='border-t-1 py-[10px] pr-[12px] text-right'>
                                  <p className='text-[16px] align-middle'>QTY &nbsp;<span className='font-[600]'>{item.quantity}</span></p>
                                </td>
                              </tr>
                            </tbody>
                          )
                        })}
                        <tfoot className='border-t-1'>
                          <tr>
                            <td className='border-t-1 py-[30px] pr-[12px]'>Subtotal</td>
                            <td className='border-t-1 py-[30px] pr-[12px]'></td>
                            <td className='border-t-1 py-[30px] pr-[12px] text-right font-[600]'>${amount}.00</td>
                          </tr>
                          <tr>
                            <td className='py-[30px]' colSpan="2">
                                <p className='pr-[40px]'>Shipping</p>
                                <p className=''>Flat rate:</p>
                            </td>
                            <td className='pt-[25px] pr-[12px] align-middle text-right font-[600]'>$10.00</td>
                          </tr>
                          <tr>
                            <td className='border-t-1 py-[30px] pr-[12px]'>Total</td>
                            <td className='border-t-1 py-[30px] pr-[12px]'></td>
                            <td className='border-t-1 py-[30px] pr-[12px] text-right font-[600]'>${amount + 10}.00</td>
                          </tr>
                        </tfoot>
                      </table>
                      <div>
                        <p className='py-[15px] text-[#515151]'>
                          Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.
                        </p>
                      </div>
                      <div className='py-[15px] border-t-1 botder-[#d3ced2]'>
                        <p className='mb-[20px] text-[13px] text-[#666666]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className='text-black'>privacy policy.</span></p>
                        {/* <button className='bg-black text-white px-[33px] mb-3 py-[11px] border-[1px] border-black hover:!bg-white hover:!text-black hover:-translate-y-2 duration-300 ease-in-out w-full font-[500]' role='submit'>Place Order</button> */}
                        <input className="h-[50px] bg-black text-white px-[33px] mb-3 py-[11px] border-[1px] border-black hover:!bg-white hover:!text-black hover:-translate-y-2 duration-300 ease-in-out w-full font-[500]  placeholder-black" type="submit" value="Place Order" />
                        <NavLink to='/shopnow'>
                          <button className='bg-black text-white px-[33px] py-[11px] border-[1px] border-black hover:!bg-white hover:!text-black hover:-translate-y-2 duration-300 ease-in-out w-full font-[500]'>
                            Return Shop
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            
          </div>
        )}

        <Mail/>
        <Footer_1/>
    </div>
  )
}

export default Checkout
