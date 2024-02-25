import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/icons/icon-dictionary-2.png";

const Header = ({ children }) => {
  return (
    <header className=" d-flex align-items-center curved header">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <div className="d-flex mb-3">
              <img src={Logo} alt="icon dictionary" width="60px" />
              <h1 className="display-3 m-0 text-white">English Dictionary</h1>
            </div>
            {children}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
