import { Input, Flex, Textarea, Button, FormControl } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

/* eslint-disable @next/next/link-passhref */
const TesteFlow = () => {
  const [cart, setCart] = useState(['']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
  function whatsSend() {
    let fone = '+48999311384';
    let url = `https://api.whatsapp.com/send/?phone=${fone}&text=
    *Cliente*%0A${name}%0A
    *email*${email}
    *Produtos*${'#produtos1'}
    
    
    
    &app_absent=0`;
    window.open(url);
  }

  return (
    <Flex as="form" onSubmit={whatsSend} flexDirection="column">
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
            <Input
              value=""
              readOnly
              type="text"
              name="valor"
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
