import './App.css'
import BlogThree from './Pages/BlogThree'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import ContactTwo from './Pages/ContactTwo'
import DefaultBlog from './Pages/DefaultBlog'
import Main from './Pages/Main'
import Wishlist from './Pages/Wishlist'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
//  const router = createBrowserRouter([
//   {
//     path:'/',element:<Main/>,
//     children:[
//       {path:'/',element:<Main/>},
//       {path:'cart' , element:<Cart/>},
//       {path:'wishlist',element:<Wishlist/>}
//     ]

//   }
//  ])
  return (
    <>
    {/* <RouterProvider router={router}> </RouterProvider> */}
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main/>}></Route>
        <Route exact path='cart' element={<Cart/>}></Route>
        <Route exact path='wishlist' element={<Wishlist/>}></Route>
        <Route exact path='defaultblog' element={<DefaultBlog/>}></Route>
        <Route exact path='contacttwo' element={<ContactTwo/>}></Route>
        <Route exact path='checkout' element={<Checkout/>}></Route>
        <Route exact path='blogthree' element={<BlogThree/>}></Route>
      </Routes>
    </BrowserRouter>
      {/* <Main/> */}
      {/* <ContactTwo/> */}
      {/* <BlogThree/> */}
      {/* <Wishlist/> */}
      {/* <Checkout/> */}
      {/* <Cart/> */}
    </>
  )
}

export default App
