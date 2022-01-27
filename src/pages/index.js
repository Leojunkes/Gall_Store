import Head from 'next/head';

import { Button, Flex, Input } from '@chakra-ui/react';

import Content from '../componentes/content';
import { useEffect, useState } from 'react';
import PhotoInicial from '../componentes/Modal/modalInicial';

export default function Home() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('products'));
    const products =
      localStorage.getItem('products') !== null ? localStorageProdutos : [];

    setCart([...products]);
  }, []);
  return (
    <Flex backgroundColor="#f9fafc">
      <Head>
        <title>Gall | Store</title>
      </Head>
      <Flex justifyContent="center" alignItems="center" m="auto">
        <Content />
      </Flex>
    </Flex>
  );
}
