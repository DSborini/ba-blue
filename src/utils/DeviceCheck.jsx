import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UnsupportedDevice from '../pages/unsupportedDevice';

const DeviceCheck = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isPortrait, setIsPortrait] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const devMode = true;

    useEffect(() => {
        const handleOrientation = () => {
            // Usa screen.width e screen.height para determinar a orientação
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const currentIsPortrait = screenHeight > screenWidth;
            
            setIsPortrait(currentIsPortrait);

            // Redireciona para a página inicial se voltar para o mobile e estiver na página de dispositivo não suportado
            if (currentIsPortrait && isMobile && location.pathname === '/unsupported') {
                navigate('/');
            }
        };

        const checkMobile = () => {
            // Verifica se é dispositivo móvel usando uma combinação de verificações
            const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
            const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.screen.width < 768;

            setIsMobile(isMobileDevice && hasTouch && isSmallScreen);
        };

        // Configuração inicial
        checkMobile();
        handleOrientation();

        // Adiciona listeners para mudanças de orientação
        window.addEventListener('resize', handleOrientation);
        window.addEventListener('orientationchange', handleOrientation);

        // Adiciona MutationObserver para detectar mudanças na viewport
        const viewportObserver = new MutationObserver(handleOrientation);
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewportObserver.observe(viewport, {
                attributes: true,
                attributeFilter: ['content']
            });
        }

        return () => {
            window.removeEventListener('resize', handleOrientation);
            window.removeEventListener('orientationchange', handleOrientation);
            viewportObserver.disconnect();
        };
    }, [isMobile, navigate, location.pathname]);

    // Função para verificar se o dispositivo está em modo desktop
    const isDesktopMode = () => {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        return screenWidth > screenHeight; // Considera modo desktop se a largura for maior que a altura
    };

    // Mostra a página de dispositivo não suportado se:
    // 1. Não é um dispositivo móvel OU
    // 2. É um dispositivo móvel mas está em modo paisagem
    if ((!isMobile || !isPortrait || isDesktopMode()) && !devMode) {
        return <UnsupportedDevice />;
    }

    return <>{children}</>;
};

export default DeviceCheck;