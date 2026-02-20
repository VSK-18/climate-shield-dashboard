import React from 'react';
import { BiErrorCircle, BiCloudRain, BiCheckCircle, BiInfoCircle, BiShieldQuarter } from 'react-icons/bi';
import './HeroRiskOverview.css';

const HeroRiskOverview = () => {
    // Mock data for hackathon presentation
    const riskLevel = 'ALERT'; // SAFE, ALERT, EMERGENCY
    const riskScore = 68;
    const currentTemp = 28;
    const weatherDesc = 'Heavy Rain Expected';
    const alertTitle = 'Flood Advisory: Pune District';

    const getStatusConfig = (level) => {
        switch (level) {
            case 'SAFE':
                return {
                    color: 'var(--color-safe)',
                    icon: <BiCheckCircle />,
                    label: 'SYSTEM STATUS: SAFE',
                    desc: 'No immediate threats detected in your region.'
                };
            case 'ALERT':
                return {
                    color: 'var(--color-warning)',
                    icon: <BiInfoCircle />,
                    label: 'SYSTEM STATUS: ALERT',
                    desc: 'Elevated risks detected. Monitor official channels.'
                };
            case 'EMERGENCY':
                return {
                    color: 'var(--color-danger)',
                    icon: <BiErrorCircle />,
                    label: 'SYSTEM STATUS: EMERGENCY',
                    desc: 'Immediate action required. Follow evacuation orders.'
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
                        <h1 className="hero-title">ClimateAI – Disaster Preparedness Dashboard</h1>
                        <p className="hero-subtitle">Predict early. Prepare better. Protect lives.</p>

                        <div className={`status-banner ${riskLevel}`}>
                            <div className="status-icon">{config.icon}</div>
                            <div className="status-text">
                                <span className="status-label">{config.label}</span>
                                <span className="status-desc">{config.desc}</span>
                            </div>
                        </div>
                    </div>

                    <div className="risk-metrics">
                        <div className="metric-card confidence">
                            <div className="circular-progress" style={{ '--progress': riskScore }}>
                                <div className="progress-value">
                                    <span className="number">{riskScore}<span>%</span></span>
                                    <span className="label">Confidence</span>
                                </div>
                            </div>
                            <div className="metric-info">
                                <h3>AI Risk Score</h3>
                                <p>Calculated based on GFS & ECMWF models</p>
                            </div>
                        </div>

                        <div className="active-threat">
                            <span className="threat-label">PRIMARY THREAT</span>
                            <h2 className="threat-title">{alertTitle}</h2>
                            <div className="threat-meta">
                                <BiCloudRain />
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
