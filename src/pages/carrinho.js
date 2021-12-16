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

export default function Cart() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const localStorageTasks = JSON.parse(localStorage.getItem('produtos'));
    const produtos =
      localStorage.getItem('produtos') !== null ? localStorageTasks : [];
    console.log(produtos);
    setProdutos([produtos]);
  }, []);

  return (
    <div style={{border:'1px solid',height:'260px',marginTop:'35px'}}>
      {produtos.map((p, key) => (
        <Flex  key={key} mt="30px" h="200px" bg="#ffffff">
          <Image w="22rem" src={p.imagem} />

          <Flex ml="12px" flexDirection="column">
            <Heading maxW="250px">{p.title}</Heading>
            <Heading size="sm">Ref: {p.id}</Heading>
            {/* <Text>tamanho G</Text> */}
            {/* <Text>Cor:Marinho</Text> */}
            <Flex>
            <Flex w="40px" type="button">
              <AiOutlineMinusCircle style={{ fontSize: '30px' }} />
            </Flex>{' '}
            <Box textAlign='center' border='1px'w='50px'>
            <Heading mt='2' size='md'>1</Heading>
            </Box>
            
            <Flex ml='1.5' w="40px">
              <AiOutlinePlusCircle style={{ fontSize: '30px',marginLeft:'6px' }} />
            </Flex>
            </Flex>
            
            <Heading m='30px 0 0 20px'>{p.valor}</Heading>
          </Flex>
        </Flex>
      ))}
    </div>
  );
}
