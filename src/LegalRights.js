import React from 'react';

const rights = [
    "You have the right to peaceful assembly.",
    "You have the right to remain silent.",
    "You have the right to legal representation.",
    "You have the right to be informed of the reason for your arrest.",
    // Add more legal rights from the Kenyan constitution
];

const LegalRights = () => {
    return (
        <div>
            <h2>Know Your Legal Rights</h2>
            <ul>
                {rights.map((right, index) => (
                    <li key={index}>{right}</li>
                ))}
            </ul>
        </div>
    );
};

export default LegalRights;
