/* eslint-disable jsx-a11y/alt-text */
import { Flex, Text, Image, Grid, GridItem } from '@chakra-ui/react';
export default function SobreNos() {
  return (
    <>
      <Grid
        backgroundRepeat="no-repeat"
        mt="10px"
        backgroundImage="url('/imagens/sobreGall3.png')"
        backgroundSize="cover"
      >
        <Grid
          // mt="-390px"
          // ml="150px"
          justifyContent="center"
          m='115px 700px 0 0'
        >
          <Text
            fontSize="3rem"
            textShadow="3.54739px 6.03457px 0px rgba(0, 0, 0, 0.17), 2.29924px 3.91129px 0px rgba(0, 0, 0, 0.129074), 1.3664px 2.32443px 0px rgba(0, 0, 0, 0.103259), 0.709479px 1.20691px 0px rgba(0, 0, 0, 0.085), 0.289047px 0.491705px 0px rgba(0, 0, 0, 0.0667407), 0.0656925px 0.111751px 0px rgba(0, 0, 0, 0.0409259);"
            color="#125C20"
          >
            Sobre Nós
          </Text>
          <Text fontSize="1.1rem" maxW="240px">
            {' '}
            A Gall nasceu comprometida com o futuro e com o propósito de
            colaborar com a produção de moda consciente.{' '}
          </Text>
        </Grid>
        <Grid p='30px 0 0 450px' templateColumns='repeat(3,1fr)'>
        <Grid maxW="250px">
          <Text
            fontSize="1.5rem"
            // textShadow="10.936px 8.74092px 0px rgba(0, 0, 0, 0.26), 7.08816px 5.66541px 0px rgba(0, 0, 0, 0.197407), 4.21239px 3.36687px 0px rgba(0, 0, 0, 0.157926), 2.1872px 1.74818px 0px rgba(0, 0, 0, 0.13), 0.891082px 0.712223px 0px rgba(0, 0, 0, 0.102074), 0.202519px 0.161869px 0px rgba(0, 0, 0, 0.0625926);"
            color="#125C20"
          >
            Criatividade
          </Text>
          <Text fontSize="1rem">
            Posteriormente ampliou-se a linha com a produção de almofadas que
            trazem delicados bordados manuais e bolsas femininas e masculinas
            que através da reciclagem de materiais torna o produto mais
            sustentável.
          </Text>
          <Text
            fontSize="1.5rem"
            // textShadow="10.936px 8.74092px 0px rgba(0, 0, 0, 0.26), 7.08816px 5.66541px 0px rgba(0, 0, 0, 0.197407), 4.21239px 3.36687px 0px rgba(0, 0, 0, 0.157926), 2.1872px 1.74818px 0px rgba(0, 0, 0, 0.13), 0.891082px 0.712223px 0px rgba(0, 0, 0, 0.102074), 0.202519px 0.161869px 0px rgba(0, 0, 0, 0.0625926);"
            color="#125C20"
          >
            Arte
          </Text>
          <Text paddingBottom="230px" fontSize="1rem">
            A preocupação com o meio ambiente e o amor pela arte compõe o DNA
            Gall. De forma alegre e artística, fauna e flora estão retratadas
            nas estampas e bordados dos produtos da marca, aproximando as
            pessoas da natureza.
          </Text>
        </Grid>
        <Grid maxW="250px">
          <Text
            fontSize="1.5rem"
            // textShadow="10.936px 8.74092px 0px rgba(0, 0, 0, 0.26), 7.08816px 5.66541px 0px rgba(0, 0, 0, 0.197407), 4.21239px 3.36687px 0px rgba(0, 0, 0, 0.157926), 2.1872px 1.74818px 0px rgba(0, 0, 0, 0.13), 0.891082px 0.712223px 0px rgba(0, 0, 0, 0.102074), 0.202519px 0.161869px 0px rgba(0, 0, 0, 0.0625926);"
            color="#125C20"
          >
            Criatividade
          </Text>
          <Text fontSize="1rem">
            Posteriormente ampliou-se a linha com a produção de almofadas que
            trazem delicados bordados manuais e bolsas femininas e masculinas
            que através da reciclagem de materiais torna o produto mais
            sustentável.
          </Text>
          <Text
            fontSize="1.5rem"
            // textShadow="10.936px 8.74092px 0px rgba(0, 0, 0, 0.26), 7.08816px 5.66541px 0px rgba(0, 0, 0, 0.197407), 4.21239px 3.36687px 0px rgba(0, 0, 0, 0.157926), 2.1872px 1.74818px 0px rgba(0, 0, 0, 0.13), 0.891082px 0.712223px 0px rgba(0, 0, 0, 0.102074), 0.202519px 0.161869px 0px rgba(0, 0, 0, 0.0625926);"
            color="#125C20"
          >
            Arte
          </Text>
          <Text paddingBottom="230px" fontSize="1rem">
            A preocupação com o meio ambiente e o amor pela arte compõe o DNA
            Gall. De forma alegre e artística, fauna e flora estão retratadas
            nas estampas e bordados dos produtos da marca, aproximando as
            pessoas da natureza.
          </Text>
        </Grid>
        

        
        </Grid>
      </Grid>
    </>
  );
}
