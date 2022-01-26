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
  Tfoot,
  createStandaloneToast,
} from '@chakra-ui/react';

import { useState, useEffect, useContext } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const cart2 = useCart();
  const [cart, setCart] = useState([]);

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

  const itemsCount = Object.keys(cart2.cart).length;
  const total = cart.reduce((sumtotal, product) => {
    return (sumtotal += product.valor * product.amount);
  }, 0);

  const s = itemsCount;
  console.log(s);
  const n = <span>{itemsCount}</span>;

  const increment = (key) => {
    const cloneCartProducts = [...cart];
    const updateProduct = { ...cloneCartProducts[key] };
    updateProduct.amount += 1;
    updateProduct.priceT = updateProduct.pricef * updateProduct.amount;
    cloneCartProducts[key] = updateProduct;

    setCart(cloneCartProducts);
  };

  const decrement = (key) => {
    const cloneCartProducts = [...cart];
    const updateProduct = { ...cloneCartProducts[key] };
    updateProduct.amount -= 1;
    updateProduct.priceT = updateProduct.pricef * updateProduct.amount;
    cloneCartProducts[key] = updateProduct;
    if (updateProduct.amount <= -1) {
      const toast = createStandaloneToast();
      toast({
        title: 'Erro na alteração da quantidade do produto',
        position: 'top',
        status: 'error',

        duration: 4000,
        isClosable: true,
      });
      return;
    }
    setCart(cloneCartProducts);
  };
  const handleRemoveProd = (id) => {
    const prodRemove = cart.filter((product) => product.id !== id);
    setCart(prodRemove);
  };
  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Flex>
        <Flex w="100%">
          <Table>
            <Thead bg="#125c20">
              <Tr>
                <Th fontSize="0.8rem" color="gray.100">
                  Sua sacola está com {itemsCount > 0 ? n : 0} itens
                </Th>

                <Th mr="20px" fontSize="0.8rem" color="gray.100">
                  Quantidade
                </Th>
                <Th fontSize="0.8rem" color="gray.100">
                  Subtotal
                </Th>
              </Tr>
            </Thead>
            {cart.map((product, key) => (
              <Tbody key={key}>
                <Tr>
                  <Td>
                    <Image ml="20px" w="11rem" src={product.imagem} />

                    <Heading ml="55px" color="gray.500" size="sm">
                      {product.title}
                    </Heading>
                    <Heading ml="55px" size="sm" color="green">
                      Valor Unitário
                    </Heading>
                    <Heading ml="65px" size="sm">
                      R$ {product.valor}
                    </Heading>
                  </Td>

                  <Td>
                    <Flex>
                      <Box type="button" onClick={() => decrement(key)}>
                        <Flex w="40px" type="button">
                          <AiOutlineMinusCircle
                            style={{ fontSize: '1.4rem' }}
                          />
                        </Flex>{' '}
                      </Box>

                      <Heading mr="15px" fontSize="1.2rem">
                        {product.amount}
                      </Heading>

                      <Box type="button" onClick={() => increment(key)}>
                        <AiOutlinePlusCircle
                          style={{ fontSize: '1.4rem', marginLeft: '0px' }}
                        />
                      </Box>
                    </Flex>
                  </Td>

                  <Td fontSize="1.4rem">R$ {product.priceT}</Td>
                </Tr>
              </Tbody>
            ))}

            <Flex>
            Subtotal: R$: {total}
            </Flex>
          </Table>
        </Flex>
      </Flex>
      <Flex mt="10px" alignItems="center" justifyContent="center">
        <HStack spacing={28}>
          <Link href="/produtos">
            <Button color="gray.800" bg="gray.300" border="1px solid green">
              Continuar comprando
            </Button>
          </Link>
          <Link href="/produtos">
            <Button color="gray.100" bg="#125c20">
              Finalizar Compra
            </Button>
          </Link>
        </HStack>
      </Flex>
    </>
  );
};

export default Cart;
