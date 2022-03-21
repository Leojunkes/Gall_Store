import { Flex, Text, Box, HStack, Link } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiTwotonePhone } from 'react-icons/ai';
export default function HeaderMin() {
  return (
    <Flex alignItems="center" h="50px" color="gray.200" w="100%" bg="#125C20">
      <Box display="flex" m="6px 0 0 6px">
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

        <AiTwotonePhone style={{ marginLeft: '8px', fontSize: '1.3rem' }} />

        <Text marginTop="-3px" ml="2px">
          (47) 997275360
        </Text>
      </Box>
      <Box mt="-7px" display="flex"></Box>

      <Box paddingTop="4px" m="0 auto" mr="100px" color="gray.200">
        <Text>Gall sempre produzindo moda consciente</Text>
      </Box>
    </Flex>
  );
}
