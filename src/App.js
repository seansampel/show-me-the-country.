import React, { Component } from "react";
import InputField from "./components/input-field";
import "./styles/App.css";
import CountryCard from "./components/country-card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countryData: null,
    }
  }

handleStuffFromChild = (dataFromChild) => {
  console.log(dataFromChild);
  this.callApi(dataFromChild);
}

callApi = countryName => {
  fetch(`https://restcountries-v1.p.rapidapi.com/name/${countryName}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9f93e020c0msh87a34eb02cf5575p1b4fe6jsn114b1823bdf5",
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com"
	}
  })
  .then(initialResponse =>  initialResponse.json())
  .then(response => {
    console.log(response[0]);
    this.setState({countryData: response[0]})
  })
  .catch(err => {
    console.error(err);
  });  
};

  render() {
    console.log("state value", this.state.countryData); 
  return (
    <div className="wrap">
    <InputField sendToMyParent={this.handleStuffFromChild} />
    <CountryCard country={this.state.countryData} specialColours={"yellow"}/>
  </div>
    );
  }
}
export default App;
