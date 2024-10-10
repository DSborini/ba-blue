import React from 'react';

const MySpaceOptionCard = ({ name, color, onClick, hasExtraIcon, extraIconPath, extraIconMarginTop, extraIconMarginLeft, textMarginLeft }) => {
    return (
        <button onClick={onClick} className='ms-options-button' style={{ backgroundColor: color }}>
            <p className='spartan h3 ms-text' style={{ marginLeft: `${textMarginLeft}rem` }}>{name}</p>
            {hasExtraIcon && (
                <img 
                    src={extraIconPath} 
                    alt="Menu" 
                    className='ms-extra-icon' 
                    style={{ marginTop: `${extraIconMarginTop}vh`, marginLeft: `${extraIconMarginLeft}vh` }}
                />
            )}
        </button>
    );
};

export default MySpaceOptionCard;