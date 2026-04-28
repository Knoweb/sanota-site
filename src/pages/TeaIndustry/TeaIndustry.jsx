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

            {/* 2. INDUSTRY CONTEXT */}
            <section className="tea-context-section">
                <div className="container">
                    <div className="tea-section-header">
                        <h2 className="tea-section-title">Understanding Operational Challenges in This Industry</h2>
                    </div>
                    <div className="tea-challenges-grid">
                        {[
                            "Process variability and complexity",
                            "Rising energy consumption and costs",
                            "Heavy dependency on manual handling",
                            "Quality consistency challenges across batches",
                            "Aging machinery and infrastructure",
                            "Limited real-time monitoring and data capability",
                            "Need for modernization without operational disruption"
                        ].map((challenge, index) => (
                            <div className="tea-challenge-item" key={index}>
                                <span className="tea-challenge-dot"></span>
                                <p>{challenge}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. HOW SANOTA SUPPORTS THIS INDUSTRY */}
            <section className="tea-support-section">
                <div className="container">
                    <div className="tea-support-layout">
                        <div className="tea-support-content">
                            <h2 className="tea-section-title light">How Sanota Supports This Industry</h2>
                            <p className="tea-support-lead">
                                Sanota applies integrated engineering, automation, and digital technologies to improve operational performance across key areas.
                            </p>
                            <div className="tea-support-grid">
                                {[
                                    { title: "Process Automation", desc: "Streamlining repetitive tasks and reducing human error." },
                                    { title: "Equipment Optimization", desc: "Enhancing the performance of existing tea machinery." },
                                    { title: "Monitoring and Control Systems", desc: "Providing visibility into critical process parameters." },
                                    { title: "Modernization of Existing Systems", desc: "Retrofitting legacy setups with modern controls." },
                                    { title: "Workflow Efficiency Improvement", desc: "Optimizing material flow and labor utilization." },
                                    { title: "Quality Control Improvement", desc: "Implementing sensors and automated checks for consistency." },
                                    { title: "Lifecycle Maintenance Support", desc: "Ensuring long-term reliability through AMC and expert care." }
                                ].map((item, index) => (
                                    <div className="tea-support-card" key={index}>
                                        <h3 className="tea-support-card-title">{item.title}</h3>
                                        <p className="tea-support-card-desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeaIndustry;
