import React from 'react'
// import { List } from '@chakra-ui/react';
import {
    Input,
    Box,
    Link,
    Stack,
    Text,
    Flex,
  } from '@chakra-ui/react';

  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'12px'} >
        {children}
      </Text>
    );
  };
  const ListChild = ({ children }) => {
    return (
      <Link  fontSize={'11px'} fontWeight={'340'} style={{lineHeight:"13px"}}>
        {children}
      </Link>
    );
  };
  
  

const ProductFooter = () => {
  return (
    <Box boxSize='100%'>
        
        <Box w={"75%" } margin="auto">



        <Stack >
    <Box style={{marginLeft:"-85%",fontSize:"13px",fontWeight:"bold"}}>JOIN OUR NEWSLETTER</Box>
  <Input variant='flushed'  fontSize='13px' placeholder='ENTER YOUR EMAIL ADDRESS'  size='md' w="300px"/>
 
   </Stack>

   <Flex fontSize='12px' gap='15px' color='gray' marginTop='100px'>
    <Box >
    <Link  target="_blank" rel="stylesheet" href="https://www.instagram.com/zara/" >INSTAGRAM</Link>
    </Box>
    <Box>
     <Link  target="_blank" rel="stylesheet" href="https://www.facebook.com/Zara" >FACEBOOK</Link>
    </Box>
    <Box>
     <Link  target="_blank" rel="stylesheet" href="https://twitter.com/ZARA" >TWITTER</Link>
    </Box>
    <Box>

     <Link  target="_blank" rel="stylesheet" href="https://es.pinterest.com/zaraofficial" >PINTEREST</Link>
    </Box>
    
    <Box>
     <Link  target="_blank" rel="stylesheet" href="http://www.youtube.com/user/zara" >YOUTUBE</Link>
    </Box>
   
    <Box>
     <Link target="_blank" rel="stylesheet" href="https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv" >SPOTIFY</Link>
    </Box>
     </Flex>

     <Stack style={{marginTop:"200px"}}>
        <Flex gap='40px'>
        <Stack align={'flex-start'}>
            <ListHeader>HELP</ListHeader>
            <ListChild href={'#'}>SHOP AT ZARA.COM</ListChild>
            <ListChild href={'#'}>PRODUCT</ListChild>
            <ListChild href={'#'}>PAYMENT</ListChild>
            <ListChild href={'#'}>SHIPPING</ListChild>
            <ListChild href={'#'}>Releases</ListChild>     
            <ListChild href={'#'}>EXCHANGES AND RETURNS</ListChild>
            <ListChild href={'#'}>SHOPS AND COMPANY</ListChild>
            <ListChild href={'#'}>CLOTHES COLLECTION PROGRAMME</ListChild>
            <ListChild href={'#'}>MY ACCOUNT</ListChild>             
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>FOLLOW US</ListHeader>
            <ListChild href={'#'}>NEWSLETTER</ListChild>
            <ListChild href={'#'}>INSTAGRAM</ListChild>
            <ListChild href={'#'}>FACEBOOK</ListChild>
            <ListChild href={'#'}>TWITTER</ListChild>
            <ListChild href={'#'}>PINTEREST</ListChild>
            <ListChild href={'#'}>YOUTUBE</ListChild>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader>COMPANY</ListHeader>
            <ListChild href={'#'}>ABOUT US</ListChild>
            <ListChild href={'#'}>JOIN LIFE</ListChild>
            <ListChild href={'#'}>OFFICES</ListChild>
            <ListChild href={'#'}>STORES</ListChild>
            <ListChild href={'#'}>WORK WITH US</ListChild>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>POLICIES</ListHeader>
            <ListChild href={'#'}>PRIVACY POLICY</ListChild>
            <ListChild href={'#'}>PURCHASE CONDITIONS</ListChild>
            <ListChild href={'#'}>COOKIE SETTINGS</ListChild>
          </Stack>
        </Flex>
     </Stack>
       
       <Stack marginTop="200px">
            <Flex>
            <ListChild style={{TextDecoder:"none"}} href={'#'}>ZARA</ListChild> &nbsp;
            <ListChild>/</ListChild>&nbsp;
            <ListChild href={'#'}> MAN</ListChild> &nbsp;
            <ListChild>/</ListChild>&nbsp;
            <ListChild href={'#'}>NEW</ListChild></Flex>
       </Stack>

       <Stack>
         <Flex justifyContent='space-between'>
         <Box fontSize='13px'>INDIA</Box>
         <Box fontSize='13px'>ENGLISH &nbsp; <span style={{color:"lightgray",fontSize:'13px'}}>© ALL RIGHTS RESERVED</span></Box>
         </Flex>
       </Stack>

       <Stack marginTop={"100px"}>
            <p  style={{marginLeft:"-77%",fontSize:"11px"}}>NAME AND ADDRESS OF THE MANUFACTURER:</p>
            <p   style={{marginLeft:"-76%",fontSize:"11px"}}>INDUSTRIA DE DISEÑO TEXTIL, S.A. (INDITEX, S.A.)</p>
            <p  style={{marginLeft:"-59%",fontSize:"11px"}}>AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUÑA), SPAIN</p>   
       </Stack>
         
        </Box>
        <Box h="100px">

        </Box>
        </Box>
  )
}
export default ProductFooter
