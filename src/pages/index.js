import Head from 'next/head';

import { Button, Flex, Input } from '@chakra-ui/react';

import Content from '../componentes/content';

export default function Home() {
  // function teste(e) {
  //   e.preventDefault();
  //   axios.post('/api/hello', { name });
  // }
  return (
    
    
    <Flex>
      <Head>
        <title>Gall | Store</title>
      </Head>
      <Flex justifyContent="center" alignItems="center" m="auto">
      <Content />
      </Flex>
    </Flex>
    
  );
}
