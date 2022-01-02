/* eslint-disable @next/next/link-passhref */
import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import { useState } from 'react';
import { Product } from '../componentes/produtosArray'

const Products = () => {
  const [search, setSearch] = useState('');
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
            <Image src={p.imagem} />
            <Text>{p.name}</Text>
          </Box>
        )}

      </Flex>
    </>

  )
}

export default Products
