/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import {
  Flex,
  Button,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerFooter,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Box,
  Input,
  Stack,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';
import { GiBeachBag } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { height } from 'dom-helpers';
import { CartContext } from '../../hooks/useCart';

export default function Header1() {
  const { saveStorage } = useContext(CartContext);
  const cart1 = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const itemsCount = Object.keys(cart1.cart).length;
  const n = <span>{itemsCount}</span>;
  const [cart, setCart] = useState([]);
  const btnRef = React.useRef();

  function saveLocalStorage() {
    saveStorage();
  }

  return (
    <div
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      className="header1"
    >
      <Flex h="14rem" bg="gray.100" justifyContent="space-between">
        <Button
          _focus="none"
          style={{ marginTop: '40px', marginLeft: '10px' }}
          ref={btnRef}
          bg="#2e6a2c"
          color="gray.100"
          onClick={onOpen}
        >
          <GiHamburgerMenu style={{ fontSize: '20px' }} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton _focus="none" />
            <DrawerHeader>
              <Image src="/imagens/logoGall1.png" />
            </DrawerHeader>

            <DrawerBody  cursor="pointer" fontSize="20px">
              <Stack spacing="8">
                <Link href="/">
                  <Text fontWeight="medium">Home</Text>
                </Link>
                <Link href="/produtos">
                  <Text fontWeight="medium">Produtos</Text>
                </Link>
                <Link href="/sobrenos">
                  <Text fontWeight="medium">Sobre Nós</Text>
                </Link>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      _hover="false"
                      _focus="none"
                      fontSize="1.6rem"
                      fontWeight="light"
                      bg="none"
                      justifyContent="initial"
                    >
                      <Text fontWeight="medium" ml="-13px">
                        Contato
                      </Text>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent _focus="none" bg="#398b63">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader color="#ffffff">WhatsApp</PopoverHeader>
                    <PopoverBody color="#ffffff">
                      A Gall terá o maior prazer em lhe ajudar!
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Flex m="10px auto">
          <Image ml='-20px' w="14rem"  src="/imagens/logoGall1.png" />
        </Flex>
        <Link href="/carrinho">
          <Flex
            type="button"
            onClick={saveLocalStorage}
            position="absolute"
            right="-30px"
            cursor="pointer"
            mr="70px"
          >
            <GiBeachBag
              style={{ width: '7rem', marginTop: '20px', marginRight: '-50px' }}
              fontSize="2.9rem"
              color="#376b2e"
            />
            <Box
              textAlign="center"
              m="20px -20px 0 20px"
              w="1.9rem"
              h="20px"
              borderRadius="full"
              bg="red.700"
            >
              <Text color="gray.100" fontSize="0.9rem" fontSize="15">
                {itemsCount > 0 ? n : 0}
              </Text>
            </Box>
          </Flex>
        </Link>
        
      </Flex>
    </div>
  );
}
