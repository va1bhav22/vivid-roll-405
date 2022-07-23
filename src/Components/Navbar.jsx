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
        <Image className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' alt='zara logo'/>
        </div>
        <div className={styles.end_MainDiv}>
          <Link  to='/search'>SEARCH</Link>
          {/* <div style={{display: 'flex', marginTop: '-20px' ,justifyContent : 'end',marginLeft: '30px', gap:'20px'}}> */}
          <Link to='/login'>LOGIN</Link>
          <Link to='/help'>HELP</Link>
          <Link to='/cart' fontSize='14px'><IoCartOutline size={'30px'}/></Link>
          {/* </div> */}
          
        </div>
    </div>
  )
}

export default Navbar