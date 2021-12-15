/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import { Flex, Image, Text, Grid, Box, Heading } from '@chakra-ui/react';

import { Button } from 'reactstrap';
import CarouselAuto from './carouselAuto';
import Link from 'next/link';

export default function Content() {
  return (
    
    <Flex paddingBottom='100px' flexDirection="column">
      <Flex
        boxShadow="15.5218px 10.9578px 0px rgba(0, 0, 0, 0.11), 10.0604px 7.10225px 0px rgba(0, 0, 0, 0.0835185), 5.97878px 4.22077px 0px rgba(0, 0, 0, 0.0668148), 3.10437px 2.19155px 0px rgba(0, 0, 0, 0.055), 1.26474px 0.892855px 0px rgba(0, 0, 0, 0.0431852), 0.287441px 0.202922px 0px rgba(0, 0, 0, 0.0264815);"
        mt="10px"
      >
        <CarouselAuto />
      </Flex>
      <Flex mt="40px" justifyContent="center"></Flex>
      <Link href="/produtos">
        <Flex
          bg="#ffffff"
          mt="5px"
          boxShadow="15.5218px 10.9578px 0px rgba(0, 0, 0, 0.11), 10.0604px 7.10225px 0px rgba(0, 0, 0, 0.0835185), 5.97878px 4.22077px 0px rgba(0, 0, 0, 0.0668148), 3.10437px 2.19155px 0px rgba(0, 0, 0, 0.055), 1.26474px 0.892855px 0px rgba(0, 0, 0, 0.0431852), 0.287441px 0.202922px 0px rgba(0, 0, 0, 0.0264815);"
          cursor='pointer'
        >
          <Image src="/imagens/gallProdutos.png" />
        </Flex>
      </Link>
      <Flex alignItems='center'm='100px 0 0 0'justifyContent='center'>
        <Heading color='gray.300'>© Gall Store</Heading>
      </Flex>

      
    </Flex>
    
    
  );
}
