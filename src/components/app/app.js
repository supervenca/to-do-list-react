//import { Component } from 'react';
import Header from '../header/header';
import List from '../list/list';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './app.css';

function App() {
  return (
    <div className="App">
      <Container className="m-5 p-2 rounded mx-auto bg-light shadow">
      <Header/>
      <Row>
        <Col>
          <List/>
        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
        <Button as="a" variant="primary">
          Button
        </Button>
      </Container>
      
    </div>
  );
}

export default App;
