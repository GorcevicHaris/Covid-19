import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get(`https://corona-virus-world-and-india-data.p.rapidapi.com/api`, {
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "corona-virus-world-and-india-data.p.rapidapi.com",
        },
      })
      .then((response) => setData(response.data));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return <div className="App"></div>;
}
////
export default App;
//
