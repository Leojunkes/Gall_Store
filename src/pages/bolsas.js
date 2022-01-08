import { Flex, Button, Image, Text, Grid } from '@chakra-ui/react';

import HeaderProdutos from '../componentes/header_Produtos';

export default function ProdutosBolsas() {
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
        <Text fontSize="2rem">Olá sou Bolsas :)</Text>
      </Flex>

      <Grid templateColumns="repeat(3,1fr)"></Grid>
    </div>
  );
}
