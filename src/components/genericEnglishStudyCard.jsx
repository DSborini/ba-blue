import React, { useState } from 'react';
import { useSpeech } from '../utils/speechUtils';

const GenericEnglishStudyCard = ({ imagePath, textToSpeak, language }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const speech = useSpeech(textToSpeak, language);

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
