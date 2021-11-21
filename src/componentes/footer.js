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
} from '@chakra-ui/react';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import Link from 'next/link';
export default function Footer() {
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
        <Flex ml="-44px" mt="40px" maxW="250px" flexDirection="column">
          <Text ml="50px" color="#ffffff">
            Moda, Estilo, Elegância, vista-se com Gall
          </Text>
          <Link href="https://www.instagram.com/gall.oficial/">
            <BsInstagram
              cursor="pointer"
              style={{ marginLeft: '5px', color: '#ffffff' }}
            />
          </Link>
          <Flex
          ml="5px"
          alignItems="center"
          fontSize="18"
          bg="#3b5998"
          borderRadius="60px"
          w="30px"
          h="30px"
        >
          <Link href="https://www.facebook.com/gall.oficial">
            <BsFacebook cursor="pointer" style={{ marginLeft: '5px' }} />
          </Link>
        </Flex>
        </Flex>

        <Flex  flexDirection="column" color="#ffffff"s>
          <Text color="#71BDD2">Dúvidas</Text>
          <Text>Trocas e Devoluçoes</Text>
          <Text>Termos de Uso</Text>
          <Text>Política de Reembolso</Text>
          <Text>Termos de Serviço</Text>
        </Flex>

        <Flex flexDirection="column" color="#ffffff">
          <Text color="#71BDD2">Mapa</Text>
          <Text>Home</Text>
          <Text>Sobre</Text>
          <Popover>
            <PopoverTrigger>
              <Button
                bg="none"
                _hover="false"
                _focus="none"
                fontSize="1.1rem"
                fontWeight="light"
                mt='-8px'
                ml='-15px'
              >
                Produtos
              </Button>
            </PopoverTrigger>
            <PopoverContent _focus="none" bg="#398b63">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader color="#ffffff">Almofadas</PopoverHeader>
              <PopoverBody color="#ffffff">
                A Gall terá o maior prazer em lhe ajudar!
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Flex flexDirection="column" color="#ffffff">
          <Text color="#71BDD2">Categorias</Text>
          <Text>Gall Store</Text>
          <Text>Vestuário</Text>
          <Text>Bolsas</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text color="#71BDD2">Formas de Pagamento</Text>
          <Image
            w="16rem"
            h="4rem"
            src="https://www.yoganatomia.com.br/wp-content/uploads/2021/06/pagseguro-logo-1-1024x262.png"
          />
          <Image
            w="16rem"
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
        <Flex
          ml="10px"
          fontSize="18px"
          alignItems="center"
          bg="#313131"
          borderRadius="60px"
          w="30px"
          h="30px"
        >
          
        </Flex>
       
      </Flex>
    </div>
  );
}
