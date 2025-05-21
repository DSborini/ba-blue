import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import { getUserId, getUserUniqueString } from '../../utils/userIdentifier';

const FirstTypeQuiz = ({ question, onNextQuestion, totalQuestions }) => {
    const { questionText, questionNumber, imagePath, correctAnswer, options } = question;
    const analytics = useAnalytics(getUserId(), getUserUniqueString());

    return (
        <div className='q1-container'>
            <div className='q1-counter'>
                <p className='spartan h6 q1-counter-text'>{`Q${questionNumber}/${totalQuestions}`}</p>
            </div>
            <p className='spartan h6 q1-question'>{questionText}</p>
            <img className='q1-image' src={require(`../../assets/images/games/quiz/${imagePath}`)}></img>
            <div className='q1-button-container'>
                {options.map((o) => (
                    <button className='q1-button-card spartan h6' onClick={() => {
                        onNextQuestion(o.value);
                        analytics.trackUserInteraction({
                            type: 'first_type_quiz_selection',
                            action: 'select_option',
                            questionNumber: questionNumber,
                            questionText: questionText,
                            correctAnswer: correctAnswer,
                            selectedOptionValue: o.value,
                            selectedOptionText: o.option
                        });
                    }}>{o.option}</button>
                ))}
            </div>
        </div>
    );
};

export default FirstTypeQuiz;