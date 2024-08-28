import React from "react";
import styleempresa from "../styles/components/pages/Empresa.css";
import empresa1 from "../assets/images/empresa/empresa.webp";
import empresa2 from "../assets/images/empresa/empresa2.jpg";
import empresa3 from "../assets/images/empresa/empresa3.jpg";

const Empresa = (props) => {
    return (
        <div className="nosotros">
            <h2>Nosotros</h2>
            <p className="parrafo">
                Bienvenidos a Mercado Libre, la plataforma de comercio electrónico líder
                en América Latina. Fundada en 1999 por Marcos Galperin. Mercado Libre se
                ha consolidado como un referente en el e-commerce y los servicios
                financieros en la región.
            </p>
            <img className="imgemp" src={empresa1} alt="empresa1" />
            <img className="imgemp" src={empresa2} alt="empresa2" />
            <img className="imgemp" src={empresa3} alt="empresa3" />
            <p className="parrafo">
                Operamos en 18 países de América Latina, incluyendo Argentina, Brasil,
                México, Chile, Colombia y Perú. La compañía ha demostrado un crecimiento
                constante y una expansión significativa en la región, adaptándose a las
                necesidades locales y desarrollando soluciones innovadoras.
            </p>
        </div>
    );
};

export default Empresa;
