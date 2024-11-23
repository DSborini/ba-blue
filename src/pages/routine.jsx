import React from 'react';
import SampleHeader from '../components/sampleHeader';
import routineOptions from '../resources/routineOptions.json';
import GenericMySpaceOptionCard from '../components/genericMySpaceOptionCard';
import userInfoState from '../resources/userInfoState';

function Routine() {
    const userSelectedAvatarPronoun = userInfoState((state) => state.userSelectedAvatar.pronoun);
    const userSelectedAvatarName = userInfoState((state) => state.userSelectedAvatar.name);

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1 routine-color-h1'>Rotina</p>
                <p className='spartan paragraph h2'>Aqui você pode visualizar opções de rotina</p>
            </div>
            <div className='gg-options'>
                {routineOptions.map((option) => (
                    <GenericMySpaceOptionCard
                        imagePath={require(`../assets/images/routine/${option.path[userSelectedAvatarName]}`)}
                        textToSpeak={option.nameToSpeech[userSelectedAvatarPronoun]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Routine;