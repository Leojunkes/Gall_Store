/* eslint-disable jsx-a11y/alt-text */
import { Flex, Image, Text, Grid, Box } from '@chakra-ui/react';
import { fotosGall } from './carrosselFotos';

import { Button } from 'reactstrap';
import CarouselAuto from './carouselAuto';
import CardFotos from './cardFotos';

export default function Content() {
  return (
    <Flex  flexDirection="column">
      <Flex boxShadow='15.5218px 10.9578px 0px rgba(0, 0, 0, 0.11), 10.0604px 7.10225px 0px rgba(0, 0, 0, 0.0835185), 5.97878px 4.22077px 0px rgba(0, 0, 0, 0.0668148), 3.10437px 2.19155px 0px rgba(0, 0, 0, 0.055), 1.26474px 0.892855px 0px rgba(0, 0, 0, 0.0431852), 0.287441px 0.202922px 0px rgba(0, 0, 0, 0.0264815);' mt='10px' >
        <CarouselAuto />
      </Flex>
<Flex  mt='40px' justifyContent='center'>
  <Text textShadow='12.3921px 11.6377px 0px rgba(0, 0, 0, 0.13), 8.03193px 7.54293px 0px rgba(0, 0, 0, 0.0987037), 4.77326px 4.48266px 0px rgba(0, 0, 0, 0.078963), 2.47842px 2.32753px 0px rgba(0, 0, 0, 0.065), 1.00973px 0.948255px 0px rgba(0, 0, 0, 0.051037), 0.229484px 0.215512px 0px rgba(0, 0, 0, 0.0312963);' fontSize="2.5rem" fontFamily='Prata'>Conheça nossa Coleção</Text>
</Flex>
      <Flex
        // padding="20px"
        // alignItems="center"
        // templateColumns="repeat(6, 1fr)"
        // gap={4}
        // w="100%"
        // mt="10px"
        // bg="#ffffff"
        mt='30px'
        boxShadow='15.5218px 10.9578px 0px rgba(0, 0, 0, 0.11), 10.0604px 7.10225px 0px rgba(0, 0, 0, 0.0835185), 5.97878px 4.22077px 0px rgba(0, 0, 0, 0.0668148), 3.10437px 2.19155px 0px rgba(0, 0, 0, 0.055), 1.26474px 0.892855px 0px rgba(0, 0, 0, 0.0431852), 0.287441px 0.202922px 0px rgba(0, 0, 0, 0.0264815);'
      >
        <CardFotos/>
      </Flex>
      <Flex mt="10px" bg="#ffffff"></Flex>
    </Flex>
  );
}
