import React from 'react';
import 'materialize-css';
import { Container, Col, Row, Card } from 'react-materialize';

import './App.scss';

function App() {
  return (
    <Container className="main">
      <Row>
        <Col>
          <h3>To Do</h3>
          <Card
            actions={[
              <a key="1" href="#">This is a link</a>,
              <a key="2" href="#">This is a link</a>
            ]}
            className="blue-grey darken-1"
            textClassName="white-text"
            title="To Do"
          >
            I am a very simple card.
          </Card>
        </Col>
        <Col>
          <h3>In Progress</h3>
          <Card
            actions={[
              <a key="1" href="#">This is a link</a>,
              <a key="2" href="#">This is a link</a>
            ]}
            className="blue-grey darken-1"
            textClassName="white-text"
            title="In Progress"
          >
            I am a very simple card.
          </Card>
        </Col>
        <Col>
          <h3>Done</h3>
          <Card
            actions={[
              <a key="1" href="#">This is a link</a>,
              <a key="2" href="#">This is a link</a>
            ]}
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Done"
          >
            I am a very simple card.
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
