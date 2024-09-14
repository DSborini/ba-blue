import React, { useState } from 'react';
import useInfoState, { setUserName } from '../resources/userInfoState';
import mainIcon from '../assets/images/mainIcon.png';

function Start() {
    const [showStartButton, setShowStartButton] = useState(true);
    const [showInputAndEnterButton, setShowInputAndEnterButton] = useState(false);

    const handleStartClick = () => {
        setShowStartButton(false);
        setShowInputAndEnterButton(true);
    };

    const handleSelectAvatarClick = () => {
        const input = document.querySelector('.common-styles.input');
        const userName = input.value;
        setUserName(userName);
    };

    return (
        <div className='start-div-1'>
            <img src={mainIcon} className='main-icon' alt='Image' />
            {showStartButton && (
                <div className='start-div-4'>
                    <button className='common-styles spartan' onClick={handleStartClick}>
                        Começar
                    </button>
                </div>
            )}
            {showInputAndEnterButton && (
                <div className='start-div-2'>
                    <p className='spartan paragraph'>Como você gostaria de ser chamado?</p>
                    <div className='start-div-3'>
                        <>
                            <input type='text' className='common-styles input spartan placeholder' placeholder='Digite aqui' />
                            <button className='common-styles spartan' onClick={handleSelectAvatarClick}>Entrar</button>
                        </>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Start;