import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import Axios from "axios"
import { Container, Nav, Row, Col, Tab } from "react-bootstrap";



class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      myProjects: [],
      starred: [],
      createNew: []
    }
  }

  // componentDidMount() {
  //   this.getMyProjects()
  //   this.getStarredProjects()
  // }

  render() {
    return (
      <Container fluid className="p-3">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">My Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Starred Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Create a New Project</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            
          </Row>
        </Tab.Container>
    </Container>
    );
  }
}

export default App;
