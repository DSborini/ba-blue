import React from 'react';
import SampleHeader from '../components/sampleHeader';
import fruitOptions from '../resources/fruitsOptions.json';
import GenericEnglishStudyCard from '../components/genericEnglishStudyCard';
import userInfoState from '../resources/userInfoState';

function EnFruits() {
    const userSelectedAvatarPronoun = userInfoState((state) => state.userSelectedAvatar.pronoun);
    const userSelectedAvatarName = userInfoState((state) => state.userSelectedAvatar.name);

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1 fam-font-h1 ge-orange'>Hora de aprender o nome das frutas!</p>
                <p className='spartan paragraph h2 fam-font-h2'>Clique nas figuras para ouvir as palavras</p>
            </div>
            <div className='ge-options'>
                {fruitOptions.map((option) => (
                    <GenericEnglishStudyCard
                        imagePath={require(`../assets/images/fruits/${option.path}`)}
                        textToSpeak={option.nameToSpeech}
                        language={option.language}
                    />
                ))}
            </div>
        </div>
    );
};

export default EnFruits;