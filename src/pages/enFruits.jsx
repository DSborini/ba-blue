import React, { useState, useEffect } from 'react';
import SampleHeader from '../components/sampleHeader';
import fruitOptions from '../resources/fruitsOptions.json';
import GenericEnglishStudyCard from '../components/genericEnglishStudyCard';
import userInfoState from '../resources/userInfoState';
import withLoading from '../utils/withLoading';

function EnFruits() {
    const userSelectedAvatarPronoun = userInfoState((state) => state.userSelectedAvatar.pronoun);
    const userSelectedAvatarName = userInfoState((state) => state.userSelectedAvatar.name);
    const [fruitsWithImages, setFruitsWithImages] = useState([]);

    useEffect(() => {
        // Pré-carrega as imagens das frutas
        const loadFruitImages = async () => {
            const loadedFruits = await Promise.all(
                fruitOptions.map(async (option) => {
                    const image = require(`../assets/images/fruits/${option.path}`);
                    return { ...option, image };
                })
            );
            setFruitsWithImages(loadedFruits);
        };

        loadFruitImages();
    }, []);

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1 fam-font-h1 ge-orange'>
                    Hora de aprender o nome das frutas!
                </p>
                <p className='spartan paragraph h2 fam-font-h2'>
                    Clique nas figuras para ouvir as palavras
                </p>
            </div>
            <div className='ge-options'>
                {fruitsWithImages.map((option) => (
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
export default withLoading(EnFruits);