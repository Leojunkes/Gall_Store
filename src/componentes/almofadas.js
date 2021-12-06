/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { Image, useDisclosure, Box, Flex } from '@chakra-ui/react';
import DATA_ALMOFADAS from '/mockProdutos/ALMOF_DATA';
import { Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function Almofadas() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      {DATA_ALMOFADAS.map((a, index) => (
        <div key={index}>
          <Image
            transition="all ease 0.2s"
            _hover={{ transform: 'scale(1)' }}
            transform="scale(0.9)"
            src={a.imagem}
            alt={a.imagem}
            loading="lazy"
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
