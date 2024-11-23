import React from 'react';
import { useNavigate } from 'react-router-dom';
import userInfoState from '../resources/userInfoState';
import memoryFeedbackResults from '../resources/memoryFeedbackResults.json';
import SampleHeader from '../components/sampleHeader';

const MemoryFeedback = () => {
    const navigate = useNavigate();
    const userMemoryScore = userInfoState((state) => state.userLastMemoryGameScore);
    const resetMemoryScore = userInfoState((state) => state.resetUserLastMemoryGameScore);
    
    // Assumindo que a pontuação máxima é 40 (4 pares = 8 cards, 10 pontos por par)
    const maxScore = 40;
    // Calcula a porcentagem da pontuação
    const scorePercentage = (userMemoryScore / maxScore) * 100;
    
    // Encontra o feedback apropriado baseado na porcentagem
    const respectiveFeedback = memoryFeedbackResults.find(result => 
        scorePercentage >= result.minPercentage && scorePercentage <= result.maxPercentage
    );

    const { feedback, path, extraContent } = respectiveFeedback;

    const handleAdvance = () => {
        resetMemoryScore();
        // Navega para o próximo nível ou jogo
        navigate('/games/memory/', { replace: true });
    };
    
    const handleTryAgain = () => {
        resetMemoryScore();
        navigate('/games/memory', { replace: true });
    };
    
    const handleMenu = () => {
        resetMemoryScore();
        navigate('/home', { replace: true });
    };

    return (
        <div>
            <SampleHeader />
            <div>
                <div className='fb-results-container'>
                    <img 
                        className='fb-stars-img' 
                        src={require(`../assets/images/games/quiz/feedback/${path}`)} 
                        alt="Feedback" 
                    />
                    <p className='spartan h6 fb-main-text'>
                        {`Sua pontuação: ${userMemoryScore} pontos`}
                    </p>
                    <p className='spartan h6 fb-secondary-text'>{feedback}</p>
                    <p className='spartan h6 fb-extra-text'>{extraContent}</p>
                </div>
                <div className='fb-buttons-container'>
                    <button onClick={handleAdvance} className='fb-button spartan h5 fb-green'>
                        PRÓXIMO NÍVEL
                    </button>
                    <button onClick={handleTryAgain} className='fb-button spartan h5 fb-blue'>
                        TENTAR NOVAMENTE
                    </button>
                    <button onClick={handleMenu} className='fb-button spartan h5 fb-purple'>
                        MENU
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemoryFeedback;