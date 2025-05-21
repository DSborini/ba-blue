// src/components/GenericMySpaceOptionCard.jsx
import React, { useState } from 'react';
import { useSpeech } from '../utils/speechUtils';
import { useAnalytics } from '../hooks/useAnalytics';
import { getUserId, getUserUniqueString } from '../utils/userIdentifier';

const GenericMySpaceOptionCard = ({ imagePath, textToSpeak }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const speech = useSpeech(textToSpeak, 'pt-BR');
    const analytics = useAnalytics(getUserId(), getUserUniqueString());

    const handleClick = () => {
        analytics.trackUserInteraction({
            type: 'generic_my_space_option_selection',
            action: 'select_option',
            selectedOption: textToSpeak
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
        <button onClick={handleClick} className='gg-button-card'>
            <img className="gg-image" src={imagePath} alt={textToSpeak} />
            {isSpeaking && (
                <div className="speaking-indicator">
                    🔊
                </div>
            )}
        </button>
    );
};

export default GenericMySpaceOptionCard;