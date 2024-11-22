// src/components/SampleHeader.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arrowLeft from '../assets/icons/arrowLeft.svg';
import headerMenu from '../assets/icons/headerMenu.svg';
import userInfoState from '../resources/userInfoState';

const SampleHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const userName = userInfoState((state) => state.userName);
    const userSelectedAvatar = userInfoState((state) => state.userSelectedAvatar);
    const resetScore = userInfoState((state) => state.resetUserLastQuizScore);

    const handleBackClick = () => {
        resetScore();
        window.history.back();
    };

    const handleMenuOptionClick = (route) => {
        setMenuOpen(false);
        navigate(route);
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
                        <img 
                            src={require(`../assets/images/${userSelectedAvatar.profilePath}`)} 
                            alt="Avatar" 
                            className='sh-profile-img' 
                        />
                    </div>
                    <div className='spartan header-menu'>
                        <ul className='sh-options'>
                            <div className='sh-suboptions'>
                                <li 
                                    className='sh-suboptions-li sh-disabled'
                                >
                                    Perfil
                                </li>
                                <div className='sh-menu-text-decoration sh-grey' />
                            </div>
                            <div className='sh-suboptions'>
                                <li 
                                    className='sh-suboptions-li'
                                    onClick={() => handleMenuOptionClick('/home')}
                                >
                                    Menu Principal
                                </li>
                                <div className='sh-menu-text-decoration' />
                            </div>
                            <div className='sh-suboptions'>
                                <li 
                                    className='sh-suboptions-li sh-disabled'
                                >
                                    Ajustes
                                </li>
                                <div className='sh-menu-text-decoration sh-grey' />
                            </div>
                            <div className=''>
                                <li >
                                ‎     
                                </li>
                                <div/>
                            </div>
                            <div className='sh-suboptions'>
                                <li 
                                    className='sh-suboptions-li'
                                    onClick={() => handleMenuOptionClick('/myspace')}
                                >
                                    Meu Espaço
                                </li>
                                <div className='sh-menu-text-decoration sh-yellow' />
                            </div>
                            <div className='sh-suboptions'>
                                <li 
                                    className='sh-suboptions-li'
                                    onClick={() => handleMenuOptionClick('/studytime')}
                                >
                                    Hora de Aprender
                                </li>
                                <div className='sh-menu-text-decoration sh-purple' />
                            </div>
                            <div className='sh-suboptions'>
                                <li 
                                    className='sh-suboptions-li'
                                    onClick={() => handleMenuOptionClick('/games')}
                                >
                                    Jogos
                                </li>
                                <div className='sh-menu-text-decoration sh-blue' />
                            </div>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default SampleHeader;
