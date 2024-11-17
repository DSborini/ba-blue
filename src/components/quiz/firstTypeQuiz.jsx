import React from 'react';

const FirstTypeQuiz = ({ question, onNextQuestion, totalQuestions }) => {
    const { questionText, questionNumber, imagePath, correctAnswer, options } = question;

    return (
        <div className='q1-container'>
            <div className='q1-counter'>
                <p className='spartan h6 q1-counter-text'>{`Q${questionNumber}/${totalQuestions}`}</p>
            </div>
            <p className='spartan h6 q1-question'>{questionText}</p>
            <img className='q1-image' src={require(`../../assets/images/games/quiz/${imagePath}`)}></img>
            <div className='q1-button-container'>
                {options.map((o) => (
                    <button className='q1-button-card spartan h6' onClick={() => onNextQuestion(o.value)}>{o.option}</button>
                ))}
            </div>
        </div>
    );
};

export default FirstTypeQuiz;