import React from 'react';

const HistoryPage = () => {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h1>Historical Data</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                Archive of past weather events and disaster reports.
            </p>

            <div style={{ background: 'var(--color-bg-card)', padding: '2rem', borderRadius: 'var(--border-radius-lg)' }}>
                <p>No historical  djvdhvd records found for this region in the last 30 days.</p>
            </div>
        </div>
    );
};

export default HistoryPage;
