import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { Col, Container, Row } from "react-bootstrap";
import Dictionary from "./components/Dictionary";

const endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en";

const App = () => {
  const [wordData, setWordData] = useState(null);

  const getWordData = async ({ search }) => {
    try {
      const response = await fetch(`${endpoint}/${search}`);
      const data = await response.json();
      setWordData(data[0]);
    } catch (error) {
      console.error("Error fetching word data:", error);
    }
  };

  return (
    <Container>
      <Header />
      <Row className="justify-content-center">
        <Col md={6}>
          <SearchForm getWordData={getWordData} />
          <main>{wordData && <Dictionary wordData={wordData} />}</main>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
