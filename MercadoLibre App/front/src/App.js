import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import mercadolibre from "./assets/images/mercadolibre.png";
import React from "react";
import "./App.css";

import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";

import Home from "../src/pages/Homepage.js";
import Productos from "../src/pages/Productos";
import Empresa from "../src/pages/Empresa.js";
import Contacto from "../src/pages/Contacto.js";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Empresa" element={<Empresa />} />
          <Route path="/Contacto" element={<Contacto />} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
