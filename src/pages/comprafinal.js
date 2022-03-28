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

const ProductDetails = () => {
  const { saveStorage, product, setProduct } = useCart();

  useEffect(() => {
    //const localStorageProducts = JSON.parse(localStorage.getItem('product'));
    //console.log(localStorageProducts);
    //const product1 = (localStorageProducts || '').map((product) => ({
    //  ...product,
    //}));
    //setProduct(product1);
    //const totalSum =
    //  localStorage.getItem('saveTotal') !== null ? localstorageTotal : [];
    //console.log(totalSum);
  }, []);

  return (
    <>
      {/*<Flex>
        {product.map((m) => (
          <Text>{m.id}</Text>
        ))}
      </Flex>*/}
    </>
  );
};

export default ProductDetails;
