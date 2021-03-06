/* eslint-disable jsx-a11y/alt-text */
import {
  Flex,
  Button,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
} from '@chakra-ui/react';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';

import { FiFacebook, FiTwitter } from 'react-icons/fi';
export default function Footer1() {
  const [ischangebutton, SetIsChangeButton] = useState(false);

  const produtosShow = (
    <>
      <Button _hover={{ bg: 'none' }} bg="none">
        <Text ml="-25px" fontSize="14px" fontWeight="medium">
          Produtos
        </Text>
      </Button>
      <Flex bg="none" cursor="pointer" color="gray.400" flexDirection="column">
        <Stack>
          <Text _hover={{ color: 'gray.200' }}>almofadas</Text>
          <Text _hover={{ color: 'gray.200' }}>almofadas1</Text>
          <Text _hover={{ color: 'gray.200' }}>almofadas2</Text>
          <Text _hover={{ color: 'gray.200' }}>almofadas3</Text>
          <Text _hover={{ color: 'gray.200' }}>bolsas</Text>
          <Text _hover={{ color: 'gray.200' }}>camisetas</Text>
        </Stack>
      </Flex>
    </>
  );
  const produtosHide = (
    <Button _hover={{ bg: 'none' }} bg="none">
      <Text mb="8px" ml="-25px" fontSize="14px" fontWeight="medium">
        Produtos
      </Text>
    </Button>
  );

  function alterar() {
    if (ischangebutton === false) {
      SetIsChangeButton(true);
    }
    if (ischangebutton === true) {
      SetIsChangeButton(false);
    }
    console.log(ischangebutton);
  }
  return (
    <div style={{ backgroundColor: '#313131' }}>
      <div className="containerFooter1">
        <Flex
          paddingTop="30px"
          justifyContent="space-around"
          mt="20px"
          h='100%'
          paddingBottom="20px"
          fontWeight="400"
          bg="#313131"
          fontSize="1.125rem"
          w="100vw"
        >
          <Flex
            paddingLeft="8px"
            cursor="pointer"
            flexDirection="column"
            color="#ffffff"
          >
            <Text color="#71BDD2">D??vidas</Text>
            <Link href="">
              <Text>Trocas e Devolu??oes</Text>
            </Link>
            <Link href="">
              <Text>Termos de Uso</Text>
            </Link>
            <Link href="">
              <Text>Pol??tica de Reembolso</Text>
            </Link>
            <Link href="">
              <Text>Termos de Servi??o</Text>
            </Link>
          </Flex>

          <Flex ml="16px" flexDirection="column" color="#ffffff">
            <Text color="#71BDD2">Mapa</Text>
            <Text>Home</Text>
            <Text>Sobre</Text>
            
            <Text>Contato</Text>
          </Flex>
          <Flex mr="20px" flexDirection="column" color="#ffffff">
            <Text color="#71BDD2">Categorias</Text>
            <Text>Gall Store</Text>
            <Text>Vestu??rio</Text>
            <Text>Bolsas</Text>
          </Flex>
        </Flex>
      </div>
      <div className="containerFooter1">
        {/*<Flex
          textAlign="center"
          color="gray.300"
          h="60px"
          w="100vh"
          bg="#0a0a0a"
        >
          Gall store Online 2021 - Todos os direitos reservados - CNPJ 000000000
        </Flex>*/}
      </div>
    </div>
  );
}
