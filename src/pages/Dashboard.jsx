import React, { useState } from 'react';
import HeroRiskPanel from '../components/dashboard/HeroRiskPanel';
import WeatherCard from '../components/dashboard/WeatherCard';
import DisasterMap from '../components/dashboard/DisasterMap';
import AlertFeed from '../components/dashboard/AlertFeed';
import SafetyPanel from '../components/dashboard/SafetyPanel';
import AnalyticsCharts from '../components/dashboard/AnalyticsCharts';
import './Dashboard.css';

const Dashboard = () => {
    // Default Map View (India Center)
    const [mapView, setMapView] = useState({ center: [20.5937, 78.9629], zoom: 5 });

    const handleAlertClick = (coordinates) => {
        if (coordinates) {
            setMapView({ center: coordinates, zoom: 10 });
        }
    };

    return (
        <div className="dashboard-container">
            <HeroRiskPanel />

            <div className="dashboard-grid">
                <div className="grid-col-left">
                    <DisasterMap mapCenter={mapView.center} mapZoom={mapView.zoom} />
                    <AnalyticsCharts />
                </div>

                <div className="grid-col-right">
                    <WeatherCard />
                    <AlertFeed onAlertClick={handleAlertClick} />
                    <SafetyPanel />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
