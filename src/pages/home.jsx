import React from 'react';
import userInfoState from '../resources/userInfoState';
import SampleHeader from '../components/sampleHeader';

function Home() {
    const userName = userInfoState((state) => state.userName);

    return (
        <div>
            <SampleHeader />
            <p className='spartan paragraph h1'>Olá, {userName}!</p>
        </div>
    );
}

export default Home;