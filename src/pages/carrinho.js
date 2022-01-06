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

const Cart = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const localStorageTasks = localStorage.getItem('produtos');
    const produtos =
      localStorage.getItem('produtos') !== null ? localStorageTasks : [];

    setProdutos([...produtos]);
  }, []);

  return (
    <div style={{ marginTop: '35px' }}>
      <Flex>
        <Table >
          <Thead  bg = '#125c20'>
            <Tr >
              <Th color='gray.100'>Sua sacola está com 2 itens</Th>

              <Th color='gray.100'>Preço Unitário</Th>
              <Th color='gray.100'>Quantidade</Th>
              <Th color='gray.100'>Subtotal</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>

              <Td>
                <Flex>
                  <Image w='10rem' src='https://api-next-teste.vercel.app/gallAlmofadas/IMG_6086_.jpg' />
                  <Heading color='gray.500' ml='-25px' size="md" maxW="250px">WhiteStripe</Heading>
                  <Heading color='gray.500' m='30px 0 0 -90px' size="sm">Ref: 12345</Heading>
                </Flex>
              </Td>
              <Td fontSize='18px'>R$ 69,90</Td>
              <Td>
                <Flex>
                  <Flex w="40px" type="button">
                    <AiOutlineMinusCircle style={{ fontSize: '25px'}} />
                  </Flex>{' '}
                  
                    <Heading m='1px 6px 0 0' size='md'>1</Heading>
                  

                  <Flex ml='1.5' w="30px">
                    <AiOutlinePlusCircle style={{ fontSize: '25px', marginLeft: '0px' }} />
                  </Flex>
                </Flex>
              </Td>
              <Td fontSize='18px'>R$ 69,90</Td>


            </Tr>
            <Tr>

              <Td>
                <Flex>
                  <Image w='10rem' src='https://api-next-teste.vercel.app/gallAlmofadas3/IMG_6354_.jpg' />
                  <Heading color='gray.500' ml='-25px' size="md" maxW="250px">WhiteStripe</Heading>
                  <Heading color='gray.500' m='30px 0 0 -90px' size="sm">Ref: 12345</Heading>
                </Flex>
              </Td>
              <Td fontSize='18px'>R$ 69,90</Td>
              <Td>
                <Flex>
                  <Flex w="40px" type="button">
                    <AiOutlineMinusCircle style={{ fontSize: '25px'}} />
                  </Flex>{' '}
                  
                    <Heading m='1px 6px 0 0' size='md'>1</Heading>
                  

                  <Flex ml='1.5' w="30px">
                    <AiOutlinePlusCircle style={{ fontSize: '25px', marginLeft: '0px' }} />
                  </Flex>
                </Flex>
              </Td>
              <Td fontSize='18px'>R$ 69,90</Td>


            </Tr>
          </Tbody>
          <Tfoot>
            <Tr bg = '#125c20'>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th color='gray.100' fontSize='20px'>Subtotal: R$ 139,80</Th>
            </Tr>
          </Tfoot>

        </Table>

      </Flex>

      

    </div>
  );
}

export default Cart
