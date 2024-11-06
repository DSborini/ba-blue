import React from 'react';
import SampleHeader from '../components/sampleHeader';
import numbersOptions from '../resources/numbersOptions';

function Numbers() {
    const keyboardLayout = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
        [0]
    ];

    return (
        <div>
            <SampleHeader />
            <p className="spartan h1 n-tile">
                    NÚMEROS
            </p>
            <div className="n-numeric-keyboard-div">
                {keyboardLayout.map((row, rowIndex) => (
                    <div className="n-keyboard-row" key={rowIndex}>
                        {row.map((value) => {
                            const option = numbersOptions.find(opt => opt.value === value);
                            return (
                                <button className="n-keyboard-button" key={value} style={{ backgroundColor: option.backgroundColor }}>
                                    <h2 className="n-number">{option.value}</h2>
                                </button>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Numbers;
