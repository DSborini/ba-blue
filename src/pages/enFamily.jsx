import React, { useState, useEffect } from 'react';
import SampleHeader from '../components/sampleHeader';
import familyOptions from '../resources/familyOptions.json';
import GenericEnglishStudyCard from '../components/genericEnglishStudyCard';
import userInfoState from '../resources/userInfoState';
import withLoading from '../utils/withLoading';

function EnFamily() {
    const userSelectedAvatarPronoun = userInfoState((state) => state.userSelectedAvatar.pronoun);
    const userSelectedAvatarName = userInfoState((state) => state.userSelectedAvatar.name);
    const [familyWithImages, setFamilyWithImages] = useState([]);

    useEffect(() => {
        // Pré-carrega as imagens dos membros da família
        const loadFamilyImages = async () => {
            const loadedFamily = await Promise.all(
                familyOptions.map(async (option) => {
                    const image = require(`../assets/images/family/${option.path}`);
                    return { ...option, image };
                })
            );
            setFamilyWithImages(loadedFamily);
        };

        loadFamilyImages();
    }, []);

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1 fam-font-h1'>
                    Hora de aprender sobre família!
                </p>
                <p className='spartan paragraph h2 fam-font-h2'>
                    Clique nas figuras para ouvir as palavras
                </p>
            </div>
            <div className='ge-options'>
                {familyWithImages.map((option) => (
                    <GenericEnglishStudyCard
                        key={option.nameToSpeech}
                        imagePath={option.image}
                        textToSpeak={option.nameToSpeech}
                        language={option.language}
                    />
                ))}
            </div>
        </div>
    );
}

// Aplica o HOC withLoading
export default withLoading(EnFamily);