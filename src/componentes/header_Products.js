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
      w="80%"
      m="10px auto"
      borderRadius="30px 0 30px 0"
      color="gray.200"
      justifyContent="center"
      bg="#125C20"
      h=""
      textAlign="center"
      className="headerProdutos"
    >
      <Flex cursor="pointer" mt="3" className="headerProdutos">
        <Link href="/produtos">
          <Text fontSize="1.2rem">Almofadas</Text>
        </Link>
        <Divider mt='-5px' />
        <Link href="/almofadas1">
          <Text ml="8px" fontSize="1.2rem">
            Almofadas1
          </Text>
        </Link>
        <Divider mt='-5px'/>
        <Link href="/almofadas2">
          <Text ml="8px" fontSize="1.2rem">
            Almofadas2
          </Text>
        </Link>
        <Divider mt='-5px'/>
        <Link href="/almofadas3">
          <Text ml="8px" fontSize="1.2rem">
            Almofadas3
          </Text>
        </Link>
        <Divider mt='-5px'/>
        <Link href="/camisetas">
          <Text ml="8px" fontSize="1.2rem">
            Camisetas
          </Text>
        </Link>
        <Divider mt='-5px'/>
        <Link href="/bolsas">
          <Text ml="8px" fontSize="1.2rem">
            Bolsas
          </Text>
        </Link>
        <Divider mt='-5px'/>
        <Link href="/produtosTESTE">
          <Text ml="8px" fontSize="1.2rem">
            Teste
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
