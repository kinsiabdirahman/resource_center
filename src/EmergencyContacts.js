import React from 'react';

const contacts = [
    { type: 'Lawyer', name: 'Lawyer A', phone: '+254700000001' },
    { type: 'Medical', name: 'Medical Help', phone: '+254700000002' },
    { type: 'Human Rights', name: 'Human Rights Organization', phone: '+254700000003' },
];

const EmergencyContacts = () => {
    return (
        <div>
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
