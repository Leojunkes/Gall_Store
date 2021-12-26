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
    <div style={{backgroundColor:'#313131'}}>
      <div className="containerFooter1">
        <Flex
          paddingTop="30px"
          justifyContent="space-around"
          mt="20px"
          h="300px"
          fontWeight="400"
          bg="#313131"
          fontSize="1.125rem"
          w="100vw"
        >
          <Flex mt="40px" maxW="250px" flexDirection="column">
            <Text ml="20px" color="#ffffff">
              Moda, Estilo, Elegância, vista-se com Gall
            </Text>
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

          <Flex ml='16px' flexDirection="column" color="#ffffff">
            <Text color="#71BDD2">Mapa</Text>
            <Text>Home</Text>
            <Text>Sobre</Text>
            <Flex>
              <Button _hover={{ bg: 'none' }} bg="none" onClick={alterar}>
                {ischangebutton === true ? produtosShow : produtosHide}
              </Button>
            </Flex>
            <Text>Contato</Text>
          </Flex>
          <Flex mr="20px" flexDirection="column" color="#ffffff">
            <Text color="#71BDD2">Categorias</Text>
            <Text>Gall Store</Text>
            <Text>Vestuário</Text>
            <Text>Bolsas</Text>
          </Flex>
        </Flex>
      </div>
      <div className="containerFooter1">
        <Flex mr="15px"mt='-30px' paddingBottom='20px'>
          <Text ml="10px" maxW="100px" color="#71BDD2">
            Formas de Pagamento
          </Text>
          <Image
            w="8rem"
            h="3rem"
            src="https://www.yoganatomia.com.br/wp-content/uploads/2021/06/pagseguro-logo-1-1024x262.png"
          />
          <Image
            w="8rem"
            h="3.0rem"
            ml="8px"
            src="https://www.yoganatomia.com.br/wp-content/uploads/2021/06/1200px-Logo%E2%80%94pix_powered_by_Banco_Central_Brazil_2020.svg-1024x364.png"
          />
        </Flex>
        
      </div>
      {/* <Flex
        alignItems="center"
        justifyContent="center"
        color="gray.300"
        h="60px"
        bg="#0a0a0a"
      >
        ©Gall store Online 2021 - Todos os direitos reservados
      </Flex> */}
    </div>
  );
}
