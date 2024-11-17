import React from 'react';
import { useNavigate } from 'react-router-dom';
import userInfoState from '../resources/userInfoState';
import feedbackResults from '../resources/feedbackResults.json';
import SampleHeader from '../components/sampleHeader';

const Feedback = () => {
    const navigate = useNavigate();
    const userLastQuizScore = userInfoState((state) => state.userLastQuizScore);
    const respectiveFeedback = feedbackResults.filter((result) => result.rating == userLastQuizScore);
    const totalPossibleScore = feedbackResults.length - 1;

    const { feedback, path, extraContent } = respectiveFeedback[0];

    return (
        <div>
            <SampleHeader />
            <div>
                <div className='fb-results-container'>
                    <img className='fb-stars-img' src={require(`../assets/images/games/quiz/feedback/${path}`)} alt="Feedback" />
                    <p className='spartan h6 fb-main-text'>{`Você acertou: ${userLastQuizScore} de ${totalPossibleScore}`}</p>
                    <p className='spartan h6 fb-secondary-text'>{feedback}</p>
                    <p className='spartan h6 fb-extra-text'>{extraContent}</p>
                </div>
                <div className='fb-buttons-container'>
                    <button className='fb-button spartan h5 fb-green'>AVANÇAR</button>
                    <button className='fb-button spartan h5 fb-blue'>TENTAR NOVAMENTE</button>
                    <button className='fb-button spartan h5 fb-purple'>MENU</button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;