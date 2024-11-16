import React from 'react';

const MySpaceOptionCard = ({ imagePath, imageSize, imageMargin, onClick, text, description, color, imageMarginTop }) => {
    return (
        <button onClick={onClick} className='ms-options-button' style={{ backgroundColor: color }}>
            <div className='ms-options-txtimg'>
                <p className='spartan h6 no-margin'>{text}</p>
                <p className='spartan h5 ms-description-txt no-margin'>{description}</p>
            </div>
            <img 
                src={imagePath} 
                alt="Menu" className='ms-image' 
                style={{ height: `${imageSize}vh`, marginRight: `${imageMargin}vw`, marginTop: `${imageMarginTop}vw`}}/>
        </button>
    );
};

export default MySpaceOptionCard;