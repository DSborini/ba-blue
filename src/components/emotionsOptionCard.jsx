// src/components/EmotionsOptionCard.jsx
import React, { useState } from 'react';
import { useSpeech } from '../utils/speechUtils';
import { useAnalytics } from '../hooks/useAnalytics';
import { getUserId, getUserUniqueString } from '../utils/userIdentifier';

const EmotionsOptionCard = ({ imagePath, textToSpeak }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const speech = useSpeech(textToSpeak, 'pt-BR');
    const analytics = useAnalytics(getUserId(), getUserUniqueString());

    const handleClick = () => {
        analytics.trackUserInteraction({
            type: 'emotions_option_selection',
            action: 'select_emotion',
            selectedEmotion: textToSpeak
        });

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
        <button onClick={handleClick} className='ee-button-card'>
            <img className="ee-image" src={imagePath} alt={textToSpeak} />
            {isSpeaking && (
                <div className="speaking-indicator">
                    🔊
                </div>
            )}
        </button>
    );
};

export default EmotionsOptionCard;