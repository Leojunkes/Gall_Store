import {
  Flex,
  Button,
  Image,
  Text,
  Grid,
  Divider,
  Heading,
  Box,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const Cart = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const localStorageTasks = localStorage.getItem('produtos');
    const produtos =
      localStorage.getItem('produtos') !== null ? localStorageTasks : [];

    setProdutos([...produtos]);
  }, []);

  return (
    <div style={{ border: '1px solid', height: '260px', marginTop: '35px' }}>
      
        <Flex mt="30px" h="200px" bg="#ffffff">
          <Image w="22rem" src='https://api-next-teste.vercel.app/gallAlmofadas3/IMG_6354_.jpg' />

          <Flex ml="12px" flexDirection="column">
            <Heading maxW="250px"></Heading>
            <Heading size="sm">Ref: </Heading>
            {/* <Text>tamanho G</Text> */}
            {/* <Text>Cor:Marinho</Text> */}
            <Flex>
              <Flex w="40px" type="button">
                <AiOutlineMinusCircle style={{ fontSize: '30px' }} />
              </Flex>{' '}
              <Box textAlign='center' border='1px' w='50px'>
                <Heading mt='2' size='md'>1</Heading>
              </Box>

              <Flex ml='1.5' w="40px">
                <AiOutlinePlusCircle style={{ fontSize: '30px', marginLeft: '6px' }} />
              </Flex>
            </Flex>

            <Heading m='30px 0 0 20px'></Heading>
          </Flex>
        </Flex>
      
    </div>
  );
}

export default Cart
