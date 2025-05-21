import React, { useState } from 'react';
import { useSpeech } from '../utils/speechUtils';
import { useAnalytics } from '../hooks/useAnalytics';
import { getUserId, getUserUniqueString } from '../utils/userIdentifier';

const GenericEnglishStudyCard = ({ imagePath, textToSpeak, language }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const speech = useSpeech(textToSpeak, language);
    const analytics = useAnalytics(getUserId(), getUserUniqueString());

    const handleClick = () => {
        analytics.trackUserInteraction({
            type: 'generic_english_study_card_selection',
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
        <button onClick={handleClick} className='ge-button-card'>
            <img className="ge-image" src={imagePath} alt={textToSpeak} />
            {isSpeaking && (
                <div className="speaking-indicator">
                    🔊
                </div>
            )}
        </button>
    );
};

export default GenericEnglishStudyCard;
