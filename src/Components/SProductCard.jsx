import React from 'react'
import {Box, Flex,Image, Text,} from "@chakra-ui/react";
const SProductCard = ({avatar,name,price}) => {
  return (
    <div>
        <Flex direction={'column'} mb={"40px"} p={2}   >
            <Box>
                <Image src={avatar} alt='Unavailable' />

            </Box>
            <Flex justify={"space-between"} fontSize={"10px"}>
            <Text >{name}</Text>
            <Text>₹{price}</Text>
            </Flex>
            
           
        </Flex>
    </div>
  )
}

export default SProductCard