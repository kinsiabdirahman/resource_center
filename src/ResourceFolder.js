import React from 'react';
import './ResourceFolder.css'; // CSS for folder styling

const ResourceFolder = ({ name, size, items, date, contributors }) => {
    return (
        <div className="resource-folder">
            <div className="folder-header">
                <span className="folder-name">{name}</span>
            </div>
            <div className="folder-details">
                <p>File size: {size}</p>
                <p>Items: {items}</p>
                <p>Created at: {date}</p>
                <div className="contributors">
                    {contributors.map((contributor, index) => (
                        <span key={index} className="contributor">
                            {contributor}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResourceFolder;
