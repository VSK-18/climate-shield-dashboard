import React from 'react';
import { BiBot, BiBulb, BiTrendingUp, BiWind, BiCloudRain, BiErrorCircle } from 'react-icons/bi';
import './AIInsightsPanel.css';

const AIInsightsPanel = () => {
    const insights = [
        {
            type: 'hazard',
            text: 'Heavy rainfall with risk of local flooding expected in 3 hours. Seek high ground if in low-lying areas.',
            confidence: 'High (89%)',
            icon: <BiErrorCircle />,
            label: 'PREDICTION'
        },
        {
            type: 'advice',
            text: 'Heat stress risk is high for tomorrow afternoon. Schedule outdoor labor before 10 AM.',
            confidence: 'Logical Inference',
            icon: <BiBulb />,
            label: 'GUIDANCE'
        },
        {
            type: 'trend',
            text: 'Wind speeds projected to increase rapidly. Regional safety protocol activation recommended.',
            confidence: 'Medium (75%)',
            icon: <BiTrendingUp />,
            label: 'TREND ANALYSIS'
        }
    ];

    return (
        <div className="ai-insights-dashboard">
            <div className="assistant-header">
                <div className="ai-brand">
                    <div className="ai-icon-circle">
                        <BiBot />
                    </div>
                    <div className="ai-title">
                        <h3>Intelligence Insights</h3>
                        <span className="ai-subtitle">POWERED BY CLIMATEAI ENGINE</span>
                    </div>
                </div>
                <div className="ai-status">
                    <span className="dot pulse"></span> PROCESSING
                </div>
            </div>

            <div className="insights-vertical-list">
                {insights.map((item, index) => (
                    <div key={index} className={`insight-card ${item.type}`}>
                        <div className="insight-header">
                            <span className="insight-tag">{item.label}</span>
                            <span className="confidence-pill">{item.confidence}</span>
                        </div>
                        <div className="insight-body">
                            <div className="insight-icon-sm">{item.icon}</div>
                            <p className="insight-text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIInsightsPanel;
