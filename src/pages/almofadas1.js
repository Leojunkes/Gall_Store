import { Flex, Button, Image, Text, Grid } from '@chakra-ui/react';

import HeaderProdutos from '../componentes/header_Produtos';
import Almofadas1 from '../componentes/almofadas1';

export default function ProdutosAl1() {
  return (
    <div>
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
        <Text fontSize="2rem">Almofadas1</Text>
      </Flex>

      <Grid templateColumns="repeat(3,1fr)">
        <Almofadas1/>
      </Grid>
    </div>
  );
}
