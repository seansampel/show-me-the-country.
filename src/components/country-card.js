import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => {
  if(!props.country) {
    return null;
  }
const { country: { name, capital, population } } = props;


return (
  <div className="card-list">
    <div className="card">
      <img
        src="https://i.redd.it/3y0ffehlprc11.png"
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