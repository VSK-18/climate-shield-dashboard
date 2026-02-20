import React from 'react';
import { BiError, BiCloudRain, BiCheckCircle, BiInfoCircle } from 'react-icons/bi';
import './HeroRiskOverview.css';

const HeroRiskOverview = () => {
    // Mock data
    const riskLevel = 'ALERT'; // SAFE, ALERT, EMERGENCY
    const riskScore = 65;
    const currentTemp = 28;
    const weatherDesc = 'Heavy Rain Expected';

    const getStatusConfig = (level) => {
        switch (level) {
            case 'SAFE':
                return {
                    color: 'var(--color-safe)',
                    colorAlpha: 'rgba(16, 185, 129, 0.2)',
                    icon: <BiCheckCircle />,
                    label: 'Safe'
                };
            case 'ALERT':
                return {
                    color: 'var(--color-warning)',
                    colorAlpha: 'rgba(245, 158, 11, 0.2)',
                    icon: <BiInfoCircle />,
                    label: 'Alert'
                };
            case 'EMERGENCY':
                return {
                    color: 'var(--color-danger)',
                    colorAlpha: 'rgba(239, 68, 68, 0.2)',
                    icon: <BiError />,
                    label: 'Emergency'
                };
            default: return {};
        }
    };

    const config = getStatusConfig(riskLevel);

    return (
        <section className="hero-risk-overview">
            <div className="hero-content">
                <h1 className="hero-title">ClimateAI – Disaster Preparedness Dashboard</h1>
                <p className="hero-subtitle">Predict early. Prepare better. Protect lives.</p>

                <div className="risk-status-indicator" style={{ '--status-color': config.color, '--status-color-alpha': config.colorAlpha }}>
                    <div className={`status-badge ${riskLevel}`}>
                        {config.icon} {config.label}
                    </div>
                    <div className="risk-score-display">
                        <span className="score-value">{riskScore}%</span>
                        <span className="score-label">AI Risk Confidence</span>
                    </div>
                </div>
            </div>

            <div className="hero-visual">
                <div className="weather-icon-container">
                    <BiCloudRain />
                </div>
                <div className="current-weather-summary">
                    <div className="main-temp">{currentTemp}°C</div>
                    <div className="weather-desc">{weatherDesc}</div>
                </div>
            </div>
        </section>
    );
};

export default HeroRiskOverview;
