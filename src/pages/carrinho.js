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
    <>
      <Flex>
        <Flex w="100%">
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
                {/*<Th fontSize="0.8rem" color="gray.100">
                  Subtotal
                </Th>*/}
              </Tr>
            </Thead>
            {cartFormated.map((product, key) => (
              <Tbody key={key}>
                <Tr>
                  <Td>
                    <Image w="9rem" src={product.imagem} />
                    <Heading color="gray.500" ml="2" size="sm" maxW="250px">
                      {product.title}
                    </Heading>
                    <Heading color="gray.500" m="30px 0 0 -90px" size="sm">
                      Ref: {product.id}
                    </Heading>
                  </Td>
                  <Td fontSize="1rem">R$ {product.valor}</Td>
                  <Td>
                  <Flex>

<Box type="button" onClick={() => decrement(product.id)}>
      <Flex w="40px" type="button">
        <AiOutlineMinusCircle
          style={{ fontSize: '1.4rem' }}
        />
      </Flex>{' '}
    </Box>

    <Heading mr="15px" size="sm">
      {product.amount}
    </Heading>
    
      <Box
        type="button"
        onClick={() => increment(product.id)}
      >
        <AiOutlinePlusCircle
          style={{ fontSize: '1.4rem', marginLeft: '0px' }}
        />
      </Box>
      </Flex>
                  </Td>

                  {/*<Td fontSize="16px">R$ {product.priceT}</Td>*/}
                </Tr>
              </Tbody>
            ))}

            <Tfoot>
              <Tr bg="#125c20">
                <Th></Th>
                <Th></Th>
                <Th></Th>

                {/*<Th color="gray.100" fontSize="1.4rem">
                    Subtotal: R$
                  </Th>*/}
              </Tr>
            </Tfoot>
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
