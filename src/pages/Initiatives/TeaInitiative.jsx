import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './TeaInitiative.css';
import initiativeHero from '../../assets/tea-initiative-hero.png';

const TeaInitiative = () => {
    return (
        <div className="tea-initiative-page">
            {/* 1. HERO SECTION */}
            <section className="initiative-hero">
                <div className="container initiative-hero-grid">
                    <motion.div 
                        className="initiative-hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="initiative-hero-subtitle">Integrated Engineering for Evolving Industries</p>
                        <h1 className="initiative-hero-title">Tea Industry Modernization Initiative</h1>
                        <p className="initiative-hero-desc">
                            Sanota develops engineering and automation solutions addressing key operational challenges 
                            observed in the tea industry, supporting improved consistency, efficiency, and 
                            long-term competitiveness.
                        </p>
                        <div className="initiative-hero-actions">
                            <Link to="/contact" className="btn btn-primary initiative-btn-primary">
                                Discuss This Initiative
                            </Link>
                            <Link to="/solutions" className="btn btn-secondary-outline initiative-btn-secondary">
                                Explore Related Solutions
                            </Link>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="initiative-hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="initiative-visual-container">
                            <img src={initiativeHero} alt="Tea Industry Modernization Concept" className="initiative-hero-img" />
                            <div className="initiative-tech-overlay"></div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* 2. INDUSTRY CONTEXT */}
            <section className="initiative-context-section">
                <div className="container">
                    <div className="initiative-context-grid">
                        <div className="initiative-context-text">
                            <h2 className="initiative-section-title">Industry Context</h2>
                            <p className="initiative-context-lead">
                                Many industries face structural challenges that create a critical need for practical engineering improvements.
                            </p>
                        </div>
                        <div className="initiative-challenges-list">
                            {[
                                "Inefficient processes",
                                "Energy consumption pressures",
                                "Quality variability",
                                "Aging infrastructure",
                                "Limited monitoring capability",
                                "Increasing global competition",
                                "Evolving regulatory expectations"
                            ].map((challenge, index) => (
                                <div className="initiative-challenge-item" key={index}>
                                    <span className="initiative-challenge-dot"></span>
                                    {challenge}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeaInitiative;
