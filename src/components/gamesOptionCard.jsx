import React from 'react';

const GamesOptionCard = ({ imagePath, imageSize, imageMargin, onClick, text, description, color, imageMarginTop }) => {
    return (
        <button onClick={onClick} className='ms-options-button' style={{ backgroundColor: color }}>
            <div>
                <p className='spartan h6 games-options-txtimg games-color-h6'>{text}</p>
                <p className='spartan h5 no-margin'>{description}</p>
            </div>
            <img 
                src={imagePath} 
                alt="Menu" className='games-image' 
                style={{ height: `${imageSize}vh`, marginRight: `${imageMargin}vw`, marginTop: `${imageMarginTop}vw`}}/>
        </button>
    );
};

export default GamesOptionCard;