import React from 'react';
import userInfoState from '../resources/userInfoState';
import SampleHeader from '../components/sampleHeader';
import homeOptions from '../resources/homeOptions';

function Home() {
    const userName = userInfoState((state) => state.userName);

    return (
        <div>
            <SampleHeader />
            <div className='h-header'>
                <p className='spartan paragraph h1'>Olá, {userName}!</p>
                <p className='spartan paragraph h2'>O que vamos fazer hoje?</p>
            </div>

        </div>
    );
}

export default Home;