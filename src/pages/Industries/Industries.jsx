import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Industries.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import { CountUp } from '../../components/AnimatedStats/AnimatedStats';

const industries = [
    {
        id: 'manufacturing',
        name: 'Manufacturing & Processing',
        image: picture1,
        color: '#2233AD',
        description: 'Operational reliability. Production efficiency. System integration.',
        challenges: ['Legacy machinery integration', 'Unplanned downtime', 'Inconsistent monitoring', 'Lack of system visibility'],
        solutions: ['PLC & SCADA implementations', 'Production line automation', 'Control panel upgrades', 'Industrial monitoring systems'],
        benefits: ['Reduced downtime', 'Improved production control', 'Better decision visibility', 'Long-term system stability'],
        link: '/industries/manufacturing'
    },
    {
        id: 'food-processing',
        name: 'Food Processing',
        image: picture2,
        color: '#2233AD',
        description: 'Compliance, hygiene, traceability, and operational continuity.',
        challenges: ['Manual process dependency', 'Quality inconsistency', 'Limited process data', 'Maintenance inefficiencies'],
        solutions: ['Automated batching & control', 'Monitoring & reporting systems', 'Retrofit of legacy control', 'Digital production tracking'],
        benefits: ['Improved consistency', 'Reduced operational risk', 'Enhanced traceability', 'Optimized energy use'],
        link: '/industries/food-processing'
    },
    {
        id: 'tea-industry',
        name: 'Tea Industry',
        image: picture4,
        color: '#2233AD',
        description: 'Engineering excellence for the traditional tea sector.',
        challenges: ['Process variability', 'Energy consumption', 'Manual handling dependency', 'Quality consistency'],
        solutions: ['Withering & Drying automation', 'Rolling & Fermentation control', 'Material flow optimization', 'Digital traceability'],
        benefits: ['Higher grade consistency', 'Lower operational costs', 'Reduced labor intensity', 'Real-time monitoring'],
        link: '/industries/tea-industry'
    },
    {
        id: 'agriculture',
        name: 'Agriculture & Greenhouse',
        image: picture5,
        color: '#2233AD',
        description: 'Precision engineering for modern farming environments.',
        challenges: ['Climate variability', 'Resource waste', 'Limited growth visibility', 'Manual irrigation control'],
        solutions: ['Climate control systems', 'Automated fertigation', 'Soil & moisture monitoring', 'Hydroponic automation'],
        benefits: ['Increased yield', 'Reduced water/fertilizer waste', 'Precise growth control', 'Remote facility management'],
        link: '/industries/agriculture'
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
        link: '/industries/logistics'
    },
    {
        id: 'infrastructure',
        name: 'Infrastructure & Utilities',
        image: picture1,
        color: '#2233AD',
        description: 'Reliability, safety, and long-term sustainability.',
        challenges: ['High operational risk environments', 'System redundancy requirements', 'Legacy system integration', 'Monitoring limitations'],
        solutions: ['Control & monitoring systems', 'Retrofit & modernization programs', 'Integrated automation architecture', 'Long-term AMC support'],
        benefits: ['Increased reliability', 'Reduced operational risk', 'Improved lifecycle management', 'Structured long-term support'],
        link: '/industries/infrastructure'
    },
    {
        id: 'institutions',
        name: 'Institutions & Government',
        image: picture2,
        color: '#2233AD',
        description: 'Operational continuity and infrastructure stability.',
        challenges: ['Aging infrastructure systems', 'Fragmented vendor management', 'Limited monitoring systems', 'Energy inefficiencies'],
        solutions: ['Building automation systems', 'Power monitoring integration', 'Infrastructure system upgrades', 'Retrofit & takeover projects'],
        benefits: ['Better facility control', 'Reduced vendor dependency', 'Improved operational efficiency', 'Long-term maintenance support'],
        link: '/industries/institutions'
    }
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
                                <Link to={industry.link || '/contact'} className="ind-consult-btn" style={{ backgroundColor: industry.color }}>
                                    {industry.id === 'tea-industry' ? 'Explore Industry Page →' : 'Consult →'}
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
                        <div className="ind-stat fade-in-up" style={{ animationDelay: '0s' }}>
                            <span className="ind-stat-num"><CountUp end={15} duration={3000} suffix="+" /></span>
                            <span className="ind-stat-label">Years</span>
                        </div>
                        <div className="ind-stat fade-in-up" style={{ animationDelay: '0.15s' }}>
                            <span className="ind-stat-num"><CountUp end={5} duration={3000} suffix="" /></span>
                            <span className="ind-stat-label">Industries</span>
                        </div>
                        <div className="ind-stat fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <span className="ind-stat-num"><CountUp end={100} duration={3000} suffix="+" /></span>
                            <span className="ind-stat-label">Projects</span>
                        </div>
                        <div className="ind-stat fade-in-up" style={{ animationDelay: '0.45s' }}>
                            <span className="ind-stat-num"><CountUp end={24} duration={3000} suffix="/7" /></span>
                            <span className="ind-stat-label">Support</span>
                        </div>
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

            {/* ── Emerging Sectors ── */}
            <section className="ind-emerging-section">
                <div className="container">
                    <div className="ind-section-label">
                        <span className="ind-tagline">FUTURE FOCUS</span>
                        <h2>Emerging Sectors</h2>
                        <p>We are actively expanding our engineering and digital capabilities into these critical growth areas.</p>
                    </div>
                    <div className="ind-emerging-grid">
                        {[
                            { 
                                name: 'Energy Systems', 
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '56px', height: '56px', color: '#f59e0b', filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.3))' }}>
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                )
                            },
                            { 
                                name: 'Environmental Systems', 
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '56px', height: '56px', color: '#10b981', filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))' }}>
                                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c0 2-.42 4.48-1.5 10.2A7 7 0 0 1 11 20z" />
                                        <path d="M9 22V12" />
                                    </svg>
                                )
                            },
                            { 
                                name: 'Healthcare & Specialized Systems', 
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '56px', height: '56px', color: '#ef4444', filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.3))' }}>
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                )
                            }
                        ].map((sector, i) => (
                            <div key={i} className="ind-emerging-card">
                                <div className="ind-emerging-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>{sector.icon}</div>
                                <h3 className="ind-emerging-name">{sector.name}</h3>
                                <span className="ind-emerging-badge">Active R&D</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Future Directions ── */}
            <section className="ind-future-section">
                <div className="container">
                    <div className="ind-future-wrapper">
                        <div className="ind-future-content">
                            <h3>Future Strategic Directions</h3>
                            <p className="ind-future-subtext">Sanota is evaluating long-term engineering opportunities in the following specialized domains:</p>
                            <div className="ind-future-list">
                                {['Marine Systems', 'Construction Automation', 'Pharmaceutical Processing', 'Renewable Energy Systems'].map((item, i) => (
                                    <div key={i} className="ind-future-item">
                                        <span className="ind-future-dot"></span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
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
