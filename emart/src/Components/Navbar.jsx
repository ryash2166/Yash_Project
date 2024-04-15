import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function Navbar1() {

  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = (e) => {
      setShow(false);
  }

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 fixed-top">
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
              <Offcanvas.Body>
                <Nav className="justify-content-center  flex-grow-1 pe-3">
                  <NavDropdown title={
                    <div className='flex justify-between items-center gap-2 drop text-dark'>
                      Demo
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-5 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </div>
                  } id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={show}
                  onMouseEnter={showDropdown} 
                  onMouseLeave={hideDropdown}>

                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action2"> Fashion Hub </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action3"> Kids Wear </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action4"> Women Fashion </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action5"> Big Fashion </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action6"> Handicraft </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action7"> Interior </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action8"> Plant Garden </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action10"> Kids Toys </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action11"> Electronic Gadget </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action12"> Bathroom </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action13"> Bicycle </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action14"> Shoes </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action15"> Bags </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action16"> Soap </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action17"> Grocery Outlet <Badge className='ml-[6px] px-[10px] bg-[#eb5a49] text-center text-[1rem] font-medium pt-[1px] pb-[2px]' pill bg=''>new</Badge> </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action18"> Hiking Heaven <Badge className='ml-[6px] px-[10px] bg-[#eb5a49] text-center text-[1rem] font-medium pt-[1px] pb-[2px]' pill bg=''>new</Badge> </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="demo" href="#action19"> Exotic Fragrance <Badge className='ml-[6px] px-[10px] bg-[#eb5a49] text-center text-[1rem] font-medium pt-[1px] pb-[2px]' pill bg=''>new</Badge> </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={
                    <div className='flex justify-between items-center gap-2 drop text-dark'>
                      Product
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-5 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </div>
                  } id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={show}
                  onMouseEnter={showDropdown} 
                  onMouseLeave={hideDropdown}>
                    <NavDropdown.Item className="font-bold py-[8px]" id="product" href="#action20"> Product Styles </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action21"> Style One </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action21"> Style Two </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action22"> Style Three </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action23"> Style Four </NavDropdown.Item>
                    <NavDropdown.Item className="font-bold py-[8px]" id="product" href="#action24"> Product Gallery </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action25"> Vertical Carousel </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action26"> Carousel </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action27"> Horizontal Style </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action28"> Grid Style </NavDropdown.Item>
                    <NavDropdown.Item className="font-bold py-[8px]" id="product" href="#action29"> Product Style </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action30"> Simple Product </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action31"> Variable Product </NavDropdown.Item>

                  </NavDropdown>
                  <NavDropdown title={
                  <div className='flex justify-between items-center gap-2 drop text-dark'>
                      Shop
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-5 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </div>
                  } id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={show}
                  onMouseEnter={showDropdown} 
                  onMouseLeave={hideDropdown}>

                    <NavDropdown.Item className="font-bold py-[8px]" id="product" href="#action32"> Listing Layouts </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action33"> 4 Column </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action34"> 4 Column + Side bar </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action35"> 5 Column </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action36"> 5 Column + Side bar </NavDropdown.Item>
                    <NavDropdown.Item className="font-bold py-[8px]" id="product" href="#action37"> Shop Pages </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action38"> Wishlist </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action39"> Cart </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action40"> Checkout </NavDropdown.Item>
                    <NavDropdown.Item className="font-bold py-[8px]" id="product" href="#action41"> Sidebar Widgets </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action42"> Product Filter at Top </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action43"> Product Filter at Left </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action44"> Product Filter at Right </NavDropdown.Item>  
                    <NavDropdown.Item className="font-bold py-[8px]" id="product" href="#action45"> Shop Box Styles </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action46"> Shop Style One </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action47"> Shop Style Two </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action48"> Shop Style Three </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action49"> Shop Style Four </NavDropdown.Item>
                    <NavDropdown.Item className="text-danger py-[8px]" id="product" href="#action49"> Summer Sale 65% <span className='text-muted text-lg ml-4'>Shop Now</span>  </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title={
                  <div className='flex justify-between items-center gap-2 drop text-dark'>
                      Blog
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-5 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </div>
                  } id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={show}
                  onMouseEnter={showDropdown} 
                  onMouseLeave={hideDropdown}>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action33"> Default Blog </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action33"> Blog One </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action33"> Blog Two </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action33"> Blog Three </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title={
                  <div className='flex justify-between items-center gap-2 drop text-dark'>
                      Contact
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-5 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </div>
                  } id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={show}
                  onMouseEnter={showDropdown} 
                  onMouseLeave={hideDropdown}>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action33"> Contact One </NavDropdown.Item>
                    <NavDropdown.Item className="text-muted py-[8px]" id="product" href="#action33"> Contact Two </NavDropdown.Item>
                  </NavDropdown>                  
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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div className="max-xl:hidden" >
                <a href="/" className="flex pr-[20px]">
                <span className="wishlist_products_counter_text"><img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/heart-wishlist-icon.svg"/> </span>
                <span className="-mt-3">0</span>
                </a>
              </div>
              <div className="menu-mobile-icon cart-icon flex max-md:-mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  <span className="-mt-3">0</span>
              </div>
            </nav>
          </Container>
          
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;

