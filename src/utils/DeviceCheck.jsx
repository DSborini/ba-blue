import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UnsupportedDevice from '../pages/unsupportedDevice';

const DeviceCheck = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isPortrait, setIsPortrait] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            const currentIsPortrait = window.innerHeight > window.innerWidth;
            setIsPortrait(currentIsPortrait);

            // Redireciona para a página inicial se voltar para o mobile e estiver na página de dispositivo não suportado
            if (currentIsPortrait && isMobile && location.pathname === '/unsupported') {
                navigate('/'); // Redireciona para a página inicial
            }
        };

        const checkMobile = () => {
            setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
        };

        checkMobile();
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile, navigate, location.pathname]); // Adiciona location.pathname como dependência

    if (!isMobile || !isPortrait) {
        return <UnsupportedDevice />;
    }

    return <>{children}</>;
};

export default DeviceCheck;