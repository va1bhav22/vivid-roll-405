import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Blazers from '../Pages/Blazers';
import HomePage from '../Pages/HomePage';
import Shirt from '../Pages/Shirt';
import Suits from '../Pages/Suits';
import ZaraAthleticz from '../Pages/ZaraAthleticz';
import Payment from '../Pages/Payment';
import CardPayment from '../Pages/CardPayment';

const NavbarRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/zara_athleticz' element={<ZaraAthleticz/>}/>
        <Route path='/suits' element={<Suits/>}/>
        <Route path='/blazers' element={<Blazers/>}/>
        <Route path='/shirt' element={<Shirt/>}/>
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/payment" element={<Payment />} />
    </Routes>
    </>
  )
}

export default NavbarRoutes