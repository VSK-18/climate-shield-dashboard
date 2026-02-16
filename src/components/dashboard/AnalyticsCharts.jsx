import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './AnalyticsCharts.css';

const data = [
    { name: 'Mon', temp: 24, rain: 20 },
    { name: 'Tue', temp: 26, rain: 10 },
    { name: 'Wed', temp: 29, rain: 5 },
    { name: 'Thu', temp: 32, rain: 0 },
    { name: 'Fri', temp: 30, rain: 40 },
    { name: 'Sat', temp: 28, rain: 60 },
    { name: 'Sun', temp: 27, rain: 30 },
];

const AnalyticsCharts = () => {
    return (
        <div className="analytics-container">
            <h3>Weekly Trends</h3>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                        <XAxis dataKey="name" fontSize={12} stroke="#888" />
                        <YAxis fontSize={12} stroke="#888" />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                        />
                        <Line type="monotone" dataKey="temp" stroke="var(--color-alert-warning)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="rain" stroke="var(--color-secondary)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <p className="chart-caption">Temperature (Yellow) vs Rainfall (Teal) trends.</p>
        </div>
    );
};

export default AnalyticsCharts;
