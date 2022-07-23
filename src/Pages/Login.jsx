import { position } from '@chakra-ui/react';
import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate,useLocation} from 'react-router-dom';
import { login } from '../Redux/AuthProvider/action';
import { LOGIN_SUCCESS } from '../Redux/AuthProvider/actionTypes';
import styles from '../Styled/login.module.css'
import Register from './Register';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const location  = useLocation()
    const handleLogin = (e)=>{
        e.preventDefault();
        if(username && password){
                const params = {
                        username,
                        password
                }
                dispatch(login(params)).then((r)=>{
                        if(r === LOGIN_SUCCESS){
                                console.log("login", location);
                                if(location.state){
                                        navigate(`${location?.state?.from?.pathname}` , {replace : true})    
                                }
                                else{
                                        navigate('/in', {replace : true})
                                }
                           
                        }
                        else{
                                alert("invalid Crenditials");
                                console.log("invalid Crenditials")
                        }
                })
        }
        
        
    }
  return (
 
    < >
        <div styles={{display: 'flex',marginTop: '100px', position: 'relative'}}>
            <p className={styles.heading}>LOG IN</p>
            <div className={styles.input_wrap} >
                    <br/>
                    <input className={styles.inputText} value={username}
                    onChange={(e)=>setUsername(e.target.value)} type='text' required />
                    <label className={styles.label}>EMAIL</label>
            </div>
            <div className={styles.input_wrap} >
                    <br/>
                    <input className={styles.inputText} value={password} 
                    onChange={(e)=>setPassword(e.target.value)} type='text' required />
                    <label className={styles.label} >PASSWORD</label>
            </div>
            <div className={styles.btnDiv}>
                    <input className={styles.submitBtn} onClick={handleLogin} type='submit' value='LOG IN' />
                    
            </div>
            
        </div>
        <div style={{display : 'flex'}}>
        <Register/>
        </div>
        
        
       

    </>
       

  )
}

export default Login