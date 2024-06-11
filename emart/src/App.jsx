import './App.css'
import BlogThree from './Pages/BlogThree'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import ContactTwo from './Pages/ContactTwo'
import Main from './Pages/Main'
import Wishlist from './Pages/Wishlist'
import Router from './Router/Router'
import ShopNow from './Pages/ShopNow'
import Eye from './Pages/Eye'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Success from './Pages/Success'
import BlogOne from './Components/BlogOne'

function App() {
 const router = createBrowserRouter([
  {
    path:'/',element:<Router/>,
    children:[
      {path:'/',element:<Main/>},
      {path:'cart' , element:<Cart/>},
      {path:'wishlist',element:<Wishlist/>},
      {path:'contacttwo',element:<ContactTwo/>},
      {path:'checkout',element:<Checkout/>},
      {path:'blogthree',element:<BlogThree/>},
      {path:'shopnow',element:<ShopNow/>},
      {path:'success',element:<Success/>},
      {path:'blogone',element:<BlogOne/>},
      {path:'eye', element:<Eye/>}
    ]

  }
 ])
  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  )
}

export default App
