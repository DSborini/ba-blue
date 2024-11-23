import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AvatarCard from '../components/avatarCard';
import avatarOptions from '../resources/avatarOptions';
import useInfoState from '../resources/userInfoState';
import withLoading from '../utils/withLoading';

function AvatarSelection() {
    const setUserSelectedAvatar = useInfoState((state) => state.setUserSelectedAvatar);
    const navigate = useNavigate();
    const [avatarImages, setAvatarImages] = useState([]);

    useEffect(() => {
        // Pré-carrega as imagens dos avatares
        const loadAvatarImages = async () => {
            const images = await Promise.all(
                avatarOptions.map(async (avatar) => {
                    const image = require(`../assets/images/${avatar.path}`);
                    return { ...avatar, image };
                })
            );
            setAvatarImages(images);
        };

        loadAvatarImages();
    }, []);

    const handleSelectAvatarClick = (avatarData) => {
        setUserSelectedAvatar(avatarData);
        navigate('/home');
    };
    
    return (
        <div className='avatar-div-1'>
            <p className='spartan paragraph'>Agora preciso que você selecione um avatar:</p>
            <div className='avatar-group'>
                {avatarImages.map((avatar) => (
                    <AvatarCard
                        key={avatar.name}
                        imagePath={avatar.image}
                        onClick={() => handleSelectAvatarClick(avatar)}
                    />
                ))}
            </div>
        </div>
    );
}

// Aplica o HOC withLoading
export default withLoading(AvatarSelection);