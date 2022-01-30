import {
  Flex,
  Button,
  Image,
  HStack,
  Divider,
  Heading,
  Box,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  Text,
  Tfoot,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { saveStorage } = useCart();
  const cart2 = useCart();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('products'));

    const cart1 = (localStorageProdutos || []).map((product) => ({
      ...product,
      amount: parseInt(product.amount),
      pricef: parseFloat(product.valor),
      priceT: parseFloat(product.valor) * parseInt(product.amount),
    }));

    setCart([...cart1]);
  }, []);

  const itemsCount = Object.keys(cart2.cart).length;
  const total = cart.reduce((sumtotal, product) => {
    return (sumtotal += product.valor * product.amount);
  }, 0);

  return (
    <>
      <Flex  alignItems='center' justifyContent='center' mt="50px" flexDirection="column">
        Checkout / carrinho
        <Box>
          <Text>Formulário com informações do cliente</Text>
          <Text>Nome</Text>
          <Text>Telefone/whats</Text>
          <Text>CPF</Text>

          <Text>dados do cliente + produtos escolhidos que virão da planilha do GOOGLE</Text>

        </Box>
      </Flex>
    </>
  );
};

export default Cart;
