import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Blazers from '../Pages/Blazers';
import HomePage from '../Pages/HomePage';
import Shirt from '../Pages/Shirt';
import Suits from '../Pages/Suits';
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
import PrivateRoutes from './PrivateRoute';
import MensBlazerCategory from '../Components/MensBlazerCategory';
const NavbarRoutes = () => {
  return (
    <>
       <Navbar/>
    <Routes>
      <Route path='/' element={<PreLandingPage/>}/>
        <Route path='/in' element={<HomePage/>}/>
        <Route path='/suits' element={<Suits/>}/>
        <Route path='/jeans' element={<JeansPage/>}/>
        <Route path='/description/:key/:id' element={<Description />}></Route>
        <Route path="/cart" element={<AddToCartPage/>}/>
        <Route path='/athletics' element={<STshirt/>}/>
        <Route path="/address" element={<AddressPage />}/>
        <Route path='/mens_blazer' element={<MensBlazerCategory />}></Route>
        <Route path="/cardpayment" element={
        <PrivateRoutes>
            <CardPayment />
        </PrivateRoutes>
        } />
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