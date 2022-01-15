import { Flex, Heading, Image, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Product } from '../componentes/produtosArray';
import DATA_ALMOFADAS from '/mockProdutos/ALMOF_DATA';

/* eslint-disable @next/next/link-passhref */
const TesteFlow = () => {
  const [cart, setCart] = useState([]);
  const cartFormated = cart.map((product) => ({
    ...product,
    pricef: product.valor,
    priceT: product.valor * product.amount,
  }));

  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('products'));

    const cart1 =
      localStorage.getItem('products') !== null ? localStorageProdutos : [];

    setCart([...cart1]);
  }, []);

  return (
    <Flex>
      <Table>
        <Thead>
          <Tr>
            <Th />
            <Th>PRODUTO</Th>
            <Th>QTD</Th>
            <Th>SUBTOTAL</Th>
          </Tr>
        </Thead>
        {cartFormated.map((product) => (
          <Tbody>
            <Tr>
              <Td></Td>
              <Flex>
                <Image w="10rem" src={product.imagem} />
                <Heading color="gray.500" ml="2" size="md" maxW="250px">
                  {product.title}
                </Heading>
                <Heading color="gray.500" m="30px 0 0 -90px" size="sm">
                  Ref: {product.id}
                </Heading>
              </Flex>
              <Td>{product.amount}</Td>
              <Td>{product.priceT}</Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </Flex>
  );
};
export default TesteFlow;
