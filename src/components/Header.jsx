import React from "react";
import logo_weatger_app from "../assets/logos/logo-weather-2.png";
// import menu_image from "../assets/iconos/menu.png";

const Header = () => {
  return (
    <header>
      <section className="header-container">
        <div className="logo-container">
          <img
            className="logo-header"
            src={logo_weatger_app}
            alt="logo_weather_app"
          />
          <h3>Weather App</h3>
        </div>
        {/* <div className="menu-container">
          <img className="menu_image" src={menu_image} alt="menu_image" />
        </div> */}
      </section>
    </header>
  );
};

export { Header };
