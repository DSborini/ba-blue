import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userInfoState from '../resources/userInfoState';
import SampleHeader from '../components/sampleHeader';
import homeOptions from '../resources/homeOptions';
import HomeOptionCard from '../components/homeOptionCard';
import withLoading from '../utils/withLoading';
import { useAnalytics } from '../hooks/useAnalytics';
import { getUserId, getUserUniqueString } from '../utils/userIdentifier';

function Home() {
    const navigate = useNavigate();
    const userName = userInfoState((state) => state.userName);
    const [optionsWithImages, setOptionsWithImages] = useState([]);
    const analytics = useAnalytics(getUserId(), getUserUniqueString());

    useEffect(() => {
        // Pré-carrega as imagens das opções
        const loadOptionImages = async () => {
            const loadedOptions = await Promise.all(
                homeOptions.map(async (option) => {
                    const image = require(`../assets/images/${option.path}`);
                    return { ...option, image };
                })
            );

            setOptionsWithImages(loadedOptions);
        };

        loadOptionImages();
    }, []);

    const handleSelectOptionClick = (optionData) => {
        analytics.trackUserInteraction({
            type: 'home_option_selection',
            action: 'select_option',
            selectedOption: optionData.name
        });

        const destinantion = optionData.redirect;
        navigate('/' + destinantion);
    };

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1'>Olá, {userName}!</p>
                <p className='spartan paragraph h2'>O que vamos fazer hoje?</p>
            </div>
            <div className='h-options'>
                {optionsWithImages.map((option) => (
                    <HomeOptionCard
                        key={option.name}
                        imagePath={option.image}
                        imageSize={option.size}
                        imageMargin={option.margin}
                        onClick={() => handleSelectOptionClick(option)}
                        text={option.name}
                        description={option.description}
                        color={option.color}
                    />
                ))}
            </div>
        </div>
    );
}

// Aplica o HOC withLoading
export default withLoading(Home);