import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
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

// Helper component to change map view programmatically
const MapController = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom, {
                animate: true,
                duration: 1.5 // Seconds
            });
        }
    }, [center, zoom, map]);
    return null;
};

const DisasterMap = ({ mapCenter, mapZoom }) => {
    const defaultPosition = [20.5937, 78.9629]; // India Center

    const riskZones = [
        { center: [19.0760, 72.8777], radius: 15000, color: 'red', name: 'Mumbai - Flood Risk' },
        { center: [28.7041, 77.1025], radius: 20000, color: 'orange', name: 'Delhi - Heatwave' },
        { center: [12.9716, 77.5946], radius: 10000, color: 'blue', name: 'Bangalore - Heavy Rain' }
    ];

    return (
        <div className="disaster-map-container">
            <div className="map-header">
                <h3>Live Hazard Map</h3>
                <div className="map-legends">
                    <span className="legend-item"><span className="dot red"></span> High Risk</span>
                    <span className="legend-item"><span className="dot orange"></span> Moderate</span>
                </div>
            </div>
            <div className="map-wrapper">
                <MapContainer center={defaultPosition} zoom={5} scrollWheelZoom={false}>
                    <MapController center={mapCenter} zoom={mapZoom} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {riskZones.map((zone, idx) => (
                        <Circle
                            key={idx}
                            center={zone.center}
                            pathOptions={{ color: zone.color, fillColor: zone.color }}
                            radius={zone.radius}
                        >
                            <Popup>{zone.name}</Popup>
                        </Circle>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default DisasterMap;
