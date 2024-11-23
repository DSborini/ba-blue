import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SampleHeader from '../components/sampleHeader';
import solarStudyOptions from '../resources/solarStudyOptions.json';
import SolarStudyOptionCard from '../components/solarStudyOptionCard';
import withLoading from '../utils/withLoading';

function SolarStudy() {
    const navigate = useNavigate();
    const [optionsWithImages, setOptionsWithImages] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadOptionImages = async () => {
            try {
                const loadedOptions = await Promise.all(
                    solarStudyOptions.map(async (option) => {
                        const image = require(`../assets/images/solar/${option.path}`);
                        return { ...option, image };
                    })
                );
                
                setOptionsWithImages(loadedOptions);
                setIsReady(true);
            } catch (error) {
                console.error('Erro ao carregar imagens:', error);
                setIsReady(true);
            }
        };

        loadOptionImages();
    }, []);

    const handleSelectOptionClick = (optionData) => {
        const destinantion = optionData.redirect;
        console.log(destinantion);
        navigate('/' + destinantion);
    };

    // Se não estiver pronto, retorna null para manter o loading
    if (!isReady) return null;

    return (
        <div className='ss-main-div ss-fullscreen'>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1 solar-color-h1 max-width auto-align'>
                    Vamos aprender sobre o sistema solar?
                </p>
                <p className='spartan paragraph h2 solar-color-h2 max-width auto-align'>
                    Clique nas figuras para ouvir as palavras
                </p>
            </div>
            <div className='h-options'>
                {optionsWithImages.map((option) => (
                    <SolarStudyOptionCard
                        key={option.path}
                        imagePath={option.image}
                        text={option.descriptionToSpeech}
                    />
                ))}
            </div>
        </div>
    );
}

// Aplica o HOC withLoading
export default withLoading(SolarStudy);