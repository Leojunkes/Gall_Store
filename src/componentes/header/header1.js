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
} from '@chakra-ui/react';
import { BsHandbag } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import Link from 'next/link';
import React from 'react';
import { height } from 'dom-helpers';

export default function Header1() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="header1">
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

            <DrawerBody fontSize="20px">
              <Stack spacing="8">
                <Text>Home</Text>
                <Text>Produtos</Text>
                <Text>Sobre Nós</Text>
                <Text>Contato</Text>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Image w="120px" h="100px" src="/imagens/logoGall1.png" />
        <Flex mr="25px" alignItems="center">
          <BsHandbag style={{ width: '6rem', height: '3rem' }} />
          <Text marginLeft="-45px" mt="17px" fontSize="1.4rem">
            0
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}
