import React from 'react';
import { BiErrorCircle, BiTime } from 'react-icons/bi';
import './AlertFeed.css';

const AlertFeed = ({ onAlertClick }) => {
    const alerts = [
        {
            id: 1,
            type: 'critical',
            message: 'Flash Flood Warning in Zone A (Mumbai)',
            time: '10 min ago',
            coordinates: [19.0760, 72.8777]
        },
        {
            id: 2,
            type: 'warning',
            message: 'High Wind Advisory - 45km/h (Delhi)',
            time: '1 hour ago',
            coordinates: [28.7041, 77.1025]
        },
        {
            id: 3,
            type: 'info',
            message: 'Heavy Rain Forecast for Evening',
            time: '3 hours ago',
            coordinates: [12.9716, 77.5946] // Bangalore
        },
    ];

    const getAlertIcon = (type) => {
        switch (type) {
            case 'critical': return <BiErrorCircle size={24} />;
            case 'warning': return <BiErrorCircle size={24} />;
            default: return <BiErrorCircle size={24} />;
        }
    };

    return (
        <div className="alert-feed">
            <div className="feed-header">
                <h3>Live Alerts</h3>
                <span className="live-badge">Live</span>
            </div>

            <div className="alert-list">
                {alerts.map(alert => (
                    <div
                        key={alert.id}
                        className={`alert-card ${alert.type} clickable`}
                        onClick={() => onAlertClick && onAlertClick(alert.coordinates)}
                        title="Click to locate on map"
                    >
                        <div className="alert-icon">
                            {getAlertIcon(alert.type)}
                        </div>
                        <div className="alert-content">
                            <p className="alert-msg">{alert.message}</p>
                            <span className="alert-time">
                                <BiTime size={14} /> {alert.time}
                            </span>
                        </div>
                        {alert.type === 'critical' && (
                            <button className="action-btn">Action</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlertFeed;
