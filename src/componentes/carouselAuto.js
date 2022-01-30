import { UncontrolledCarousel } from 'reactstrap';
export default function CarouselAuto() {
  return (
    <div>
      <UncontrolledCarousel 
        items={[
          {
            altText: 'Slide 1',

            key: 1,
            src: 'https://api-next-teste.vercel.app/gallCarrossel/arte.png',
            
          },
          {
            altText: 'Slide 2',

            key: 2,
            src: 'https://api-next-teste.vercel.app/gallCarrossel/criatividade.png',
          },
          {
            altText: 'Slide 3',

            key: 3,
            src: 'https://api-next-teste.vercel.app/gallCarrossel/diversidade.png',
          },
          {
            altText: 'Slide 4',

            key: 4,
            src: 'https://api-next-teste.vercel.app/gallCarrossel/exclusividadeE.png',
          },
          {
            altText: 'Slide 5',

            key: 5,
            src: 'https://api-next-teste.vercel.app/gallCarrossel/inspira%C3%A7%C3%A3o.png',
          },
          {
            altText: 'Slide 6',

            key: 6,
            src: 'https://api-next-teste.vercel.app/gallCarrossel/natureza.png',
          },
          {
            altText: 'Slide 7',

            key: 7,
            src: 'https://api-next-teste.vercel.app/gallCarrossel/sustentabilidade.png',
          },
        ]}
      />
    </div>
  );
}
