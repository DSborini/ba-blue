import React from 'react';

const EmotionsOptionCard = ({ imagePath, onClick }) => {
    return (
        <button onClick={onClick} className='ee-button-card'>
            <img className="ee-image" src={imagePath}></img>
        </button>
    );
};

export default EmotionsOptionCard;