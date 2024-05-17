import './App.css'
import BlogThree from './Pages/BlogThree'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import ContactTwo from './Pages/ContactTwo'
import DefaultBlog from './Pages/DefaultBlog'
import Main from './Pages/Main'
import Wishlist from './Pages/Wishlist'
import Router from './Router/Router'
import ShopNow from './Pages/ShopNow'
import Style_Four from './Pages/StyleFour'
import GridStyle from './Pages/GridStyle'
// import Profile from './Pages/Profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
 const router = createBrowserRouter([
  {
    path:'/',element:<Router/>,
    children:[
      {path:'/',element:<Main/>},
      {path:'cart' , element:<Cart/>},
      {path:'wishlist',element:<Wishlist/>},
      {path:'defaultblog',element:<DefaultBlog/>},
      {path:'contacttwo',element:<ContactTwo/>},
      {path:'checkout',element:<Checkout/>},
      {path:'blogthree',element:<BlogThree/>},
      {path:'stylefour',element:<Style_Four/>},
      {path:'shopnow',element:<ShopNow/>},
      {path:'gridstyle',element:<GridStyle/>},
      // {path:'profile',element:<RequireAuth><Profile/></RequireAuth>},
    ]

  }
 ])
  return (
    <>
    <RouterProvider router={router}> </RouterProvider>
{/* <Style_Four/> */}
    {/* <BrowserRouter>
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
    </BrowserRouter> */}

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
