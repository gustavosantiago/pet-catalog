import { Component } from "react";
import { Container, Row }  from "react-bootstrap";
import PetCard from "../PetCard";

class PetsList extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:3030/pets?limit=15&page=0`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.data.map(pet => (
            <PetCard
              key={pet.id}
              petAttributes={pet}
            />
          ))}
        </Row>
      </Container>
    )
  }
}

export default PetsList;
