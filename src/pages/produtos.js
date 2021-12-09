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
        w="130px"
        h="30px"
        m="30px"
        justifyContent="center"
        alignItems="center"
      >
        <Text m='auto' fontSize="1.2rem">Almofadas</Text>
      </Flex>

      <div className="produtos1">
        <Almofadas />
        {/* <Almofadas1 /> */}
      </div>
    </div>
  );
}
