import axios from "axios";
import React, { useEffect, useState } from "react";
import "./population.css";
function Population() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const api_key = "P131FrYx2KTYpdn2gMRjpw==t9WuATR52yhdG9X3";

  function getData() {
    axios
      .get(`https://api.api-ninjas.com/v1/country?name=united sta`, {
        headers: { "X-Api-Key": `${api_key}` },
        contentType: "application/json",
      })
      .then((response) => {
        setData(response.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return <div className="population"></div>;
}

export default Population;
