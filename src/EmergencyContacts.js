import React from 'react';
import './EmergencyContacts.css'; // Import the CSS file for EmergencyContacts

const contacts = [
    { type: 'Organisation', name: 'Defenders Coalition', phone: '0716-200100' },
    { type: 'Organisation', name: 'IMLU Org', phone: '0800 721 401' },
    { type: 'Organisation', name: 'Law Society Of Kenya', phone: '0800 720 434' },
];

const EmergencyContacts = () => {
    return (
        <div className="EmergencyContacts">
            <h2>Emergency Contacts</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <strong>{contact.type}:</strong> {contact.name} - <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmergencyContacts;
