import Component from "react";

class PetEdit extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:3030/pets/${1}`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render () {
    console.log("pet", this.state.data)
    return(
      <div>
        <h1>Edit Pet</h1>
      </div>
    );
  }
}

export default PetEdit;