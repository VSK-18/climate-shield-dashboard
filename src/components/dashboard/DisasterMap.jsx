import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { BiMapAlt, BiTargetLock, BiLayer } from 'react-icons/bi';
import './DisasterMap.css';

const DisasterMap = () => {
    // Map configurations for dark-mode high-fidelity
    const position = [20.5937, 78.9629]; // Center of India

    const riskZones = [
        { id: 1, center: [19.0760, 72.8777], radius: 20000, color: 'var(--color-danger)', label: 'CRITICAL: High Flood Risk (Mumbai/Coast)' },
        { id: 2, center: [28.6139, 77.2090], radius: 15000, color: 'var(--color-warning)', label: 'WARNING: Severe Heat Wave (Delhi NCR)' },
        { id: 3, center: [13.0827, 80.2707], radius: 10000, color: 'var(--color-brand)', label: 'ADVISORY: Coastal Surge (Chennai)' }
    ];

    return (
        <section className="disaster-map-section glass-card">
            <div className="map-panel-header">
                <div className="matrix-title">
                    <BiMapAlt className="header-icon" />
                    <div className="text-group">
                        <h3>Regional Hazard Matrix</h3>
                        <span className="live-indicator"><span className="dot pulse"></span> LIVE DATA FEED</span>
                    </div>
                </div>

                <div className="map-controls-premium">
                    <button className="control-btn-icon"><BiTargetLock /></button>
                    <button className="control-btn-icon"><BiLayer /></button>
                </div>
            </div>

            <div className="map-wrapper-premium">
                <MapContainer center={position} zoom={5} style={{ height: '100%', width: '100%', borderRadius: 'var(--border-radius-md)' }}>
                    <TileLayer
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
                    />
                    {riskZones.map(zone => (
                        <Circle
                            key={zone.id}
                            center={zone.center}
                            radius={zone.radius}
                            pathOptions={{
                                fillColor: zone.color,
                                color: zone.color,
                                fillOpacity: 0.2,
                                weight: 2
                            }}
                        >
                            <Popup>
                                <div className="map-popup-dark">
                                    <strong>{zone.label}</strong>
                                    <p>Probability: 87% | Severity: High</p>
                                </div>
                            </Popup>
                        </Circle>
                    ))}
                </MapContainer>

                <div className="map-legend-premium">
                    <div className="legend-item"><span className="dot" style={{ background: 'var(--color-danger)' }}></span> <span>Critical</span></div>
                    <div className="legend-item"><span className="dot" style={{ background: 'var(--color-warning)' }}></span> <span>Warning</span></div>
                    <div className="legend-item"><span className="dot" style={{ background: 'var(--color-brand)' }}></span> <span>Advisory</span></div>
                </div>
            </div>
        </section>
    );
};

export default DisasterMap;
