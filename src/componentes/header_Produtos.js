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
      w="80%"
      m="10px auto"
      borderRadius="30px 0 30px 0"
      color="gray.200"
      justifyContent="center"
      bg="#125C20"
      h=""
      textAlign="center"
    >
      <Flex cursor="pointer">
        <Link  href="/produtos">
          <Text mt="15px" fontSize="1.2rem">
            Almofadas
          </Text>
        </Link>
        <Link href="/almofadas1">
          <Text m="15px 0 0 10px" fontSize="1.2rem">
            Almofadas1
          </Text>
        </Link>
        <Link href="/almofadas2">
          <Text m="15px 0 0 10px" fontSize="1.2rem">
            Almofadas2
          </Text>
        </Link>
        <Link href="/almofadas3">
          <Text m="15px 0 0 10px" fontSize="1.2rem">
            Almofadas3
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
