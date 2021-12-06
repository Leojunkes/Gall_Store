/* eslint-disable @next/next/link-passhref */
import { Flex, Button, Image, Text, Grid } from '@chakra-ui/react';

import Link from 'next/link';
import Almofadas from '../componentes/almofadas';
import HeaderProdutos from '../componentes/header_Produtos';

export default function Produtos() {
  return (
    <div className="produtos" style={{ marginTop: '30px' }}>
      <HeaderProdutos />
      <Flex
        color="gray.100"
        borderRadius="0 20px 0 20px"
        bg="#2e6a2c"
        w="200px"
        h="40px"
        m="30px auto"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="2rem">Almofadas</Text>
      </Flex>

      <div className="produtos1">
        <Almofadas />
        {/* <Almofadas1 /> */}
      </div>
    </div>
  );
}
