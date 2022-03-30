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

import swal from 'sweetalert';

import { useEffect } from 'react';

import Link from 'next/link';
import { useCart } from '../hooks/useCart';
import { BsTrash } from 'react-icons/bs';

const Cart = () => {
  const {
    saveStorage,
    deleteCartItem,
    cart,
    setCart,
    setTotal10,
    total10,
    quantity,
    setQuantity,
  } = useCart();

  const total = cart.reduce((sumtotal, product) => {
    return (sumtotal += product.valor * product.amount);
  }, 0);

  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('products'));

    const localstorageTotal = JSON.parse(localStorage.getItem('saveTotal'));
    const totalSum =
      localStorage.getItem('saveTotal') !== null ? localstorageTotal : [];
    console.log(totalSum);

    const cart1 = (localStorageProdutos || []).map((product) => ({
      ...product,
      amount: parseInt(product.amount),
      pricef: parseFloat(product.valor),
      priceT: parseFloat(product.valor) * parseInt(product.amount),
    }));

    setCart([...cart1]);
    setTotal10(totalSum);
    console.log(cart);
  }, []);

  const testeAlert = () => {
    swal("Are you sure you want to do this?", {
      buttons: ["Oh não!", "Aww Sim!"],
    });
  };

  const itemsCount = Object.keys(cart).length;

  const totalAmount = cart.reduce((amountTotal, product) => {
    return (amountTotal += product.amount);
  }, 0);

  const s = itemsCount;
  //console.log(s);
  const n = <span>{itemsCount}</span>;

  const increment = (key) => {
    const cloneCartProducts = [...cart];
    const updateProduct = { ...cloneCartProducts[key] };
    updateProduct.amount += 1;
    updateProduct.priceT = updateProduct.pricef * updateProduct.amount;
    cloneCartProducts[key] = updateProduct;

    setCart(cloneCartProducts);
    localStorage.setItem('saveTotal', JSON.stringify(total));
  };

  const decrement = (key) => {
    const cloneCartProducts = [...cart];
    const updateProduct = { ...cloneCartProducts[key] };
    updateProduct.amount -= 1;
    updateProduct.priceT = updateProduct.pricef * updateProduct.amount;
    cloneCartProducts[key] = updateProduct;

    setCart(cloneCartProducts);
  };

  const salvarTotal = () => {
    localStorage.setItem('saveTotal', JSON.stringify(total));
    localStorage.setItem('products', JSON.stringify(cart));
    localStorage.setItem('totalAmount', JSON.stringify(quantity));
  };

  return (
    <>
      <Flex mt="10px" flexDirection="column">
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
                <Td justifyContent="center" alignItems="center">
                  <Flex flexDirection="column">
                    <Image objectFit="cover" w="11rem" src={product.imagem} />
                    <Box ml="26px">
                      <Heading color="gray.500" size="sm">
                        {product.title}
                      </Heading>
                      <Heading size="sm" color="green">
                        Valor Unitário
                      </Heading>
                      <Heading size="md">
                        {' '}
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(product.valor)}
                      </Heading>
                    </Box>
                  </Flex>
                </Td>

                <Td>
                  <Flex>
                    <Button
                      _hover={{ bg: 'green.200' }}
                      _focus="none"
                      bg="none"
                      disabled={product.amount <= 0}
                      type="button"
                      onClick={() => decrement(key)}
                      fontSize="2rem"
                      color="gray.700"
                    >
                      -
                    </Button>

                    <Box
                      bg="none"
                      w="40px"
                      border="1px solid green"
                      fontSize="1.7rem"
                      color="gray.700"
                    >
                      <Text mt="8px" textAlign="center">
                        {product.amount}
                      </Text>
                    </Box>

                    <Button
                      _hover={{ bg: 'green.200' }}
                      _focus="none"
                      bg="none"
                      type="button"
                      onClick={() => increment(key)}
                      fontSize="2rem"
                      color="gray.700"
                    >
                      +
                    </Button>
                    <Box
                      color="red.700"
                      type="button"
                      w="30px"
                      m="55px 0 0 46px"
                      position="absolute"
                      fontSize="1.8rem"
                      onClick={() => deleteCartItem(product.id)}
                    >
                      <BsTrash />
                    </Box>
                  </Flex>
                </Td>

                <Td fontSize="1.6rem" lineHeight="26px">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.priceT)}
                </Td>
              </Tr>
            </Tbody>
          ))}
          <Tfoot bg="#125c20">
            <Tr>
              <Th></Th>

              <Th></Th>
              <Th>
                <Flex lineHeight="15px" flexDirection="column">
                  <Text fontSize="1.2rem" color="gray.100">
                    Total:
                  </Text>
                  <Text lineHeight="30px" fontSize="1.5rem" color="gray.100">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(total)}
                  </Text>
                </Flex>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
        <Flex
          justifyContent="end"
          color="gray.100"
          fontSize="1.5rem"
          w="100%"
          bg="#125c20"
        ></Flex>
      </Flex>

      <Flex
        mt="40px"
        paddingBottom="40px"
        alignItems="center"
        justifyContent="center"
      >
        <HStack spacing={28}>
          <Link href="/produtos">
            <Button
              h="3.5rem"
              color="gray.800"
              bg="gray.300"
              border="1px solid green"
              onClick={() => saveStorage()}
              _hover={{ bg: '#125c20', color: 'white' }}
            >
              Continuar comprando
            </Button>
          </Link>
          <Link href="/cadastroCliente">
            <Button
              _hover={{ bg: 'green' }}
              h="3.5rem"
              color="gray.100"
              bg="#125c20"
              onClick={salvarTotal}
              _focus="none"
            >
              Finalizar Compra
            </Button>
          </Link>
          <Button type="button" onClick={testeAlert}>
            teste
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

export default Cart;
