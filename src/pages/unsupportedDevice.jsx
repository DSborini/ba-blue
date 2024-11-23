import React from 'react';

const UnsupportedDevice = () => {
    return (
        <div className="ud-container">
            <h1 className="ud-h1">Dispositivo Não Suportado</h1>
            <p className="ud-p">Esta aplicação é otimizada para dispositivos móveis. Por favor, acesse em um dispositivo móvel ou use a orientação vertical.</p>
        </div>
    );
};

export default UnsupportedDevice;