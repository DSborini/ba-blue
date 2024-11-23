import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SampleHeader from '../components/sampleHeader';
import mySpaceOptions from '../resources/mySpaceOptions';
import MySpaceOptionCard from '../components/mySpaceOptionCard';
import withLoading from '../utils/withLoading';

function MySpace() {
    const navigate = useNavigate();
    const [optionsWithImages, setOptionsWithImages] = useState([]);

    useEffect(() => {
        // Pré-carrega as imagens das opções
        const loadOptionImages = async () => {
            const loadedOptions = await Promise.all(
                mySpaceOptions.map(async (option) => {
                    const image = require(`../assets/images/${option.path}`);
                    return { ...option, image };
                })
            );
            setOptionsWithImages(loadedOptions);
        };

        loadOptionImages();
    }, []);

    const handleSelectOptionClick = (optionData) => {
        const destinantion = optionData.redirect;
        console.log(destinantion);

        navigate('/' + destinantion);
    };

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1'>Meu espaço</p>
                <p className='spartan paragraph h2'>O que você gostaria de dizer?</p>
            </div>
            <div className='h-options'>
                {optionsWithImages.map((option) => (
                    <MySpaceOptionCard
                        key={option.name}
                        imagePath={option.image}
                        imageSize={option.size}
                        imageMargin={option.margin}
                        onClick={() => handleSelectOptionClick(option)}
                        text={option.name}
                        description={option.description}
                        color={option.color}
                        imageMarginTop={option.marginTop}
                    />
                ))}
            </div>
        </div>
    );
}

// Aplica o HOC withLoading
export default withLoading(MySpace);