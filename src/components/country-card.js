import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => {
  if(!props.country) {
    return null;
  }
const { country: { name, capital, population, alpha2Code } } = props;


return (
  <div className="card-list">
    <div className="card">
      <img
        src={`https://www.countryflags.io/${alpha2Code}/flat/64.png`}
        alt="flag"
        style={{ width: "100%" }}
      />
      <div className="card-details">
        <h4>
          <b> {name}</b>
        </h4>
          <ul>
            <li>Capital: {capital}</li>
            <li>Population: {population}</li>
          </ul>
      </div>
    </div>
  </div>
);
}

export default CountryCard;