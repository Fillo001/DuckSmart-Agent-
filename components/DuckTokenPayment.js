import React from 'react';

function DuckTokenPayment() {
    const payService = () => {
        alert('Simulated $DUCK token payment completed!');
    };

    return (
        <div>
            <button onClick={payService}>Pay with $DUCK Token</button>
        </div>
    );
}

export default DuckTokenPayment;
