import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import SearchField from './SearchField';

class App extends Component {
  render() {

    return (
      <Container className="root-container">
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <SearchField />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
