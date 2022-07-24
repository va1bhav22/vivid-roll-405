import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  Text,
  Container,
  FormLabel,
  FormControl,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {useSearchParams} from "react-router-dom";
import {getTshirtData,getSweatShirtData, getTracksuitData, getTrouserData,} from "../Redux/AppProvider/action"
import styles from "../Styled/Filter.module.css"

export const SSideMenuFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const dispatch= useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
  const urlColor= searchParams.getAll('color')
  const urlSize=searchParams.getAll("size")
const [color,setColor]=useState(urlColor||[]);
const [size,setSize]=useState(urlSize||[]);



  const handleColor = (e) => {
   const option=e.target.value;
   let newColor=[...color];
   if(color.includes(option)){
    newColor.splice(newColor.indexOf(option),1);

   }else{
    newColor.push(option);
   };
   setColor(newColor);
  }

  const handleSize = (e)=> {
    const option=e.target.value;
    
  //  let newSize=[...size];
  //  if(size.includes(option)){
  //   newSize.splice(newSize.indexOf(option),1);

  //  }else{
  //   newSize.push(option);
  //  };
  //  setSize(newSize);
  }

  useEffect(() => {
    if (color) {
      setSearchParams({ color: color });
      dispatch(getTshirtData({params:{color}}))
      dispatch(getTracksuitData({params:{color}}))
      dispatch(getTrouserData({params:{color}}))
      dispatch(getSweatShirtData({params:{color}}))
    }
  }, [color,dispatch, setSearchParams]);

  useEffect(() => {
    if (size) {
      setSearchParams({ size: size });
      dispatch(getTshirtData({params:{size}}))
      dispatch(getTracksuitData({params:{size}}))
      dispatch(getTrouserData({params:{size}}))
      dispatch(getSweatShirtData({params:{size}}))
    }
  }, [size,dispatch, setSearchParams]);
  return (
    <div className={styles.filter}>
      <Button ref={btnRef}  onClick={onOpen} bg="black" color={"white"} 
      _hover={{
        bg:"black",color:"white"
      }} borderRadius="none" 

      >
        Filter
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Price
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Slider aria-label="slider-ex-1" defaultValue={30}>
                        <SliderTrack>
                          <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                      </Slider>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Color
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Container
                        display={'grid'}
                        gridTemplateColumns="repeat(2,1fr)"
                        gap={'2%'}
                        textAlign="center"
                        justifyContent={'space-around'}
                        cursor={'pointer'}
                      >
                        <FormControl display={'flex'} gap="5px">
                          <Input
                            type={'checkbox'}
                            w="8px"
                            h="30px"
                            border="1px solid white"
                            bg={'black'}
                            onChange={handleColor}
                            value="BLACK"
                            defaultChecked={color.includes("BLACK")}
                          />
                          <FormLabel>Black</FormLabel>
                        </FormControl>
                        <FormControl display={'flex'} gap="5px">
                          <Input
                            type={'checkbox'}
                            w="8px"
                            h="30px"
                            border="1px solid white"
                            bg={'blue'}
                            onChange={handleColor}
                            value="BLUE"
                            defaultChecked={color.includes("BLUE")}
                          />
                          <FormLabel>Blue</FormLabel>
                        </FormControl>
                        <FormControl display={'flex'} gap="5px">
                          <Input
                            type={'checkbox'}
                            w="8px"
                            h="30px"
                            border="1px solid white"
                            bg={'yellow'}
                            onChange={handleColor}
                            value="YELLOW"
                            defaultChecked={color.includes("YELLOW")}
                          />
                          <FormLabel>Yellow</FormLabel>
                        </FormControl>
                        <FormControl display={'flex'} gap="5px">
                          <Input
                            type={'checkbox'}
                            w="8px"
                            h="30px"
                            border="1px solid white"
                            bg={'red'}
                            onChange={handleColor}
                            value="RED"
                            defaultChecked={color.includes("RED")}
                          />
                          <FormLabel>Red</FormLabel>
                        </FormControl>
                      </Container>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Size
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Container
                        display={'grid'}
                        gridTemplateColumns="repeat(3,1fr)"
                        gap={'2%'}
                        textAlign="center"
                        cursor={'pointer'}
                      >
                        <Box border={'1px solid black'} color="black">
                          <Text
                          onChange={handleSize}
                          value="S"
                          defaultChecked={size.includes("S")}
                          >S</Text>
                        </Box>
                        <Box border={'1px solid black'} color="black">
                          <Text
                           onChange={handleSize}
                           value="M"
                           defaultChecked={size.includes("M")}
                          >M</Text>
                        </Box>
                        <Box border={'1px solid black'} color="black">
                          <Text
                           onChange={handleSize}
                           value="L"
                           defaultChecked={size.includes("L")}
                          >L</Text>
                        </Box>
                        <Box border={'1px solid black'} color="black">
                          <Text
                           onChange={handleSize}
                           value="XL"
                           defaultChecked={size.includes("XL")}
                          >XL</Text>
                        </Box>
                      </Container>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </DrawerBody>

          {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button> */}
          {/* </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </div>
  )
}
