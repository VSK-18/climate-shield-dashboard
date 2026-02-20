import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="sdg-statement">
                    <div className="sdg-icon">13</div>
                    <span>Supporting UN Sustainable Development Goal 13 – Climate Action</span>
                </div>

                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Data Sources</a>
                    <a href="#">Methodology</a>
                    <a href="#">Contact NGO</a>
                </div>

                <p className="copyright">
                    &copy; 2026 ClimateAI – Smart Weather Prediction for Disaster Preparedness. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
