import { Flex, Button, Image, Text, Grid } from '@chakra-ui/react';
import Almofadas1 from '../componentes/almofadas/almofadas1';
import HeaderProdutos from '../componentes/header_Produtos';

export default function ProdutosCamisetas() {
  return (
    <div>
      <HeaderProdutos mt="50px" />

      <Flex
        color="gray.100"
        borderRadius="0 20px 0 20px"
        bg="#2e6a2c"
        w="80%"
        h="40px"
        m="30px auto"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="2rem">olá sou Camisetas</Text>
      </Flex>

      <Grid templateColumns="repeat(3,1fr)">{/* <Almofadas1 /> */}</Grid>
    </div>
  );
}
