import './App.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import RenderNavbar from './components/RenderNavbar';
import PetsList from './components/PetsList';

function App() {
  return (
    <div className="App">
      <RenderNavbar />
      
      <br />
      
      <PetsList />
    </div>
  );
}

export default App;
