import React from 'react';
import { BiWater, BiWind, BiSun, BiCloudRain, BiTachometer } from 'react-icons/bi';
import './LiveWeatherStats.css';

const LiveWeatherStats = () => {
    const stats = [
        { label: 'Real Feel', value: '32°', icon: <BiSun />, color: '#f59e0b' },
        { label: 'Humidity', value: '82%', icon: <BiWater />, color: '#3b82f6' },
        { label: 'Wind', value: '18 km/h', icon: <BiWind />, color: '#10b981' },
        { label: 'Pressure', value: '1012 hPa', icon: <BiTachometer />, color: '#8b5cf6' },
        { label: 'UV Index', value: 'High (8)', icon: <BiSun />, color: '#ef4444' },
        { label: 'Visibility', value: '12 km', icon: <BiCloudRain />, color: '#64748b' },
    ];

    return (
        <div className="live-weather-grid">
            {stats.map((stat, index) => (
                <div className="weather-stat-card card" key={index}>
                    <div className="stat-icon-wrapper" style={{ color: stat.color, backgroundColor: `${stat.color}15` }}>
                        {stat.icon}
                    </div>
                    <div className="stat-info">
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LiveWeatherStats;
