import { useState } from "react";
import axios from 'axios';
import "./../styles/components/pages/Contacto.css";



const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''

    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <main className="contacto">
            <div className="containerForm">
                <h3>Formulario de Contacto</h3>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </div>

                    <div class="form-group">
                        <label>Correo electrónico</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div class="form-group">
                        <label>Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </div>

                    <div class="form-group">
                        <label >Mensaje</label>
                        <textarea name="mensaje" rows="6" value={formData.mensaje} onChange={handleChange}></textarea>
                    </div>

                    <button type="submit" className="enviarMail" value="Enviar">Enviar</button>
                </form>

            </div>
            {sending ? <p>Enviando....</p> : null}
            {msg ? <p>{msg}</p> : null}

        </main>
    );
};

export default Contacto;