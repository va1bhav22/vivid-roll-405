import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const isAuth = useSelector((state)=>state.authReducer.isAuth);
    if(!isAuth){
        console.log("private", location);
        return <Navigate to="/login" state={{from : location }}/>
    }
  return children ;
}

export default PrivateRoutes