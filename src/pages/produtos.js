/* eslint-disable @next/next/link-passhref */
import { Flex, Button, Image, Text, Grid } from '@chakra-ui/react';
import Almofadas from '../componentes/almofadasCad';

import Link from 'next/link';
import Almofadas1 from '../componentes/almofadas1';

export default function Produtos() {
  return (
    <div className="produtos" style={{ marginTop: '30px' }}>
      <Flex
        color="#ffffff"
        bg="#125C20"
        mt="-17px"
        h="2rem"
        alignItems="center"
        justifyContent="space-evenly"
        cursor="pointer"
      >
        <Link href='/'>
          <Text _hover={{ color: 'gray.300' }}>Almofadas</Text>
        </Link>

        <Link href="/almofadas1">
          <Text _hover={{ color: 'gray.300' }}>Almofadas1</Text>
        </Link>

        <Text _hover={{ color: 'gray.300' }}>Almofadas2</Text>
        <Text _hover={{ color: 'gray.300' }}>Almofadas3</Text>
        <Text _hover={{ color: 'gray.300' }}>Bolsas</Text>
        <Text _hover={{ color: 'gray.300' }}>Camisetas</Text>
      </Flex>

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
        <Almofadas1 />
      </div>
    </div>
  );
}
