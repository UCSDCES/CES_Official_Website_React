import './App.css';
import Navbar from "./Components/navbar/Navbar";
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div id="home-header">
        <Container>
          <Navbar />
          <Row>
            <Col xs={12} lg={8} md={10} ><h2 id="motto">Let the world hear the voice of Chinese Engineers</h2></Col>
          </Row>
        </Container>

      </div>

    </div>
  );
}

export default App;
