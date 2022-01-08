import {
  Flex,
  Button,
  Image,
  Text,
  Grid,
  Divider,
  Heading,
  Box,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Link from 'next/link';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('produtos'));

    const cart1 =
      localStorage.getItem('produtos') !== null ? localStorageProdutos : [];

    setCart([...cart1]);
  }, []);

  return (
    <div style={{ marginTop: '35px' }}>
      <Flex>
        <Table>
          <Thead bg="#125c20">
            <Tr>
              <Th fontSize="0.8rem" color="gray.100">
                Sua sacola está com 2 itens
              </Th>

              <Th fontSize="0.8rem" color="gray.100">
                Preço Unitário
              </Th>
              <Th fontSize="0.8rem" color="gray.100">
                Quantidade
              </Th>
              <Th fontSize="0.8rem" color="gray.100">
                Subtotal
              </Th>
            </Tr>
          </Thead>
          {cart.map((c, key) => (
            <Tbody key={key}>
              <Tr>
                <Td>
                  <Flex>
                    <Image w="10rem" src={c.imagem} />
                    <Heading color="gray.500" ml="2" size="md" maxW="250px">
                      {c.title}
                    </Heading>
                    <Heading color="gray.500" m="30px 0 0 -90px" size="sm">
                      Ref: {c.id}
                    </Heading>
                  </Flex>
                </Td>
                <Td fontSize="18px">R$ {c.valor}</Td>
                <Td>
                  <Flex>
                    <Flex w="40px" type="button">
                      <AiOutlineMinusCircle style={{ fontSize: '25px' }} />
                    </Flex>{' '}
                    <Heading m="1px 6px 0 0" size="md">
                      1
                    </Heading>
                    <Flex ml="1.5" w="30px">
                      <AiOutlinePlusCircle
                        style={{ fontSize: '25px', marginLeft: '0px' }}
                      />
                    </Flex>
                  </Flex>
                </Td>
                <Td fontSize="18px">R$ {c.valor}</Td>
              </Tr>
            </Tbody>
          ))}

          <Tfoot>
            <Tr bg="#125c20">
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Box ml="-160px">
                <Th color="gray.100" fontSize="1.4rem">
                  Subtotal: R$ 139,80
                </Th>
              </Box>
            </Tr>
          </Tfoot>
        </Table>
      </Flex>
      <Link href="/produtos">
        <Button colorScheme="cyan">continuar comprando</Button>
      </Link>
    </div>
  );
};

export default Cart;
