import React from 'react';
import { BiError, BiWind, BiWater, BiCloudRain } from 'react-icons/bi';
import './HeroRiskOverview.css';

const HeroRiskOverview = () => {
    // Mock data - replace with real props/context later
    const riskLevel = 'ALERT'; // SAFE, ALERT, EMERGENCY
    const riskScore = 65; // 0-100

    const getRiskColor = (level) => {
        switch (level) {
            case 'SAFE': return 'var(--color-safe)';
            case 'ALERT': return 'var(--color-warning)';
            case 'EMERGENCY': return 'var(--color-danger)';
            default: return 'var(--color-text-muted)';
        }
    };

    return (
        <section className="hero-risk-overview">
            <div className="risk-status-card" style={{ '--risk-color': getRiskColor(riskLevel) }}>
                <div className="status-header">
                    <span className="status-label">Current Status</span>
                    <h2 className="status-value">{riskLevel}</h2>
                </div>

                <div className="risk-gauge">
                    <div className="gauge-circle">
                        <span className="score">{riskScore}</span>
                        <span className="score-label">Risk Score</span>
                    </div>
                    <svg className="gauge-ring" viewBox="0 0 36 36">
                        <path
                            className="ring-bg"
                            d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="ring-value"
                            strokeDasharray={`${riskScore}, 100`}
                            d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                </div>

                <div className="risk-message">
                    <BiError size={24} />
                    <p>Heavy rainfall expected in the next 3 hours. Low-lying areas may flood.</p>
                </div>
            </div>

            <div className="weather-quick-view">
                <div className="current-temp">
                    <div className="weather-icon-large">
                        <BiCloudRain size={64} />
                    </div>
                    <div className="temp-info">
                        <span className="temp-value">28°</span>
                        <span className="temp-desc">Heavy Rain</span>
                    </div>
                </div>

                <div className="weather-details-grid">
                    <div className="detail-item">
                        <BiWind />
                        <span>18 km/h</span>
                        <small>Wind</small>
                    </div>
                    <div className="detail-item">
                        <BiWater />
                        <span>82%</span>
                        <small>Humidity</small>
                    </div>
                    <div className="detail-item">
                        <BiCloudRain />
                        <span>90%</span>
                        <small>Precip</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroRiskOverview;
