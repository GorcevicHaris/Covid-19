import axios from "axios";
import React, { useEffect, useState } from "react";
import "./population.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
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
        setSearch("");
      });
  }
  console.log(search);
  console.log(data);
  useEffect(() => {}, [search]);
  return (
    <div className="population">
      <div className="inpbtn">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "50ch",
              color: "white",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="Search for any Country"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            InputProps={{
              style: { color: "white" }, // postavljanje boje teksta na bijelu
            }}
          />
        </Box>
        <Stack sx={{ marginTop: "8px" }} height={56} direction="row">
          <Button
            onClick={getData}
            sx={{
              width: "120px",
              border: "1px solid   #989898	",
              color: "white",
            }}
            variant="outlined"
          >
            Search
          </Button>
        </Stack>
      </div>
      {search.toLowerCase() !== "israel" ? (
        data.map((el) => (
          <div className="datas">
            <div className="mid">
              <div
                style={{ fontSize: "23px", fontWeight: "100" }}
                className="info"
              >
                POPULATION
              </div>
              <div className="info">Contry : {el.name}</div>
              <div className="info">Capital : {el.capital}</div>
              <div className="info">
                Employment Agriculture &nbsp;{el.employment_agriculture}%
              </div>
              <div className="info">
                Employment Industry &nbsp;
                {el.employment_industry}%
              </div>
              <div className="info">
                employment_services&nbsp;&nbsp;
                {el.employment_services}%
              </div>
              <div className="info">
                Gross Domestic Product&nbsp;&nbsp;
                {Math.floor(el.gdp / 1000)} Billion
              </div>
              <div className="info">
                Gross Domestic Product Growth&nbsp;&nbsp;
                {el.gdp_growth}%
              </div>
              <div className="info">
                Gross Domestic Product Per Capital&nbsp;&nbsp;
                {el.gdp_per_capita} $
              </div>
              <div className="info">
                Homicide Rate &nbsp;&nbsp;
                {el.homicide_rate}%
              </div>
              <div className="info">
                Internet Users &nbsp;&nbsp;
                {el.internet_users}%
              </div>
              <div className="info">
                Life Expectancy Female &nbsp;&nbsp;
                {el.life_expectancy_female} Years
              </div>
              <div className="info">
                Life Expectancy Male&nbsp;&nbsp;
                {el.life_expectancy_male} Years
              </div>
              <div className="info">
                Population &nbsp;&nbsp;
                {Math.floor(el.population / 1000)} Million
              </div>
              <div className="info">
                Post Secondary Enrollment Female &nbsp;&nbsp;
                {el.post_secondary_enrollment_female}%
              </div>
              <div className="info">
                Post Secondary Enrollment Male &nbsp;&nbsp;
                {el.post_secondary_enrollment_male}%
              </div>
              <div className="info">
                Sex Ratio &nbsp;&nbsp;
                {el.sex_ratio}
              </div>
              <div className="info">
                Surface Area &nbsp;&nbsp;
                {el.surface_area}km²
              </div>
              <div className="info">
                Tourists &nbsp;&nbsp;
                {(el.tourists / 1000).toFixed(3)} Million
              </div>
              <div className="info">
                Urban Population &nbsp;&nbsp;
                {el.urban_population}%
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1
          style={{
            paddingTop: "200px",
            color: "white",
            fontSize: "35px",
            textTransform: "uppercase",
            letterSpacing: "3px",
          }}
        >
          {search} does not exist
        </h1>
      )}
    </div>
  );
}

export default Population;
