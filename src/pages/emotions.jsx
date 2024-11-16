import React from 'react';
import { useNavigate } from 'react-router-dom';
import SampleHeader from '../components/sampleHeader';
import emotionsOptions from '../resources/emotionsOptions.json';
import EmotionsOptionCard from '../components/emotionsOptionCard';
import userInfoState from '../resources/userInfoState';

function Emotions() {
    const navigate = useNavigate();
    const userSelectedAvatarPronoun = userInfoState((state) => state.userSelectedAvatar.pronoun);
    const userSelectedAvatarName = userInfoState((state) => state.userSelectedAvatar.name);

    const handleSelectOptionClick = (optionData) => {
        const destinantion = optionData.redirect;
        console.log(destinantion);

        navigate('/' + destinantion);
    };

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1 solar-color-h1'>EMOÇÕES</p>
                <p className='spartan paragraph h2'></p>
            </div>
            <div className='ee-options'>
                {emotionsOptions.map((option) => (
                    <EmotionsOptionCard
                        imagePath={require(`../assets/images/emotions/${option.path[userSelectedAvatarName]}`)}
                        onClick={() => handleSelectOptionClick(option)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Emotions;