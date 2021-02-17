import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const Search = ({handlerSearch}) => {
  const [character, setCharacter] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    if(character.trim() === "") return; 
    handlerSearch(character); 
  };

  const handlerInput = (e) => {
      setCharacter(e.target.value)
  };
  return (
    <Row>
      <Col>
        <Form onSubmit={handlerSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Busca por personaje"
              onChange={handlerInput}
            />
          </Form.Group>
          <Button type="submit" className="btn btn-block mt-3">Buscar</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
