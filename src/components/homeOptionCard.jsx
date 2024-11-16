import React from 'react';

const HomeOptionCard = ({ imagePath, imageSize, imageMargin, onClick, text, description, color }) => {
    return (
        <button onClick={onClick} className='h-options-button' style={{ backgroundColor: color }}>
            <div className='h-options-txtimg'>
                <p className='spartan h6 no-margin'>{text}</p>
                <p className='spartan h5 h-description-txt no-margin'>{description}</p>
            </div>
            <img 
                src={imagePath} 
                alt="Menu" className='h-image' 
                style={{ height: `${imageSize}vh`, marginRight: `${imageMargin}vw` }}/>
        </button>
    );
};

export default HomeOptionCard;