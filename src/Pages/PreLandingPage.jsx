import React from 'react';
import { Image,Box,Flex} from '@chakra-ui/react';
import { BiBody } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

// import { StyledComponent } from '@emotion/styled';
const PreLandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate("/in")
  }
  return (
    <div>
       <Box>
  <Image style={{position:"relative"}}  boxSize='100%'  src='https://static.zara.net/photos//contents/mkt/spots/ss22-studio-collection-maintenance/subhome-xmedia-worldwide//landscape-4dd0d4b7-3e8c-4541-8045-9e38557d0856_0.jpg?ts=1647452534065' alt='Dan Abramov' />
  <Image style={{position:"absolute",marginTop:"-48%",marginLeft:"100px"}} boxSize='12%' src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg'/>
    <Box style={{position:"absolute",marginTop:"-200px"}} >
     <Flex style={{gap:"20px",marginLeft:"70px"}}>
     <Box >
  <select size="1" style={{border:"1px solid gray",
        fontSize:"12px",
        height:"30px",
        width:"240px",}}>
    <option value="ind"> INDIA</option>
       
    <option value="USA">USA</option>
    <option value="CHINA">CHINA</option>
    <option value="AMERICA">AMERICA</option>
    <option value="CANADA">CANADA</option>
    <option value="AUSTRELIA">AUSTRELIA</option>
    <option value="RUSSIA">RUSSIA</option>
    <option value="SHRILANKA">SHRILANKA</option>
  </select>
  </Box>
 
   
     <Box>
         <select size="1" style={{border:"1px solid gray",overflowY:"scroll",
        width:"240px",
        fontSize:"12px",
        height:"30px"}}>
    <option  value="eng">English</option>
    <option  value="spa">Spanish</option>
    <option  value="rus">Russian</option>
    
  </select></Box>
       
 
   <Box>
    <button style={{background:"black",padding:"4.5px",
    fontSize:"14px",
    color:"#ffff",
    fontWeight:"bold",
    width:"50px"
     }}
     onClick={handleNavigate}>Go</button>
   </Box>
    
     </Flex>
    </Box>
   
   
   <Box style={{position:"absolute",marginTop:"-100px",marginLeft:"96%"}} boxSize={10} p="6px" bg="black" borderRadius="50%" color="#fff">
    
    <BiBody size={"0.5x"} />
  
    </Box>
  

</Box>
    </div>
  )
}

export default PreLandingPage

