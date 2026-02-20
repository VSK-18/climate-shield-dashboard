import React from 'react';
import { BiErrorCircle, BiCloudRain, BiCheckCircle, BiInfoCircle, BiShieldQuarter } from 'react-icons/bi';
import './HeroRiskOverview.css';

const HeroRiskOverview = () => {
    // Mock data for hackathon presentation
    const riskLevel = 'ALERT'; // SAFE, ALERT, EMERGENCY
    const riskScore = 87;
    const currentTemp = 28;
    const weatherDesc = 'Heavy Rain Expected';
    const alertTitle = 'Flood Advisory: Regional Districts';

    const getStatusConfig = (level) => {
        switch (level) {
            case 'SAFE':
                return {
                    color: 'var(--color-safe)',
                    icon: <BiCheckCircle />,
                    badge: '🟢 SAFE',
                    desc: 'No immediate threats detected.'
                };
            case 'ALERT':
                return {
                    color: 'var(--color-warning)',
                    icon: <BiInfoCircle />,
                    badge: '🟡 WARNING',
                    desc: 'Elevated risks detected.'
                };
            case 'EMERGENCY':
                return {
                    color: 'var(--color-danger)',
                    icon: <BiErrorCircle />,
                    badge: '🔴 EMERGENCY',
                    desc: 'Immediate action required.'
                };
            default: return {};
        }
    };

    const config = getStatusConfig(riskLevel);

    return (
        <section className="hero-risk-dashboard">
            <div className="hero-main-card" style={{ borderTop: `4px solid ${config.color}` }}>
                <div className="hero-header">
                    <div className="brand-badge">
                        <BiShieldQuarter />
                        <span>ClimateAI Intelligence</span>
                    </div>
                    <div className="live-clock">
                        <span className="dot pulse"></span> LIVE MONITORING
                    </div>
                </div>

                <div className="hero-content-grid">
                    <div className="risk-summary">
                        <h1 className="hero-title">ClimateAI — AI-Powered Disaster Preparedness Dashboard</h1>
                        <p className="hero-subtitle">Predict Early. Prepare Better. Protect Lives.</p>

                        <div className={`status-banner-badge ${riskLevel}`}>
                            <span className="badge-text">{config.badge}</span>
                            <span className="badge-desc">{config.desc}</span>
                        </div>
                    </div>

                    <div className="risk-metrics">
                        <div className="metric-card confidence">
                            <div className="circular-progress" style={{ '--progress': riskScore }}>
                                <div className="progress-value">
                                    <span className="number">{riskScore}<span>%</span></span>
                                </div>
                            </div>
                            <div className="metric-info">
                                <h3>Risk Confidence</h3>
                                <p>Predictive Modeling Accuracy</p>
                            </div>
                        </div>

                        <div className="active-threat">
                            <span className="threat-label">PRIMARY THREAT</span>
                            <h2 className="threat-title">{alertTitle}</h2>
                            <div className="threat-meta">
                                <BiCloudRain className="floating-icon" />
                                <span>{weatherDesc} ({currentTemp}°C)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroRiskOverview;
