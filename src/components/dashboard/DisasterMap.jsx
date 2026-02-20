import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import { BiPlus, BiMinus } from 'react-icons/bi';
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
        { center: [18.5204, 73.8567], radius: 5000, color: 'var(--color-danger)', name: 'Pune City - Heatwave High Risk' },
        { center: [18.5580, 73.9130], radius: 3000, color: 'var(--color-warning)', name: 'Mula-Mutha River - Flood Warning' },
        { center: [18.5308, 73.8475], radius: 4000, color: 'var(--color-secondary)', name: 'Shivajinagar - Heavy Rain Zone' }
    ];

    return (
        <div className="disaster-map-container">
            <div className="map-header">
                <h3>Regional Risk Matrix</h3>
                <div className="map-legends">
                    <span className="legend-item"><span className="dot red"></span> Emergency</span>
                    <span className="legend-item"><span className="dot orange"></span> Alert</span>
                    <span className="legend-item"><span className="dot blue"></span> Advisory</span>
                </div>
            </div>

            <div className="map-wrapper">
                <MapContainer center={defaultPosition} zoom={12} scrollWheelZoom={false} zoomControl={false}>
                    <MapController center={mapCenter} zoom={mapZoom} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    {riskZones.map((zone, idx) => (
                        <Circle
                            key={idx}
                            center={zone.center}
                            pathOptions={{ color: zone.color, fillColor: zone.color, fillOpacity: 0.3 }}
                            radius={zone.radius}
                        >
                            <Popup>{zone.name}</Popup>
                        </Circle>
                    ))}
                </MapContainer>

                <div className="static-zoom-controls">
                    <button className="zoom-btn"><BiPlus /></button>
                    <button className="zoom-btn"><BiMinus /></button>
                </div>
            </div>
            <p className="chart-caption">Interactive risk visualization showing color-coded hazard intensity across the region.</p>
        </div>
    );
};

export default DisasterMap;
