import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './TeaIndustry.css';

// Assets
import heroImage from '../../assets/industries-bg.png';
import picture1 from '../../assets/picture1.jpg';
import teaSolutionsImg from '../../assets/tea-solutions.png';
import productsBg from '../../assets/products-bg.png';

import caseDryer from '../../assets/case-dryer.png';
import caseRfid from '../../assets/case-rfid.png';
import caseGreenhouse from '../../assets/case-greenhouse.png';
import caseRetrofit from '../../assets/case-retrofit.png';

import appDrying from '../../assets/app-drying.png';
import appRolling from '../../assets/app-rolling.png';
import appSorting from '../../assets/app-sorting.png';
import appMonitoring from '../../assets/app-monitoring.png';
import appEnergy from '../../assets/app-energy.png';
import appPackaging from '../../assets/app-packaging.png';

const TeaIndustry = () => {
    const [activeCaseIndex, setActiveCaseIndex] = React.useState(0);
    
    const apps = [
        { title: "Drying & Withering Systems", image: appDrying, desc: "Automated controls for withering troughs and fluid bed dryers to maintain precise moisture levels." },
        { title: "Rolling & Fermentation Control", image: appRolling, desc: "Digital monitoring of rolling pressure and fermentation temperature for optimum quality." },
        { title: "Material Handling & Sorting", image: appSorting, desc: "Efficient conveyor systems and automated sorting to reduce manual dependency and breakage." },
        { title: "Factory-wide Monitoring", image: appMonitoring, desc: "Centralized dashboards to track production metrics, energy usage, and machine status." },
        { title: "Energy Management Systems", image: appEnergy, desc: "Optimizing firewood and electricity consumption through intelligent combustion and motor controls." },
        { title: "Packaging & Quality Control", image: appPackaging, desc: "Precision weighing and inspection systems to ensure batch consistency and compliance." }
    ];

    const caseStudies = [
        { 
            title: "Industrial Dryer Deployment", 
            category: "Automation",
            subtitle: "Major Tea Factory, Kandy",
            image: caseDryer, 
            desc: "Optimizing thermal efficiency and quality consistency in a high-capacity tea factory." 
        },
        { 
            title: "RFID Tracking Implementation", 
            category: "Digital Solutions",
            subtitle: "Export Hub, Colombo",
            image: caseRfid, 
            desc: "End-to-end traceability of tea batches from withering troughs to final packaging." 
        },
        { 
            title: "Smart Greenhouse Monitoring", 
            category: "Smart Agro",
            subtitle: "Nuwara Eliya Research Center",
            image: caseGreenhouse, 
            desc: "Automated climate and irrigation control for specialized tea cultivation environments." 
        },
        { 
            title: "Retrofit Automation Project", 
            category: "Engineering",
            subtitle: "Legacy Tea Estate, Galle",
            image: caseRetrofit, 
            desc: "Modernizing legacy rolling and sifting lines with integrated digital control systems." 
        }
    ];

    const nextCase = () => setActiveCaseIndex((prev) => (prev + 1) % caseStudies.length);
    const prevCase = () => setActiveCaseIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

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
                    <div className="tea-context-split">
                        {/* LEFT SIDE: Heading + Intro */}
                        <div className="tea-context-left">
                            <h2 className="tea-section-title">Understanding Operational Challenges in This Industry</h2>
                            <p className="tea-context-lead">
                                Real operational issues that impact efficiency, cost, and consistency across the tea production lifecycle.
                            </p>
                            <div className="tea-impact-line">
                                "These challenges directly affect productivity, cost efficiency, and scalability."
                            </div>
                        </div>

                        {/* RIGHT SIDE: Problem Cards Grid */}
                        <div className="tea-context-right">
                            <div className="tea-challenges-grid">
                                {[
                                    { 
                                        title: "Process Variability", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>, 
                                        desc: "Complex chemical changes requiring precise control." 
                                    },
                                    { 
                                        title: "Energy Consumption", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>, 
                                        desc: "High thermal requirements driving up costs." 
                                    },
                                    { 
                                        title: "Manual Dependency", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, 
                                        desc: "Heavy reliance on manual handling affecting throughput." 
                                    },
                                    { 
                                        title: "Quality Consistency", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>, 
                                        desc: "Maintaining exact profiles across different batches." 
                                    },
                                    { 
                                        title: "Aging Infrastructure", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>, 
                                        desc: "Legacy setups lacking modern industrial precision." 
                                    },
                                    { 
                                        title: "Limited Monitoring", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7"></path><line x1="3" y1="10" x2="21" y2="10"></line><path d="M16 19h6"></path><path d="M19 16v6"></path></svg>, 
                                        desc: "Lack of real-time data for proactive management." 
                                    },
                                    { 
                                        title: "Modernization Need", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>, 
                                        desc: "Upgrading systems without production disruption." 
                                    }
                                ].map((challenge, index) => (
                                    <div className="tea-challenge-card" key={index}>
                                        <div className="tea-challenge-icon">{challenge.icon}</div>
                                        <div className="tea-challenge-info">
                                            <h3 className="tea-challenge-title">{challenge.title}</h3>
                                            <p className="tea-challenge-desc">{challenge.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HOW SANOTA SUPPORTS THIS INDUSTRY */}
            <section className="tea-support-section">
                <div className="container">
                    <div className="tea-support-split">
                        {/* LEFT SIDE: Visual Part */}
                        <div className="tea-support-visual">
                            <motion.div 
                                className="tea-support-image-container"
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 1, 0] 
                                }}
                                transition={{ 
                                    duration: 20, 
                                    repeat: Infinity, 
                                    ease: "linear" 
                                }}
                            >
                                <div className="tea-support-graphic">
                                    <div className="tea-node tea-node-1"></div>
                                    <div className="tea-node tea-node-2"></div>
                                    <div className="tea-node tea-node-3"></div>
                                    <div className="tea-graphic-lines"></div>
                                </div>
                                <img src={picture1} alt="Sanota Support Visual" className="tea-support-main-img" />
                                <div className="tea-support-img-overlay"></div>
                            </motion.div>
                        </div>

                        {/* RIGHT SIDE: Animated Solution List */}
                        <div className="tea-support-content">
                            <h2 className="tea-section-title light">How Sanota Supports This Industry</h2>
                            <div className="tea-support-list">
                                {[
                                    { 
                                        title: "Process Automation", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
                                        desc: "Reducing manual intervention and improving consistency." 
                                    },
                                    { 
                                        title: "Equipment Optimization", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z"/></svg>,
                                        desc: "Enhancing machine performance and efficiency." 
                                    },
                                    { 
                                        title: "Monitoring & Control", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h.01M7 20h.01M12 20h.01M17 20h.01M22 20h.01M2 15h.01M22 15h.01M2 10h.01M22 10h.01M2 5h.01M7 5h.01M12 5h.01M17 5h.01M22 5h.01"/><rect x="7" y="10" width="10" height="10" rx="2"/></svg>,
                                        desc: "Real-time visibility and system control." 
                                    },
                                    { 
                                        title: "Modernization", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>,
                                        desc: "Upgrading existing systems without full replacement." 
                                    },
                                    { 
                                        title: "Workflow Efficiency", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 14 4-4-4-4M3 3l1.29 1.29M5 5l2.71 2.71M3 21l8-8M21 21l-3.29-3.29M15 15l-1.29-1.29M21 3l-8 8"/></svg>,
                                        desc: "Streamlining operations and reducing delays." 
                                    },
                                    { 
                                        title: "Quality Control", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>,
                                        desc: "Ensuring consistent output standards." 
                                    },
                                    { 
                                        title: "Lifecycle Support", 
                                        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"/><path d="M12 8v4l3 3"/></svg>,
                                        desc: "Long-term maintenance and reliability." 
                                    }
                                ].map((item, index) => (
                                    <motion.div 
                                        className="tea-support-item" 
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="tea-support-item-icon">{item.icon}</div>
                                        <div className="tea-support-item-info">
                                            <h3 className="tea-support-item-title">{item.title}</h3>
                                            <p className="tea-support-item-desc">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. RELEVANT SOLUTION AREAS */}
            <section className="tea-solutions-section">
                <div className="container">
                    <div className="tea-solutions-split">
                        {/* LEFT SIDE: Image */}
                        <div className="tea-solutions-visual">
                            <div className="tea-solutions-image-wrapper">
                                <img src={teaSolutionsImg} alt="Tea Solution Areas" className="tea-solutions-img" />
                                <div className="tea-solutions-accent-box"></div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Solutions List */}
                        <div className="tea-solutions-content">
                            <h2 className="tea-solutions-title">Relevant Solution Areas</h2>
                            <p className="tea-solutions-desc">
                                Practical engineering and digital solutions tailored for the tea industry.
                            </p>
                            <div className="tea-solutions-list">
                                {[
                                    { title: "End-to-End Engineering & Automation", link: "/solutions" },
                                    { title: "Sanota Developed Products", link: "/products" },
                                    { title: "Retrofit & System Takeover", link: "/solutions" },
                                    { title: "Software & Digital Solutions", link: "/solutions" },
                                    { title: "AMC & Lifecycle Support", link: "/solutions" }
                                ].map((sol, index) => (
                                    <Link to={sol.link} className="tea-solution-link-card" key={index}>
                                        <span className="tea-solution-card-title">{sol.title}</span>
                                        <span className="tea-solution-card-arrow">→</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. INDUSTRY-SPECIFIC APPLICATION AREAS */}
            <section className="tea-applications-section">
                <div className="container">
                    <div className="tea-applications-header-flex">
                        <div className="tea-section-header">
                            <h2 className="tea-section-title">Industry-Specific Application Areas</h2>
                            <p className="tea-section-subtitle">Practical engineering implementations designed for tea factory environments.</p>
                        </div>
                    </div>

                    <div className="tea-apps-carousel-viewport">
                        <div className="tea-apps-carousel-track-animate">
                            {[...apps, ...apps].map((app, index) => (
                                <Link to="/solutions" className="tea-app-carousel-card" key={index}>
                                    <div className="tea-app-card-image-box">
                                        <img src={app.image} alt={app.title} className="tea-app-card-img" />
                                        <div className="tea-app-card-badge">{app.title.toUpperCase()}</div>
                                    </div>
                                    <div className="tea-app-card-content">
                                        <p className="tea-app-card-desc">{app.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. RELATED INDUSTRY INITIATIVES */}
            <section className="tea-initiatives-section">
                <div className="container">
                    <div className="tea-initiatives-layout">
                        <div className="tea-initiatives-content">
                            <h2 className="tea-section-title light">Related Industry Initiatives</h2>
                            <p className="tea-initiatives-lead">
                                Sanota is actively involved in broader industry movements aimed at technological advancement and sustainability.
                            </p>
                            <div className="tea-initiatives-list">
                                {[
                                    "Tea modernization initiative",
                                    "Smart greenhouse initiative",
                                    "Smart monitoring initiative",
                                    "Energy efficiency initiative"
                                ].map((initiative, index) => (
                                    <div className="tea-initiative-tag" key={index}>
                                        <span className="tea-initiative-bullet">→</span>
                                        {initiative}
                                    </div>
                                ))}
                            </div>
                            <Link to="/initiatives" className="btn btn-primary tea-btn-primary mt-40">
                                Explore Industry Initiatives
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. RELATED PRODUCTS */}
            <section className="tea-products-section">
                <div className="tea-products-bg">
                    <img src={productsBg} alt="Products Background" className="tea-products-bg-img" />
                    <div className="tea-products-overlay"></div>
                </div>
                <div className="container">
                    <div className="tea-products-header">
                        <h2 className="tea-products-title">Related Products</h2>
                        <p className="tea-products-subtitle">Specialized engineering products developed for the tea processing industry.</p>
                    </div>
                    <div className="tea-products-grid">
                        {[
                            { 
                                title: "Green Tea Dryer", 
                                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 14"/></svg>,
                                desc: "Advanced thermal control for precise green tea processing." 
                            },
                            { 
                                title: "Tea Roller", 
                                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>,
                                desc: "Heavy-duty engineering for consistent leaf cell rupture." 
                            },
                            { 
                                title: "Withering Trough", 
                                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 10h20M2 14h20"/></svg>,
                                desc: "Automated airflow and temperature control systems." 
                            },
                            { 
                                title: "Tea Tablet Machine", 
                                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>,
                                desc: "Precision compression for specialized tea products." 
                            }
                        ].map((product, index) => (
                            <div className="tea-product-card" key={index}>
                                <div className="tea-product-icon">{product.icon}</div>
                                <h3 className="tea-product-card-title">{product.title}</h3>
                                <p className="tea-product-card-desc">{product.desc}</p>
                                <Link to="/products" className="tea-product-link">VIEW DETAILS →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. RELATED CASE STUDIES */}
            <section className="tea-case-studies-section">
                <div className="container">
                    <div className="tea-section-header centered">
                        <h2 className="tea-section-title">Related Case Studies</h2>
                        <p className="tea-section-subtitle">Real-world implementations of Sanota's engineering and digital solutions.</p>
                    </div>

                    <div className="tea-case-carousel-container">
                        <button className="tea-case-nav-btn prev" onClick={prevCase}>←</button>
                        
                        <div className="tea-case-carousel-viewport">
                            <motion.div 
                                className="tea-case-carousel-track"
                                animate={{ x: `-${activeCaseIndex * (100 / (window.innerWidth > 1100 ? 3 : window.innerWidth > 768 ? 2 : 1))}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {caseStudies.map((item, index) => (
                                    <div className="tea-case-card-v2" key={index}>
                                        <div className="tea-case-card-img-box">
                                            <img src={item.image} alt={item.title} className="tea-case-card-img" />
                                            <div className="tea-case-card-tag">{item.category}</div>
                                        </div>
                                        <div className="tea-case-card-body">
                                            <h3 className="tea-case-card-title">{item.title}</h3>
                                            <p className="tea-case-card-subtitle">{item.subtitle}</p>
                                            <p className="tea-case-card-desc">{item.desc}</p>
                                            <div className="tea-case-card-footer">
                                                <Link to="/case-studies" className="tea-case-link-details">SEE MORE DETAILS ▾</Link>
                                                <Link to="/contact" className="tea-case-link-inquire">Inquire —</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <button className="tea-case-nav-btn next" onClick={nextCase}>→</button>
                    </div>

                    <div className="tea-case-dots">
                        {caseStudies.map((_, index) => (
                            <div 
                                key={index} 
                                className={`tea-case-dot ${activeCaseIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveCaseIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. WHY SANOTA FOR THIS INDUSTRY */}
            <section className="tea-why-section">
                <div className="tea-why-tech-beam"></div>
                <div className="tea-why-particles"></div>
                <div className="container">
                    <div className="tea-why-wrapper">
                        <div className="tea-why-content">
                            <h2 className="tea-section-title light">Why Sanota for the Tea Industry?</h2>
                            <div className="tea-why-grid">
                                {[
                                    { title: "Proven Experience", desc: "Deep understanding of the operational environments and challenges unique to tea factories." },
                                    { title: "Practical Engineering", desc: "Solutions focused on real-world reliability and productivity rather than just theoretical design." },
                                    { title: "Modernization Expertise", desc: "Specialized in updating legacy systems without disrupting ongoing production cycles." },
                                    { title: "Integration Capability", desc: "Ability to bridge mechanical engineering with modern automation and digital monitoring." },
                                    { title: "Lifecycle Mindset", desc: "Dedicated support from initial implementation through long-term maintenance and optimization." },
                                    { title: "Adaptability", desc: "Proven ability to adapt advanced solutions to function effectively in rugged field conditions." }
                                ].map((item, index) => (
                                    <div className="tea-why-item" key={index}>
                                        <h3 className="tea-why-item-title">{item.title}</h3>
                                        <p className="tea-why-item-desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FINAL CTA SECTION */}
            <section className="tea-final-cta-section">
                <div className="container">
                    <div className="tea-final-cta-wrapper">
                        <h2 className="tea-final-cta-title">Discuss Opportunities in This Industry</h2>
                        <p className="tea-final-cta-desc">
                            Sanota works with organizations to understand operational environments and identify practical engineering approaches aligned with productivity, reliability, and long-term performance objectives.
                        </p>
                        <div className="tea-final-cta-actions">
                            <Link to="/contact" className="btn btn-primary tea-btn-primary">
                                Discuss Industry Requirement
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeaIndustry;
