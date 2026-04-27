import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Initiatives.css';

const Initiatives = () => {
    const { slug } = useParams();

    useEffect(() => {
        if (slug) {
            const element = document.getElementById(slug);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [slug]);

    const initiativeCards = [
        {
            id: "tea-modernization",
            title: "Tea Industry Modernization",
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"></path><path d="M3 21v-3l9-9"></path><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l-3-3Z"></path><path d="M22 22v-3l-5-5-3 3 5 5h3Z"></path></svg>,
            points: ["process automation", "energy-efficient drying", "quality consistency"]
        },
        {
            id: "smart-agriculture",
            title: "Smart Controlled Agriculture",
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a9 9 0 0 1-18 0c0-1.5.1-3 .4-4.4"></path><path d="m13 22-3-3"></path><path d="m15 22-4-4"></path></svg>,
            points: ["greenhouse systems", "fertigation automation", "precision agriculture"]
        },
        {
            id: "smart-industrial",
            title: "Smart Industrial Systems",
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>,
            points: ["IoT monitoring", "workflow visibility", "performance analytics"]
        },
        {
            id: "energy-efficiency",
            title: "Energy & Resource Efficiency",
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
            points: ["monitoring systems", "efficiency engineering", "sustainability solutions"]
        },
        {
            id: "environmental",
            title: "Environmental Systems",
            icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 20.2A9 9 0 1 0 3.8 3.8a9 9 0 1 0 16.4 16.4Z"></path><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M12 12v10"></path><path d="m12 12 4 4"></path><path d="m12 12-4 4"></path></svg>,
            points: ["Waste Water Management", "Emission Control", "Waste to Energy"]
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

            {/* Content Section with Ticker */}
            <section className="initiatives-content">
                <div className="initiatives-ticker-wrapper">
                    <motion.div 
                        className="initiatives-ticker-content"
                    >
                        {[1, 2].map((set) => (
                            <React.Fragment key={set}>
                                {initiativeCards.map((card, index) => (
                                    <div 
                                        key={`${set}-${index}`}
                                        id={card.id}
                                        className={`initiative-page-card ${slug === card.id ? 'highlighted-card' : ''}`}
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
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="initiatives-footer-cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Modernize Your Industry?</h2>
                        <p>Discuss your specific requirements with our engineering team.</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary">DISCUSS YOUR REQUIREMENT</button>
                            <Link to="/solutions" className="btn btn-secondary-outline">EXPLORE ALL SOLUTIONS</Link>
                            <Link to="/industries" className="btn btn-secondary-outline">VIEW ALL INDUSTRIES</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Initiatives;
