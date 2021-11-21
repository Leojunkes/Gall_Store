import { Flex, Button, Image, Text, Grid } from '@chakra-ui/react';
import Almofadas from '../componentes/almofadasCad';

export default function Produtos() {
  return (
    <div className="produtos" style={{ marginTop: '30px' }}>
      <Flex
        color="gray.100"
        borderRadius="0 20px 0 20px"
        bg="#2e6a2c"
        w="200px"
        h="40px"
        m="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="2rem">Almofadas</Text>
      </Flex>

      <div className='produtos1'>
        <Almofadas />
      </div>
    </div>
  );
}
