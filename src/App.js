import React from 'react';
import 'materialize-css';
import { Container, Col, Row } from 'react-materialize';

import Render from './components/render';

import './App.scss';

function App() {
  return (
    <Container className="main">
      <Row>
        <Col>
          <h3>To Do</h3>
          <Render source="todo" />
        </Col>
        <Col>
          <h3>In Progress</h3>
          <Render source="inprogress" />
        </Col>
        <Col>
          <h3>Done</h3>
          <Render source="done" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
