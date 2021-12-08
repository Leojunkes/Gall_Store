import { Image, useDisclosure, Box, Flex } from '@chakra-ui/react';
import DATA_ALMOFADAS2 from '/mockProdutos/ALMOF2_DATA';
import { Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function Almofadas2() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      {DATA_ALMOFADAS2.map((a, index) => (
        <div style={{margin:'auto'}} key={index}>
          <Image
            transition="all ease 0.2s"
            _hover={{ transform: 'scale(1)' }}
            transform="scale(0.9)"
            src={a.imagem}
            alt={a.imagem}
            loading="lazy"
            w="22rem"
          />
          <CardBody bg="red" w="50px">
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>

            <Button style={{ backgroundColor: '#2e6a2c' }}>
              Adicionar a sacola
            </Button>
          </CardBody>
        </div>
      ))}
    </>
  );
}
