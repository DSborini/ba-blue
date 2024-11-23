import React from 'react';
import SampleHeader from '../components/sampleHeader';
import emotionsOptions from '../resources/emotionsOptions.json';
import EmotionsOptionCard from '../components/emotionsOptionCard';
import userInfoState from '../resources/userInfoState';

function Emotions() {
    const userSelectedAvatarPronoun = userInfoState((state) => state.userSelectedAvatar.pronoun);
    const userSelectedAvatarName = userInfoState((state) => state.userSelectedAvatar.name);

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1 solar-color-h1'>Emoções</p>
                <p className='spartan paragraph h2'>Como estou me sentindo?</p>
            </div>
            <div className='ee-options'>
                {emotionsOptions.map((option) => (
                    <EmotionsOptionCard
                        imagePath={require(`../assets/images/emotions/${option.path[userSelectedAvatarName]}`)}
                        textToSpeak={option.nameToSpeech[userSelectedAvatarPronoun]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Emotions;