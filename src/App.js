import { Component } from "react";
import './App.css';
import RenderNavbar from './components/RenderNavbar';
import PetEdit from './components/PetEdit';
import PetList from './components/PetList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RenderNavbar />

        <br />

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/pets/:id/edit" element={<PetEdit />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  };
}

export default App;
