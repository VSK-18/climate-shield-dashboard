import React from 'react';
import { BiCloudRain, BiSun, BiCloud, BiCloudLightning } from 'react-icons/bi';
import './ForecastSection.css';

const ForecastSection = () => {
    // Mock Data
    const hourlyForecast = [
        { time: 'Now', temp: '28°', icon: <BiCloudRain />, chance: '90%' },
        { time: '14:00', temp: '29°', icon: <BiCloudRain />, chance: '85%' },
        { time: '15:00', temp: '28°', icon: <BiCloudLightning />, chance: '95%' },
        { time: '16:00', temp: '27°', icon: <BiCloudLightning />, chance: '90%' },
        { time: '17:00', temp: '27°', icon: <BiCloudRain />, chance: '80%' },
        { time: '18:00', temp: '26°', icon: <BiCloud />, chance: '40%' },
        { time: '19:00', temp: '25°', icon: <BiCloud />, chance: '20%' },
        { time: '20:00', temp: '24°', icon: <BiCloud />, chance: '10%' },
    ];

    const dailyForecast = [
        { day: 'Today', max: '29°', min: '24°', icon: <BiCloudRain />, condition: 'Heavy Rain' },
        { day: 'Tomorrow', max: '30°', min: '25°', icon: <BiCloudLightning />, condition: 'Thunderstorm' },
        { day: 'Wed', max: '31°', min: '25°', icon: <BiSun />, condition: 'Partly Cloudy' },
        { day: 'Thu', max: '32°', min: '26°', icon: <BiSun />, condition: 'Sunny' },
        { day: 'Fri', max: '31°', min: '25°', icon: <BiCloud />, condition: 'Cloudy' },
        { day: 'Sat', max: '30°', min: '24°', icon: <BiCloud />, condition: 'Overcast' },
        { day: 'Sun', max: '29°', min: '23°', icon: <BiCloudRain />, condition: 'Showers' },
    ];

    return (
        <div className="forecast-section">
            <h3>Weather Forecast</h3>

            <div className="hourly-forecast">
                <h4 className="forecast-group-title">Hourly Trend</h4>
                <div className="hourly-scroller">
                    {hourlyForecast.map((item, index) => (
                        <div key={index} className="hourly-item">
                            <span className="time">{item.time}</span>
                            <div className="icon">{item.icon}</div>
                            <span className="temp">{item.temp}</span>
                            <span className="chance">💧{item.chance}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="daily-forecast">
                <h4 className="forecast-group-title">7-Day Outlook</h4>
                <div className="daily-list">
                    {dailyForecast.map((item, index) => (
                        <div key={index} className="daily-item">
                            <span className="day">{item.day}</span>
                            <div className="condition-group">
                                <span className="icon">{item.icon}</span>
                                <span className="condition">{item.condition}</span>
                            </div>
                            <div className="temp-range">
                                <span className="max">{item.max}</span>
                                <span className="min">{item.min}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ForecastSection;
