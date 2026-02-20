import React from 'react';
import { BiWater, BiWind, BiCloudRain, BiSolidThermometer } from 'react-icons/bi';
import './LiveWeatherStats.css';

const LiveWeatherStats = () => {
    const stats = [
        { label: 'Temperature', value: '28°C', icon: <BiSolidThermometer />, color: 'var(--color-danger)' },
        { label: 'Humidity', value: '82%', icon: <BiWater />, color: 'var(--color-secondary)' },
        { label: 'Wind Speed', value: '18 km/h', icon: <BiWind />, color: 'var(--color-safe)' },
        { label: 'Rain Chance', value: '90%', icon: <BiCloudRain />, color: 'var(--color-accent)' },
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
                        <h4 className="stat-value">{stat.value}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LiveWeatherStats;
