import './App.css'
import Footer_1 from './Components/Footer_1'
import Mail from './Components/Mail'
import Navbar1 from './Components/Navbar'
import BlogThree from './Pages/BlogThree'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import ContactTwo from './Pages/ContactTwo'
import DefaultBlog from './Pages/DefaultBlog'
import Main from './Pages/Main'
import FullWidthTabs from './Pages/Profile'

// import Profile from './Pages/Profile'
import Wishlist from './Pages/Wishlist'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
//  const router = createBrowserRouter([
//   {
//     path:'/',element:<Main/>,
//     children:[
//       {path:'/',element:<Main/>},
//       {path:'cart' , element:<Cart/>},
//       {path:'wishlist',element:<Wishlist/>}
//       {path:'defaultblog',element:<DefaultBlog/>}
//       {path:'contacttwo',element:<ContactTwo/>}
//       {path:'checkout',element:<Checkoute/>}
//       {path:'blogthree',element:<BlogThree/>}
//     ]

//   }
//  ])
  return (
    <>
    {/* <RouterProvider router={router}> </RouterProvider> */}

    <BrowserRouter>
    <Navbar1/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='wishlist' element={<Wishlist/>}></Route>
        <Route path='defaultblog' element={<DefaultBlog/>}></Route>
        <Route path='contacttwo' element={<ContactTwo/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
        <Route path='blogthree' element={<BlogThree/>}></Route>
      </Routes>
      <Mail/>
      <Footer_1/>
      <FullWidthTabs/>
    </BrowserRouter>

      {/* <Main/> */}
      {/* <ContactTwo/> */}
      {/* <BlogThree/> */}
      {/* <Wishlist/> */}
      {/* <Checkout/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
    </>
  )
}

export default App
