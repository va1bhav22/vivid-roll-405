import React from 'react'
import { SideMenu } from './SideMenu'
import styles from '../Styled/navbar.module.css';
import { Image,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {IoCartOutline} from 'react-icons/io5'


const Navbar = () => {
  return (
    <div className={styles.nav_cont}>
        <div className={styles.logo_div}>
        <SideMenu/>
        <Image className={styles.logo} src='https://imgs.search.brave.com/q76HRaf7wsVflNnR1cI3hqvR4YK448ZMVSK5NOhX898/rs:fit:1200:833:1/g:ce/aHR0cHM6Ly92aWFj/b21pdC5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDEv/WkFSQS1uZXctbG9n/by0wMC5qcGc' alt='zara logo'/>
        </div>
        <div className={styles.end_MainDiv}>
          <Link  to='/search'> <p style={{borderBottom:"1px solid black"}}>SEARCH</p></Link>
          <div style={{display: 'flex', marginTop: '-20px' ,justifyContent : 'end',marginLeft: '30px', gap:'20px'}}>
          <Link to='/login'>LOGIN</Link>
          <Link to='/help'>HELP</Link>
          <Link to='/cart' fontSize='14px'><IoCartOutline size={'30px'}/></Link>
          </div>
          
        </div>
    </div>
  )
}

export default Navbar