import React from 'react';
import { BiBot, BiBulb, BiTrendingUp, BiWind, BiCloudRain } from 'react-icons/bi';
import './AIInsightsPanel.css';

const AIInsightsPanel = () => {
    const insights = [
        {
            type: 'prediction',
            text: 'Heavy rainfall expected in 3 hours based on current cloud formation.',
            confidence: 'High (89%)',
            icon: <BiCloudRain />
        },
        {
            type: 'advice',
            text: 'Avoid outdoor activity between 12pm–4pm due to high heat index.',
            confidence: 'System Logic',
            icon: <BiBulb />
        },
        {
            type: 'trend',
            text: 'Wind speeds increasing rapidly in the eastern sector. Secure loose items.',
            confidence: 'Medium (75%)',
            icon: <BiWind />
        }
    ];

    return (
        <div className="ai-insights-panel">
            <div className="panel-header">
                <div className="title-group">
                    <BiBot className="ai-icon" />
                    <h3>AI Recommendations</h3>
                </div>
                <span className="live-badge">SMART ASSISTANT</span>
            </div>

            <div className="insights-list">
                {insights.map((item, index) => (
                    <div key={index} className={`insight-item ${item.type}`}>
                        <div className="insight-icon">
                            {item.icon}
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
