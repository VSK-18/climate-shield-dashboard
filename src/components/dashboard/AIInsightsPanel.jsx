import React from 'react';
import { BiBot, BiBulb, BiTrendingUp } from 'react-icons/bi';
import './AIInsightsPanel.css';

const AIInsightsPanel = () => {
    const insights = [
        {
            type: 'prediction',
            text: 'Heavy rainfall accumulation likely to exceed 50mm in the next 3 hours based on cloud density analysis.',
            confidence: 'High (89%)'
        },
        {
            type: 'advice',
            text: 'Ground saturation is high. Avoid low-lying areas near the river bank.',
            confidence: 'Medium (75%)'
        },
        {
            type: 'trend',
            text: 'Temperature expected to drop by 4°C by evening due to incoming cold front.',
            confidence: 'High (92%)'
        }
    ];

    return (
        <div className="ai-insights-panel card">
            <div className="panel-header">
                <div className="title-group">
                    <BiBot className="ai-icon" />
                    <h3>AI Insights & Predictions</h3>
                </div>
                <span className="live-badge">LIVE ANALYSIS</span>
            </div>

            <div className="insights-list">
                {insights.map((item, index) => (
                    <div key={index} className={`insight-item ${item.type}`}>
                        <div className="insight-icon">
                            {item.type === 'prediction' && <BiTrendingUp />}
                            {item.type === 'advice' && <BiBulb />}
                            {item.type === 'trend' && <BiTrendingUp />}
                        </div>
                        <div className="insight-content">
                            <p>{item.text}</p>
                            <span className="confidence-score">Confidence: {item.confidence}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIInsightsPanel;
