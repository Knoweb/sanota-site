import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Industries.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';

const industries = [
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        image: picture1,
        color: '#2233AD',
        description: 'Operational reliability. Production efficiency. System integration.',
        challenges: ['Legacy machinery integration', 'Unplanned downtime', 'Inconsistent monitoring', 'Lack of system visibility'],
        solutions: ['PLC & SCADA implementations', 'Production line automation', 'Control panel upgrades', 'Industrial monitoring systems'],
        benefits: ['Reduced downtime', 'Improved production control', 'Better decision visibility', 'Long-term system stability'],
    },
    {
        id: 'food-agro',
        name: 'Food & Agro Processing',
        image: picture2,
        color: '#2233AD',
        description: 'Compliance, hygiene, traceability, and operational continuity.',
        challenges: ['Manual process dependency', 'Quality inconsistency', 'Limited process data', 'Maintenance inefficiencies'],
        solutions: ['Automated batching & control', 'Monitoring & reporting systems', 'Retrofit of legacy control', 'Digital production tracking'],
        benefits: ['Improved consistency', 'Reduced operational risk', 'Enhanced traceability', 'Optimized energy use'],
    },
    {
        id: 'logistics',
        name: 'Logistics & Warehousing',
        image: picture3,
        color: '#2233AD',
        description: 'Operational coordination and system reliability at scale.',
        challenges: ['Equipment synchronization issues', 'Manual tracking inefficiencies', 'Limited performance visibility', 'Maintenance coordination gaps'],
        solutions: ['Conveyor automation systems', 'Monitoring & control integration', 'Control panel modernization', 'Operational software integration'],
        benefits: ['Improved system coordination', 'Reduced delays', 'Enhanced monitoring', 'Increased operational reliability'],
    },
    {
        id: 'commercial',
        name: 'Commercial & Institutional',
        image: picture4,
        color: '#2233AD',
        description: 'Operational continuity and infrastructure stability.',
        challenges: ['Aging infrastructure systems', 'Fragmented vendor management', 'Limited monitoring systems', 'Energy inefficiencies'],
        solutions: ['Building automation systems', 'Power monitoring integration', 'Infrastructure system upgrades', 'Retrofit & takeover projects'],
        benefits: ['Better facility control', 'Reduced vendor dependency', 'Improved operational efficiency', 'Long-term maintenance support'],
    },
    {
        id: 'infrastructure',
        name: 'Infrastructure & Utilities',
        image: picture5,
        color: '#2233AD',
        description: 'Reliability, safety, and long-term sustainability.',
        challenges: ['High operational risk environments', 'System redundancy requirements', 'Legacy system integration', 'Monitoring limitations'],
        solutions: ['Control & monitoring systems', 'Retrofit & modernization programs', 'Integrated automation architecture', 'Long-term AMC support'],
        benefits: ['Increased reliability', 'Reduced operational risk', 'Improved lifecycle management', 'Structured long-term support'],
    },
];

const IndustryCard = ({ industry }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="ind-story-card h-full">
            <div className="ind-story-image">
                <img src={industry.image} alt={industry.name} />
                <div className="ind-story-tag" style={{ backgroundColor: industry.color }}>
                    {industry.name}
                </div>
            </div>

            <div className="ind-story-body">
                <p className="ind-story-desc">{industry.description}</p>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="ind-story-expanded"
                        >
                            <div className="ind-details-block">
                                <div className="detail-item">
                                    <h4 style={{ color: '#2233AD' }}>Challenges</h4>
                                    <ul>{industry.challenges.slice(0, 3).map((item, i) => <li key={i}>{item}</li>)}</ul>
                                </div>
                                <div className="detail-item">
                                    <h4 style={{ color: '#2233AD' }}>Solutions</h4>
                                    <ul>{industry.solutions.slice(0, 3).map((item, i) => <li key={i}>{item}</li>)}</ul>
                                </div>
                                <div className="detail-item">
                                    <h4 style={{ color: '#2233AD' }}>Benefits</h4>
                                    <ul>{industry.benefits.slice(0, 3).map((item, i) => <li key={i}>{item}</li>)}</ul>
                                </div>
                            </div>

                            <div className="ind-consult-btn-wrapper">
                                <Link to="/contact" className="ind-consult-btn" style={{ backgroundColor: industry.color }}>
                                    Consult →
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="ind-action-row">
                    <button
                        className="ind-see-more-btn"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Show Less' : 'See More'}
                        <span className={`arrow-icon ${isExpanded ? 'rotated' : ''}`}>▼</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

function Industries() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);

    // Responsive logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleItems(1);
            } else if (window.innerWidth < 1100) {
                setVisibleItems(2);
            } else {
                setVisibleItems(3);
            }
        };

        handleResize(); // Initial set
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (currentIndex < industries.length - visibleItems) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div className="industries-page">
            {/* ── Page Header Bar ── */}
            <div className="industries-page-header">
                <div className="container">
                    <div className="header-inner">
                        <h1 className="header-title">Industries</h1>
                        <div className="breadcrumbs">
                            <Link to="/" className="breadcrumb-link">Home</Link>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-current">Industries</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Hero ── */}
            <section className="ind-hero">
                <div className="ind-hero-overlay" />
                <div className="container ind-hero-content">
                    <motion.span
                        className="ind-tagline"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        SECTOR EXPERTISE
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Experience Built Across<br />Critical Sectors
                    </motion.h1>
                    <motion.p
                        className="ind-hero-sub"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Over 15+ years delivering automation, engineering, retrofit, and digital solutions
                        across five major industries in Sri Lanka.
                    </motion.p>
                </div>
            </section>

            {/* ── Philosophy Banner ── */}
            <section className="ind-philosophy">
                <div className="container ind-philosophy-inner">
                    <div className="ind-philosophy-text">
                        <h2>Industry Expertise is Not Theoretical</h2>
                        <p>
                            It is derived from real project execution, real operational challenges, and real system integrations in complex environments.
                        </p>
                    </div>
                    <div className="ind-philosophy-stats">
                        {[['15+', 'Years'], ['5', 'Industries'], ['100+', 'Projects'], ['24/7', 'Support']].map(([num, label]) => (
                            <div key={label} className="ind-stat">
                                <span className="ind-stat-num">{num}</span>
                                <span className="ind-stat-label">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industries Carousel (Success Story Style) ── */}
            <section className="ind-carousel-section">
                <div className="container ind-carousel-container">

                    {/* Navigation Buttons */}
                    <button
                        className={`ind-nav-btn prev ${currentIndex === 0 ? 'disabled' : ''}`}
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                    >
                        ←
                    </button>
                    <button
                        className={`ind-nav-btn next ${currentIndex >= industries.length - visibleItems ? 'disabled' : ''}`}
                        onClick={nextSlide}
                        disabled={currentIndex >= industries.length - visibleItems}
                    >
                        →
                    </button>

                    {/* Carousel Viewport */}
                    <div className="ind-carousel-viewport">
                        <motion.div
                            className="ind-carousel-track"
                            animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {industries.map((ind) => (
                                <div
                                    key={ind.id}
                                    className="ind-carousel-item"
                                    style={{ flex: `0 0 ${100 / visibleItems}%` }}
                                >
                                    <IndustryCard industry={ind} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="ind-carousel-dots">
                        {Array.from({ length: industries.length - visibleItems + 1 }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`ind-dot ${currentIndex === idx ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* ── How We Work ── */}
            <section className="ind-how-section">
                <div className="container">
                    <div className="ind-section-label">
                        <span className="ind-tagline">OUR PROCESS</span>
                        <h2>How We Work</h2>
                        <p>Regardless of industry, our delivery model remains consistent and proven.</p>
                    </div>

                    <div className="ind-lifecycle">
                        {['Assess', 'Design', 'Build', 'Integrate', 'Support'].map((step, i) => (
                            <div key={step} className="ind-lifecycle-step">
                                <div className="ind-lifecycle-num">0{i + 1}</div>
                                <div className="ind-lifecycle-name">{step}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="ind-cta-section">
                <div className="container">
                    <div className="ind-cta-grid">
                        <div className="ind-cta-card">
                            <h3>Related Case Studies</h3>
                            <p>Explore detailed project outcomes across industries including client challenges.</p>
                            <Link to="/case-studies" className="ind-cta-btn ind-cta-btn-outline">
                                View Case Studies →
                            </Link>
                        </div>

                        <div className="ind-cta-card ind-cta-card-primary">
                            <h3>Discuss Your Requirement</h3>
                            <p>Planning a new project? Our team is ready for an initial consultation.</p>
                            <Link to="/contact" className="ind-cta-btn ind-cta-btn-white">
                                Talk to a Specialist →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Industries;
