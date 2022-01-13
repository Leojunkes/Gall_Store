import Head from 'next/head';

import { Button, Flex, Input } from '@chakra-ui/react';

import Content from '../componentes/content';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../hooks/useCart';

export default function Home() {
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
