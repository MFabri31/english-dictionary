import { Col, Container, Row } from "react-bootstrap";

const Header = ({ children }) => {
  return (
    <header className=" d-flex align-items-center curved header">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <h1 className="display-1 m-0 text-white lead text-center mb-5">
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
