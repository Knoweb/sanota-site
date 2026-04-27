import React from 'react';
import { motion } from 'framer-motion';
import './Initiatives.css';

const Initiatives = () => {
    const initiativeCards = [
        {
            title: "Tea Industry Modernization",
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"></path><path d="M3 21v-3l9-9"></path><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l-3-3Z"></path><path d="M22 22v-3l-5-5-3 3 5 5h3Z"></path></svg>,
            points: ["process automation", "energy-efficient drying", "quality consistency"]
        },
        {
            title: "Smart Controlled Agriculture",
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a9 9 0 0 1-18 0c0-1.5.1-3 .4-4.4"></path><path d="m13 22-3-3"></path><path d="m15 22-4-4"></path></svg>,
            points: ["greenhouse systems", "fertigation automation", "precision agriculture"]
        },
        {
            title: "Smart Industrial Systems",
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>,
            points: ["IoT monitoring", "workflow visibility", "performance analytics"]
        },
        {
            title: "Energy & Resource Efficiency",
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
            points: ["monitoring systems", "efficiency engineering", "sustainability solutions"]
        }
    ];

    return (
        <div className="initiatives-page">
            {/* Hero Section */}
            <section className="initiatives-hero">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-content"
                    >
                        <p className="hero-tagline">INDUSTRY SOLUTIONS</p>
                        <h1 className="hero-title">Engineering Initiatives Supporting Industry Development</h1>
                        <p className="hero-description">
                            Sanota actively develops engineering solutions addressing structural challenges observed across selected industries. 
                            Our initiatives combine deep domain expertise with modern automation and digital integration.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="initiatives-content">
                <div className="container">
                    <div className="initiatives-grid-page">
                        {initiativeCards.map((card, index) => (
                            <motion.div 
                                key={index}
                                className="initiative-page-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="card-icon">{card.icon}</div>
                                <div className="card-info">
                                    <h3 className="card-title">{card.title}</h3>
                                    <ul className="card-points">
                                        {card.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="initiatives-footer-cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Modernize Your Industry?</h2>
                        <p>Discuss your specific requirements with our engineering team.</p>
                        <button className="btn btn-primary">DISCUSS YOUR REQUIREMENT</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Initiatives;
