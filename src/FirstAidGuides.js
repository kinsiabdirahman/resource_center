import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './FirstAidGuides.css'; 

const guides = [
    { name: 'Basic First Aid', link: '/resources/basic_f_aid.pdf' },
];

const FirstAidGuides = () => {
    return (
        <div className="FirstAidGuides">
            <h2>First Aid Guides</h2>
            <ul>
                {guides.map((guide, index) => (
                    <li key={index}>
                        <a href={guide.link} target="_blank" rel="noopener noreferrer" download>
                            <FontAwesomeIcon icon={faFilePdf} className="icon" />
                            {guide.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FirstAidGuides;
