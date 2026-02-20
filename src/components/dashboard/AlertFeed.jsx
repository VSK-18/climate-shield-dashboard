import React from 'react';
import { BiErrorCircle, BiTime, BiCheckShield } from 'react-icons/bi';
import './AlertFeed.css';

const AlertFeed = ({ onAlertClick }) => {
    const alerts = [
        {
            id: 1,
            type: 'critical',
            title: 'Heatwave Warning – Pune',
            severity: 'High Severity',
            recommendation: 'Avoid outdoor activity between 12pm–4pm. Stay hydrated.',
            time: '10 min ago',
            coordinates: [18.5204, 73.8567]
        },
        {
            id: 2,
            type: 'warning',
            title: 'Flood Alert – Mula-Mutha River',
            severity: 'Medium Severity',
            recommendation: 'Low-lying areas should prepare for potential water rise.',
            time: '1 hour ago',
            coordinates: [18.5580, 73.9130]
        },
        {
            id: 3,
            type: 'info',
            title: 'Air Quality Index Update',
            severity: 'Low Risk',
            recommendation: 'AQI is moderate. Sensitive groups should wear masks.',
            time: '3 hours ago',
            coordinates: [18.5308, 73.8475]
        },
    ];

    return (
        <div className="alert-feed">
            <div className="feed-header">
                <h3>Disaster Alert Panel</h3>
                <span className="live-badge">Live System</span>
            </div>

            <div className="alert-list">
                {alerts.map(alert => (
                    <div
                        key={alert.id}
                        className={`alert-item ${alert.type}`}
                        onClick={() => onAlertClick && onAlertClick(alert.coordinates)}
                    >
                        <div className="alert-top">
                            <span className="severity-tag">{alert.severity}</span>
                            <span className="alert-timestamp">
                                <BiTime /> {alert.time}
                            </span>
                        </div>

                        <h4 className="alert-title">{alert.title}</h4>

                        <div className="alert-recommendation">
                            <BiCheckShield style={{ marginRight: '8px' }} />
                            {alert.recommendation}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlertFeed;
