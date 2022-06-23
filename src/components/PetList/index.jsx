import React from "react";
import { Container, Row }  from "react-bootstrap";
import PetCard from "../PetCard";

class PetList extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:3000/api/v1/pets?limit=15`)
      .then(response => response.json())
      .then(json => this.setState({ data: json.data }))
      .catch(error => {
        this.setState({ data: [] })
      });
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.data.map(pet => (
            <PetCard
              key={pet.id}
              pet={pet}
            />
          ))}
        </Row>
      </Container>
    )
  }
}

export default PetList;
