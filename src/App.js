import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-7">
            <h1 class="city" id="headline-city">
              Hong Kong, HK
            </h1>
          </div>
          <div class="col-5">
            <h1 class="weather-temperature">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                id="icon"
              />
              <strong id="temperature-numbers"> 27 </strong>
              <span id="units">
                <a href="#" id="celsius" class="active">
                  °C
                </a>{" "}
                |
                <a href="#" id="fahrenheit">
                  °F
                </a>
              </span>
            </h1>
          </div>
        </div>

        <div class="row">
          <div class="col-8">
            <div class="location">
              <button id="current-location">Current Location</button>
            </div>
          </div>
          <div class="col-4">
            <h5 class="time-date">Sunday 20:03</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-8">
            <div class="textbox">
              <form id="search-city">
                <input
                  type="text"
                  id="city-input"
                  placeholder="Enter a city"
                  autocomplete="off"
                />
                <input type="submit" id="search-location" value="Search" />
              </form>
            </div>
          </div>
          <div class="col-4">
            <h5 id="description">Clear Sky</h5>
          </div>
        </div>

        <div class="moreinfo">
          <div class="row">
            <div class="col-sm" id="feels-like">
              Feels like: <br /> 31°C
            </div>
            <div class="col-sm" id="humidity">
              Humidity: <br /> 88%
            </div>
            <div class="col-sm" id="wind-speed">
              Wind: <br /> 3 km/h
            </div>
            <div class="col-sm" id="pressure">
              Pressure: <br /> 1003 hPa
            </div>
          </div>
        </div>

        {/* <div class="forecast" />

         <div class="row hourly-forecast" id="forecast" /> */}

        <small class="footer">
          <a
            href="https://github.com/twcheung36/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open-source code{" "}
          </a>{" "}
          by
          <a
            href="https://www.linkedin.com/in/twcheung/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Wing Cheung{" "}
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
