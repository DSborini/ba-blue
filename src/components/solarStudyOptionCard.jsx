import React, { useState } from 'react';
import { useSpeech } from '../utils/speechUtils';

const SolarStudyOptionCard = ({ imagePath, text }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const speech = useSpeech(text, 'pt-BR'); // Fixado em pt-BR para este componente

    const handleClick = () => {
        if (isSpeaking) {
            speech.stop();
            setIsSpeaking(false);
        } else {
            speech.speak(
                () => setIsSpeaking(true),
                () => setIsSpeaking(false),
                () => setIsSpeaking(false)
            );
        }
    };

    return (
        <button 
            className='ss-button-card'
            onClick={handleClick}
            aria-label={isSpeaking ? 'Parar de falar' : 'Ouvir texto'}
        >
            <img 
                className="ss-image" 
                src={imagePath} 
                alt={text}
            />
            {isSpeaking && (
                <div className="speaking-indicator">
                    🔊
                </div>
            )}
        </button>
    );
};

export default SolarStudyOptionCard;
