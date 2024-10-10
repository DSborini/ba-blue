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
            <div className='ms-options'>
                {mySpaceOptions.map((option) => (
                    <MySpaceOptionCard
                        key={option.name}
                        name={option.name}
                        color={option.color}
                        hasExtraIcon={option.hasExtraIcon}
                        extraIconPath={option.hasExtraIcon ? require(`../assets/images/myspace/${option.extraIconPath}`) : null}
                        extraIconMarginTop={option.extraIconMarginTop}
                        extraIconMarginLeft={option.extraIconMarginLeft}
                        textMarginLeft={option.textMarginLeft}
                        onClick={() => handleSelectOptionClick(option)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MySpace;