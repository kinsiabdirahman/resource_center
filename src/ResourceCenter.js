import React from 'react';
import './ResourceCenter.css'; // Import the CSS file for Resource Center

const flyers = [

  { name: 'Finance GPT', link: 'https://t.co/PCLCg72ZhP' },
  { name: 'USSD Code', link: 'tel:*665*971#' },
  { name: 'Protest Guide', link: 'https://www.instagram.com/p/C8UTIjriayQ/?igsh=MWhpMzR0NWhmeXR3Zw==' },
  { name: 'Code Of Conduct', link: 'https://www.instagram.com/p/C8VKSY-o07G/?igsh=MWx6YnAxNmtyYjMxdQ==' },
  
];

const ResourceCenter = () => {
  return (
    <div className="ResourceCenter">
      <h2>Resource Center</h2>
      <ul>
        {flyers.map((flyer, index) => (
          <li key={index}>
            {flyer.link.startsWith('http') || flyer.link.startsWith('tel') ? (
              <a href={flyer.link} target="_blank" rel="noopener noreferrer">{flyer.name}</a>
            ) : (
              <a href={process.env.PUBLIC_URL + flyer.link} target="_blank" rel="noopener noreferrer" download>{flyer.name}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceCenter;
