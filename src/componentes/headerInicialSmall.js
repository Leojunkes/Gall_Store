import { Flex, Text, Box, HStack, Link } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiTwotonePhone } from 'react-icons/ai';
export default function HeaderMinSmall() {
  return (
    <Flex alignItems="center" h="50px" color="gray.200" w="100%" bg="#125C20">
      <Box ml="3px" mt="5px">
        <HStack spacing="4">
          <Link
            _hover={{ color: 'gray.800' }}
            href="https://www.facebook.com/gall.oficial"
            isExternal
            _focus="none"
          >
            <FaFacebookF style={{ fontSize: '1.3rem' }} />
          </Link>
          <Link
          _hover={{ color: 'gray.800' }}
          href="https://www.instagram.com/gall.oficial/"
          isExternal
          _focus="none"
        >
          <AiFillInstagram style={{ marginLeft: '8px', fontSize: '1.3rem' }} />
        </Link>
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
