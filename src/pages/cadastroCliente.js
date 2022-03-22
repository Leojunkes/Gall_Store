import {
  Input,
  Flex,
  Text,
  Button,
  FormControl,
  Box,
  VStack,
  Divider,
  Link,
  Image,
} from '@chakra-ui/react';
import { useCart } from '../hooks/useCart';
import { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

/* eslint-disable @next/next/link-passhref */
const TesteFlow = () => {
  const {
    whatsSend,
    setEnderecoEntrega,
    setQuantity,
    quantity,
    endereco,
    name,
    mensagens,
    setMensagens,
    setName,
    email,
    setEmail,
    setProdutos,
    setProductsAmount,
    amount,
    produtos,
    fones,
    setFones,
    setTotal10,
    total10,
    cart,
    setCart,
  } = useCart();

  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('products'));

    const localstorageTotal = JSON.parse(localStorage.getItem('saveTotal'));
    const totalSum =
      localStorage.getItem('saveTotal') !== null ? localstorageTotal : [];

    const localStorageAmount = JSON.parse(localStorage.getItem('totalAmount'));
    const totalAmount =
      localStorage.getItem('totalAmount') !== null ? localStorageAmount : [];

    const cart1 = (localStorageProdutos || []).map((product) => ({
      ...product,
      amount: parseInt(product.amount),
      pricef: parseFloat(product.valor),
      priceT: parseFloat(product.valor) * parseInt(product.amount),
    }));
    console.log(cart);
    console.log(totalSum);
    setTotal10(totalSum);
    setQuantity(totalAmount);
    console.log(quantity);
    setCart([...cart1]);
  }, []);

  //envio de pedidos por whats
  function WhatsSend(e) {
    e.preventDefault();
    whatsSend();

    document.location.replace('/');
    localStorage.removeItem('products');
    localStorage.removeItem('saveTotal');
  }

  return (
    <Flex
      m="80px auto"
      as="form"
      maxWidth="800px"
      onSubmit={WhatsSend}
      flexDirection="column"
      borderRadius="8px"
    >
      <Box m="0 auto">
        <Text
          textAlign="center"
          fontFamily="Inter"
          fontWeight="600"
          fontSize="1.4rem"
        >
          Dados para finalizar seu pedido
        </Text>
        {/*<Divider />*/}
        {/*<Text fontFamily="Inter" fontWeight="600" fontSize="16px">
          Em breve este site estará disponível para pedidos, enquanto isso
          aproveite e conheça alguns de nossos produtos en nosso{' '}
          <a target="_blank" href="https://www.instagram.com/gall.oficial/">
            <label style={{ color: 'green', cursor: 'pointer' }}>
              Instagram
            </label>
          </a>
        </Text>*/}
        <Divider />
        <Text
          fontSize="1.2rem"
          fontFamily="Inter"
          fontWeight="600"
          w="95%"
          m="0 auto"
        >
          Qualquer dúvida estaremos disponíveis, preencha o cadastro completo
          para concluir seu pedido, após finalizar cadastro envie seu pedido por
          WHATS.
        </Text>
      </Box>

      <FormControl w="70%" m="0 auto" mt="6">
        <VStack>
          <Input
            _focus="none"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
            isRequired="true"
            type="text"
            name="name"
            placeholder="Nome"
            _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
          />

          <Input
            _focus="none"
            onChange={(event) => {
              setEnderecoEntrega(event.target.value);
            }}
            value={endereco}
            isRequired="true"
            type="text"
            name="endereco"
            placeholder="Endereco"
            _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
          />
          <Input
            _focus="none"
            onChange={(event) => {
              setFones(event.target.value);
            }}
            value={fones}
            isRequired="true"
            type="text"
            name="fones"
            placeholder="Telefone"
            _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
          />
          <Input
            _focus="none"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            isRequired="true"
            type="email"
            name="email"
            placeholder="Email"
            _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
          />

          <Input
            _focus="none"
            h="80px"
            type="text"
            name="Mensagem"
            placeholder="Mensagem"
            _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
            onChange={(event) => {
              setMensagens(event.target.value);
            }}
          />
          <Button
            leftIcon={<BsWhatsapp />}
            _focus="none"
            w="100%"
            colorScheme="green"
            type="submit"
            h="50px"
            fontSize="1.3rem"
          >
            Enviar seu pedido por whats
          </Button>

          <Text id="amount"></Text>

          <Text id="result"></Text>
          <>
            {cart.map((product, index) => (
              <Box w="100%" key={index}>
                <Input
                  _focus="none"
                  className="produtos1"
                  value={product.title}
                  name="produto"
                  placeholder={product.title}
                  _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
                  isReadOnly
                  onChange={(event) => {
                    setProdutos(event.target.value);
                  }}
                  type="hidden"
                />
              </Box>
            ))}
            {cart.map((product, index) => (
              <Box>
                <Input
                  _focus="none"
                  className="amount1"
                  value={product.amount}
                  name="produto"
                  placeholder={product.amount}
                  _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
                  isReadOnly
                  onChange={(event) => {
                    setProdutos(event.target.value);
                  }}
                  color="gray.400"
                  type="hidden"
                />
              </Box>
            ))}
          </>

          <Input
            _focus="none"
            onChange={(event) => {
              setTotal10(event.target.value);
            }}
            value={total10}
            id="totalValor"
            isReadOnly
            name="valorTotal"
            color="gray.400"
            _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
            type="hidden"
          />
        </VStack>
      </FormControl>
    </Flex>
  );
};
export default TesteFlow;
