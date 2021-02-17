import React, { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../../CustomHooks/useFetch";
import { Row } from "react-bootstrap";
import {enviroment} from '../../Const/Url'
import {SpinnerRoundOutlined, SpinnerInfinity} from 'spinners-react'
import Character from "./Character";
import Loading from "../Loading";
import Paginate from "../../Pagination/Paginate";

/*Custom Hook*/
const Characters = ({search}) => {
  const {endPoint} = enviroment; 
  const [url, setUrl] = useState(endPoint);

  useEffect(()=>{
  //BASE_URL/character?name=search 
  const newUrl = !search ? endPoint : `${endPoint}?name=${search}`;
  setUrl(newUrl);  
  },[search])

  const [data, fetching, error] = useFetch(url); /*Hook personalizado*/
  const { info, results: characters } = data;
 

  const handlerPages = (newUrl) => {
    setUrl(`${endPoint}?${newUrl}`);
    console.log("")
  };

  return (
    <>
      <Row>
        {fetching ? (
          <Loading />
        ) : (
          characters.map((character) => (
            <Character key={character.id} {...character} />
          ))
        )}
      </Row>
      <Paginate {...info} handlerPages={handlerPages} />
    </>
  );
};

export default Characters;
