import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { transform } from 'framer-motion';


function Navbar1() {

  let [demo, setDemo] = useState(false);
  let demoDropdown = (e)=>{
      setDemo(true);
  }
  let DemoDropdown = (e) => {
      setDemo(false);
  }

  let [product, setProduct] = useState(false);
  let productDropdown = (e)=>{
      setProduct(true);
  }
  let ProductDropdown = (e) => {
      setProduct(false);
  }

  let [shop, setShop] = useState(false);
  let shopDropdown = (e)=>{
      setShop(true);
  }
  let ShopDropdown = (e) => {
      setShop(false);
  }

  let [blog, setBlog] = useState(false);
  let blogDropdown = (e)=>{
      setBlog(true);
  }
  let BlogDropdown = (e) => {
      setBlog(false);
  }
  
  let [contact, setContact] = useState(false);
  let contactDropdown = (e)=>{
      setContact(true);
  }
  let ContactDropdown = (e) => {
      setContact(false);
  }


  return (
    <>
    {/* <div className=' bg-black h-10'></div> */}
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="block w-full fixed z-50 bg-white px-[20px] pr-[7px] max-lg:pr-0 max-lg:px-0">
          <Container fluid>
            <Navbar.Brand href="/" className='max-xl:order-2 max-md:ml-6'>
            <img alt="logo" className='h-9 w-auto max-md:h-7' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp" width="147" height="31"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='max-xl:order-1 border-0' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='bg-white'>
                <Nav className="justify-content-center flex-grow-1 pe-5 m-0 bg-white">
                  <NavDropdown title={
                    <div className='flex justify-between items-center gap-2 mx-2 drop text-dark  max-xl:border-b-[1px] max-xl:px-0'>
                      Demo
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-5 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </div>
                  } id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={demo}
                  onMouseEnter={demoDropdown} 
                  onMouseLeave={DemoDropdown}>
                    <div className='center -ml-[137px] absolute bg-white px-[20px]  max-2xl:p-0 max-xl:ms-0  max-xl:relative'>
                    <div className='h-[1px] bg-[#e5e7eb] w-[1800px]  max-xl:hidden'></div>
                    <section className='flex items-center ms-[300px]  h-[500px]  max-xl:block max-xl:h-auto'>
                      <div className='flex max-xl:block py-[50px] max-xl:py-0'>
                        <div className=' max-xl:hidden max-xl:ml-0'>
                          <div className='py-[50px] max-xl:p-0'>
                            <img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/01/Plant-and-garden-menu.webp" alt="" />
                            <div className=''>
                              <p className='mb-[8px] font-[jost] text-[21px] pt-[20px] pb-[10px]'>New Product on the market</p>
                              <p className='font-bold text-[16px] text-muted add'><a href="#">Shop Now</a></p>
                            </div>
                          </div>
                        </div>
                        <div className='pl-[60px] pr-2 max-xl:m-0 max-xl:my-0 max-xl:border-0 py-[50px] max-xl:p-0 leading-8 max-xl:leading-6'>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add animated-text"   href="#action2" data-splitting> Fashion Hub </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action3"> Kids Wear </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action4"> Women Fashion </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action5"> Big Fashion </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action6"> Handicraft </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action7"> Interior </NavDropdown.Item>
                        </div>
                        <div className='bg-[#e5e7eb] w-[1px] -my-[16px] ml-10 max-xl:hidden'></div>
                        <div className='py-[50px] pl-[50px] pr-[1px] max-xl:p-0 leading-8 max-xl:leading-6'>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action8"> Plant Garden </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action10"> Kids Toys </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action11"> Electronic Gadget </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action12"> Bathroom </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action13"> Bicycle </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action14"> Shoes </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action15"> Bags </NavDropdown.Item>
                        </div>
                        <div className='bg-[#e5e7eb] w-[1px] -my-[16px] ml-10 max-xl:hidden'></div>
                        <div className=' py-[50px] pl-[50px]  max-xl:p-0 leading-8 max-xl:leading-6'>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action16"> Soap </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action17"> Grocery Outlet <Badge className='ml-[6px] px-[10px] bg-[#eb5a49] text-center  font-medium py-[2px]' pill bg=''>new</Badge> </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action18"> Hiking Heaven <Badge className='ml-[6px] px-[10px] bg-[#eb5a49] text-center  font-medium py-[2px]' pill bg=''>new</Badge> </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted py-[8px] text-[17px] add"  href="#action19"> Exotic Fragrance <Badge className='ml-[6px] px-[10px] bg-[#eb5a49] text-center  font-medium py-[2px]' pill bg=''>new</Badge> </NavDropdown.Item>
                        </div>
                      </div>
        
                    </section>
                    <div className='h-[1px] bg-[#e5e7eb] -ml-[20px] max-xl:hidden'></div>
                    <section className='max-xl:hidden '>
                      <div className='flex items-center  py-[15px] pl-[1100px]'>
                        <p className='text-danger flex'>Summer Sale 65% Off 
                          <span>
                            <a href="#" className='text-muted ml-3 add'>Shop Now</a>
                          </span>
                        </p>
                      </div>
                    </section>
                    <div className='h-[1px] bg-[#e5e7eb]  -ml-[20px]  max-xl:hidden'></div>
                    </div>
                    
                    </NavDropdown>
                    <NavDropdown title={
                    <div className='flex justify-between items-center gap-2 mx-2 drop text-dark  max-xl:border-b-[1px] max-xl:px-0'>
                      Product
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-5 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </div>
                  } id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={product}
                  onMouseEnter={productDropdown} 
                  onMouseLeave={ProductDropdown}>
                    <div className='center -ml-[300px] absolute bg-white max-xl:p-0 max-xl:ms-0  max-xl:relative'>
                    <div className='h-[1px] bg-[#e5e7eb]  max-xl:hidden'></div>
                    <section className=' ms-[400px] pr-[230px] justify-center  item-center max-xl:m-0 max-xl:w-auto flex max-xl:block leading-8 max-xl:leading-6'>
                      <section className='flex max-xl:block'>
                        <div className='max-xl:hidden'>
                          <div className='pt-[50px] pb-[40px] pr-[10px] '>
                            <img width="242px" height="340px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/hover-image-3rd.webp" alt="hover-image-3rd" loading="lazy" />
                            <div className='pt-[20px] leading-6'>
                              <p className='text-[14px]'>Each product has a number for <br /> easy indentification.</p>
                            </div>
                          </div>
                        </div>
                        <div className='max-xl:hidden'>
                          <div className='pt-[50px] pb-[40px] pl-[10px]'>
                            <img width="242px" height="340px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp" alt="hover-image-3rd" loading="lazy" />
                            <div className='pt-[20px] leading-6'>
                              <p className='text-[14px] pb-[20px]'>It's just a product of your fevered <br /> imagination!</p>
                            </div>
                          </div>
                        </div>
                        <div className='py-[50px] pl-[70px] pr-[1px] max-xl:p-0'>
                          <div className='pt-[3px] pb-[32px] ml-2 max-xl:hidden'>
                            <img width="43px" height="43px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/dress-02.png" alt="" />
                          </div>
                          <NavDropdown.Item className="font-bold text-[18px] py-[8px]"  href="#action20"> Product Styles </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action21"> Style One </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action21"> Style Two </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action22"> Style Three </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action23"> Style Four </NavDropdown.Item>
                        </div>
                        <div className='bg-[#e5e7eb] w-[1px] ml-10 max-xl:hidden'></div>
                        <div className='py-[50px] pl-[50px] pr-[1px] max-xl:p-0'>
                          <div className='pt-[3px] pb-[32px] ml-2 max-xl:hidden'>
                            <img width="48px" height="48px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/school-bag.png" alt="" />
                          </div>
                          <NavDropdown.Item className="font-bold text-[18px] py-[8px]"  href="#action24"> Product Gallery </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action25"> Vertical Carousel </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action26"> Carousel </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action27"> Horizontal Style </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action28"> Grid Style </NavDropdown.Item>
                        </div>
                        <div className='bg-[#e5e7eb] w-[1px] ml-10 max-xl:hidden'></div>
                        <div className='py-[50px] pl-[50px] pr-[1px] max-xl:p-0'>
                          <div className='pt-[3px] pb-[32px] ml-2 max-xl:hidden'>
                            <img width="48px" height="48px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/chair-1.png" alt="" />
                          </div>
                          <NavDropdown.Item className="font-bold text-[18px] py-[8px]"  href="#action29"> Product Style </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action30"> Simple Product </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action31"> Variable Product </NavDropdown.Item>
                        </div>
                        </section>
                    </section>
                    <div className='h-[1px] bg-[#e5e7eb]  max-xl:hidden'></div>
                    <section className='mr-[200px] max-xl:hidden'>
                      <div className='flex justify-center items-center py-[15px] pl-[1000px] '>
                        <p className='text-danger flex'>Summer Sale 65% Off 
                          <span>
                            <a href="#" className='text-muted ml-3 add'>Shop Now</a>
                          </span>
                        </p>
                      </div>
                    </section>
                    <div className='h-[1px] bg-[#e5e7eb]  max-xl:hidden'></div>
                    </div>

                  </NavDropdown>
                  <NavDropdown title={
                  <div className='flex justify-between items-center gap-2 mx-2 drop text-dark  max-xl:border-b-[1px] max-xl:px-0'>
                      Shop
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-5 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </div>
                  } id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={shop}
                  onMouseEnter={shopDropdown} 
                  onMouseLeave={ShopDropdown}>
                    <div className='center -ml-[350px] absolute bg-white max-xl:p-0 max-xl:ms-0  max-xl:relative'>
                    <div className='h-[1px] bg-[#e5e7eb]  max-xl:hidden'></div>
                    <section className='ms-[400px] pr-[235px] justify-center max-xl:m-0 max-xl:p-0 max-xl:w-auto flex max-xl:block leading-8 max-xl:leading-6'>
                      <section className='flex max-xl:block max-xl:p-0'>
                        <div className='pt-[60px] pb-[50px] max-xl:p-0'>
                          <NavDropdown.Item className="font-bold text-[18px] py-[8px]"  href="#action32"> Listing Layouts </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action33"> 4 Column </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action34"> 4 Column + Side bar </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action35"> 5 Column </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action36"> 5 Column + Side bar </NavDropdown.Item>
                        <div className='mt-[20px]'>
                          <NavDropdown.Item className="font-bold text-[18px] py-[8px]"  href="#action37"> Shop Pages </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action38"> Wishlist </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action39"> Cart </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action40"> Checkout </NavDropdown.Item>
                        </div>
                        </div>
                        <div className='bg-[#e5e7eb] w-[1px] ml-10 max-xl:hidden'></div>
                        <div className='pl-[40px] pt-[60px] pb-[50px] max-xl:p-0'>
                          <NavDropdown.Item className="font-bold text-[18px] py-[8px]"  href="#action41"> Sidebar Widgets </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action42"> Product Filter at Top </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action43"> Product Filter at Left </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action44"> Product Filter at Right </NavDropdown.Item>  
                        </div>
                        <div className='bg-[#e5e7eb] w-[1px] ml-10 max-xl:hidden'></div>
                        <div className='pl-[40px] pt-[60px] pb-[50px] max-xl:p-0'>
                          <NavDropdown.Item className="font-bold text-[18px] py-[8px]"  href="#action45"> Shop Box Styles </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[18px] py-[8px] add"  href="#action46"> Shop Style One </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[18px] py-[8px] add"  href="#action47"> Shop Style Two </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[18px] py-[8px] add"  href="#action48"> Shop Style Three </NavDropdown.Item>
                          <NavDropdown.Item className="text-muted text-[18px] py-[8px] add"  href="#action49"> Shop Style Four </NavDropdown.Item>
                        </div>
                        <div className='bg-[#e5e7eb] w-[1px] ml-10 max-xl:hidden'></div>
                        <div className='max-xl:hidden ml-[50px] my-[60px] '>
                          <div className='relative'>
                            <img width="356px" height="450px" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/New-Project.webp" alt=""/>
                            <div className='text-[30px] absolute text-white -my-[225px] ml-[40px] tracking-wider'>
                              <p>On The Weekend</p>
                            </div>
                          </div>
                        </div>
                      </section>
                    </section>
                    <div className='h-[1px] bg-[#e5e7eb]   max-xl:hidden'></div>
                    <section className='mr-[200px] max-xl:hidden'>
                      <div className='flex justify-center items-center py-[15px]'>
                        <p className='text-danger flex'>Summer Sale 65% Off 
                          <span>
                            <a href="#" className='text-muted ml-3 add'>Shop Now</a>
                          </span>
                        </p>
                      </div>
                    </section>
                    <div className='h-[1px] bg-[#e5e7eb]  max-xl:hidden'></div>
                    </div>
                  </NavDropdown>

                <div className='hello flex max-xl:block'>

                  <NavDropdown title={
                  <div className='flex justify-between items-center drop mx-2 gap-2 text-dark max-xl:border-b-[1px] max-xl:px-0 '>
                      Blog
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-5 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </div>
                  } id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={blog}
                  onMouseEnter={blogDropdown} 
                  onMouseLeave={BlogDropdown}>
                    <div className='overflow-hidden pr-[100px] py-[10px]'>
                      <div className='overflow-hidden'>
                      <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action33"> Default Blog </NavDropdown.Item>
                      <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action33"> Blog One </NavDropdown.Item>
                      <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action33"> Blog Two </NavDropdown.Item>
                      <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action33"> Blog Three </NavDropdown.Item>
                      </div>
                    </div>
                  </NavDropdown>

                  <NavDropdown title={
                  <div className='flex justify-between items-center gap-2 mx-2 drop text-dark max-xl:border-b-[1px] max-xl:px-0'>
                      Contact
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-5 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </div>
                  } id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={contact}
                  onMouseEnter={contactDropdown} 
                  onMouseLeave={ContactDropdown}>
                    <div className='overflow-hidden pr-[50px] py-[10px]'>
                      <div className='overflow-hidden'>
                    <NavDropdown.Item className="text-muted text-[17px] py-[8px] add "  href="#action33"> Contact One </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted text-[17px] py-[8px] add"  href="#action33"> Contact Two </NavDropdown.Item>
                      </div>
                    </div>
                  </NavDropdown>                  
                </div>

                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <nav className='flex items-center pr-[20px] order-3'>
            <div className="max-xl:hidden" >
                <a href="/" className="flex pr-[20px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </a>
              </div>
              <div className="menu-mobile-icon cart-icon flex pr-[20px] max-md:pr-3 max-lg:block">
                <a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </a>
              </div>
              <div className="max-xl:hidden" >
                <a href="/" className="flex pr-[20px]">
                  <span className="wishlist_products_counter_text"><img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/heart-wishlist-icon.svg"/> </span>
                  <span className="-mt-3">0</span>
                </a>
              </div>
              <div className="menu-mobile-icon cart-icon flex max-md:-mr-4">
                <a href="/" className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  <span className="-mt-3">0</span>
                </a>
              </div>
            </nav>
          </Container>
          
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;



