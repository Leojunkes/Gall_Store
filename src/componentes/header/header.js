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
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { GiBeachBag } from 'react-icons/gi';


import Link from 'next/link';
import { Box } from '@chakra-ui/react';

import { useCart } from '../../hooks/useCart';

export default function Header() {

  const cart = useCart()
  console.log(cart)

  return (
    <div className="header">
      <Flex h="8rem" fontWeight="400" bg="gray.100">
        <Flex m="10px auto">
          <Image
            borderRadius="100px"
            w="14rem"
            h="10rem"
            src="/imagens/logoGall1.png"
          />
        </Flex>
        <Link href="/carrinho">
          <Flex cursor="pointer" mr="20px">
            <GiBeachBag
              style={{ width: '6rem', marginTop: '20px', marginRight: '-35px' }}
              fontSize="2.2rem"
              color="#376b2e"
            />
            <Box m='20px 40px 0 0' w='' h='20px' borderRadius='full' bg='red.700'>
              <Text
                color="gray.100"
                fontSize="0.9rem"
                m='0.2px 7px 0 7px'
                fontSize="15"
              >
                0
              </Text>
            </Box>
          </Flex>
        </Link>
      </Flex>

      <Flex
        paddingBottom="26px"
        mt="-35px"
        bg="gray.100"
        justifyContent="center"
        boxShadow="15.5218px 10.9578px 0px rgba(0, 0, 0, 0.11), 10.0604px 7.10225px 0px rgba(0, 0, 0, 0.0835185), 5.97878px 4.22077px 0px rgba(0, 0, 0, 0.0668148), 3.10437px 2.19155px 0px rgba(0, 0, 0, 0.055), 1.26474px 0.892855px 0px rgba(0, 0, 0, 0.0431852), 0.287441px 0.202922px 0px rgba(0, 0, 0, 0.0264815);"
      >
        <Flex mt="65px">
          {/* <Text>Início</Text>
          <Text ml="6px">Produtos</Text>
          <Text ml="6px">Sobre Nós</Text>
          <Text ml="6px">Contato</Text> */}
          <Tabs color="gray.800" variant="line" colorScheme="green">
            <TabList>
              <Link href="/">
                <Tab fontSize="1.3rem" _focus="none">
                  Início
                </Tab>
              </Link>
              <Link href="/produtos">
                <Tab fontSize="1.3rem" _focus="none">
                  Produtos
                </Tab>
              </Link>

              <Link href="/sobrenos">
                <Tab fontSize="1.3rem" _focus="none">
                  Sobre Nós
                </Tab>
              </Link>

              <Tab fontSize="1.3rem" _focus="none">
                <Popover>
                  <PopoverTrigger>
                    <Button
                      fontWeight="md"
                      _hover="false"
                      _focus="none"
                      fontSize="1.3rem"
                    >
                      Contato
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
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Flex>
    </div>
  );
}
