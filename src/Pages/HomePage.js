import { useEffect, useState } from "react";
import axios from "axios";
import { logDOM } from "@testing-library/react";
import "./homepage.css";
import Card from "../Components/Card";
function Homepage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  function getData() {
    axios
      .get(`https://corona-virus-world-and-india-data.p.rapidapi.com/api`, {
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "corona-virus-world-and-india-data.p.rapidapi.com",
        },
      })
      .then((response) => setData(response.data.countries_stat))
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          // If 429 status received, wait for 5 seconds and retry
          setTimeout(getData, 3000);
        } else {
          console.error("Error fetching data:", error);
        }
      });
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(search);
  console.log(data);
  return (
    <div className="container">
      <div className="card">
        <div className="div">Country</div>
        <div className="div">Total Cases</div>
        <div className="div">New Cases</div>
        <div className="div">Total Deaths</div>
        <div className="div">New Deaths</div>
        <div className="div">Total Recovered</div>
        <div className="div">Active Cases</div>
        <div className="div">Serious Critical</div>
        <div className="div">Tot Cases 1M pop</div>
        <div className="div">Deaths/ 1M pop</div>
        <div className="div">Total Tests</div>
        <div className="div">Tests/ 1M </div>
      </div>

      {data?.map((el, index) => (
        <div className="card">
          <div className="div">{el.country_name}</div>
          <div className="div">{el.cases}</div>
          <div
            className="div"
            style={{
              backgroundColor: el.new_cases > 0 ? "green" : "",
              color: "white",
            }}
          >
            {el.new_cases > 0 ? <h4>+{el.new_cases}</h4> : ""}
          </div>
          <div className="div">{el.deaths}</div>
          {
            <div
              className="div"
              style={{
                backgroundColor: el.new_deaths > 0 ? "red" : "",
                color: "white",
              }}
            >
              {el.new_deaths > 0 ? <h4>+{el.new_deaths}</h4> : ""}
            </div>
          }
          <div className="div">{el.total_recovered}</div>
          <div className="div">
            {parseFloat(el.active_cases) > 0 ? <h4>{el.active_cases}</h4> : ""}
          </div>
          <div className="div">
            {parseFloat(el.serious_critical) > 0 ? (
              <h4>{el.serious_critical}</h4>
            ) : (
              ""
            )}
          </div>
          <div className="div">
            {parseFloat(el.total_cases_per_1m_population) > 0 ? (
              <h4>{el.total_cases_per_1m_population}</h4>
            ) : (
              ""
            )}
          </div>
          <div className="div">
            {parseFloat(el.deaths_per_1m_population) > 0 ? (
              <h4>{el.deaths_per_1m_population}</h4>
            ) : (
              ""
            )}
          </div>
          <div className="div">
            {parseFloat(el.total_tests) > 0 ? <h4>{el.total_tests}</h4> : ""}
          </div>
          <div className="div">
            {parseFloat(el.active_cases) > 0 ? <h4>{el.active_cases}</h4> : ""}
          </div>
        </div>
      ))}
    </div>
  );
}
////
export default Homepage;
