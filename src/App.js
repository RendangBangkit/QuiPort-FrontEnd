import Dashboard from "./components/Dashboard";
import { Container, Nav, Row, Col, Tab, } from "react-bootstrap";
import GetData from "./apis/GetData";

function App (){
  const {data: reports, isLoading, isError} = GetData("https://quiport.et.r.appspot.com/api/report")

  return (
    <Container fluid className="p-3">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="">
                <Nav.Link eventKey="first">Monitoring</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                { isError && <div>{isError}</div>}
                { isLoading && <div>Loading data ...</div>}
                { reports && <Dashboard reports={reports} /> }
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
  </Container>
  );

}

export default App;
