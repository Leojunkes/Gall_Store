import { UncontrolledCarousel } from 'reactstrap';
export default function CarouselAuto() {
  const exclusividade = '/imagens/exclusividade2.png';
  return (
    <div>
      <UncontrolledCarousel
        items={[
          {
            altText: 'Slide 1',
            
            key: 1,
            src: '/imagens/novacolecao.png',
          },
          {
            altText: 'Slide 2',
           
            key: 2,
            src: '/imagens/exclusividade2.png',
          },
        ]}
      />
    </div>
  );
}
