import React from 'react';

const HomeOptionCard = ({ imagePath, imageSize, imageMargin, onClick, text, color }) => {
    return (
        <button onClick={onClick} className='h-options-button' style={{ backgroundColor: color }}>
            <p className='spartan h3'>{text}</p>
            <img 
                src={imagePath} 
                alt="Menu" className='h-image' 
                style={{ height: `${imageSize}vh`, marginRight: `${imageMargin}vw` }}/>
        </button>
    );
};

export default HomeOptionCard;