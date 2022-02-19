import { Input, Flex, Text, Button, FormControl } from '@chakra-ui/react';
import { useCart } from '../hooks/useCart';
import { useEffect, useState } from 'react';

/* eslint-disable @next/next/link-passhref */
const TesteFlow = () => {
  const {
    whatsSend,
    setEnderecoEntrega,
    endereco,
    name,
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
    console.log(cart1);

    setCart([...cart1]);
  }, []);

  //envio de pedidos por whats
  function WhatsSend(e, id) {
    e.preventDefault();
    whatsSend(id);
  }

  return (
    <Flex as="form" onSubmit={WhatsSend} flexDirection="column">
      <Text>Dados para finalizar seu pedido</Text>
      <FormControl mt="6">
        <Input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          type="text"
          name="name"
          placeholder="Nome"
        />
        <Input
          onChange={(event) => {
            setEnderecoEntrega(event.target.value);
          }}
          value={endereco}
          type="text"
          name="endereco"
          placeholder="endereco"
        />
        <Input
          onChange={(event) => {
            setFones(event.target.value);
          }}
          value={fones}
          type="text"
          name="fones"
          placeholder="Telefone"
        />
        <Input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
          type="email"
          name="email"
          placeholder="Email Address"
        />

        <>
          {cart.map((a) => (
            <Input
              id="produtos1"
              value={a.title}
              type="text"
              name="produto"
              placeholder={a.title}
              onChange={(event) => {
                setProdutos(event.target.value);
              }}
            />
          ))}
        </>

        <Input h="80px" type="text" name="mensagem" placeholder="Mensagem" />
        <Button type="submit">Enviar</Button>
      </FormControl>
    </Flex>
  );
};
export default TesteFlow;
