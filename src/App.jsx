import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { Col, Container, Row } from "react-bootstrap";
import Dictionary from "./components/Dictionary";
import useDictionary from "./hooks/useDictionary";
import { Footer } from "./components/Footer";

const App = () => {
  const { wordData, loading, error, getWordData } = useDictionary();

  return (
    <>
      <Header>
        <SearchForm getWordData={getWordData} />
      </Header>
      <Container>
        <Row className="justify-content-center py-5">
          <Col md={6}>
            <main>
              <Dictionary wordData={wordData} loading={loading} error={error} />
            </main>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default App;
