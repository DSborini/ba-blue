import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SampleHeader from '../components/sampleHeader';
import studyTimeOptions from '../resources/studyTimeOptions';
import StudyTimeOptionCard from '../components/studyTimeOptionCard';
import withLoading from '../utils/withLoading';

function StudyTime() {
    const navigate = useNavigate();
    const [optionsWithImages, setOptionsWithImages] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadOptionImages = async () => {
            try {
                const loadedOptions = await Promise.all(
                    studyTimeOptions.map(async (option) => {
                        const image = require(`../assets/images/${option.path}`);
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

    if (!isReady) return null;

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1'>Hora de aprender</p>
                <p className='spartan paragraph h2'>O que vamos aprender hoje?</p>
            </div>
            <div className='h-options'>
                {optionsWithImages.map((option) => (
                    <StudyTimeOptionCard
                        key={option.path}
                        imagePath={option.image}
                        imageSize={option.size}
                        imageMargin={option.margin}
                        onClick={() => handleSelectOptionClick(option)}
                        text={option.name}
                        description={option.description}
                        color={option.color}
                        imageMarginTop={option.marginTop}
                        fontColor={option.fontColor}
                    />
                ))}
            </div>
        </div>
    );
}

// Aplica o HOC withLoading
export default withLoading(StudyTime);