import { Flex, Button, Image, Text, Grid } from '@chakra-ui/react';
import Almofadas3 from '../componentes/almofadas3';
import HeaderProdutos from '../componentes/header_Produtos';

export default function ProdutosAl3() {
  return (
    <div>
        <HeaderProdutos/>
      <Flex
        color="gray.100"
        borderRadius="0 20px 0 20px"
        bg="#2e6a2c"
        w="350px"
        h="40px"
        m="30px auto"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="2rem"> olá sou Almofadas3</Text>
      </Flex>

      <Grid templateColumns="repeat(3,1fr)">
        <Almofadas3/>
      </Grid>
    </div>
  );
}
