import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Blazers from '../Pages/Blazers';
import HomePage from '../Pages/HomePage';
import Shirt from '../Pages/Shirt';
import Suits from '../Pages/Suits';
import ZaraAthleticz from '../Pages/ZaraAthleticz';
import Payment from '../Pages/Payment';
import Description from "../Components/Description"
import CardPayment from '../Pages/CardPayment';
import SearchPage from '../Pages/SearchPage';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import Otp from "../Pages/Otp";
import PreLandingPage from '../Pages/PreLandingPage';
import JeansPage from "../Pages/JeansPage";
import MenLandingPage from "../Pages/MenLandingPage"
import Navbar from '../Components/Navbar';
import AddressPage from "../Pages/AddressPage";
import AddToCartPage from '../Components/AddToCartPage';
import STshirt from '../Pages/STshirt';
const NavbarRoutes = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<PreLandingPage/>}/>
        <Route path='/in' element={<HomePage/>}/>
        <Route path='/zara_athleticz' element={<ZaraAthleticz/>}/>
        <Route path='/suits' element={<Suits/>}/>
        <Route path='/jeans' element={<JeansPage/>}/>
        <Route path='/description/:key/:id' element={<Description />}></Route>
        <Route path="/cart" element={<AddToCartPage/>}/>
        <Route path='/athletics' element={<STshirt/>}/>
        <Route path="/address" element={<AddressPage />}/>
        <Route path='/shirt' element={<Shirt/>}/>
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/otp' element={<Otp />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default NavbarRoutes