import React from "react";
import muy_frio_icon from "../assets/iconos/muy-frio.png";
import frio_icon from "../assets/iconos/frio.png";
import templado_icon from "../assets/iconos/templado.png";
import hot_icon from "../assets/iconos/hot.png";
import location from "../assets/iconos/locator.png";

const CardWeatherInfo = ({ infoWeather, loading }) => {
  let imageWeather;
  if (infoWeather.temp <= 0) {
    imageWeather = muy_frio_icon;
  } else if (infoWeather.temp >= 0 && infoWeather.temp <= 15) {
    imageWeather = frio_icon;
  } else if (infoWeather.temp >= 16 && infoWeather.temp <= 28) {
    imageWeather = templado_icon;
  } else if (infoWeather.temp >= 29) {
    imageWeather = hot_icon;
  }

  return (
    <div className="card-info-container">
      <article className="card-info">
      {loading && <p>Loading . . .</p>}
        <div className="card-info-location">
          <img src={location} alt="location-icon" className="location-icon" />
          <h4>
            {infoWeather.city}, {infoWeather.country}
          </h4>
        </div>
        <div className="card-info-temp-container">
          <h1>{infoWeather.temp + "°"}</h1>
          <img
            src={imageWeather}
            className="weather-icon-search"
            alt="weather-icon"
          />
        </div>
        <h4>{infoWeather.description}</h4>
        <div className="card-info-tempmax-min-container">
          <span>{infoWeather.minTemp + "°"} | </span>
          <span>{infoWeather.maxTemp + "°"}</span>
        </div>

        <p>Humidity: {infoWeather.humidity}</p>
      </article>
    </div>
  );
};

export { CardWeatherInfo };
