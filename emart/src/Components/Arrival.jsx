import React, { useEffect } from "react";
import heart from "../assets/heart.svg";
import eye from "../assets/Eyes.svg";
import cart from "../assets/Cart.svg";
import { showSuccessMessage } from "../Components/Alerts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList } from "../CartRedux/Redux/Action";
import { ProductData } from "../CartRedux/ProductRedux/ProductAction";
import { NavLink } from "react-router-dom";

const Arrival = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ProductReducer);

  const Cart_Data = (item) => {
    dispatch(addToCart(item));
    showSuccessMessage(
      "Your item has been added to the Cart list!",
      "bottom-right"
    );
  };

  const Wish_Data = (item) => {
    dispatch(addToWishList(item));
    showSuccessMessage(
      "Your item has been added to the Wish list!",
      "bottom-right"
    );
  };

  useEffect(() => {
    dispatch(ProductData());
  }, []);

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
          <div className="flex flex-wrap row justify-evenly g-0">
            {data
              .flat()
              .slice(5 , 10)
              .map((item) => {
                return (
                    <div className="col-5 col-lg-2 relative" key={item.id}>
                      <div className="absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden">
                        <span className="text-white bg-black px-2">{item.discount}</span>
                      </div>
                      <div className="relative primary-img">
                        <div className="overflow-hidden">
                          <img
                            src={item.img}
                            loading="lazy"
                            className="hover:scale-110  duration-[2000ms] ease-in-out"
                          />
                        </div>
                        <div className="absolute left-[25px] top-[20px] max-sm:left-1 max-sm:top-1 max-lg: z-1 shop-icon">
                          <div className="">
                            <div className=" bg-white rounded-full flex justify-center icon-1 mb-3">
                              <button
                                onClick={() => Wish_Data(item)}
                                className="p-[12px]"
                              >
                                <img src={heart} alt="" loading="lazy" />
                              </button>
                            </div>
                            <NavLink to='eye'>
                              <div className=" bg-white rounded-full flex justify-center icon-1 mb-3">
                                <button className="p-[12px]">
                                  <img src={eye} alt="" loading="lazy" />
                                </button>
                              </div>
                            </NavLink>
                            <div className=" flex justify-center bg-white rounded-full icon-1 mb-3">
                              <button onClick={() => Cart_Data(item)} className="p-[12px]">
                                <img src={cart} alt="" loading="lazy" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]">
                          <h5>{item.name}</h5>
                          <p className="text-muted ">
                            <del className="pr-[8px]">${item.price}</del>
                            <span>${item.d_price}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                );
              })}
        </div>
      </section>
      <ToastContainer transition={Zoom} />
    </div>
  );
};

export default Arrival;
