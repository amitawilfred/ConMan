import React from 'react';
import './Contact.css';

function Contact({ contact, onEdit, onDelete }) {
  return (
    <div className="contact">
      <div className="contact-info">
        <p>Name: {contact.name}</p>
        <p>Phone: {contact.phone}</p>
      </div>
      <div className="contact-actions">
        <button onClick={() => onEdit(contact)}>Edit</button>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Contact;