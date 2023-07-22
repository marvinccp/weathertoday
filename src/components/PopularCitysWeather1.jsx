import React from "react";
import { getApiInfo } from "../helpers/getApiWeatherInfo";
import muy_frio_icon from '../assets/iconos/muy-frio.png'
import frio_icon from "../assets/iconos/frio.png";
import templado_icon from "../assets/iconos/templado.png";
import hot_icon from "../assets/iconos/hot.png";
const PopularCitysWeather = () => {
  const [dataCity, setDataCity] = React.useState({
    city: "",
    country: "",
    temp: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    description: "",
  });
 

  React.useEffect(() => {
    getApiInfo("buenos aires").then((data) =>
      setDataCity((prevState) => ({
        ...prevState,
        city: data.name,
        country: data.sys.country,
        temp: Math.floor(data.main.temp - 273),
        maxTemp: Math.floor(data.main.temp_max - 273),
        minTemp: Math.floor(data.main.temp_min - 273),
        humidity: data.main.humidity,
        description: data.weather[0].description,
      }))
    );
  }, []);


  let imageWeather;
  if (dataCity.temp <= 0) {
    imageWeather = muy_frio_icon;
  } else if (dataCity.temp >= 0 && dataCity.temp <= 15) {
    imageWeather = frio_icon;
  } else if (dataCity.temp >= 16 && dataCity.temp <= 25) {
    imageWeather = templado_icon;
  } else if (dataCity.temp >= 26) {
    imageWeather = hot_icon;
  }
    
              return (
                <div>
                  <article className="card-info-city  cities-weather-cards">
                    <div className="card-header-info">
                      <h4>
                        {dataCity.city}, {dataCity.country}
                      </h4>
                      <img
                        src={imageWeather}
                        className="weather-icon"
                        alt="weather-icon"
                      />
                    </div>
                    <div className="card-main-info">
                      <span className="card-main-temp">
                        {dataCity.temp + "°"}
                      </span>
                      <div className="min-max-temp">
                        <span className="temp">
                          {dataCity.minTemp + "°"} |{" "}
                        </span>
                        <span className="temp">{dataCity.maxTemp + "°"}</span>
                      </div>
                    </div>
                      <h4>{dataCity.description}</h4>
                  </article>
                </div>
              );
};

export { PopularCitysWeather };
