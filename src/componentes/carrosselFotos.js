import { Flex, Text, Button, Box, Badge, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

export const fotosGall = [
  {
    id: 1,
    imagem: 'https://api-next-teste-leojunkes.vercel.app/imagensGall/arte.png',
    title: 'Arte',
  },
  {
    id: 2,
    imagem:
      'https://api-next-teste-leojunkes.vercel.app/imagensGall/floresta1.png',
    title: 'Floresta',
  },
  {
    id: 3,
    imagem:
      'https://api-next-teste-leojunkes.vercel.app/imagensGall/fundoMar.jpeg',
    title: 'Fundo do Mar',
  },
  {
    id: 4,
    imagem:
      'https://api-next-teste-leojunkes.vercel.app/imagensGall/inspiracao.png',
    title: 'Inspiração',
  },
  {
    id: 5,
    imagem:
      'https://api-next-teste-leojunkes.vercel.app/imagensGall/jardineira.png',
    title: 'Jardineira',
  },
  {
    id: 6,
    imagem:
      'https://api-next-teste-leojunkes.vercel.app/imagensGall/natureza.png',
    title: 'Natureza',
  },
  {
    id: 7,
    imagem:
      'https://api-next-teste-leojunkes.vercel.app/imagensGall/pavao.jpeg',
    title: 'Pavão',
  },
  
  
  
];

export default function CarrosselGaleria() {
  const [scrollx, setScrollx] = useState(-1);
  const lenght = fotosGall.lenght;

  function handleRightArrow() {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listw = lenght * 150;
    if (window.innerWidth - listw > x) {
      x = window.innerWidth - listw - 40;
    }
    setScrollx(x);
  }

  function handleLeftArrow() {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  }

  return (
    <Flex m="auto" w="100%" className="listArea" overflowX="hidden">
      <Button
        opacity="0.9"
        position="absolute"
        w="4rem"
        left="0"
        onClick={handleLeftArrow}
        mt="5rem"
      >
        <AiFillLeftCircle fontSize="20rem" />
      </Button>
      <Button
        overflow="hidden"
        opacity="0.9"
        right="0"
        position="absolute"
        width="4rem"
        onClick={handleRightArrow}
        mt="5rem"
      >
        <AiFillRightCircle fontSize="20rem" />
      </Button>
      <Flex transition="all ease 0.5s" ml={scrollx} className="list">
        {fotosGall.map((f, index) => (
          <Box key={index} maxW="100vh" borderWidth="1px" borderRadius="lg">
            <Flex w="150px" display="inline-block" className="item">
              {/* {index === current && ( */}
              <Image
                transition="all ease 0.2s"
                _hover={{ transform: 'scale(1)' }}
                transform="scale(0.9)"
                w="100%"
                src={f.imagem}
                alt=""
              />
              {/* )} */}
            </Flex>

            <Box p="6">
              <Box>{f.title}</Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
