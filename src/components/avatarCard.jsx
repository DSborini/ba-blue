import React from 'react';

const AvatarCard = ({ imagePath, onClick }) => {
    return (
        <button className="a" onClick={onClick}>
            <img src={imagePath} alt="Avatar" className="avatar-image" />
        </button>
    );
};

export default AvatarCard;