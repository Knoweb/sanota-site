import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './CaseStudies.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import historyImage from '../../assets/old.png';
import AnimatedStats, { CountUp } from '../../components/AnimatedStats/AnimatedStats';

const caseStudies = [
    {
        id: 1,
        title: 'Industrial Dryer Systems Optimization',
        industry: 'Food Processing',
        client: 'Major Agricultural Export Facility',
        image: picture1,
        problem: {
            title: 'The Challenge',
            description: 'Struggling with inconsistent drying times and high energy consumption in large-scale industrial dryers.',
            points: ['Energy inefficiency', 'Capacity bottlenecks', 'Inconsistent moisture control']
        },
        solution: {
            title: 'Our Approach',
            description: 'Integrated advanced thermal sensors and automated airflow control systems to optimize drying cycles.',
            points: ['Automated thermal control', 'Real-time moisture sensing', 'Variable frequency drives']
        },
        outcome: {
            title: 'Results Achieved',
            description: 'Significant improvements in both throughput and energy efficiency.',
            metrics: [
                { value: '25%', label: 'Capacity Increase' },
                { value: '30%', label: 'Energy Savings' }
            ],
            benefits: ['Capacity improvement', 'Energy optimization', 'Uniform product quality']
        }
    },
    {
        id: 2,
        title: 'Smart Greenhouse Control System',
        industry: 'Agriculture',
        client: 'High-Tech Commercial Greenhouse',
        image: picture2,
        problem: {
            title: 'The Challenge',
            description: 'Manual environmental control leading to yield fluctuations and high labor requirements for monitoring.',
            points: ['Unstable micro-climates', 'Manual data logging', 'Resource waste']
        },
        solution: {
            title: 'Our Approach',
            description: 'Implemented a fully automated environmental control system with IoT sensors and precision irrigation.',
            points: ['IoT sensor network', 'Automated climate control', 'Precision nutrient delivery']
        },
        outcome: {
            title: 'Results Achieved',
            description: 'Achieved optimal growing conditions with minimal human intervention and higher yields.',
            metrics: [
                { value: '20%', label: 'Yield Increase' },
                { value: '95%', label: 'Monitoring Accuracy' }
            ],
            benefits: ['Precision monitoring', 'Yield improvement', 'Reduced operational costs']
        }
    },
    {
        id: 3,
        title: 'RFID Workflow Tracking System',
        industry: 'Logistics & Warehousing',
        client: 'Global Logistics Hub',
        image: picture3,
        problem: {
            title: 'The Challenge',
            description: 'Lack of real-time visibility into warehouse workflows, leading to delays and inventory errors.',
            points: ['Blind spots in workflow', 'Manual asset tracking', 'Process delays']
        },
        solution: {
            title: 'Our Approach',
            description: 'Deployed an enterprise-wide RFID tracking system with real-time dashboard integration.',
            points: ['RFID tag deployment', 'Fixed & mobile readers', 'Real-time dashboard']
        },
        outcome: {
            title: 'Results Achieved',
            description: 'Transformed warehouse operations with 100% real-time visibility and faster throughput.',
            metrics: [
                { value: '100%', label: 'Asset Visibility' },
                { value: '40%', label: 'Efficiency Gain' }
            ],
            benefits: ['Workflow visibility', 'Efficiency improvement', 'Reduced inventory errors']
        }
    }
];

const CaseStudyCard = ({ study }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="cs-story-card h-full">
            <div className="cs-story-image">
                <img src={study.image} alt={study.title} />
                <div className="cs-story-tag">
                    {study.industry}
                </div>
            </div>

            <div className="cs-story-body">
                <h3 className="cs-story-title">{study.title}</h3>
                <div className="cs-story-client">{study.client}</div>
                <p className="cs-story-desc">{study.problem.description}</p>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="cs-story-expanded"
                        >
                            <div className="cs-details-block">
                                <div className="cs-detail-item">
                                    <h4>The Challenge</h4>
                                    <ul>{study.problem.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
                                </div>
                                <div className="cs-detail-item">
                                    <h4>Our Solution</h4>
                                    <ul>{study.solution.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
                                </div>
                                <div className="cs-detail-item">
                                    <h4>Key Results</h4>
                                    <ul>{study.outcome.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="cs-action-row">
                    <button
                        className="cs-see-more-btn"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Show Less' : 'See More Details'}
                        <span className={`arrow-icon ${isExpanded ? 'rotated' : ''}`}>▼</span>
                    </button>
                    <Link to="/contact" style={{ color: '#2233AD', fontWeight: 'bold', fontSize: '0.9rem', textDecoration: 'none' }}>
                        Inquire →
                    </Link>
                </div>
            </div>
        </div>
    );
};

function CaseStudies() {
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
        if (currentIndex < caseStudies.length - visibleItems) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div className="case-studies-page">
            {/* ── Page Header Bar ── */}
            <div className="cs-page-header">
                <div className="container">
                    <div className="cs-header-inner">
                        <h1 className="cs-header-title">Case Studies</h1>
                        <div className="cs-breadcrumbs">
                            <Link to="/" className="cs-breadcrumb-link">Home</Link>
                            <span className="cs-breadcrumb-separator">›</span>
                            <span className="cs-breadcrumb-current">Case Studies</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Hero Section ── */}
            <div className="case-studies-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Real Operational Challenges.<br />Practical Engineering Solutions.</h1>
                        <p className="hero-subtitle">
                            Real-world automation projects delivering measurable results across industries.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ── Animated Stats Section ── */}
            <AnimatedStats />

            {/* ── Carousel Section ── */}
            <section className="cs-carousel-section">
                <div className="cs-carousel-container">

                    {/* Navigation Buttons */}
                    <button
                        className={`cs-nav-btn prev ${currentIndex === 0 ? 'disabled' : ''}`}
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                    >
                        ←
                    </button>
                    <button
                        className={`cs-nav-btn next ${currentIndex >= caseStudies.length - visibleItems ? 'disabled' : ''}`}
                        onClick={nextSlide}
                        disabled={currentIndex >= caseStudies.length - visibleItems}
                    >
                        →
                    </button>

                    {/* Carousel Viewport */}
                    <div className="cs-carousel-viewport">
                        <motion.div
                            className="cs-carousel-track"
                            animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {caseStudies.map((study) => (
                                <div
                                    key={study.id}
                                    className="cs-carousel-item"
                                    style={{ flex: `0 0 ${100 / visibleItems}%` }}
                                >
                                    <CaseStudyCard study={study} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="cs-carousel-dots">
                        {Array.from({ length: caseStudies.length - visibleItems + 1 }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`cs-dot ${currentIndex === idx ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>

                </div>
            </section>


            {/* ── History Section ── */}
            <section className="cs-history-section" style={{ overflow: 'hidden' }}>
                <div className="container cs-history-container">
                    <div className="cs-history-image-wrapper">
                        {/* 2. Background Blue Shape */}
                        <motion.div
                            style={{ position: 'absolute', top: '-40px', left: '-40px', zIndex: 1 }}
                            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.1, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                className="cs-history-deco-box"
                                style={{ position: 'relative', top: 'auto', left: 'auto' }}
                                animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                            ></motion.div>
                        </motion.div>

                        {/* 1. Image Entrance Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 60, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            style={{ position: 'relative', zIndex: 2 }}
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ y: { repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.2 } }}
                                whileHover={{ scale: 1.03, transition: { duration: 0.4, ease: 'easeOut' } }}
                                style={{ position: 'relative', display: 'inline-block', width: '100%' }}
                            >
                                <img
                                    src={historyImage}
                                    alt="Sanota History"
                                    className="cs-history-img"
                                />

                                {/* Premium Sparkle Overlay */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        bottom: '30px',
                                        right: '30px',
                                        zIndex: 10,
                                        width: '28px',
                                        height: '28px',
                                        pointerEvents: 'none'
                                    }}
                                    animate={{
                                        opacity: [0.4, 1, 0.4],
                                        scale: [0.85, 1.1, 0.85],
                                        y: [0, -4, 0]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="white" style={{ filter: 'drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.6))' }} />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* 3. Floating Stats Card */}
                        <motion.div
                            style={{ position: 'absolute', bottom: '-40px', right: '-40px', zIndex: 3 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                className="cs-stats-box"
                                style={{ position: 'relative', right: 'auto', bottom: 'auto' }} // Override absolute to allow proper floating relative to wrapper
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                {/* 4. Counter Animation */}
                                <span className="cs-stats-number">
                                    <CountUp end={200} duration={3000} suffix="+" />
                                </span>
                                <span className="cs-stats-label">PROJECTS DONE</span>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="cs-history-content">
                        {/* Title: fade-in + slide from right */}
                        <motion.h2
                            className="cs-history-title"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            Ready to Create Your Success Story?
                        </motion.h2>

                        {/* Subtitle: fade-in + slide from right with delay */}
                        <motion.p
                            className="cs-history-text"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            Let's discuss how we can deliver similar results for your business.
                        </motion.p>

                        {/* Buttons: fade-in with delay */}
                        <motion.div
                            className="cs-cta-buttons"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Link to="/contact" className="cs-btn cs-btn-solid">REQUEST CONSULTATION</Link>
                            <Link to="/industries" className="cs-btn cs-btn-outline">
                                EXPLORE INDUSTRIES <span>→</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CaseStudies;
