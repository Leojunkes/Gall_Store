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
} from '@chakra-ui/react';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import Link from 'next/link';
export default function Footer1() {
  return (
    <>
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

          <Flex mr="20px" flexDirection="column" color="#ffffff">
            <Text color="#71BDD2">Mapa</Text>
            <Text>Home</Text>
            <Text>Sobre</Text>
            <Menu>
              <MenuButton
                fontWeight="light"
                fontSize="1.3rem"
                fontFamily="Roboto"
                _focus="none"
                as={Button}
                rightIcon=""
              >
                Produtos
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
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
        <Flex mr="15px" mt="-100px">
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
    </>
  );
}
