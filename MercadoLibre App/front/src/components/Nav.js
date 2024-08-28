import React, { useState } from "react";
import "./../styles/components/layout/Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {


  return (<div className="containernav">
    <nav className="nav">
      <ul className="ulnav">
        <li>
          <Link to="/" className="tabs">Home</Link>
        </li>
        <li>
          <Link to="/Productos" className="tabs">Productos </Link>
        </li >
        <li><Link to="/Empresa" className="tabs" >La Empresa</Link></li>
        <li><Link to="/Contacto" className="tabs">Contacto</Link></li>
      </ul>
    </nav>


  </div>

  );
};

export default Nav;
