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

export default function Cart() {
  return (
    <>
      <Flex mt='40px' h='255px' bg='#ffffff'>
        <Image
          w="22rem"
          src="https://api-next-teste.vercel.app/gallAlmofadas/IMG_6078_.jpg"
        />
        <Flex ml='12px' flexDirection="column">
          <Text maxW="250px">
            Almofada linda na cor mostarda, excelente escolha para o verão.
          </Text>
          <Text>Ref:xxxxx</Text>
          <Text>tamanho G</Text>
          <Text>Cor:Marinho</Text>
          <Text> - Quantidade +</Text>
          <Text>69.90</Text>
        </Flex>
      </Flex>
    </>
  );
}
