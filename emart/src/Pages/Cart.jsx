import React from 'react'
import Navbar1 from '../Components/Navbar'
import { Link, NavLink } from 'react-router-dom'
import Mail from '../Components/Mail'
import Footer_1 from '../Components/Footer_1'
import { useSelector } from 'react-redux'

const Cart = () => {
  
  const CartData = useSelector((state) => state.Reducer)
  console.log(CartData,'hello');
  const amount = CartData.length && CartData.map((item) => item.d_price).reduce((prev, next) => prev += next)

  return (
    <div className=''>
      {/* <Navbar1/> */}
      {CartData.length === 0 ? (
        <div className=''>
          <section className='py-[185px] px-[15px]' style={{backgroundImage: 'linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)'}}>
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
        <div style={{backgroundImage: 'linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)'}} >
          <div className="flex container p-[150px] mx-auto justify-between max-lg:block max-lg:p-0 max-lg:pt-[80px] max-lg:mb-4 max-lg:px-2">
        <table className="w-[65%] text-center table-fix bg-white max-lg:w-full max-lg:mb-4 shadow-2xl">
              <thead>
                <tr className="flex row justify-evenly pb-[20px] pt-[30px] px-[20px] max-lg:hidden">
                  <th className="col-6 font-normal">Products</th>
                  <th className="col-2 font-normal">Price</th>
                  <th className="col-2 font-normal">Quantity</th>
                  <th className="col-2 font-normal">Total</th>
                </tr>
              </thead>
            {
             CartData.map((item) => {
              return( 
                <tbody key={item.id} className=''>
                <tr className="flex justify-between pt-[30px] items-center py-[30px] max-lg:block">
                  <td className="flex col-6 items-center ps-3 max-lg:block max-lg:ps-0">
                    <img
                      className="h-28 w-28 object-cover "
                      src={item.img}
                      alt=""
                    />
                    <p className="col-6 max-lg:block">{item.name}</p>
                  </td>
                  <td className="col-2 max-lg:block">$ {item.d_price}</td>
                  <td className="col-2 max-lg:block">{1}</td>
                  <td className="col-2 max-lg:block">$ {item.d_price}</td>
                </tr>
              </tbody>
              )
             })
            } 
            </table>
            <div className="w-[32.5%] bg-white shadow-xl  max-lg:w-auto">
            <div className="p-[25px]">
                <h4 className="my-[8px]">Cart Totals</h4>
                <hr />
                <div className="flex justify-between mt-[30px] mb-[20px]">
                  <span>Subtotal</span>
                  <span>$ {amount}</span>
                </div>
                <hr />
                <div className="leading-10 my-[15px]">
                  <h1>Shipping</h1>
                  <div className="flex justify-between">
                    <span>Flat Rate:</span>
                    <span>$ 10</span>
                  </div>
                  <div>
                    Shipping to <span className="font-bold">CA</span>
                  </div>
                  <h4>Change address </h4>
                </div>
                <hr/>
              </div>
              <div className='flex justify-center pb-3'>
                <NavLink to="/shopnow" className='border-[1px] px-[33px] py-[12px] text-white font-[Jost] text-[18px] bg-black'>Return to shop</NavLink>
              </div>
            </div>
        </div>
        </div>
      )}
      <Mail />
     <Footer_1 />
    </div>
  )
}

export default Cart
