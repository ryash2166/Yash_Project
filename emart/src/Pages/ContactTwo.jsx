import React from "react";
import Navbar1 from "../Components/Navbar";
import Mail from "../Components/Mail";
import Footer_1 from "../Components/Footer_1";
const ContactTwo = () => {
  return (
    <div>
      {/* <Navbar1 /> */}
      <div className="pt-[70px]">
        <div>
          <section>
            <div className="flex max-xl:block">
              <div className="w-[49%] max-xl:w-auto max-md:mx-[20px]">
                <section className="">
                  <div className="">
                    <img
                      decoding="async"
                      width="975"
                      height="603"
                      src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/contact-img-1.jpg"
                      className="w-full h-[100vh] max-[1024px]:h-[40vh] object-cover"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </section>
              </div>
              <div className="w-[51.09%] max-xl:w-auto">
                <div>
                  <section>
                    <div>
                      <div className="pl-[80px] pr-[15px] max-xl:pl-[20px] max-xl:pt-[30px] ">
                        <div className="">
                          <p className="text-[#d87f7f] font-[Jost] text-[18px]">
                            We Are Happy To Answer You
                          </p>
                        </div>
                        <div className="pt-[23px] pb-[30px] max-md:pb-[15px] max-md:pt-[15px]">
                          <p className="font-[Jost] text-[45px] max-md:text-[30px] font-[400]">
                            Contact
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="pb-[10px]">
                    <div className="flex max-md:block">
                      <div>
                        <div className="pl-[80px] pr-[15px] max-xl:pl-[20px]">
                          <div className="pb-[14px]">
                            <div className="text-[18px] font-[Jost] font-[500]">
                              Address:
                            </div>
                          </div>
                          <div className="">
                            <div className="pr-[25px] pb-[20px] text-[17px] font-[Jost] text-[#666]">
                              121 King St, Melbourne VIC 3000, Australia
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="pl-[30px] pr-[15px] max-md:pl-[20px]">
                          <div className="pb-[14px]">
                            <p className="text-[18px] font-[Jost] text-[#666]">
                              <span className="text-[#000] font-[500]">
                                Telephone:
                              </span>
                              &nbsp;888 321 9874
                            </p>
                          </div>
                          <div>
                            <div className="pb-[20px]">
                              <p className="text-[18px] font-[Jost] text-[#666]">
                                <span className="text-[#000] font-[500]">
                                  Email:
                                </span>
                                &nbsp;info@example.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="">
                    <div>
                      <div className="pl-[80px] pr-[15px] mr-[47px] max-xl:pl-[20px]">
                        <div>
                          <p className="text-[#d87f7f] text-[18px] font-[Jost]">
                            Need Help
                          </p>
                        </div>
                        <div className="pb-[13px]">
                          <p className="font-[Jost] text-[45px] max-md:text-[27px] font-[400]">
                            Send Your Request
                          </p>
                        </div>
                      </div>
                      <div className="pl-[80px] pr-[30px] max-xl:pl-[20px] max-md:pr-[20px]">
                        <div>
                          <div className="col-lg-12 col-md-12 col-xs-12">
                            <div className="form-row">
                              <p>
                                <span className="text-[#666]">
                                  <input
                                    size="40"
                                    className="w-[100%] h-[50px] mb-[20px] border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px] pl-[20px] placeholder-black"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Name"
                                    type="text"
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-xs-12">
                            <p>
                              <span className="text-[#666]">
                                <input
                                  size="40"
                                  className="w-[100%] h-[50px] mb-[20px] border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px] pl-[20px] placeholder-black"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Email Address"
                                  type="email"
                                />
                              </span>
                            </p>
                          </div>
                          <div className="col-lg-12 col-md-12 col-xs-12">
                            <p>
                              <span className="text-[#666]">
                                <input
                                  size="40"
                                  className="w-[100%] h-[50px] mb-[20px] border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px] pl-[20px] placeholder-black"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Phone"
                                  type="text"
                                />
                              </span>
                            </p>
                          </div>
                          <div className="col-lg-12 col-md-12 col-xs-12">
                            <p>
                              <span className="text-[#666]">
                                <textarea
                                  cols="40"
                                  rows="10"
                                  className="w-[100%] h-[150px] mb-[20px] border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px] pl-[20px] pt-[20px] placeholder-black"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Massage"
                                  name="textarea-456"
                                ></textarea>
                              </span>
                            </p>
                          </div>
                          <div className="col-lg-12 col-md-12 col-xs-12 ">
                            <p className="bg-black mb-[20px]">
                              <span className="text-[#fff]">
                                <input
                                  className="w-[100%] h-[50px] border-[1px] border-solid border-[#d9d9d9] leading-[28px] text-[16px]  placeholder-black"
                                  type="submit"
                                  value="Send Massage"
                                />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <Mail />
      <Footer_1 /> */}
    </div>
  );
};

export default ContactTwo;
