import React from 'react';
import './LegalRights.css'; 

const rights = [
    {
        right: "Right to peaceful assembly",
        clause: "Every person has the right, peaceably and unarmed, to assemble, to demonstrate, to picket, and to present petitions to public authorities.",
        reference: "Article 37"
    },
    {
        right: "Right to remain silent",
        clause: "An arrested person has the right to remain silent, and to be informed promptly, in language that the person understands, of— (f) the right to communicate with an advocate, and to have an advocate.",
        reference: "Article 49(1)(f)"
    },
    {
        right: "Right to legal representation",
        clause: "If a person is arrested, the person has the right— (a) to be informed promptly, in language that the person understands, of— (i) the reason for the arrest; (ii) the right to remain silent; and (iii) the consequences of not remaining silent.",
        reference: "Article 50(2)"
    },
    {
        right: "Right to be informed of the reason for your arrest",
        clause: "If a person is arrested, the person has the right— (a) to be informed promptly, in language that the person understands, of— (i) the reason for the arrest; (ii) the right to remain silent; and (iii) the consequences of not remaining silent.",
        reference: "Article 49(1)(b)"
    }

];

const LegalRights = () => {
    return (
        <div className="LegalRights">
            <h2>Know Your Legal Rights</h2>
            <ul>
                {rights.map((rightInfo, index) => (
                    <li key={index}>
                        <h3>{rightInfo.right}</h3>
                        <p><strong>Clause:</strong> {rightInfo.clause}</p>
                        <p><strong>Kenyan Constitution Reference:</strong> {rightInfo.reference}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LegalRights;
