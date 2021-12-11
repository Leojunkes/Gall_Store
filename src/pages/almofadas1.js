import { Flex, Button, Image, Text, Grid } from '@chakra-ui/react';

import HeaderProdutos from '../componentes/header_Produtos';
import Almofadas1 from '../componentes/almofadas/almofadas1';

export default function ProdutosAl1() {
  return (
    <div style={{ marginTop: '30px', backgroundColor: '#f9fafc' }}>
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
        <Text m="auto" fontSize="1.2rem">
          Almofadas1
        </Text>
      </Flex>

      <Grid className="produtos1" templateColumns="repeat(3,1fr)">
        <Almofadas1 />
      </Grid>
    </div>
  );
}
