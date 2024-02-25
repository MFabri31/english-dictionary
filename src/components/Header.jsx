import { Col, Container, Row } from "react-bootstrap";

const Header = ({ children }) => {
  return (
    <header className=" d-flex align-items-center curved header">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <h1 className="display-4 m-0 text-white text-center mb-3">
              English Dictionary
            </h1>
            {children}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
