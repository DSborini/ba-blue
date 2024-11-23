import React from 'react';
import { useNavigate } from 'react-router-dom';
import SampleHeader from '../components/sampleHeader';
import gameOptions from '../resources/gameOptions.json';
import GamesOptionCard from '../components/gamesOptionCard';

function Games() {
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
                <p className='spartan paragraph h1'>O que vamos jogar hoje?</p>
                <p className='spartan paragraph h2'></p>
            </div>
            <div className='game-options'>
                {gameOptions.map((option) => (
                    <GamesOptionCard
                        imagePath={require(`../assets/images/games/${option.path}`)}
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

export default Games;