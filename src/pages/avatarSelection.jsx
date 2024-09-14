import React from 'react';
import { useNavigate } from 'react-router-dom';
import AvatarCard from '../components/avatarCard';
import avatarOptions from '../resources/avatarOptions';
import useInfoState from '../resources/userInfoState';

function AvatarSelection() {
    const setUserSelectedAvatar = useInfoState((state) => state.setUserSelectedAvatar);
    const navigate = useNavigate();

    const handleSelectAvatarClick = (avatarName) => {
        setUserSelectedAvatar(avatarName);

        navigate('/home');
    };
    
    return (
        <div className='avatar-div-1'>
            <p className='spartan paragraph'>Agora preciso que você selecione um avatar:</p>
            <div className='avatar-group'>
                {avatarOptions.map((avatar) => (
                    <AvatarCard
                        key={avatar.name}
                        imagePath={require(`../assets/images/${avatar.path}`)}
                        onClick={() => handleSelectAvatarClick(avatar.name)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AvatarSelection;