import Component from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Col,
  Card
} from "react-bootstrap";

class PetCard extends Component {
  render () {
    const { pet } = this.props;

    return(
      <Col md="auto">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pet.url}  />
          <Card.Body>
            <Card.Title>{pet.name} - {pet.breed}</Card.Title>
            <Card.Text>
              {pet.description}
            </Card.Text>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="me-2" aria-label="First group">
                <Button href={`pets/${pet.id}`} variant="info">Edit</Button>
              </ButtonGroup>
              <ButtonGroup className="me-2" aria-label="Second group">
                <Button variant="danger">Delete</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Body>
        </Card>
        <br />
      </Col>
    );
  }
}

export default PetCard;