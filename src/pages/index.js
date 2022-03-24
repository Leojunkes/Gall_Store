import Head from 'next/head';

import { Flex } from '@chakra-ui/react';

import Content from '../componentes/content';

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
