import React from 'react';
import { useNavigate } from 'react-router-dom';
import SampleHeader from '../components/sampleHeader';
import MemoryGame from '../components/memoryGame';
import userInfoState from '../resources/userInfoState';

const Memory = () => {
  const navigate = useNavigate();
  const setUserLastMemoryGameScore = userInfoState((state) => state.setUserLastMemoryGameScore);
  const userScore = userInfoState((state) => state.userLastMemoryGameScore);

  // Função que será passada para o MemoryGame para atualizar a pontuação
  const updateScore = (score) => {
    setUserLastMemoryGameScore(score);
  };

  // Removido estado e variáveis não utilizadas do quiz
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const currentQuestion = firstTypeQuizOptions[0].questions[currentQuestionIndex];

  return (
    <div className="memory-page">
      <div className="memory-page-header">
        <SampleHeader />
      </div>
      <div className="memory-page-content">
        <MemoryGame onScoreUpdate={updateScore} />
      </div>
    </div>
  );
};

export default Memory;