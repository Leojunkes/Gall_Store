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
        <Flex
          w="50%"
          m="20px auto"
          borderRadius="30px 0 30px 0"
          color="gray.200"
          justifyContent="center"
          bg="#125C20"
          h="3rem"
        >
          <Text fontSize="18px">
            Feliz com o projeto e cheia de inspiração, a{' '}
            <label style={{ fontFamily: 'princess sofia', fontSize: '30px' }}>
              Gall
            </label>{' '}
            trará novidades em breve.
          </Text>
        </Flex>
        <Grid
          // mt="-390px"
          // ml="150px"
          justifyContent="center"
          m="50px 700px 0 0"
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
        <Grid p="30px 0 0 350px" templateColumns="repeat(3,1fr)">
          <Grid maxW="250px">
            <Text
              fontSize="1.5rem"
              // textShadow="10.936px 8.74092px 0px rgba(0, 0, 0, 0.26), 7.08816px 5.66541px 0px rgba(0, 0, 0, 0.197407), 4.21239px 3.36687px 0px rgba(0, 0, 0, 0.157926), 2.1872px 1.74818px 0px rgba(0, 0, 0, 0.13), 0.891082px 0.712223px 0px rgba(0, 0, 0, 0.102074), 0.202519px 0.161869px 0px rgba(0, 0, 0, 0.0625926);"
              color="#125C20"
            >
              Criatividade
            </Text>
            <Text mt='8px' fontSize="1rem">
              Posteriormente ampliou-se a linha com a produção de almofadas que
              trazem delicados bordados manuais e bolsas femininas e masculinas
              que através da reciclagem de materiais torna o produto mais
              sustentável.
            </Text>
            <Text
              fontSize="1.5rem"
              mt='10px'
              // textShadow="10.936px 8.74092px 0px rgba(0, 0, 0, 0.26), 7.08816px 5.66541px 0px rgba(0, 0, 0, 0.197407), 4.21239px 3.36687px 0px rgba(0, 0, 0, 0.157926), 2.1872px 1.74818px 0px rgba(0, 0, 0, 0.13), 0.891082px 0.712223px 0px rgba(0, 0, 0, 0.102074), 0.202519px 0.161869px 0px rgba(0, 0, 0, 0.0625926);"
              color="#125C20"
            >
              Arte
            </Text>
            <Text mt='8px' paddingBottom="230px" fontSize="1rem">
              A preocupação com o meio ambiente e o amor pela arte compõe o DNA
              Gall. De forma alegre e artística, fauna e flora estão retratadas
              nas estampas e bordados dos produtos da marca, aproximando as
              pessoas da natureza.
            </Text>
          </Grid>
          <Grid  maxW="220px">
            <Text
              fontSize="1.5rem"
              // textShadow="10.936px 8.74092px 0px rgba(0, 0, 0, 0.26), 7.08816px 5.66541px 0px rgba(0, 0, 0, 0.197407), 4.21239px 3.36687px 0px rgba(0, 0, 0, 0.157926), 2.1872px 1.74818px 0px rgba(0, 0, 0, 0.13), 0.891082px 0.712223px 0px rgba(0, 0, 0, 0.102074), 0.202519px 0.161869px 0px rgba(0, 0, 0, 0.0625926);"
              color="#125C20"
            >
              Natureza
            </Text>
            <Text mt='-28px' fontSize="1rem">
              Por essa razão o algodão é a principal matéria-prima dos produtos
              da marca, além de gerar menor impacto para o meio ambiente durante
              seu cultivo, é um produto sustentável.
            </Text>
            <Text
              fontSize="1.5rem"
              // textShadow="10.936px 8.74092px 0px rgba(0, 0, 0, 0.26), 7.08816px 5.66541px 0px rgba(0, 0, 0, 0.197407), 4.21239px 3.36687px 0px rgba(0, 0, 0, 0.157926), 2.1872px 1.74818px 0px rgba(0, 0, 0, 0.13), 0.891082px 0.712223px 0px rgba(0, 0, 0, 0.102074), 0.202519px 0.161869px 0px rgba(0, 0, 0, 0.0625926);"
              color="#125C20"
            >
              Diversidade
            </Text>
            <Text mt='-29px' paddingBottom="230px" fontSize="1rem">
              Voltada ao o público em geral, a confecção de camisetas unissex
              deu início ao projeto.
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
