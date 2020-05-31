import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "../../exercises-2.11-2.14/components/search-box";

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
        keyword={keyword}
        placeholder="Search for country"
        handleKeywordChange={handleKeywordChange}
      />
      {filteredCountries.length === 1 ? (
        filteredCountries.map((country) => (
          <div key={country.alpha2Code}>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h4>languages</h4>
            <div>
              <ul>
                {country.languages.map((lang) => (
                  <li key={lang.iso639_1}>{lang.name}</li>
                ))}
              </ul>
              <img
                src={country.flag}
                alt={country.name}
                width="200"
                height="200"
              />
            </div>
          </div>
        ))
      ) : filteredCountries.length >= 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        filteredCountries.map(({ alpha2Code, name }) => (
          <p key={alpha2Code}>{name}</p>
        ))
      )}
    </div>
  );
};

export default App;
