import { Flex, Text, Box, HStack } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiTwotonePhone } from 'react-icons/ai';
export default function HeaderMinSmall() {
  return (
    <Flex h="30px" color="gray.200" w="100%" bg="#125C20">
      <Box ml="3px" mt="5px">
        <HStack spacing="4">
          <FaFacebookF />
          <AiFillInstagram />
          <AiTwotonePhone />
          <Text>(47) 997275360</Text>
        </HStack>
      </Box>

      <Box m="5px 0 0 20px" color="gray.200">
        <Text>Gall sempre produzindo moda consciente</Text>
      </Box>
    </Flex>
  );
}
