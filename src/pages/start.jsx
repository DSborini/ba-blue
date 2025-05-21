import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useInfoState from '../resources/userInfoState';
import mainIcon from '../assets/images/mainIcon.png';
import { useAnalytics } from '../hooks/useAnalytics';
import { getUserId, getUserUniqueString } from '../utils/userIdentifier';

function Start() {
    const [showStartButton, setShowStartButton] = useState(true);
    const [showInputAndEnterButton, setShowInputAndEnterButton] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const setUserName = useInfoState((state) => state.setUserName);
    const navigate = useNavigate();
    const analytics = useAnalytics(getUserId(), getUserUniqueString());

    const handleStartClick = () => {
        analytics.trackUserInteraction({
            type: 'button_click',
            action: 'start_button'
        });
        
        setShowStartButton(false);
        setShowInputAndEnterButton(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleEnterClick = () => {
        const userName = inputValue.trim();
        setUserName(userName);

        analytics.trackUserInteraction({
            action: 'complete_identification',
            finalUserName: userName
        });

        navigate('/avatar');
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
                            <input 
                                type='text' 
                                className='common-styles input spartan placeholder' 
                                placeholder='Digite aqui'
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <button 
                                className='common-styles spartan' 
                                onClick={handleEnterClick}
                                disabled={!inputValue.trim()}
                            >
                                Entrar
                            </button>
                        </>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Start;
