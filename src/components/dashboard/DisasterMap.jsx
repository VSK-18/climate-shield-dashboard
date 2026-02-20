import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import { BiPlus, BiMinus, BiMapAlt, BiLayerPlus } from 'react-icons/bi';
import 'leaflet/dist/leaflet.css';
import './DisasterMap.css';

// Fix for default Leaflet icon not showing
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapController = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom, {
                animate: true,
                duration: 1.5
            });
        }
    }, [center, zoom, map]);
    return null;
};

const DisasterMap = ({ mapCenter, mapZoom }) => {
    const defaultPosition = [18.5204, 73.8567]; // Pune Center

    const riskZones = [
        { center: [18.5204, 73.8567], radius: 4000, color: 'var(--color-danger)', name: 'Metropolitan Area - Extreme Heat Risk' },
        { center: [18.5580, 73.9130], radius: 2500, color: 'var(--color-warning)', name: 'River Basin - Flood Advisory' },
        { center: [18.5308, 73.8475], radius: 3500, color: 'var(--color-secondary)', name: 'Industrial Belt - Heavy Rainfall Zone' }
    ];

    return (
        <div className="disaster-map-dashboard">
            <div className="section-header">
                <BiMapAlt className="header-icon" />
                <div className="title-group">
                    <h3>Regional Hazard Matrix</h3>
                    <span className="subtitle">Real-time geospatial risk modeling</span>
                </div>
            </div>

            <div className="map-interface">
                <div className="map-view-wrapper">
                    <MapContainer center={defaultPosition} zoom={12} scrollWheelZoom={false} zoomControl={false}>
                        <MapController center={mapCenter} zoom={mapZoom} />
                        <TileLayer
                            attribution='&copy; OpenStreetMap'
                            url="https://{s}.tile.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        />
                        {riskZones.map((zone, idx) => (
                            <Circle
                                key={idx}
                                center={zone.center}
                                pathOptions={{
                                    color: zone.color,
                                    fillColor: zone.color,
                                    fillOpacity: 0.35,
                                    weight: 2
                                }}
                                radius={zone.radius}
                            >
                                <Popup>
                                    <div className="map-popup">
                                        <strong>{zone.name}</strong>
                                        <p>Risk confidence: High</p>
                                    </div>
                                </Popup>
                            </Circle>
                        ))}
                    </MapContainer>

                    <div className="map-overlay-controls">
                        <button className="ctrl-btn"><BiLayerPlus /></button>
                        <div className="zoom-stack">
                            <button className="ctrl-btn"><BiPlus /></button>
                            <button className="ctrl-btn"><BiMinus /></button>
                        </div>
                    </div>
                </div>

                <div className="map-legend-professional">
                    <div className="legend-title">RISK KEY</div>
                    <div className="legend-items">
                        <div className="legend-item">
                            <span className="key-dot" style={{ background: 'var(--color-danger)' }}></span>
                            <div className="key-info">
                                <span className="key-label">CRITICAL</span>
                                <span className="key-desc">Immediate Emergency</span>
                            </div>
                        </div>
                        <div className="legend-item">
                            <span className="key-dot" style={{ background: 'var(--color-warning)' }}></span>
                            <div className="key-info">
                                <span className="key-label">WARNING</span>
                                <span className="key-desc">Active Alert</span>
                            </div>
                        </div>
                        <div className="legend-item">
                            <span className="key-dot" style={{ background: 'var(--color-secondary)' }}></span>
                            <div className="key-info">
                                <span className="key-label">ADVISORY</span>
                                <span className="key-desc">Increased Vigilance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisasterMap;
