import { useState, useEffect } from "react";
import { enviroment } from "../Const/Url";

const {BASE_URL, endPoint} = enviroment; 

export const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);
  

  const fetchData = async () => {
    try {
      const result = await fetch(`${BASE_URL}/${endPoint}`, {
        method: "GET",
        headers: { Authorization: "" },
      });
      const data = await result.json();
      setData(data);
      setFetching(false);
      setError(false);
    } catch (e) {
      setData([]);
      setFetching(true);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endPoint]);

  return [data, fetching, error];
};
