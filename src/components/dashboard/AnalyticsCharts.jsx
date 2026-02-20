import React from 'react';
import {
    LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
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
            <h3>Climate Data Visualization</h3>

            <div className="charts-grid">
                <div className="chart-item">
                    <h4>Temperature Trend (°C)</h4>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" vertical={false} />
                                <XAxis dataKey="name" fontSize={10} stroke="#888" axisLine={false} tickLine={false} />
                                <YAxis fontSize={10} stroke="#888" axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'var(--color-bg-card)',
                                        borderRadius: '8px',
                                        border: 'none',
                                        boxShadow: 'var(--shadow-md)',
                                        fontSize: '12px'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="temp"
                                    stroke="var(--color-warning)"
                                    strokeWidth={4}
                                    dot={{ r: 4, fill: 'var(--color-warning)' }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="chart-caption">Weekly temperature fluctuations showing a peak on Thursday followed by cooling.</p>
                </div>

                <div className="chart-item">
                    <h4>Rain Probability (%)</h4>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={200}>
                            <AreaChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" vertical={false} />
                                <XAxis dataKey="name" fontSize={10} stroke="#888" axisLine={false} tickLine={false} />
                                <YAxis fontSize={10} stroke="#888" axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'var(--color-bg-card)',
                                        borderRadius: '8px',
                                        border: 'none',
                                        boxShadow: 'var(--shadow-md)',
                                        fontSize: '12px'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="rain"
                                    stroke="var(--color-secondary)"
                                    fill="var(--color-secondary)"
                                    fillOpacity={0.2}
                                    strokeWidth={3}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="chart-caption">Rain probability significantly increases during the weekend (Fri-Sun).</p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsCharts;
