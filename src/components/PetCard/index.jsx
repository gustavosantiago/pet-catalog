import React from "react";

import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Col,
  Card
} from "react-bootstrap";

class PetCard extends React.Component {
  render () {
    const { pet } = this.props;

    return(
      <Col md="auto">
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={pet.attributes.url}  />
          <Card.Body>
            <Card.Title>{pet.attributes.name} - {pet.attributes.breed}</Card.Title>
            <Card.Text>
              {pet.attributes.description}
            </Card.Text>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="me-2" aria-label="First group">
                <Button href={`pets/${pet.id}/edit`} variant="info">Edit</Button>
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