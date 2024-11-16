import React from 'react';
import { useNavigate } from 'react-router-dom';
import SampleHeader from '../components/sampleHeader';
import studyTimeOptions from '../resources/studyTimeOptions';
import StudyTimeOptionCard from '../components/studyTimeOptionCard';

function StudyTime() {
    const navigate = useNavigate();

    const handleSelectOptionClick = (optionData) => {
        const destinantion = optionData.redirect;
        console.log(destinantion);

        navigate('/' + destinantion);
    };

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1'>Hora de aprender</p>
                <p className='spartan paragraph h2'>O que vamos aprender hoje?</p>
            </div>
            <div className='h-options'>
                {studyTimeOptions.map((option) => (
                    <StudyTimeOptionCard
                        imagePath={require(`../assets/images/${option.path}`)}
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
};

export default StudyTime;