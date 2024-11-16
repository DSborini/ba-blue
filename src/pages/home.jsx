import React from 'react';
import { useNavigate } from 'react-router-dom';
import userInfoState from '../resources/userInfoState';
import SampleHeader from '../components/sampleHeader';
import homeOptions from '../resources/homeOptions';
import HomeOptionCard from '../components/homeOptionCard';

function Home() {
    const navigate = useNavigate();
    const userName = userInfoState((state) => state.userName);

    const handleSelectOptionClick = (optionData) => {
        const destinantion = optionData.redirect;
        console.log(destinantion);

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
                {homeOptions.map((option) => (
                    <HomeOptionCard
                        imagePath={require(`../assets/images/${option.path}`)}
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

export default Home;