import React from 'react';
import './EmergencyContacts.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import ambimage from './amb.JPG';

const contacts = [
    { type: 'Organisation', name: 'Defenders Coalition', phone: '0716-200100' },
    { type: 'Organisation', name: 'IMLU Org', phone: '0800 721 401' },
    { type: 'Organisation', name: 'Law Society Of Kenya', phone: '0800 720 434' },
    { type: 'Organisation', name: 'Medics For Kenya', phone: '0708311740 , 0739567483' },
    { type: 'Organisation', name: 'KNHCR', phone: '0800 720 627' },
    { type: 'Organisation', name: 'HakiKNCHR', phone: '22359', additionalInfo: 'SMS' },
    { type: 'Organisation', name: 'KNHRC', phone: '0798 849 871', additionalInfo: 'WhatsApp' },
    { type: 'Organisation', name: 'Therapists For Kenya', phone: '0715709737' },
];

const EmergencyContacts = () => {
    return (
        <div className="EmergencyContacts">
            <h2>Emergency Contacts</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <strong>{contact.type}:</strong> {contact.name} - 
                        <a href={`tel:${contact.phone.replace(/\s*,\s*/g, '|tel:')}`}>{contact.phone}</a>
                        {contact.additionalInfo && <span> ({contact.additionalInfo})</span>}
                    </li>
                ))}
                <li>
                    <strong>Emergency Ambulance List:</strong> 
                    <a href={ambimage} download="Emergency_Ambulance_Contacts.JPG">
                        <FontAwesomeIcon icon={faDownload} /> Download
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default EmergencyContacts;
