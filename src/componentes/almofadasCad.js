/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { Image, useDisclosure, Box, Flex } from '@chakra-ui/react';

import { Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export const almofadas = [
  {
    id: 1,
    title: '',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6058_.jpg',
  },
  {
    id: 2,
    title: '',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6065_.jpg',
  },
  {
    id: 3,
    title: '',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6069_.jpg',
  },
  {
    id: 4,
    title: '',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6073_.jpg',
  },
  {
    id: 5,
    title: '',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6077_.jpg',
  },
  {
    id: 6,
    title: '',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6078_.jpg',
  },
  {
    id: 7,
    title: '',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6091_.jpg',
  },
  {
    id: 8,
    title: '',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6105_.jpg',
  },
  {
    id: 9,
    title: '',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6112_.jpg',
  },
  
];

export default function Almofadas() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      {almofadas.map((a, index) => (
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
