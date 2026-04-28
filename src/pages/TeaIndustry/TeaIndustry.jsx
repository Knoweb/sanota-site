import React from 'react';
import { Link } from 'react-router-dom';
import './TeaIndustry.css';

// Using an existing image as placeholder
import heroImage from '../../assets/industries-bg.png';

const TeaIndustry = () => {
    return (
        <div className="tea-industry-page">
            {/* 1. HERO SECTION */}
            <section className="tea-hero-section">
                <div className="container tea-hero-container">
                    <div className="tea-hero-content">
                        <p className="tea-hero-tagline">INDUSTRY FOCUS</p>
                        <h1 className="tea-hero-title">Engineering Solutions for the Tea Industry</h1>
                        <h2 className="tea-hero-subtitle">Improving Productivity, Quality, and Operational Reliability</h2>
                        <p className="tea-hero-description">
                            Sanota develops engineering, automation, and digital solutions designed to address operational challenges commonly faced in the tea industry, supporting consistency, efficiency, and long-term performance.
                        </p>
                        <div className="tea-hero-actions">
                            <Link to="/contact" className="btn btn-primary tea-btn-primary">
                                Discuss Your Industry Requirement
                            </Link>
                            <Link to="/solutions" className="btn btn-secondary-outline tea-btn-secondary">
                                Explore Related Solutions
                            </Link>
                        </div>
                    </div>
                    <div className="tea-hero-visual">
                        <div className="tea-visual-wrapper">
                            <img src={heroImage} alt="Tea Industry Engineering" className="tea-hero-img" />
                            {/* Subtle technical graphic overlay */}
                            <div className="tea-tech-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeaIndustry;
