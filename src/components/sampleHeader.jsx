import React, { useState } from 'react';
import arrowLeft from '../assets/icons/arrowLeft.svg';
import headerMenu from '../assets/icons/headerMenu.svg';
import userInfoState from '../resources/userInfoState';

const SampleHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const userName = userInfoState((state) => state.userName);
    const userSelectedAvatar = userInfoState((state) => state.userSelectedAvatar);

    const handleBackClick = () => {
        window.history.back();
    };

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='sh-header'>
            <button className='sh-button' onClick={handleBackClick}>
                <img src={arrowLeft} alt="Voltar" className='sh-icon' />
            </button>
            <button className='sh-button' onClick={handleMenuClick}>
                <img src={headerMenu} alt="Menu" className='sh-icon' />
            </button>
            {menuOpen && (
                <div className='sh-menu'>
                    <div className='sh-profile-div'>
                        <p className='spartan sh-profile-name'>{userName}</p>
                        <img src={require(`../assets/images/${userSelectedAvatar.profilePath}`)} alt="Avatar" className='sh-profile-img' />
                    </div>
                    <div className='spartan header-menu'>
                        <ul className='sh-options'>
                            <div className='sh-suboptions'>
                                <li className='sh-suboptions-li'>Perfil</li>
                                <div className='sh-menu-text-decoration' />
                            </div >
                            <div className='sh-suboptions'>
                                <li className='sh-suboptions-li'>Menu Principal</li>
                                <div className='sh-menu-text-decoration' />
                            </div>
                            <div className='sh-suboptions'>
                                <li className='sh-suboptions-li'>Ajustes</li>
                                <div className='sh-menu-text-decoration' />
                            </div>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default SampleHeader;