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
  
const [active,setActive] = useState('man');

  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef}  onClick={onOpen} variant={'ghost'} >
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
            <Image className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' alt='zara logo'/>
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
                    
                    {active==="man" && <ListCard catagoryList={catagoryList}  cardIndex={0}/> }
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