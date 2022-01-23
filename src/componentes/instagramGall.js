import { Box, Flex, Image, Text, HStack, Grid } from '@chakra-ui/react';
import { BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

const InstagramPhotos = () => {
  return (
    <Grid m='0 auto'>
      <Flex justifyContent="center" m="50px auto">
        <BsInstagram color="gray.700" fontSize="2.2rem" />
        <Text color="gray.700" m="-10px 0 0 6px" fontSize="2.2rem">
          Siga Nosso Instagram
        </Text>
      </Flex>
      <Grid >
        <HStack spacing="8">
          <Box>
            <a target="_blank" href="https://www.instagram.com/p/CWLUdsGrGSK/?utm_source=ig_web_copy_link">
              <Image
                backgroundImage=""
                transition="all ease 0.2s"
                _hover={{ transform: 'scale(1)' }}
                transform="scale(0.9)"
                w="20rem"
                loading="lazy"
                borderRadius="8px"
                src="/imagens/camisaGall.png"
                opacity="0.9"
              />
            </a>
          </Box>
          <Box>
            <a target="_blank" href="https://www.instagram.com/p/CWnpAtrLNio/?utm_source=ig_web_copy_link">
              
              <Image
                backgroundImage=""
                transition="all ease 0.2s"
                _hover={{ transform: 'scale(1)' }}
                transform="scale(0.9)"
                w="20rem"
                loading="lazy"
                borderRadius="8px"
                src="/imagens/gallFera.png"
                opacity="0.9"
              />
            </a>
          </Box>
          <Box>
            <a target="_blank" href="https://www.instagram.com/p/CXTZvObu7No/?utm_source=ig_web_copy_link">
              <Image
                backgroundImage=""
                transition="all ease 0.2s"
                _hover={{ transform: 'scale(1)' }}
                transform="scale(0.9)"
                w="20rem"
                loading="lazy"
                borderRadius="8px"
                src="/imagens/bolsaGall.png"
                opacity="0.9"
              />
            </a>
          </Box>
        </HStack>
      </Grid>
      </Grid>
    
  );
};
export default InstagramPhotos;
