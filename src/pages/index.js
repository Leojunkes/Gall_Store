import Head from 'next/head';

import { Button, Flex, Input } from '@chakra-ui/react';

import Content from '../componentes/content';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('products'));

    const cart1 = (localStorageProdutos || []).map((product) => ({
      ...product,
      amount: parseInt(product.amount),
      pricef: parseFloat(product.valor),
      priceT: parseFloat(product.valor) * parseInt(product.amount),
    }));

    setCart([...cart1]);
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
