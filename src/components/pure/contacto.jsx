import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';



const Contacto = ( { contact }) => {

    const [ conectado, setConectado] = useState(contact.conectado)
    
    const actualizarEstado = () => {
        // actualizamos el state
        setConectado( !conectado )
    }

    return (
        <div>
            <p>Nombre: { contact.nombre }</p>
            <p>Apellido: { contact.apellido }</p>
            <p>Email: { contact.email }</p>
            <p>Estado: { conectado ? "Contacto En Línea" : "Contacto No Disponible"}</p>
            <div>
                <button onClick={actualizarEstado}>Cambiar estado</button>
            </div>
        </div>
    );
};


Contacto.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default Contacto;
