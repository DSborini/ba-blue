import React from 'react';
import { useNavigate } from 'react-router-dom';
import SampleHeader from '../components/sampleHeader';
import solarStudyOptions from '../resources/solarStudyOptions.json';
import SolarStudyOptionCard from '../components/solarStudyOptionCard';

function SolarStudy() {
    const navigate = useNavigate();

    const handleSelectOptionClick = (optionData) => {
        const destinantion = optionData.redirect;
        console.log(destinantion);

        navigate('/' + destinantion);
    };

    return (
        <div className='ss-main-div ss-fullscreen'>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1 solar-color-h1 max-width auto-align'>Vamos aprender sobre o sistema solar?</p>
                <p className='spartan paragraph h2 solar-color-h2 max-width auto-align'>Clique nas figuras para ouvir as palavras</p>
            </div>
            <div className='h-options'>
                {solarStudyOptions.map((option) => (
                    <SolarStudyOptionCard
                        imagePath={require(`../assets/images/solar/${option.path}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SolarStudy;