import React from 'react';
import { Container, Col, Row } from 'react-materialize';

import Render from './components/render';
import store from './store';
import ls from './utils/localStorage';

import './App.scss';

export function App() {
  const handleStoreSubscribe = () => {
    const { todo, inprogress, done } = store.getState();
    ls.setTodo(todo);
    ls.setInProgress(inprogress);
    ls.setDone(done);
  }

  store.subscribe(handleStoreSubscribe);
  
  return (
    <Container className="main">
      <Row className="cards-row">
        <Col>
          <Render source="todo" />
        </Col>
        <Col>
          <Render source="inprogress" />
        </Col>
        <Col>
          <Render source="done" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
