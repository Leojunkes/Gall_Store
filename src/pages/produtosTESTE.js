import { Input, Flex, Textarea, Button, FormControl } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

/* eslint-disable @next/next/link-passhref */
const TesteFlow = () => {
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
  console.log(cart);
  return (
    <Flex
      as="form"
      action="https://formsubmit.co/leojn8@gmail.com"
      method="POST"
      flexDirection="column"
    >
      <FormControl mt='6'>
        <Input
          type="hidden"
          name="_next"
          value="http://localhost:3001/obrigado"
        />
        <Input type="text" name="name" placeholder="Nome" />
        <Input type="email" name="email" placeholder="Email Address" />
        {cart.map((product, key) => (
          <>
            <Input
              key={key}
              value={product.title}
              readOnly
              type="text"
              name="produto"
              placeholder="Compras"
            />
            <Input
              value={product.valor}
              readOnly
              type="text"
              name="produto1"
              placeholder="Compras"
            />
          </>
        ))}

        <Input h="80px" type="text" placeholder="Mensagem" />
        <Button type="submit">Enviar</Button>
      </FormControl>
    </Flex>
  );
};
export default TesteFlow;
