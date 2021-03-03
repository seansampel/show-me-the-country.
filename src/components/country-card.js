import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => (
  <div className="card-list">
    <div className="card">
      <img 
          src="https://i.redd.it/3y0ffehlprc11.png"
          alt="flag"
          style={{ width: "100%" }}     
      />
      <div className="card-details">
        <h4>
          <b>I am a country</b>
        </h4>
        <p>These are some details about me</p>
      </div>
    </div>
  </div>
);

export default CountryCard;