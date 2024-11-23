import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import memoryGameOptions from '../resources/memoryGameOptions.json';
import userInfoState from '../resources/userInfoState';

// Componente Card permanece o mesmo
const Card = ({ isFlipped, isMatched, onClick, imagePath }) => {
    return (
        <div
            className={`memory-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
            onClick={onClick}
        >
            <div className="card-content">
                {isFlipped || isMatched ? (
                    <div className="card-front">
                        <img src={require(`../assets/images/games/memory/planets/${imagePath}`)} alt="card" className="card-image" />
                    </div>
                ) : (
                    <span className="card-back">?</span>
                )}
            </div>
        </div>
    );
};

const MemoryGame = ({ onScoreUpdate }) => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [gameCompleted, setGameCompleted] = useState(false);

    const shuffleCards = () => {
        const planetCards = memoryGameOptions[0].cards;
        const duplicatedCards = [...planetCards, ...planetCards].map((card, index) => ({
            ...card,
            uniqueId: index,
            isFlipped: false,
            isMatched: false
        }));

        for (let i = duplicatedCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [duplicatedCards[i], duplicatedCards[j]] = [duplicatedCards[j], duplicatedCards[i]];
        }

        setCards(duplicatedCards);
    };

    useEffect(() => {
        shuffleCards();
    }, []);

    // Efeito para verificar se o jogo foi completado
    useEffect(() => {
        if (cards.length > 0 && matchedCards.length === cards.length && !gameCompleted) {
            setGameCompleted(true);
            // Salva a pontuação no estado global
            userInfoState.getState().setUserLastMemoryGameScore(score);
            
            // Redireciona após 3 segundos
            setTimeout(() => {
                navigate('/games/memory/feedback', { replace: true });
            }, 3000);
        }
    }, [matchedCards, cards.length, score, navigate, gameCompleted]);

    const handleCardClick = (clickedCard) => {
        if (
            flippedCards.length === 2 ||
            flippedCards.includes(clickedCard.uniqueId) ||
            matchedCards.includes(clickedCard.uniqueId) ||
            gameCompleted
        ) {
            return;
        }

        const newFlippedCards = [...flippedCards, clickedCard.uniqueId];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            const [firstCardId, secondCardId] = newFlippedCards;
            const firstCard = cards.find(card => card.uniqueId === firstCardId);
            const secondCard = cards.find(card => card.uniqueId === secondCardId);

            if (firstCard.id === secondCard.id) {
                setMatchedCards([...matchedCards, firstCardId, secondCardId]);
                setScore(prevScore => prevScore + 10);
                setFlippedCards([]);
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                }, 1000);
                setScore(prevScore => Math.max(0, prevScore - 2));
            }
        }
    };

    useEffect(() => {
        if (onScoreUpdate) {
            onScoreUpdate(score);
        }
    }, [score, onScoreUpdate]);

    return (
        <div className="memory-container">
            <div className="memory-header">
                <h2 className="spartan paragraph h7">Jogo da Memória - Planetas</h2>
                <p className="spartan paragraph h2 memory-score">Pontuação: {score}</p>
            </div>
            <div className="memory-grid">
                {cards.map((card) => (
                    <Card
                        key={card.uniqueId}
                        isFlipped={flippedCards.includes(card.uniqueId)}
                        isMatched={matchedCards.includes(card.uniqueId)}
                        onClick={() => handleCardClick(card)}
                        imagePath={card.path}
                    />
                ))}
            </div>
        </div>
    );
};

export default MemoryGame;