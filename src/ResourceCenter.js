import React from 'react';

const flyers = [
    { name: 'Protest Guide', link: '/resources/protest-guide.pdf' },
    { name: 'Finance Bill Summary', link: '/resources/finance-bill-summary.pdf' },
    { name: 'FAQ', link: '/resources/faq.pdf' },
];

const ResourceCenter = () => {
    return (
        <div>
            <h2>Resource Center</h2>
            <ul>
                {flyers.map((flyer, index) => (
                    <li key={index}>
                        <a href={flyer.link} target="_blank" rel="noopener noreferrer">{flyer.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceCenter;