import React from 'react';

const guides = [
    { name: 'Basic First Aid', link: '/resources/basic-first-aid.pdf' },
    { name: 'CPR Instructions', link: '/resources/cpr-instructions.pdf' },
    // Add more guides as needed
];

const FirstAidGuides = () => {
    return (
        <div>
            <h2>First Aid Guides</h2>
            <ul>
                {guides.map((guide, index) => (
                    <li key={index}>
                        <a href={guide.link} target="_blank" rel="noopener noreferrer">{guide.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FirstAidGuides;
