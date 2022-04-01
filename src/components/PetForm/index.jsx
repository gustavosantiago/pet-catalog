import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row
} from "react-bootstrap";

class PetForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.pet.name,
      breed: this.props.pet.breed,
      url: this.props.pet.url,
      description: this.props.pet.description,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.updatePet(this.props.pet.id, this.state);
    event.preventDefault();
  }

  handleChange(event) {
    const value = event.currentTarget.value;
    const key = event.currentTarget.id;
    this.setState({[key]: value});
  }

  updatePet(id, data) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch(`http://127.0.0.1:3030/pets/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ id: data.id }))
      .then(alert('atualizado com sucesso!'));
  }

  render () {
    return(
      <Container>
        <Row>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="name">
                <Form.Label>Pet name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={this.state.name}
                  placeholder="Enter Pet Name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="breed">
                <Form.Label>Pet Breed</Form.Label>
                <Form.Control
                  useref="breed"
                  type="text"
                  value={this.state.breed}
                  placeholder="Enter Pet Breed"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="url">
                <Form.Label>Pet URL</Form.Label>
                <Form.Control
                  useref="url"
                  type="text"
                  value={this.state.url}
                  placeholder="Enter URL"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="description">
                <Form.Label>Pet Description</Form.Label>
                <Form.Control
                  useref="description"
                  as="textarea"
                  value={this.state.description}
                  placeholder="Enter Description"
                  rows={3}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default PetForm;