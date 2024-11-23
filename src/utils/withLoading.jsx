import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Função para verificar se o componente filho terminou de carregar
      const checkIfComponentIsReady = () => {
        if (document.readyState === 'complete') {
          // Adiciona um pequeno delay para garantir que os estados internos foram atualizados
          setTimeout(() => {
            setIsLoading(false);
          }, 100);
        }
      };

      // Adiciona o listener para o evento load
      window.addEventListener('load', checkIfComponentIsReady);
      
      // Verifica o estado inicial
      checkIfComponentIsReady();

      // Cleanup
      return () => {
        window.removeEventListener('load', checkIfComponentIsReady);
      };
    }, []);

    // Renderiza o componente Loading enquanto estiver carregando
    if (isLoading) {
      return <Loading fullScreen={true} />;
    }

    // Renderiza o componente original quando terminar de carregar
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;