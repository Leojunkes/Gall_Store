import { Input, Flex, Textarea, Button, FormControl } from '@chakra-ui/react';
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

    setCart([...cart1]);
  }, []);

  //envio de pedidos por whats
  function WhatsSend(e) {
    e.preventDefault();
    whatsSend();
  }

  return (
    <Flex as="form" onSubmit={WhatsSend} flexDirection="column">
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
        {cart.map((product, key) => (
          <>
            <Input
              id="produtos1"
              key={key}
              value={product.title}
              readOnly
              type="text"
              name="produto"
              placeholder="Compras"
            />
          </>
        ))}

        <Input h="80px" type="text" name="mensagem" placeholder="Mensagem" />
        <Button type="submit">Enviar</Button>
      </FormControl>
    </Flex>
  );
};
export default TesteFlow;
