import React from 'react'
import {Box, Flex,Image, Text,} from "@chakra-ui/react";
import styled from 'styled-components';
const SProductCard = ({data}) => {
  console.log(data);
  return (
    <DataWrapper>
      {data.map((item)=>{
        return (

          <Flex key={item.id} direction={'column'} mb={"40px"} p={2} w={"90%"}  >
            <Box>
                <Image src={item.avatar} alt='Unavailable' />

            </Box>
            <Flex justify={"space-between"} fontSize={"10px"}>
            <Text >{item.name}</Text>
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