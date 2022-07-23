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
import React from 'react'

export const SSideMenuFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef}  onClick={onOpen} bg="black" color={"white"} 
      _hover={{
        bg:"black",color:"white"
      }}
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
                          <Text>S</Text>
                        </Box>
                        <Box border={'1px solid black'} color="black">
                          <Text>M</Text>
                        </Box>
                        <Box border={'1px solid black'} color="black">
                          <Text>L</Text>
                        </Box>
                        <Box border={'1px solid black'} color="black">
                          <Text>XL</Text>
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
    </>
  )
}
