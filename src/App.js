import { Component } from "react";
import './App.css';
import RenderNavbar from './components/RenderNavbar';
import PetsList from './components/PetsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RenderNavbar />

        <br />

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetsList />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  };
}

export default App;
