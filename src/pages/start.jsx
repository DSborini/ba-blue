import React from 'react';
import mainIcon from '../assets/images/mainIcon.png';

function Start() {
    return (
        <div className='start-div-1'>
            <img src={ mainIcon } className='main-icon' alt='Image' />
            <button className='button spartan'>Começar</button>
        </div>
    );
}

export default Start;