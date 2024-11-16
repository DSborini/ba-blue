import React from 'react';

const SolarStudyOptionCard = ({ imagePath }) => {
    return (
        <button className='ss-button-card'>
            <img className="ss-image" src={imagePath}></img>
        </button>
    );
};

export default SolarStudyOptionCard;