import React from "react";
import PetForm from "../PetForm"

class PetEdit extends React.Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  componentDidMount() {
    // let { id } = useParams();
    // console.log(id)
    fetch(`http://127.0.0.1:3030/pets/${1}`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render () {
    const pet = this.state.data;

    return(
      <div>
        <h1>Edit Pet - {pet.name} </h1>
        <PetForm
          pet={pet}
        />
      </div>
    );
  }
}

export default PetEdit;