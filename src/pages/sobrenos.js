/* eslint-disable jsx-a11y/alt-text */
import { Flex, Text, Image } from '@chakra-ui/react';
export default function SobreNos() {
  return (
    <Flex mt="10px" backgroundImage="url('/imagens/sobreGall.png')">
      <Flex alignItems="center" flexDirection="column">
        <Text
          fontSize="3.5rem"
          textShadow="10.936px 8.74092px 0px rgba(0, 0, 0, 0.26), 7.08816px 5.66541px 0px rgba(0, 0, 0, 0.197407), 4.21239px 3.36687px 0px rgba(0, 0, 0, 0.157926), 2.1872px 1.74818px 0px rgba(0, 0, 0, 0.13), 0.891082px 0.712223px 0px rgba(0, 0, 0, 0.102074), 0.202519px 0.161869px 0px rgba(0, 0, 0, 0.0625926);"
          color="#125C20"
          
        >
          Sobre
        </Text>
        <Flex ml="20px" maxW="1400px">
          <Text fontFamily="Roboto" fontSize="1.4rem">
            A Gall nasceu comprometida com o futuro e com o propósito de
            colaborar com a produção de moda consciente. Por essa razão o
            algodão é a principal matéria-prima dos produtos da marca, além de
            gerar menor impacto para o meio ambiente durante seu cultivo, é um
            produto sustentável.
            <br /> <br />
            Voltada ao o público em geral, a confecção de camisetas unissex deu
            início ao projeto. Posteriormente ampliou-se a linha com a produção
            de almofadas que trazem delicados bordados manuais e bolsas
            femininas e masculinas que através da reciclagem de materiais torna
            o produto mais sustentável.
            <br /> <br /> A preocupação com o meio ambiente e o amor pela arte
            compõe o DNA Gall. De forma alegre e artística, fauna e flora estão
            retratadas nas estampas e bordados dos produtos da marca,
            aproximando as pessoas da natureza. Feliz com o projeto e cheia de
            inspiração, a Gall trará novidades em breve.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
