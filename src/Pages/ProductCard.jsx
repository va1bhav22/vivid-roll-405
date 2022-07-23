import React from 'react'
import {Box, Flex,Image, Text,} from "@chakra-ui/react";
import styled from 'styled-components';


const ProductCard = ({title,image,price}) => {
    console.log(title,image,price)
  return (
    <Flex  direction={'column'} mb={"40px"} p={2} w={"90%"}  >
            <Box>
                <Image src={image} alt='title' />

            </Box>
            <Flex justify={"space-between"} fontSize={"10px"}>
            <Text >{title}</Text>
            <Text>₹{price}</Text>
      </Flex>
      </Flex>

  )
}

export default ProductCard