/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { Image } from '@chakra-ui/react';
import {
  Button,
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';

const almofadas = [
  {
    id: 1,
    title: '',
    valor: '',
    imagem: 'https://api-next-teste.vercel.app/gallAlmofadas/IMG_6058_.jpg',
  },
  {
    id: 2,
    title: '',
    valor: '',
    imagem: 'https://api-next-teste.vercel.app/gallAlmofadas/IMG_6065_.jpg',
  },
  {
    id: 3,
    title: '',
    valor: '',
    imagem: 'https://api-next-teste.vercel.app/gallAlmofadas/IMG_6069_.jpg',
  },
  {
    id: 4,
    title: '',
    valor: '',
    imagem: 'https://api-next-teste.vercel.app/gallAlmofadas/IMG_6073_.jpg',
  },
  {
    id: 5,
    title: '',
    valor: '',
    imagem: 'https://api-next-teste.vercel.app/gallAlmofadas/IMG_6077_.jpg',
  },
  {
    id: 6,
    title: '',
    valor: '',
    imagem: 'https://api-next-teste.vercel.app/gallAlmofadas/IMG_6078_.jpg',
  },
  {
    id: 7,
    title: '',
    valor: '',
    imagem: 'https://api-next-teste.vercel.app/gallAlmofadas/IMG_6091_.jpg',
  },
  {
    id: 8,
    title: '',
    valor: '',
    imagem: 'https://api-next-teste.vercel.app/gallAlmofadas/IMG_6105_.jpg',
  },
  {
    id: 9,
    title: '',
    valor: '',
    imagem: 'https://api-next-teste.vercel.app/gallAlmofadas/IMG_6112_.jpg',
  },
  {
    id: 10,
    title: '',
    valor: '',
    imagem: 'https://api-next-teste.vercel.app/gallAlmofadas/IMG_6125_.jpg',
  },
];

export default function Almofadas() {
  return (
    <>
      {almofadas.map((a,index) => (
        <Card key={index} >
          <Image
            
            src={a.imagem}
          />
          {/* <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        /> */}
          <CardBody bg="red" w="50px">
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>

            <Button style={{backgroundColor:'#2e6a2c'}}>Adicionar a sacola</Button>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
