import { Children, useEffect, useState } from "react";
import axios from "axios";
import { logDOM } from "@testing-library/react";
import "./homepage.css";
import Card from "../Components/Card";
function Homepage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [secondData, setSecondData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortByTotalCases = () => {
    const sortedData = [...data]; // Napravite kopiju podataka da ne biste direktno mijenjali originalni niz

    sortedData.sort((a, b) => {
      if (sortOrder === "asc") {
        return (
          parseInt(a.cases.replace(/,/g, "")) -
          parseInt(b.cases.replace(/,/g, ""))
        );
      } else {
        return (
          parseInt(b.cases.replace(/,/g, "")) -
          parseInt(a.cases.replace(/,/g, ""))
        );
      }
    });

    // Ažurirajte redosled sortiranja
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setData(sortedData);
  };
  const handleSortByNewCases = () => {
    const sortedData = [...data]; // Napravi kopiju podataka
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? parseNewCases(a) - parseNewCases(b)
        : parseNewCases(b) - parseNewCases(a);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Promeni redosled sortiranja
    setData([...sortedData]); // Ažuriraj stanje sa sortiranim podacima
  };

  const parseNewCases = (entry) => {
    // Funkcija za parsiranje novih smrtnih slučajeva iz stringa u broj
    const newCases = entry.new_cases.replace(/[^\d.-]/g, ""); // Ukloni sve osim brojeva, tačke i minusa
    return parseFloat(newCases);
  };

  const handleSortByTotalDeaths = () => {
    const sortedData = [...data]; // Napravi kopiju podataka
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? parseDeaths(a) - parseDeaths(b)
        : parseDeaths(b) - parseDeaths(a);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Promeni redosled sortiranja
    setData([...sortedData]); // Ažuriraj stanje sa sortiranim podacima
  };

  const parseDeaths = (entry) => {
    // Funkcija za parsiranje novih slučajeva iz stringa u broj
    const newCases = entry.deaths.replace(/[^\d.-]/g, ""); // Ukloni sve osim brojeva, tačke i minusa
    return parseFloat(newCases);
  };
  const handleSortByNewDeaths = () => {
    const sortedData = [...data]; // Napravi kopiju podataka
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? parseNewDeaths(a) - parseNewDeaths(b)
        : parseNewDeaths(b) - parseNewDeaths(a);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Promeni redosled sortiranja
    setData([...sortedData]); // Ažuriraj stanje sa sortiranim podacima
  };

  const parseNewDeaths = (entry) => {
    // Funkcija za parsiranje novih smrtnih slučajeva iz stringa u broj
    const newDeaths = entry.new_deaths.replace(/[^\d.-]/g, ""); // Ukloni sve osim brojeva, tačke i minusa
    return parseFloat(newDeaths);
  };
  const handleSortByTotalRecover = () => {
    const sortedData = [...data]; // Create a copy of the data
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? parseTotalRecover(a) - parseTotalRecover(b)
        : parseTotalRecover(b) - parseTotalRecover(a);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Change the sorting order
    setData([...sortedData]); // Update the state with the sorted data
  };

  const parseTotalRecover = (entry) => {
    const totalRecovered = entry.total_recovered.replace(/[^\d.-]/g, ""); // Remove all non-numeric characters

    return totalRecovered ? parseFloat(totalRecovered) : 0; // Check for empty or invalid values
  };
  const handleSortByActiveCases = () => {
    const sortedData = [...data]; // Create a copy of the data
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? parseActiveCases(a) - parseActiveCases(b)
        : parseActiveCases(b) - parseActiveCases(a);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Change the sorting order
    setData([...sortedData]); // Update the state with the sorted data
  };

  const parseActiveCases = (entry) => {
    const totalRecovered = entry.active_cases.replace(/[^\d.-]/g, ""); // Remove all non-numeric characters

    return totalRecovered ? parseFloat(totalRecovered) : 0; // Check for empty or invalid values
  };

  const handleSortBySeriousCritical = () => {
    const sortedData = [...data]; // Create a copy of the data
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? parseSeriousCritical(a) - parseSeriousCritical(b)
        : parseSeriousCritical(b) - parseSeriousCritical(a);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Change the sorting order
    setData([...sortedData]); // Update the state with the sorted data
  };

  const parseSeriousCritical = (entry) => {
    const totalRecovered = entry.serious_critical.replace(/[^\d.-]/g, ""); // Remove all non-numeric characters

    return totalRecovered ? parseFloat(totalRecovered) : 0; // Check for empty or invalid values
  };
  const handleSortBy1MCases = () => {
    const sortedData = [...data]; // Create a copy of the data
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? parse1mCases(a) - parse1mCases(b)
        : parse1mCases(b) - parse1mCases(a);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Change the sorting order
    setData([...sortedData]); // Update the state with the sorted data
  };

  const parse1mCases = (entry) => {
    const totalRecovered = entry.total_cases_per_1m_population.replace(
      /[^\d.-]/g,
      ""
    ); // Remove all non-numeric characters

    return totalRecovered ? parseFloat(totalRecovered) : 0; // Check for empty or invalid values
  };
  const handleSortBy1MDeaths = () => {
    const sortedData = [...data]; // Create a copy of the data
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? parse1mDeaths(a) - parse1mDeaths(b)
        : parse1mDeaths(b) - parse1mDeaths(a);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Change the sorting order
    setData([...sortedData]); // Update the state with the sorted data
  };

  const parse1mDeaths = (entry) => {
    const totalRecovered = entry.deaths_per_1m_population.replace(
      /[^\d.-]/g,
      ""
    ); // Remove all non-numeric characters

    return totalRecovered ? parseFloat(totalRecovered) : 0; // Check for empty or invalid values
  };
  const handleSortTotalTest = () => {
    const sortedData = [...data]; // Create a copy of the data
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? parseTotalTest(a) - parseTotalTest(b)
        : parseTotalTest(b) - parseTotalTest(a);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Change the sorting order
    setData([...sortedData]); // Update the state with the sorted data
  };

  const parseTotalTest = (entry) => {
    const totalRecovered = entry.total_tests.replace(/[^\d.-]/g, ""); // Remove all non-numeric characters

    return totalRecovered ? parseFloat(totalRecovered) : 0; // Check for empty or invalid values
  };
  const handleSort1MTests = () => {
    const sortedData = [...data]; // Create a copy of the data
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? parse1MTests(a) - parse1MTests(b)
        : parse1MTests(b) - parse1MTests(a);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Change the sorting order
    setData([...sortedData]); // Update the state with the sorted data
  };

  const parse1MTests = (entry) => {
    const totalRecovered = entry.tests_per_1m_population.replace(
      /[^\d.-]/g,
      ""
    ); // Remove all non-numeric characters

    return totalRecovered ? parseFloat(totalRecovered) : 0; // Check for empty or invalid values
  };
  // function handleSortByTotalRecover() {
  //   const sortedData = [...data];
  //   sortedData.sort((a, b) => {
  //     return a.total_recovered - b.total_recovered;
  //   });
  //   console.log(sortedData, "sprted");
  //   setData(sortedData);
  // }
  function getData() {
    axios
      .get(`https://corona-virus-world-and-india-data.p.rapidapi.com/api`, {
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "corona-virus-world-and-india-data.p.rapidapi.com",
        },
      })
      .then((response) => {
        setData(response.data.countries_stat);
        const neww = response.data.world_total;
        let l = [];
        l.push(neww);
        setSecondData(l);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          // If 429 status received, wait for 5 seconds and retry
          setTimeout(getData, 1000);
        } else {
          console.error("Error fetching data:", error);
        }
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="div">Country</div>
        <div className="div" onClick={handleSortByTotalCases}>
          Total Cases
        </div>
        <div className="div" onClick={handleSortByNewCases}>
          New Cases
        </div>
        <div className="div" onClick={handleSortByTotalDeaths}>
          Total Deaths
        </div>
        <div className="div" onClick={handleSortByNewDeaths}>
          New Deaths
        </div>
        <div className="div" onClick={handleSortByTotalRecover}>
          Total Recovered
        </div>
        <div className="div" onClick={handleSortByActiveCases}>
          Active Cases
        </div>
        <div className="div" onClick={handleSortBySeriousCritical}>
          Serious Critical
        </div>
        <div className="div" onClick={handleSortBy1MCases}>
          Tot Cases 1M pop
        </div>
        <div className="div" onClick={handleSortBy1MDeaths}>
          Deaths/ 1M pop
        </div>
        <div className="div" onClick={handleSortTotalTest}>
          Total Tests
        </div>
        <div className="div" onClick={handleSort1MTests}>
          Tests/ 1M{" "}
        </div>
      </div>
      {secondData &&
        secondData.map((el) => (
          <div className="card" style={{ backgroundColor: "lightgray" }}>
            <div className="div">
              <h4>World</h4>
            </div>
            <div className="div">
              <h4>{el.total_cases}</h4>
            </div>
            <div className="div">
              <h4>+{el.new_cases}</h4>
            </div>
            <div className="div">
              <h4>{el.total_deaths}</h4>
            </div>
            <div className="div">
              <h4>+{el.new_deaths}</h4>
            </div>
            <div className="div">
              <h4>{el.total_recovered}</h4>
            </div>
            <div className="div">
              <h4>{el.active_cases}</h4>
            </div>
            <div className="div">
              <h4>{el.serious_critical}</h4>
            </div>
            <div className="div">
              <h4>{el.total_cases_per_1m_population}</h4>
            </div>
            <div className="div">
              <h4>{el.deaths_per_1m_population}</h4>
            </div>
            <div className="div">
              <h4>{0}</h4>
            </div>
            <div className="div">
              <h4>{0}</h4>
            </div>
          </div>
        ))}
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
            {parseFloat(el.new_cases) > 0 ? <h4>+{el.new_cases}</h4> : ""}
          </div>
          <div className="div">
            {parseFloat(el.deaths) > 0 ? <h4>{el.deaths}</h4> : ""}
          </div>
          <div
            className="div"
            style={{
              backgroundColor: el.new_deaths > 0 ? "red" : "",
              color: "white",
            }}
          >
            {el.new_deaths > 0 ? <h4>+{el.new_deaths}</h4> : ""}
          </div>

          <div className="div">
            {parseFloat(el.total_recovered) > 0 ? (
              <h4>{el.total_recovered}</h4>
            ) : (
              ""
            )}
          </div>
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
            <h4>{el.total_tests}</h4>
          </div>
          <div className="div">
            <h4>{el.tests_per_1m_population}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
////
export default Homepage;
