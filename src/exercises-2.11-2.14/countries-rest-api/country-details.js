import React from "react";

const CountryDetails = ({
  alpha2Code,
  name,
  capital,
  population,
  languages,
  flag,
}) => (
  <div key={alpha2Code}>
    <h1>{name}</h1>
    <p>capital {capital}</p>
    <p>population {population}</p>
    <h4>languages</h4>
    <div>
      <ul>
        {languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
      <img src={flag} alt={name} width="200" height="200" />
    </div>
  </div>
);

export default CountryDetails;
