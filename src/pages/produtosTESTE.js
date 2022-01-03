/* eslint-disable @next/next/link-passhref */
import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import { useState } from 'react';
import { Product } from '../componentes/produtosArray'

const Products = () => {
  const [search, setSearch] = useState('');
  const [produtos, setProdutos] = useState([]);


  const addProduct = (id) => {
    const produtos = Product.find((p) => p.id === id);
    setProdutos([produtos]);
    localStorage.setItem('produtos', produtos);
    console.log(produtos);
  }
  return (
    <>
      <Input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        w="30%"
        boxShadow="7.60483px 9.2826px 0px rgba(0, 0, 0, 0.04), 4.92905px 6.0165px 0px rgba(0, 0, 0, 0.0303704), 2.92927px 3.57552px 0px rgba(0, 0, 0, 0.0242963), 1.52096px 1.85652px 0px rgba(0, 0, 0, 0.02), 0.619652px 0.75636px 0px rgba(0, 0, 0, 0.0157037), 0.14083px 0.1719px 0px rgba(0, 0, 0, 0.00962963);"
        focusBorderColor="green.600"
        type="text"
        placeholder="Buscar..."
      />
      <Flex>

        {Product.filter((val) => {
          if (search === '') {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }).map((p, index) =>
          <Box key={index}>
            <Image
              backgroundImage=""
              transition="all ease 0.2s"
              _hover={{ transform: 'scale(1)' }}
              transform="scale(0.9)"
              src={p.imagem}
              alt={p.imagem}
              w="20rem"
              loading="lazy"
            />
            <Text>{p.name}</Text>
            <Button bg='green.400' type="button" onClick={() => addProduct(p.id)}>Adicionar ao carrinho</Button>
          </Box>
        )}

      </Flex>
    </>

  )
}

export default Products
