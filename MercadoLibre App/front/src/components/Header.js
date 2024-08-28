import React from "react";
import mercadolibre from "../assets/images/mercadolibre.png";
import "../styles/components/layout/Header.css";

const Header = (props) => {
  return (
    <header class="header">
      <img id="mercadolibreimg" src={mercadolibre} alt="Logo"></img>
      <h1>Mercado Libre</h1>
    </header>
  );
};

export default Header;
