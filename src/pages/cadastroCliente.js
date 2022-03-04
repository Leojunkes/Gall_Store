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
} from '@chakra-ui/react';
import { useCart } from '../hooks/useCart';
import { useEffect, useState } from 'react';

/* eslint-disable @next/next/link-passhref */
const TesteFlow = () => {
  const {
    whatsSend,
    setEnderecoEntrega,
    endereco,
    name,
    mensagens,
    setMensagens,
    setName,
    email,
    setEmail,
    setProdutos,
    produtos,
    fones,
    setFones,
  } = useCart();
  const [cart, setCart] = useState(['']);

  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('products'));

    const cart1 = (localStorageProdutos || []).map((product) => ({
      ...product,
      amount: parseInt(product.amount),
      pricef: parseFloat(product.valor),
      priceT: parseFloat(product.valor) * parseInt(product.amount),
    }));
    console.log(cart);

    setCart([...cart1]);
  }, []);

  //envio de pedidos por whats
  function WhatsSend(e, id) {
    e.preventDefault();
    whatsSend();
  }

  return (
    <Flex
      m="80px auto"
      w="50%"
      as="form"
      onSubmit={WhatsSend}
      flexDirection="column"
      borderRadius="8px"
    >
      <Box m="0 auto">
        <Text fontFamily="Inter" fontWeight="600" fontSize="18px">
          Dados para finalizar seu pedido
        </Text>
        <Divider />
        <Text fontFamily="Inter" fontWeight="600" fontSize="16px">
          Em breve este site estará disponível para pedidos, enquanto isso
          aproveite e conheça alguns de nossos produtos en nosso{' '}
          <a target="_blank" href="https://www.instagram.com/gall.oficial/">
            <label style={{ color: 'green', cursor: 'pointer' }}>
              Instagram
            </label>
          </a>
        </Text>
        <Divider />
        <Text fontFamily="Inter" fontWeight="600" fontSize="16px">
          Qualquer dúvida estaremos disponíveis, preencha o cadastro completo e
          aguarde nosso contato.
        </Text>
      </Box>

      <FormControl mt="6">
        <VStack>
          <Input
            _focus="none"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
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
            type="text"
            name="endereco"
            placeholder="endereco"
            _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
          />
          <Input
            _focus="none"
            onChange={(event) => {
              setFones(event.target.value);
            }}
            value={fones}
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
            type="email"
            name="email"
            placeholder="Email Address"
            _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
          />

          <>
            {cart.map((a) => (
              <Input
                _focus="none"
                id="produtos1"
                value={a.title}
                type="text"
                name="produto"
                placeholder={a.title}
                _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
                isReadOnly
                onChange={(event) => {
                  setProdutos(event.target.value);
                }}
              />
            ))}
          </>

          <Input
            _focus="none"
            h="80px"
            type="text"
            name="mensagem"
            placeholder="Mensagem"
            _placeholder={{ fontFamily: 'Inter', fontWeight: '600' }}
            onChange={(event) => {
              setMensagens(event.target.value);
            }}
          />
          <Button _focus="none" w="100%" colorScheme="green" type="submit">
            Enviar
          </Button>
        </VStack>
      </FormControl>
    </Flex>
  );
};
export default TesteFlow;
