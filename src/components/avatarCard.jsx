import React from 'react';

const AvatarCard = ({ imagePath, onClick }) => {
    return (
        <button onClick={onClick} className='avatar-button'>
            <img src={imagePath} alt="Avatar" className="avatar-image" />
        </button>
    );
};

export default AvatarCard;