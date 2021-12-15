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
    <>
    {produtos.map((p,key) => 
      <Flex mt="40px" h="255px" bg="#ffffff">
        <Image
          w="22rem"
          src={p.imagem}
        />
        
          <Flex key={key} ml="12px" flexDirection="column">
            <Heading maxW="250px">
              {p.title}
            </Heading>
            <Text>Ref:xxxxx</Text>
            <Text>tamanho G</Text>
            <Text>Cor:Marinho</Text>
            <Text> - Quantidade +</Text>
            <Heading>{p.valor}</Heading>
          </Flex>
        
      </Flex>
    )}
    </>
  );
}
