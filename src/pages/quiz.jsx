import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SampleHeader from '../components/sampleHeader';
import firstTypeQuizOptions from '../resources/firstTypeQuizOptions.json';
import FirstTypeQuiz from '../components/quiz/firstTypeQuiz';
import userInfoState from '../resources/userInfoState';

const Quiz = () => {
    const navigate = useNavigate();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = firstTypeQuizOptions[0].questions[currentQuestionIndex];
    const setUserLastQuizScore = userInfoState((state) => state.setUserLastQuizScore);
    const userScore = userInfoState((state) => state.userLastQuizScore);

    const updateScore = (score) => {
        setUserLastQuizScore(score);
    };

    const validateAnwser = (answer) => {
        if (answer === currentQuestion.correctAnswer) {
            updateScore(userScore + 1);
        };
    }   

    const handleNextQuestion = (answerNumber) => {
        validateAnwser(answerNumber);

        if (currentQuestionIndex === firstTypeQuizOptions[0].questions.length - 1) {
            navigate('/games/quiz/feedback', { replace: true });
        };

        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    console.log(userScore);

    return (
        <div>
            <SampleHeader />
            <FirstTypeQuiz question={currentQuestion} onNextQuestion={handleNextQuestion} totalQuestions={firstTypeQuizOptions[0].questions.length} />
        </div>
    );
};

export default Quiz;