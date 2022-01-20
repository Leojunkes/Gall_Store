import {
  Flex,
  Button,
  Image,
  Text,
  Grid,
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
} from '@chakra-ui/react';
import { useState, useEffect, useContext } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Link from 'next/link';
import { CartContext } from '../hooks/useCart';

const Cart = () => {
  const cart2 = useContext(CartContext);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('products'));

    const cart1 =
      localStorage.getItem('products') !== null ? localStorageProdutos : [];

    setCart([...cart1]);
  }, []);

  const itemsCount = Object.keys(cart2.cart).length;

  const testeTotalSoma = cart.map((p) => <Text>{p.valor}</Text>);
  console.log(testeTotalSoma);

  const s = itemsCount;
  console.log(s);
  const n = <span>{itemsCount}</span>;

  const cartFormated = cart.map((product) => ({
    ...product,
    pricef: product.valor,
    priceT: product.valor * product.amount,
  }));

  function increment(product) {
    setQuantity(product.amount + 1);
  }

  const decrement = () => {
    setQuantity(quantity - 1);
  };
  const handleRemoveProd = (id) => {
    const prodRemove = cart.filter((product) => product.id !== id);
    setCart(prodRemove);
  };
  function clearCart() {
    setCart([]);
  }

  //var soma = arrayValores.reduce(function (soma, i) {
  //  return soma + i;
  //});

  return (
    <div style={{ marginTop: '35px' }}>
      <Flex>
        <Box w="100%">
          <Table>
            <Thead bg="#125c20">
              <Tr>
                <Th fontSize="0.8rem" color="gray.100">
                  Sua sacola está com {itemsCount > 0 ? n : 0} itens
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
            {cartFormated.map((product, key) => (
              <Tbody key={key}>
                <Tr>
                  <Td>
                    <Flex>
                      <Image w="10rem" src={product.imagem} />
                      <Heading color="gray.500" ml="2" size="md" maxW="250px">
                        {product.title}
                      </Heading>
                      <Heading color="gray.500" m="30px 0 0 -90px" size="sm">
                        Ref: {product.id}
                      </Heading>
                    </Flex>
                  </Td>
                  <Td fontSize="18px">R$ {product.valor}</Td>
                  <Td>
                    <Flex mr="40px">
                      <Box type="button" onClick={() => decrement(product.id)}>
                        <Flex w="40px" type="button">
                          <AiOutlineMinusCircle style={{ fontSize: '25px' }} />
                        </Flex>{' '}
                      </Box>

                      <Heading m="1px 6px 0 0" size="md">
                        {product.amount}
                      </Heading>
                      <Flex ml="1.5" w="30px">
                        <Box
                          type="button"
                          onClick={() => increment(product.id)}
                        >
                          <AiOutlinePlusCircle
                            style={{ fontSize: '25px', marginLeft: '0px' }}
                          />
                        </Box>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td fontSize="18px">R$ {product.priceT}</Td>
                </Tr>
                <Tr>
                  <Button
                    type="button"
                    onClick={() => handleRemoveProd(product.id)}
                  >
                    delete
                  </Button>
                </Tr>
                <Button type="button" onClick={() => addTesteFlow(product.id)}>
                  aperte Teste
                </Button>
              </Tbody>
            ))}

            <Tfoot>
              <Tr bg="#125c20">
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Box ml="-160px">
                  <Th color="gray.100" fontSize="1.4rem">
                    Subtotal: R$
                  </Th>
                </Box>
              </Tr>
            </Tfoot>
          </Table>
        </Box>
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
    </div>
  );
};

export default Cart;
