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
} from '@chakra-ui/react';

import Link from 'next/link';

export default function HeaderProdutos() {
  return (
    <Flex
      color="#ffffff"
      bg="#125C20"
      mt="20px"
      h="2rem"
      alignItems="center"
      cursor="pointer"
    >
      <Flex m='auto'>
        <Link href="/produtos">
          <Text>Almofadas</Text>
        </Link>

        <Link href="/almofadas1">
          <Text ml='10px'>Almofadas1</Text>
        </Link>
        <Link href="/almofadas2">
          <Text ml='10px'>Almofadas2</Text>
        </Link>
        <Link href="/almofadas3">
          <Text ml='10px'>Almofadas3</Text>
        </Link>
        <Link href="/bolsas">
          <Text ml='10px'>Bolsas</Text>
        </Link>
        <Link href="/camisetas">
          <Text ml='10px'>Camisetas</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
