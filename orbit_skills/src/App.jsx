import { useTranslation } from 'react-i18next';
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';



function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

