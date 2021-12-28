/* eslint-disable @next/next/link-passhref */
import {
  Flex,
  Button,
  Image,
  Text,
  Grid,
  Divider,
  Heading,
  Box,
} from '@chakra-ui/react';

import { BsCartPlus } from 'react-icons/bs';
import DATA_ALMOFADAS from '/mockProdutos/ALMOF_DATA';

import HeaderProdutos from '../componentes/header_Produtos';

import { useState, useEffect } from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { React } from 'react';

export default function Produtos() {
  var [produtos, setProdutos] = useState(['']);



  useEffect(() => {
    const localStorageTasks = JSON.parse(localStorage.getItem('produtos'));
    const produtos =
      localStorage.getItem('produtos') !== null ? localStorageTasks : [];

    setProdutos([produtos]);
    console.log(produtos);
  }, []);
  // for(let p of produtos) {
  //   console.log(p)
  // }

  function addProduct(id) {
    produtos = DATA_ALMOFADAS.find((p) => p.id === id);

    setProdutos(produtos);
    localStorage.setItem('produtos', JSON.stringify([produtos]));

    console.log(produtos);
    // console.log(addprod);
  }
  // const finalRef = React.useRef();

  const [search, setSearch] = useState('');
  return (
    <div
      className="produtos"
      style={{ marginTop: '30px', backgroundColor: '#f9fafc' }}
    >
      <HeaderProdutos />

      <Flex
        color="gray.100"
        borderRadius="0 20px 0 20px"
        bg="#2e6a2c"
        w="130px"
        h="30px"
        m="30px"
        justifyContent="center"
        alignItems="center"
      >
        <Text m="auto" fontSize="1.2rem">
          Almofadas
        </Text>
      </Flex>
      <Flex ml="20px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch />}
          />
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
        </InputGroup>
      </Flex>
      <Divider m="30px auto" color="gray.400" w="80%" />

      <div className="produtos1">
        <>
          {DATA_ALMOFADAS.filter((val) => {
            if (search === '') {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          }).map((a, index) => (
            <Box
              boxShadow="7.60483px 9.2826px 0px rgba(0, 0, 0, 0.04), 4.92905px 6.0165px 0px rgba(0, 0, 0, 0.0303704), 2.92927px 3.57552px 0px rgba(0, 0, 0, 0.0242963), 1.52096px 1.85652px 0px rgba(0, 0, 0, 0.02), 0.619652px 0.75636px 0px rgba(0, 0, 0, 0.0157037), 0.14083px 0.1719px 0px rgba(0, 0, 0, 0.00962963);"
              m="14px auto"
              key={index}
            >
              <Box type="button" onClick={() => addProduct(a.id)}>
                <Image
                  backgroundImage=""
                  transition="all ease 0.2s"
                  _hover={{ transform: 'scale(1)' }}
                  transform="scale(0.9)"
                  src={a.imagem}
                  alt={a.imagem}
                  w="20rem"
                  loading="lazy"
                />
              </Box>

              <Box textAlign="center">
                <Text>{a.title}</Text>
                <Heading color="#2e6a2c" size="md">
                  {a.valor}
                </Heading>
                <Box  paddingBottom="14px">
                  <Button
                    mt="4.5px"
                    borderRadius="30px 0 0 0px"
                    style={{ backgroundColor: '#2e6a2c' }}
                  >
                    <Text m="auto" color="gray.100">
                      <BsCartPlus style={{ fontSize: '1.6rem' }} />
                    </Text>
                  </Button>
                  <Button
                    border="1px"
                    borderColor="#2e6a2c"
                    mt="4px"
                    borderRadius="0px 0 100px"
                    bg="gray.200"
                    ml='1'
                  >
                    <Text m="auto" color="#2e6a2c">
                      Comprar agora
                    </Text>
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </>
      </div>
    </div>
  );
}
