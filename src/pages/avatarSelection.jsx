import React from 'react';
import AvatarCard from '../components/avatarCard';
import avatarOptions from '../resources/avatarOptions';

const generateRandomKey = () => Math.random().toString(36).substring(7);

const AvatarSelection = () => {
    return (
        <div className='avatar-div-1'>
            <p className='spartan paragraph'>Agora preciso que você selecione um avatar:</p>
            <div className='avatar-group'>
                {avatarOptions.map((avatar, index) => (
                    <AvatarCard key={generateRandomKey()} imagePath={require(`../assets/images/${avatar.path}`)} />
                ))}
            </div>
        </div>
    );
};

export default AvatarSelection;