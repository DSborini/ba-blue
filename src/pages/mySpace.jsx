import React from 'react';
import { useNavigate } from 'react-router-dom';
import SampleHeader from '../components/sampleHeader';
import mySpaceOptions from '../resources/mySpaceOptions';
import MySpaceOptionCard from '../components/mySpaceOptionCard';

function MySpace() {
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
                <p className='spartan paragraph h1'>Meu espaço</p>
                <p className='spartan paragraph h2'>O que você gostaria de dizer?</p>
            </div>
            <div className='h-options'>
                {mySpaceOptions.map((option) => (
                    <MySpaceOptionCard
                        imagePath={require(`../assets/images/${option.path}`)}
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
};

export default MySpace;