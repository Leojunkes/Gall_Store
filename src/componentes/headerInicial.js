import { Flex, Text, Box, HStack } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiTwotonePhone } from 'react-icons/ai';
export default function HeaderMin() {
  return (
    <Flex h="30px" color="gray.200" w="100%" bg="#125C20">
      <Box display="flex" m="6px 0 0 6px">
        <FaFacebookF />
        <AiFillInstagram style={{marginLeft:'8px'}}/>
        <AiTwotonePhone style={{marginLeft:'8px'}}/>
        <Text marginTop='-3px' ml='2px'>(47) 997275360</Text>
      </Box>
      <Box mt="-7px" display="flex"></Box>

      <Box paddingTop="4px" m="0 auto" mr="100px" color="gray.200">
        <Text>Gall sempre produzindo moda consciente</Text>
      </Box>
    </Flex>
  );
}
