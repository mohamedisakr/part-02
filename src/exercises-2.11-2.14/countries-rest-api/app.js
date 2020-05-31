import React, { useState, useEffect } from "react";
import axios from "axios";
// import SearchBox from "../../exercises-2.11-2.14/components/search-box";
import SearchBox from "./search-box";
import CountryDetails from "./country-details";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((response) => setCountries(response.data));
  }, []);

  let filteredCountries = countries.filter(({ name }) =>
    name.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  //   console.log(countries);
  return (
    <div>
      <SearchBox
        title="Worldwide Countries"
        label="Find Countries"
        keyword={keyword}
        placeholder="Search for country"
        handleKeywordChange={handleKeywordChange}
      />
      {filteredCountries.length === 1 ? (
        filteredCountries.map((country) => (
          <CountryDetails
            key={country.alpha2Code}
            alpha2Code={country.alpha2Code}
            name={country.name}
            capital={country.capital}
            population={country.population}
            languages={country.languages}
            flag={country.flag}
          />
        ))
      ) : filteredCountries.length >= 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        filteredCountries.map(({ alpha2Code, name }) => (
          <div key={alpha2Code}>
            <span>{name}</span> <button>Show</button>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
