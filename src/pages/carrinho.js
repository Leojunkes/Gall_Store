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
import { formatPrice } from '../utils/format';

const Cart = () => {
  const { updateProductAmount } = useContext(CartContext);
  const cart2 = useContext(CartContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('products'));

    const cart1 =
      localStorage.getItem('products') !== null ? localStorageProdutos : [];

    setCart([...cart1]);
  }, []);

  const itemsCount = Object.keys(cart2.cart).length;
  let [value, setValue] = useState(1);
  const s = itemsCount;
  console.log(s);
  const n = <span>{itemsCount}</span>;

  const arrayValores = cart.map((m) => <span>{m.valor * s}</span>);

  const cartFormated = cart.map((product) => ({
    ...product,
    pricef: product.valor,
    priceT: product.valor * product.amount,
  }));

  function increment() {
    
  }

  const decrement = () => {
    const valor = value - 1;
    setValue(valor);
  };
  const handleRemoveProd = (id) => {
    const prodRemove = cart.filter((product) => product.id !== id);
    setCart(prodRemove);
  };

  //var soma = arrayValores.reduce(function (soma, i) {
  //  return soma + i;
  //});

  return (
    <div style={{ marginTop: '35px' }}>
      <Flex>
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
                    <Box type="button" onClick={decrement}>
                      <Flex w="40px" type="button">
                        <AiOutlineMinusCircle style={{ fontSize: '25px' }} />
                      </Flex>{' '}
                    </Box>

                    <Heading m="1px 6px 0 0" size="md">
                      {value}
                    </Heading>
                    <Flex ml="1.5" w="30px">
                      <Box type="button" onClick={increment}>
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
            </Tbody>
          ))}

          <Tfoot>
            <Tr bg="#125c20">
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Box ml="-160px">
                <Th color="gray.100" fontSize="1.4rem">
                  Subtotal: R$ {arrayValores}
                </Th>
              </Box>
            </Tr>
          </Tfoot>
        </Table>
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

      <Button type="button" onClick={() => addTesteFlow()}>
          aperte Teste
        </Button>
    </div>
  );
};

export default Cart;
