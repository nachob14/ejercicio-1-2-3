import React from 'react';
// import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import Contacto from '../pure/contacto';


const ContactoF = () => {

    const defaultContact = new Contact('Juan', 'Bordon', 'juanbordon@gmail.com', false)
    
    return (
        <div>
            <h2>Contacto</h2>
            <Contacto contact={defaultContact}></Contacto>
        </div>
    );
};


ContactoF.propTypes = {

};


export default ContactoF;
