/* eslint-disable @next/next/link-passhref */
import {
  Flex,
  Button,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Grid,
  Divider,
} from '@chakra-ui/react';

import Link from 'next/link';

export default function HeaderProdutos() {
  return (
    <Flex
      w="100%"
      m="10px auto"
      borderRadius="30px 0 30px 0"
      color="gray.200"
      justifyContent="center"
      bg="#125C20"
      h=""
      textAlign="center"
      className="headerProdutos"
    >
      <Flex
        paddingBottom="7px"
        cursor="pointer"
        mt="3"
        className="headerProdutos"
      >
        <Link href="/produtos">
          <Button
            borderBottom="1px solid"
            ml="6px"
            bg="green"
            _hover={{ bg: '#125C20' }}
            fontSize="1.1rem"
            _focus="none"
          >
            Almofadas
          </Button>
        </Link>

        <Link href="/almofadas1">
          <Button
            borderBottom="1px solid"
            bg="green"
            _hover={{ bg: '#125C20' }}
            ml="6px"
            fontSize="1.1rem"
            _focus="none"
          >
            Almofadas1
          </Button>
        </Link>

        <Link href="/almofadas2">
          <Button
            borderBottom="1px solid"
            bg="green"
            _hover={{ bg: '#125C20' }}
            ml="6px"
            fontSize="1.1rem"
            _focus="none"
          >
            Almofadas2
          </Button>
        </Link>

        <Link href="/almofadas3">
          <Button
            borderBottom="1px solid"
            bg="green"
            _hover={{ bg: '#125C20' }}
            ml="6px"
            fontSize="1.1rem"
            _focus="none"
          >
            Almofadas3
          </Button>
        </Link>

        <Link href="/camisetas">
          <Button
            borderBottom="1px solid"
            bg="green"
            _hover={{ bg: '#125C20' }}
            ml="6px"
            fontSize="1.1rem"
            _focus="none"
          >
            Camisetas
          </Button>
        </Link>

        <Link href="/bolsas">
          <Button
            borderBottom="1px solid"
            bg="green"
            _hover={{ bg: '#125C20' }}
            ml="6px"
            fontSize="1.1rem"
            _focus="none"
          >
            Bolsas
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
