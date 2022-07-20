import React, { useState } from 'react'
import styles from '../Styled/sideMenu.module.css'
import {Link} from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Text,
  Image,
  Flex
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { catagoryList } from '../Data/SideMenuList';
import ListCard from './ListCard';

export function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menu,setMenu] = useState(false);
const [active,setActive] = useState('man');

  const btnRef = React.useRef()
const handleMenu = ()=>{
    setMenu(!menu);
    // onOpen()
}
  return (
    <>
      <Button ref={btnRef}  onClick={onOpen}  >
     <HamburgerIcon/> 
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size = 'md'
      >
        <DrawerOverlay />
        <DrawerContent>
       
          <DrawerHeader>
            <div flex-direction='row-reverse' style={{justifyContent : 'space-between'}}>
          
            <Link to='/'>
            <Image className={styles.logo} src='https://imgs.search.brave.com/q76HRaf7wsVflNnR1cI3hqvR4YK448ZMVSK5NOhX898/rs:fit:1200:833:1/g:ce/aHR0cHM6Ly92aWFj/b21pdC5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDEv/WkFSQS1uZXctbG9n/by0wMC5qcGc' alt='zara logo'/>
            </Link>
            <DrawerCloseButton />
            </div>
          </DrawerHeader>

          <DrawerBody>
            
            
            <br/>
            <nav className={styles.nav}>
            <ul>
                <li className={styles.category_link} onClick={()=>setActive("man")}>MAN</li>
                <li className={styles.category_link} onClick={()=>setActive("women")}>WOMAN</li>
                <li className={styles.category_link} onClick={()=>setActive("kids")}>KIDS</li>
                <li className={styles.category_link}> <Link to='/'> HOME</Link></li>
            </ul>
            <br />
            <br/>
            <div>
                <ul>
                    
                    {active==="man" && <ListCard catagoryList={catagoryList} cardIndex={0}/> }
                    {active==="women" && <ListCard catagoryList={catagoryList} cardIndex={1}/> }
                    {active==="kids" && <ListCard catagoryList={catagoryList} cardIndex={2}/> }
                </ul>
            </div>
            </nav>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
    </>
  )
}