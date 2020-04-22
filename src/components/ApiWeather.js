import React, { Component } from "react";
import "../WeatherCard.css";
import Time from "./Time";



let API_KEY = '6fef57b3c3e7b4c751aee544f8cbc214';
let city = 'Phuket';

class ApiWeather extends Component {
  constructor(props) {
    super(props);
    this.callWeatherData();
    this.state = {
      weatherData: {
        weather: "",
        id: "",
        main: "",
        city: "",
        country: "",
        temp: 0
      },
      searchDone: false,
      errorMessage: ""
    };

  }

  callWeatherData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
    fetch(url)
      .then(handleErrors)
      .then(resp => resp.json())
      .then(data => {
        const weatherObj = {
          weather: data.weather,
          id: data.weather[0].id,
          main: data.weather[0].main,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp
        };
        this.setState({
          weatherData: weatherObj,
          errorMessage: ""
        });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }


  render() {

    
    const { city, weather, id, main, country, temp } = this.state.weatherData;
    const celcius = Math.round(temp - 273.15);
    console.log(weather[0])
    console.log(id)


    return (

         
        <div className="WeatherCard">    
            <h1 className="WeatherCard-degrees">{celcius}°</h1>
            <div className="WeatherCard-icon-container">
                <i className={`wi wi-owm-${id} WeatherCard-icon`} />
                <p>{main}</p>
                <Time/>
            </div>
            <h3 className="WeatherCard-city">
                {city}, {country}
            </h3>
        </div>
        
        
   
    );
  }
}

export default ApiWeather;