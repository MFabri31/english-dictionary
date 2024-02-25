import { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";

const SearchForm = ({ getWordData }) => {
  const [search, setSearch] = useState("");
  const handleWordChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWordData({ search });

    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="search"
          value={search}
          onChange={handleWordChange}
          placeholder="Search any word"
          required
          autoFocus
          className="form-control p-3 rounded-pill bg-secondary-subtle fw-bold text-dark-emphasis"
        />
        <Button
          type="submit"
          variant="primary"
          className="rounded-pill ms-2 fw-semibold px-4"
        >
          <i className="bi bi-search me-1"></i>
          Search
        </Button>
      </InputGroup>
    </form>
  );
};

export default SearchForm;
