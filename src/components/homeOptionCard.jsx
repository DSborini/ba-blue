import React from 'react';

const HomeOptionCard = ({ imagePath, onClick }) => {
    return (
        <button onClick={onClick} className='avatar-button'>
            <img src={imagePath} alt="Menu" className="avatar-image" />
        </button>
    );
};

export default HomeOptionCard;