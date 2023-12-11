import axios from "axios";
import React, { useEffect, useState } from "react";
import "./population.css";
function Population() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [falsing, setFalsing] = useState(false);
  const api_key = "P131FrYx2KTYpdn2gMRjpw==t9WuATR52yhdG9X3";

  function getData() {
    axios
      .get(`https://api.api-ninjas.com/v1/country?name=${search}`, {
        headers: { "X-Api-Key": `${api_key}` },
        contentType: "application/json",
      })
      .then((response) => {
        setData(response.data);
      });
  }
  useEffect(() => {
    getData();
  }, [search]);
  console.log(search);
  console.log(data);
  return (
    <div className="population">
      <div className="inpbtn">
        <input
          className="inp1"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button onClick={() => setFalsing(true)}>Search</button>
      </div>

      {falsing && data.map((el) => <div>{el.population}</div>)}
    </div>
  );
}

export default Population;
