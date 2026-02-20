import React from 'react';
import { BiWater, BiWind, BiCloudRain, BiThermometer } from 'react-icons/bi';
import './LiveWeatherStats.css';

const LiveWeatherStats = () => {
    const stats = [
        { label: 'Temperature', value: '28°C', icon: <BiThermometer />, color: '#EF4444' },
        { label: 'Humidity', value: '82%', icon: <BiWater />, color: '#3B82F6' },
        { label: 'Wind Speed', value: '18 km/h', icon: <BiWind />, color: '#10B981' },
        { label: 'Rain Probability', value: '90%', icon: <BiCloudRain />, color: '#6366F1' },
    ];

    return (
        <div className="live-weather-grid">
            {stats.map((stat, index) => (
                <div className="weather-stat-card" key={index}>
                    <div className="stat-icon-wrapper" style={{ color: stat.color, backgroundColor: `${stat.color}15` }}>
                        {stat.icon}
                    </div>
                    <div className="stat-info">
                        <span className="stat-label">{stat.label}</span>
                        <span className="stat-value">{stat.value}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LiveWeatherStats;
