import "../styles/components/pages/Productos.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Adminitem from "../components/admin/adminitem";



const Productos = (props) => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true);

      const response = await axios.get('http://localhost:3000/api/administrador');
      setProductos(response.data);
      setLoading(false);
    };
    cargarProductos();
  }, []);


  return (
    <section className="prod">
      {
        loading ? (
          <p>Cargando...</p>
        ) : (
          productos.map(item => <Adminitem key={item.id}
            imagen={item.imagen} producto={item.producto} precio={item.precio}

          />)
        )
      }

    </section>


  );
};

export default Productos;
