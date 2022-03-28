import {
  Box,
  Flex,
  Image,
  Text,
  HStack,
  Grid,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const ModalInitial = () => {
  return (
    <>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        bg="#398b63"
      >
        <AlertIcon color="gray.100" boxSize="40px" mr={0} />
        <AlertTitle color="gray.100" mt={4} mb={1} fontSize="lg">
          Em breve o site da GallStore estará disponível para pedidos via
          Whatsapp!
        </AlertTitle>
        <AlertDescription fontSize="1.1rem" color="gray.100" maxWidth="sm">
          Enquanto isso aproveite e conheça um pouco sobre nós e nossos
          produtos.
          <br />
          <Text fontSize='1.2rem'fontWeight='600'>
            OBS: Nomes e valores fictícios, avisaremos quando estiver tudo
            funcionando!
          </Text>
        </AlertDescription>
      </Alert>
    </>
  );
};
export default ModalInitial;
