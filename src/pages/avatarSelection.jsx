import React from 'react';
import AvatarCard from '../components/avatarCard';
import avatarOptions from '../resources/avatarOptions';

const AvatarSelection = () => {
    return (
        <div>
            <h1>Avatar Selection</h1>
            <div>
                {avatarOptions.map((avatar, index) => (
                    <AvatarCard key={index} imagePath={require(`../assets/images/${avatar.path}`)} />
                ))}
            </div>
        </div>
    );
};

export default AvatarSelection;