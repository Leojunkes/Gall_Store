import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Flex
} from 'reactstrap';
import { fotosGall } from '../componentes/carrosselFotos';

export default function CardFotos() {
  return (
    <div className="cardFotos">
      <CardGroup >
        {fotosGall.map((f, index) => (
          <Card style={{alignItems: 'center'}} key={index}>
            <CardImg
              alt="Card image cap"
              src={f.imagem}
              top
              width="100%"
            />
            <CardBody >
              <CardTitle tag="h5">{f.title}</CardTitle>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
