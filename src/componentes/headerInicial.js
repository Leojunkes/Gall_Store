import { Flex, Text,Box } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiTwotonePhone } from 'react-icons/ai';
export default function HeaderMin(){
  return (
    <Flex w="100%" bg="#125C20">
      <Box>
        <FaFacebookF />
        <AiFillInstagram />
        <AiTwotonePhone />
        <Text>Gall sempre produzindo moda consciente</Text>
      </Box>
    </Flex>
  );
};

