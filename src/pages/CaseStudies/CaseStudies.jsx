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

const caseStudies = [
    {
        id: 1,
        title: 'Complete Factory Automation Transformation',
        industry: 'Manufacturing',
        client: 'Leading Textile Manufacturing Facility',
        image: picture1,
        problem: {
            title: 'The Challenge',
            description: 'Struggling with outdated manual production processes, high defect rates (15%), and significant operational bottlenecks.',
            points: ['Manual quality control', '30% capacity underutilization', 'No real-time visibility']
        },
        solution: {
            title: 'Our Approach',
            description: 'Implemented a comprehensive automation solution with PLC-based control systems and SCADA integration.',
            points: ['PLC & SCADA deployment', 'Automated quality inspection', 'MES implementation']
        },
        outcome: {
            title: 'Results Achieved',
            description: 'Transformative results including 40% production increase and 60% defect reduction.',
            metrics: [
                { value: '40%', label: 'Output Increase' },
                { value: '60%', label: 'Defect Reduction' }
            ],
            benefits: ['Consistent product quality', 'Reduced labor costs', 'ROI within 18 months']
        }
    },
    {
        id: 2,
        title: 'SCADA System for Water Treatment',
        industry: 'Water & Wastewater',
        client: 'Municipal Water Treatment Authority',
        image: picture2,
        problem: {
            title: 'The Challenge',
            description: 'Limited visibility across 8 remote facilities, manual testing delays, and high energy consumption.',
            points: ['Remote visibility gaps', 'Delayed incident response', 'High energy costs']
        },
        solution: {
            title: 'Our Approach',
            description: 'Deployed a centralized SCADA system with automated monitoring and energy-optimized pump control.',
            points: ['Centralized SCADA', 'Automated monitoring', 'Energy optimization']
        },
        outcome: {
            title: 'Results Achieved',
            description: 'Achieved 100% remote monitoring coverage and 35% reduction in energy costs.',
            metrics: [
                { value: '100%', label: 'Remote Coverage' },
                { value: '35%', label: 'Energy Savings' }
            ],
            benefits: ['Complete visibility', 'Automated compliance', 'Faster incident response']
        }
    },
    {
        id: 3,
        title: 'Power Distribution Modernization',
        industry: 'Energy & Power',
        client: 'Regional Power Distribution Company',
        image: picture3,
        problem: {
            title: 'The Challenge',
            description: 'Aging infrastructure leading to frequent outages, billing delays, and customer dissatisfaction.',
            points: ['Frequent outages', 'Manual meter reading', 'Grid instability']
        },
        solution: {
            title: 'Our Approach',
            description: 'Implemented Advanced Distribution Management System (ADMS) with smart metering and grid automation.',
            points: ['ADMS deployment', 'Smart metering (AMI)', 'Automated switching']
        },
        outcome: {
            title: 'Results Achieved',
            description: 'Dramatically improved reliability with 90% reduction in outage duration.',
            metrics: [
                { value: '90%', label: 'Less Outage Time' },
                { value: '99.9%', label: 'Reliability' }
            ],
            benefits: ['Improved satisfaction', 'Automated billing', 'Real-time visibility']
        }
    },
    {
        id: 4,
        title: 'Food Processing Plant Automation',
        industry: 'Food & Beverage',
        client: 'Major Food Processing Facility',
        image: picture4,
        problem: {
            title: 'The Challenge',
            description: 'Manual batch processes causing quality inconsistencies and difficulty in maintaining hygiene standards.',
            points: ['Quality inconsistencies', 'Hygiene challenges', 'Limited traceability']
        },
        solution: {
            title: 'Our Approach',
            description: 'Implemented hygienic automation with automated batch control and full traceability integration.',
            points: ['Washdown automation', 'Batch control', 'Traceability system']
        },
        outcome: {
            title: 'Results Achieved',
            description: 'Ensured 100% batch traceability and 50% reduction in quality incidents.',
            metrics: [
                { value: '100%', label: 'Traceability' },
                { value: '50%', label: 'Less Incidents' }
            ],
            benefits: ['Regulatory compliance', 'Consistent quality', 'Reduced contamination risk']
        }
    },
    {
        id: 5,
        title: 'Smart Building Management System',
        industry: 'Building Automation',
        client: 'Commercial Office Complex',
        image: picture5,
        problem: {
            title: 'The Challenge',
            description: 'High energy costs, manual lighting control, and tenant complaints about comfort levels.',
            points: ['High energy usage', 'Manual controls', 'Tenant complaints']
        },
        solution: {
            title: 'Our Approach',
            description: 'Integrated BMS with smart HVAC, automated lighting, and energy analytics.',
            points: ['Comprehensive BMS', 'Smart HVAC', 'Energy analytics']
        },
        outcome: {
            title: 'Results Achieved',
            description: 'Delivered 45% energy cost reduction and significantly improved tenant satisfaction.',
            metrics: [
                { value: '45%', label: 'Energy Savings' },
                { value: '95%', label: 'Tenant Satisfaction' }
            ],
            benefits: ['Lower maintenance costs', 'Centralized control', 'Enhanced sustainability']
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
            {/* ── Page Header Bar (Consistent with Industries) ── */}
            <div className="case-studies-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Success Stories</h1>
                        <p className="hero-subtitle">
                            Real-world automation projects delivering measurable results across industries.
                        </p>
                    </motion.div>
                </div>
            </div>

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
            <section className="cs-history-section">
                <div className="container cs-history-container">
                    <div className="cs-history-image-wrapper">
                        <div className="cs-history-deco-box"></div>
                        <img src={historyImage} alt="Sanota History" className="cs-history-img" />
                        <div className="cs-stats-box">
                            <span className="cs-stats-number">200+</span>
                            <span className="cs-stats-label">PROJECTS DONE</span>
                        </div>
                    </div>
                    <div className="cs-history-content">
                        <h2 className="cs-history-title">Ready to Create Your Success Story?</h2>
                        <p className="cs-history-text">
                            Let's discuss how we can deliver similar results for your business.
                        </p>
                        <div className="cs-cta-buttons">
                            <Link to="/contact" className="cs-btn cs-btn-solid">REQUEST CONSULTATION</Link>
                            <Link to="/industries" className="cs-btn cs-btn-outline">
                                EXPLORE INDUSTRIES <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CaseStudies;
