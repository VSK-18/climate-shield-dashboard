import React from 'react';

const Predictions = () => {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h1>AI Predictions</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                Advanced forecasting models predicting weather patterns for the next 15 days.
            </p>

            <div style={{
                background: 'var(--color-bg-card)',
                padding: '2rem',
                borderRadius: 'var(--border-radius-lg)',
                textAlign: 'center',
                border: '1px solid rgba(0,0,0,0.05)'
            }}>
                <h2>Coming Soon</h2>
                <p>Our AI models are currently training on the latest satellite data.</p>
            </div>
        </div>
    );
};

export default Predictions;
