/* eslint-disable jsx-a11y/alt-text */
import { Image, Button, Box, Flex, Text, Heading } from '@chakra-ui/react';
import DATA_ALMOFADAS1 from '/mockProdutos/ALMOF1_DATA';

export default function Almofadas1() {
  return (
    <>
      {DATA_ALMOFADAS1.map((a, index) => (
        <Box m="14px auto" key={index}>
          <Image
            transition="all ease 0.2s"
            _hover={{ transform: 'scale(1)' }}
            transform="scale(0.9)"
            src={a.imagem}
            alt={a.imagem}
            w="20rem"
            loading="lazy"
          />
          <Box textAlign="center">
            <Text>{a.title}</Text>
            <Heading size="md">{a.valor}</Heading>
            <Button style={{ backgroundColor: '#2e6a2c' }}>
              <Text m="auto" color="gray.100">
                Adicionar a sacola
              </Text>
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
}
