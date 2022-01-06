/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import {
  Flex,
  Button,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Stack,
} from '@chakra-ui/react';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [ischangebutton, SetIsChangeButton] = useState(false);

  const produtosShow = (
    <>
      <Button _hover={{ bg: 'none' }} bg="none">
        <Text ml="-29px" mb="8px" fontSize="16px" fontWeight="light">
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
      <Text mb="8px" ml="-29px" fontSize="16px" fontWeight="light">
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
    <div className="containerFooter">
      <Flex
        paddingTop="40px"
        justifyContent="space-around"
        mt="20px"
        h="300px"
        fontWeight="400"
        bg="#313131"
        fontSize="1.125rem"
        
      >
        <Flex ml="-44px" mt="30px" maxW="250px" flexDirection="column">
          <Text ml="50px" color="#ffffff">
            Moda, Estilo, Elegância, vista-se com Gall
          </Text>
          <Text mt="10px" ml="50px" color="#ffffff">
            Siga Gall em suas redes sociais:
          </Text>

          <Flex
            m="10px 0 0 90px"
            maxW="100px"
            cursor="pointer"
            justifyContent="space-evenly"
          >
            <Link href="https://www.instagram.com/gall.oficial/">
              <BsInstagram style={{ marginLeft: '5px', color: '#ffffff' }} />
            </Link>
            <Link href="https://www.facebook.com/gall.oficial">
              <FiFacebook style={{ color: '#ffffff' }} />
            </Link>
            <Link href="">
              <FiTwitter style={{ color: '#ffffff' }} />
            </Link>
          </Flex>
        </Flex>

        <Flex cursor="pointer" flexDirection="column" color="#ffffff" s>
          <Text color="#71BDD2">Dúvidas</Text>
          <Link href="">
            <Text>Trocas e Devoluçoes</Text>
          </Link>
          <Link href="">
            <Text>Termos de Uso</Text>
          </Link>
          <Link href="">
            <Text>Política de Reembolso</Text>
          </Link>
          <Link href="">
            <Text>Termos de Serviço</Text>
          </Link>
        </Flex>

        <Flex cursor="pointer" flexDirection="column" color="#ffffff">
          <Text color="#71BDD2">Mapa</Text>
          <Link href="/">
            <Text>Home</Text>
          </Link>
          <Link href="sobrenos">
            <Text>Sobre</Text>
          </Link>
          <Flex>
            <Button _hover={{ bg: 'none' }} bg="none" onClick={alterar}>
              {ischangebutton === true ? produtosShow : produtosHide}
            </Button>
          </Flex>
        </Flex>

        <Flex flexDirection="column">
          <Text color="#71BDD2">Formas de Pagamento</Text>
          <Image
            w="13rem"
            h="3rem"
            src="https://www.yoganatomia.com.br/wp-content/uploads/2021/06/pagseguro-logo-1-1024x262.png"
          />
          <Image
            w="13rem"
            mt="5px"
            h="4rem"
            src="https://www.yoganatomia.com.br/wp-content/uploads/2021/06/1200px-Logo%E2%80%94pix_powered_by_Banco_Central_Brazil_2020.svg-1024x364.png"
          />
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        color="gray.300"
        h="60px"
        bg="#0a0a0a"
      >
        Gall store Online 2021 - Todos os direitos reservados - CNPJ 000000000
      </Flex>
    </div>
  );
}
