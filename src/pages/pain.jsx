import React from 'react';
import SampleHeader from '../components/sampleHeader';
import painOptions from '../resources/painOptions.json';
import GenericMySpaceOptionCard from '../components/genericMySpaceOptionCard';
import userInfoState from '../resources/userInfoState';

function Pain() {
    const userSelectedAvatarPronoun = userInfoState((state) => state.userSelectedAvatar.pronoun);
    const userSelectedAvatarName = userInfoState((state) => state.userSelectedAvatar.name);

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1'>Dores e necessidades</p>
                <p className='spartan paragraph h2'>Como estou me sentindo?</p>
            </div>
            <div className='gg-options'>
                {painOptions.map((option) => (
                    <GenericMySpaceOptionCard
                        imagePath={require(`../assets/images/pain/${option.path[userSelectedAvatarName]}`)}
                        textToSpeak={option.nameToSpeech[userSelectedAvatarPronoun]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pain;