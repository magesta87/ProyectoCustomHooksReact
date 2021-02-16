import React from "react";
import { Row } from "react-bootstrap";
import Character from "./Character";
import {useFetch} from "../CustomHooks/useFetch";
import Loading from "./Loading";

const Characters = () => {
  const [data, fetching, error] = useFetch("character");
  const datos = localStorage.getItem("character");
  const response = JSON.parse(datos);
  const {info, results: characters} = data;  
  console.log(characters);  

  return (
    <Row>
      {fetching ? (
        <Loading />
      ) : (
        characters.map((character) => {
          <Character key={character.id} {...character} />;
        })
      )}
    </Row>
  );
};

export default Characters;
