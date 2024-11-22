// src/utils/speechUtils.js
import { useState, useEffect } from 'react';

// Função para obter todas as vozes disponíveis
export const getAvailableVoices = () => {
    return new Promise((resolve) => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length) {
            resolve(voices);
        } else {
            window.speechSynthesis.onvoiceschanged = () => {
                resolve(window.speechSynthesis.getVoices());
            };
        }
    });
};

// Função para selecionar a voz apropriada
export const getVoice = (voices, language) => {
    if (language === 'pt-BR') {
        return voices.find(voice => 
            voice.lang.includes('pt-BR') && 
            voice.name.toLowerCase().includes('google')
        ) || voices.find(voice => 
            voice.lang.includes('pt-BR') && 
            voice.name.toLowerCase().includes('maria')
        );
    }
    if (language === 'en-US') {
        return voices.find(voice => 
            voice.lang.includes('en-US') && 
            voice.name.toLowerCase().includes('google')
        );
    }
    return null;
};

// Hook personalizado para gerenciar o estado de fala
export const useSpeech = (text, language) => {
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
        };

        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;

        return () => {
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, []);

    return {
        speak: (onStart, onEnd, onError) => {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = language;

            const selectedVoice = getVoice(voices, language);
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }

            utterance.onstart = onStart;
            utterance.onend = onEnd;
            utterance.onerror = onError;

            window.speechSynthesis.speak(utterance);
        },
        stop: () => {
            window.speechSynthesis.cancel();
        }
    };
};