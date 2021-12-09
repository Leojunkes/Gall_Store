/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { Button, Image, useDisclosure, Box, Flex, Heading, Text } from '@chakra-ui/react';



export const almofadas = [
  {
    id: 1,
    title: 'lindosma',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6058_.jpg',
  },
  {
    id: 2,
    title: 'assssskkss',
    valor: '',
    imagem: 'https:/api-next-teste.vercel.app/gallAlmofadas/IMG_6065_.jpg',
  },
  {
    id: 3,
    title: 'karinaaaaa',
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
          <Box textAlign='center'>
            
            <Heading size={'sm'}>{a.title}</Heading>
            <Button mt='5px' style={{ backgroundColor: '#2e6a2c' }}>
            <Text color='gray.100'>Adicionar a sacola</Text>
          </Button>
          </Box>


          


          

        </div>
      ))}
    </>
  );
}


