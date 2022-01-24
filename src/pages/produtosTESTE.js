import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

/* eslint-disable @next/next/link-passhref */
const TesteFlow = () => {
  const [cart, setCart] = useState([]);
  const [dados, setDados] = useState([]);
  //const cartFormated = cart.map((product) => ({
  //  ...product,
  //  pricef: product.valor,
  //  priceT: product.valor * product.amount,
  //}));

  const product = [
    { name: 'almofadas', id: 0, price: 31.99, quantity: 1 },
    { name: 'almofadas1', id: 1, price: 31.99, quantity: 1 },
    { name: 'almofadas2', id: 2, price: 31.99, quantity: 1 },
  ];
  function add(index) {
    product[index].quantity += 1;
  }
  add(2);
  add(2);
  console.log(dados.Produtos);

  const apiTeste = 'http://localhost:3001/api/teste';

  useEffect(() => {
    axios
      .get(apiTeste)
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        alert('ocorreu erro durante o get!');
      });
  }, []);

  //useEffect(() => {
  //  const localStorageProdutos = JSON.parse(localStorage.getItem('products'));

  //  const cart1 =
  //    localStorage.getItem('products') !== null ? localStorageProdutos : [];

  //  setCart([...cart1]);
  //}, []);

  return (
    <Flex>
      <Box m="25px auto" display="flex">
        <Button>-</Button>
        <Text ml="4">1</Text>
        <Button type="button" onClick={() => add()} ml="4">
          +
        </Button>
      </Box>
      <Box>
      <Box>{dados.date}</Box>
      </Box>

      <Box></Box>
    </Flex>
  );
};
export default TesteFlow;
