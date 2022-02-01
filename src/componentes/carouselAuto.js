import { UncontrolledCarousel } from 'reactstrap';
export default function CarouselAuto() {
  return (
    <div>
      <UncontrolledCarousel 
        items={[
          {
            altText: 'Slide 1',

            key: 1,
            src: '/imgCarousel/arte.png',
            
          },
          {
            altText: 'Slide 2',

            key: 2,
            src: '/imgCarousel/criatividade.png',
          },
          {
            altText: 'Slide 3',

            key: 3,
            src: '/imgCarousel/diversidade.png',
          },
          {
            altText: 'Slide 4',

            key: 4,
            src: '/imgCarousel/exclusividade.png',
          },
          {
            altText: 'Slide 5',

            key: 5,
            src: '/imgCarousel/inspiração.png',
          },
          {
            altText: 'Slide 6',

            key: 6,
            src: '/imgCarousel/natureza.png',
          },
          {
            altText: 'Slide 7',

            key: 7,
            src: '/imgCarousel/sustentabilidade.png',
          },
        ]}
      />
    </div>
  );
}
