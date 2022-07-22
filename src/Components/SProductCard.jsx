import React from 'react'
<<<<<<< HEAD
import {Box, Flex,Image, Text} from "@chakra-ui/react";
const SProductCard = ({avatar,name,price}) => {
=======
import {Box, Flex,Image, Text,} from "@chakra-ui/react";
import styled from 'styled-components';
const SProductCard = ({data}) => {
  console.log(data);
>>>>>>> 3d83ba3793f2c45df2481b79c73c702767b3febd
  return (
    <DataWrapper>
      {data.map((item)=>{
        return (

          <Flex key={item.id} direction={'column'} mb={"40px"} p={2} w={"90%"}  >
            <Box>
<<<<<<< HEAD
                <Image src={avatar } alt='Unavailable' />
=======
                <Image src={item.image} alt='Unavailable' />
>>>>>>> 3d83ba3793f2c45df2481b79c73c702767b3febd

            </Box>
            <Flex justify={"space-between"} fontSize={"10px"}>
            <Text >{item.title}</Text>
            <Text>₹{item.price}</Text>
            </Flex>
            
      
        </Flex>
          )
        })}
    </DataWrapper>
  )
}

const DataWrapper=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
justify-content:space-around;
border:1px solid red;
color:white;
background-color:black;
width:80%;
margin:auto;
`;
export default SProductCard