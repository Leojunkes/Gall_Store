/* eslint-disable jsx-a11y/alt-text */
import {
  Image,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  Flex,
  Grid,
} from '@chakra-ui/react';

const almofadas1 = [
  {
    id: 1,
    title: '',
    valor: '',
    imagem:
      'https://api-next-teste.vercel.app/_next/image?url=%2FgallAlmofadas%2FIMG_6090_.jpg&w=750&q=75',
  },
  {
    id: 2,
    title: '',
    valor: '',
    imagem:
      'https://api-next-teste.vercel.app/_next/image?url=%2FgallAlmofadas%2FIMG_6132_.jpg&w=750&q=75',
  },
  {
    id: 3,
    title: '',
    valor: '',
    imagem:
      'https://api-next-teste.vercel.app/_next/image?url=%2FgallAlmofadas%2FIMG_6120_.jpg&w=750&q=75',
  },
  {
    id: 4,
    title: '',
    valor: '',
    imagem:
      'https://api-next-teste.vercel.app/_next/image?url=%2FgallAlmofadas%2FIMG_6112_.jpg&w=750&q=75',
  },
  {
    id: 5,
    title: '',
    valor: '',
    imagem:
      'https://api-next-teste.vercel.app/_next/image?url=%2FgallAlmofadas%2FIMG_6117_.jpg&w=750&q=75',
  },
  {
    id: 6,
    title: '',
    valor: '',
    imagem:
      'https://api-next-teste.vercel.app/_next/image?url=%2FgallAlmofadas%2FIMG_6109_.jpg&w=750&q=75',
  },
  {
    id: 7,
    title: '',
    valor: '',
    imagem:
      'https://api-next-teste.vercel.app/_next/image?url=%2FgallAlmofadas%2FIMG_6105_.jpg&w=750&q=75',
  },
  {
    id: 8,
    title: '',
    valor: '',
    imagem:
      'https://api-next-teste.vercel.app/_next/image?url=%2FgallAlmofadas%2FIMG_6100_.jpg&w=750&q=75',
  },
  {
    id: 9,
    title: '',
    valor: '',
    imagem:
      'https://api-next-teste.vercel.app/_next/image?url=%2FgallAlmofadas%2FIMG_6083_.jpg&w=750&q=75',
  },
  {
    id: 10,
    title: '',
    valor: '',
    imagem:
      'https://api-next-teste.vercel.app/_next/image?url=%2FgallAlmofadas%2FIMG_6097_.jpg&w=750&q=75',
  },
];

export default function Almofadas1() {
  return (
    <>
      {almofadas1.map((a, index) => (
        <Grid key={index}>
          <Image src={a.imagem} />
        </Grid>
      ))}
    </>
  );
}
