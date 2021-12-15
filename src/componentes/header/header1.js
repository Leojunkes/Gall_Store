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
import React from 'react';
import { height } from 'dom-helpers';

export default function Header1() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      className="header1"
    >
      <Flex h="8rem" bg="gray.100" justifyContent="space-between">
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
            <DrawerCloseButton />
            <DrawerHeader>
              <Image src="/imagens/logoGall1.png" />
            </DrawerHeader>

            <DrawerBody cursor="pointer" fontSize="20px">
              <Stack spacing="8">
                <Link href="/">
                  <Text>Home</Text>
                </Link>
                <Link href="/produtos">
                  <Text>Produtos</Text>
                </Link>
                <Link href="/sobrenos">
                  <Text>Sobre Nós</Text>
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
                      <Text ml="-13px">Contato</Text>
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
        <Image w="120px" h="100px" src="/imagens/logoGall1.png" />
        <Flex mr="25px" alignItems="center">
          <GiBeachBag
            style={{ width: '6rem', height: '3rem', color: '#376b2e' }}
          />
          <Text color="#ffffff" marginLeft="-45px" mt="25px" fontSize="1.4rem">
            0
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}
