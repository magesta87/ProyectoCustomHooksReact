import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Characters from "./Components/Characters/Characters";
import { Container } from "react-bootstrap";
import Search from "./Components/Search/index";

function App() {
  const [search, setSearch] = useState(null);

  const handlerSearch = (name) => {
    setSearch(name);
  };

  return (
    <>
      <Container>
        <Search handlerSearch={handlerSearch} />
        <Characters search={search} />
      </Container>
    </>
  );
}

export default App;
