import { Container, Row, Col } from "reactstrap";
import "./App.css";
import Addcourse from "./Component/Addcourse";
import Allcourses from "./Component/Allcourses";
import Course from "./Component/Course";
import { Home } from "./Component/Home";
import { ToastContainer, toast } from "react-toastify";
import { Header } from "./Component/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <ToastContainer />
        <Container>
          <Row>
            <Col md={4}>
              <Sidebar />
            </Col>
            <Col md={8}>
              <Route exact path="/" component={Home} />
              <Route exact path="/addcourse" component={Addcourse} />
              <Route exact path="/allcourse" component={Allcourses} />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
