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
import PreLandingPage from '../Pages/PreLandingPage';
import JeansPage from "../Pages/JeansPage";
import MenLandingPage from "../Pages/MenLandingPage"
import Navbar from '../Components/Navbar';
import AddToCartPage from '../Components/AddToCartPage';
const NavbarRoutes = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<PreLandingPage/>}/>
        <Route path='/in' element={<HomePage/>}/>
        <Route path='/zara_athleticz' element={<ZaraAthleticz/>}/>
        <Route path='/suits' element={<Suits/>}/>
        <Route path='/jeans' element={<JeansPage/>}/>
        <Route path='/description/:id' element={<Description />}></Route>
        <Route path="/cart" element={<AddToCartPage/>}/>
        <Route path='/shirt' element={<Shirt/>}/>
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/payment" element={<Payment />} />
    </Routes>
    </>
  )
}

export default NavbarRoutes