import React from "react";
import { Header } from "./components/Header";
import { SearchCountryForm } from "./components/SearchCountryForm";
import { CardWeatherInfo } from "./components/CardWeatherInfo";
import { CitysWeather } from "./components/CitysWeather";
import { PopularCitysWeather } from "./components/PopularCitysWeather1";
import { PopularCitysWeather2 } from "./components/PopularCitysWeather2";
import { PopularCitysWeather3 } from "./components/PopularCitysWeather3";
import { Footer } from "./components/Footer";
import { getApiInfo } from "./helpers/getApiWeatherInfo";

function App() {

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [cityInfo, setCityInfo] = React.useState("cali");
  const [infoWeather, setInfroWeather] = React.useState({
    city: "",
    country: "",
    temp: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    setCityInfo(e.target[0].value);
    e.target.reset()
  };

  React.useEffect(() => {
    getApiInfo(cityInfo)
      .then((response) => {
        if(response.cod !== 200){
          throw Error ('Oops! Debes Ingresar un nombre de ciudad válido')
        }else{
          setError(null)
          setLoading(false);
        }
         setInfroWeather((prevState) => ({
        ...prevState,
        city: response.name,
        country: response.sys.country,
        temp: Math.floor(response.main.temp - 273),
        maxTemp: Math.floor(response.main.temp_max - 273),
        minTemp: Math.floor(response.main.temp_min - 273),
        humidity: response.main.humidity,
        description: response.weather[0].description,
      }))
  
      }).catch(err =>{
        setError(err.message)
        setLoading(false)
      })
  }, [cityInfo]);

  return (
    <div>
      <Header />
      <CitysWeather>
        <PopularCitysWeather />
        <PopularCitysWeather2 />
        <PopularCitysWeather3 />
      </CitysWeather>

      <SearchCountryForm 
      handleSubmit={handleSubmit} 
      error={error}
      />

      <CardWeatherInfo 
      infoWeather={infoWeather} 
      loading={loading} />
      <Footer />
    </div>
  );
}

export default App;
