import { Col, Card } from "react-bootstrap";

function PetCard(props) {
  const petAttributes = props.petAttributes;

  return (
    <Col md="auto">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={petAttributes.url}  />
        <Card.Body>
          <Card.Title>{petAttributes.name} - {petAttributes.breed}</Card.Title>
          <Card.Text>
            {petAttributes.description}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </Col>
  );
}

export default PetCard;