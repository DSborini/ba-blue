import React from 'react';
import userInfoState from '../resources/userInfoState';

function Home() {
    const userName = userInfoState((state) => state.userName);

    return (
        <div>
            <p className='spartan paragraph h1'>Olá, {userName}!</p>
        </div>
    );
}

export default Home;