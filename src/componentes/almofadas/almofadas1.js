/* eslint-disable jsx-a11y/alt-text */
import { Image, Button, Box, Flex, Text, Heading } from '@chakra-ui/react';
import DATA_ALMOFADAS1 from '/mockProdutos/ALMOF1_DATA';

export default function Almofadas1() {
  return (
    <>
      {DATA_ALMOFADAS1.map((a, index) => (
        <Box
          boxShadow="-0.381739px 10.9934px 27px rgba(0, 0, 0, 0.25), -0.277656px 7.99596px 18.1986px rgba(0, 0, 0, 0.202344), -0.193256px 5.5654px 11.7703px rgba(0, 0, 0, 0.16875), -0.126749px 3.65014px 7.30371px rgba(0, 0, 0, 0.144531), -0.0763479px 2.19867px 4.3875px rgba(0, 0, 0, 0.125), -0.0402616px 1.15946px 2.61035px rgba(0, 0, 0, 0.105469), -0.0167011px 0.48096px 1.56094px rgba(0, 0, 0, 0.08125), -0.00387704px 0.111651px 0.82793px rgba(0, 0, 0, 0.0476562);"
          m="14px auto"
          key={index}
        >
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
            <Box paddingBottom='14px'>
              <Button style={{ backgroundColor: '#2e6a2c' }}>
                <Text m="auto" color="gray.100">
                  Adicionar a sacola
                </Text>
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}
