import React from 'react';

const Loading = ({ fullScreen = true }) => {
  return (
    <div className="loading-container">
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
      <p className="loading-text">Carregando...</p>
    </div>
  );
};

export default Loading;