import { Flex, Button, Image, Text, Grid } from '@chakra-ui/react';
import Almofadas3 from '../componentes/almofadas/almofadas3';
import HeaderProdutos from '../componentes/header_Produtos';

export default function ProdutosAl2() {
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
          Almofadas3
        </Text>
      </Flex>

      <Grid templateColumns="repeat(3,1fr)">
        <Almofadas3 />
      </Grid>
    </div>
  );
}
