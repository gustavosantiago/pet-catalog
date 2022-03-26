import { Component } from "react";
import './App.css';
import RenderNavbar from './components/RenderNavbar';
import PetsList from './components/PetsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RenderNavbar />

        <br />

        <PetsList />
      </div>
    )
  };
}

export default App;
