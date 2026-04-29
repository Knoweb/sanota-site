import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Solutions.css';

// Assets (Using placeholders if exact ones missing, but common ones are likely available)
import solutionsHeroBg from '../../assets/solutions-hero-bg.png';
import realityTechBg from '../../assets/reality-tech-bg.png';
import reality1 from '../../assets/reality-1.png';
import reality2 from '../../assets/reality-2.png';
import reality3 from '../../assets/reality-3.png';
import reality4 from '../../assets/reality-4.png';
import reality5 from '../../assets/reality-5.png';
import reality6 from '../../assets/reality-6.png';
import reality7 from '../../assets/reality-7.png';
import cap1 from '../../assets/cap-1.png';
import cap2 from '../../assets/cap-2.png';
import cap3 from '../../assets/cap-3.png';
import cap4 from '../../assets/cap-4.png';
import cap5 from '../../assets/cap-5.png';
import cap6 from '../../assets/cap-6.png';
import caseGreenhouse from '../../assets/case-greenhouse.png';

import caseDryer from '../../assets/case-dryer.png';
import caseRetrofit from '../../assets/case-retrofit.png';
import caseMonitoring from '../../assets/case-rfid.png';




const Solutions = () => {
    // Rotating supporting line
    const supportingLines = [
        "Designed by One Team",
        "Built by One Team",
        "Integrated by One Team",
        "Supported by One Team"
    ];
    const [lineIndex, setLineIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLineIndex((prev) => (prev + 1) % supportingLines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="solutions-page-v2">
            {/* 1. HERO SECTION */}
            <section className="solutions-hero">
                <div className="hero-bg-image" style={{ backgroundImage: `url(${solutionsHeroBg})` }}></div>
                <div className="hero-overlay"></div>
                
                <div className="container">
                    <motion.div 
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title">End-to-End Engineering & Automation Solutions</h1>
                        <div className="hero-supporting-line">
                            <AnimatePresence mode="wait">
                                <motion.span 
                                    key={lineIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {supportingLines[lineIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        <p className="hero-desc">
                            Sanota develops integrated engineering and automation systems designed around real operational environments, 
                            improving efficiency, reliability, and long-term performance.
                        </p>
                        <Link to="/contact" className="btn btn-primary hero-cta">Discuss Your Requirement</Link>
                    </motion.div>
                </div>
                {/* Tech Background elements */}
                <div className="hero-tech-bg">
                    <div className="hero-grid-pattern"></div>
                    <div className="hero-glow-beam"></div>
                </div>
            </section>

            {/* 2. THE OPERATIONAL REALITY */}
            <section className="solutions-reality section-padding">
                <div className="container">
                    <div className="section-header centered">
                        <motion.h2 
                            className="section-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                        >
                            The Operational Reality
                        </motion.h2>
                        <motion.p 
                            className="section-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.1 }}
                        >
                            Common Operational Challenges Organizations Face
                        </motion.p>
                    </div>

                    <div className="reality-technical-grid">
                        {[
                            { title: "Inefficient manual processes", image: reality1, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> },
                            { title: "Inconsistent output quality", image: reality2, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5c0 1.66 4 3 9 3s9-1.34 9-3"/><path d="M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5"/></svg> },
                            { title: "Aging machinery", image: reality3, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                            { title: "Fragmented systems", image: reality4, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
                            { title: "Limited operational visibility", image: reality5, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
                            { title: "High dependency on manual intervention", image: reality6, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> },
                            { title: "Need for modernization without disruption", image: reality7, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> }
                        ].map((item, index) => (
                            <motion.div 
                                className="technical-unit glass" 
                                key={index}
                                initial={{ opacity: 0, y: -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100 
                                }}
                            >
                                <div className="unit-image-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
                                <div className="unit-overlay-v3"></div>
                                
                                <div className="unit-content-v3">
                                    <div className="unit-header">
                                        <span className="unit-index">0{index + 1}</span>
                                        <div className="unit-icon">{item.icon}</div>
                                    </div>
                                    <h3 className="unit-title">{item.title}</h3>
                                    <div className="unit-data-bar">
                                        <div className="data-bar-fill"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section Background Tech Animation */}
                <div className="reality-tech-bg">
                    <div className="reality-grid-pattern"></div>
                    <div className="reality-energy-orb orb-1"></div>
                    <div className="reality-energy-orb orb-2"></div>
                </div>
            </section>

            {/* 3. SANOTA APPROACH */}
            <section className="solutions-approach section-padding light-theme">
                <div className="container">
                    <div className="approach-grid">
                        <motion.div 
                            className="approach-left"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title">Engineering Approach</h2>
                            <p className="approach-lead">
                                Sanota develops integrated engineering solutions combining mechanical systems, 
                                automation technologies, and digital monitoring capabilities aligned with real 
                                operational environments.
                            </p>
                            
                            <div className="approach-visual-box">
                                <div className="blue-accent-box"></div>
                                <div className="approach-main-img">
                                    <img src={caseDryer} alt="Engineering Approach" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="approach-right"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="approach-list">
                                {[
                                    { num: "01", title: "ENGINEERING SYSTEM DESIGN", desc: "Developing robust mechanical frameworks tailored for tea processing." },
                                    { num: "02", title: "PROCESS OPTIMIZATION", desc: "Refining operational flows for maximum output and quality consistency." },
                                    { num: "03", title: "AUTOMATION INTEGRATION", desc: "Seamlessly embedding PLC and SCADA systems into existing lines." },
                                    { num: "04", title: "MONITORING CAPABILITY DEVELOPMENT", desc: "Real-time data acquisition and factory-wide visibility solutions." },
                                    { num: "05", title: "RETROFIT MODERNIZATION CONCEPTS", desc: "Modernizing legacy machinery with current automation standards." },
                                    { num: "06", title: "LIFECYCLE RELIABILITY FOCUS", desc: "Ensuring long-term operational stability and maintenance efficiency." }
                                ].map((item, index) => (
                                    <motion.div 
                                        className="approach-item" 
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                    >
                                        <div className="item-num">{item.num}</div>
                                        <div className="item-content">
                                            <h3 className="item-title">{item.title}</h3>
                                            <p className="item-desc">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. CAPABILITY DETAILS */}
            <section className="solutions-capabilities section-padding light-theme">
                <div className="container">
                    <div className="section-header centered">
                        <motion.h2 
                            className="section-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                        >
                            Engineering & Automation Capabilities
                        </motion.h2>
                        <motion.p 
                            className="section-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.1 }}
                        >
                            Specialized Expertise for Complex Environments
                        </motion.p>
                    </div>

                    <div className="capabilities-grid-v2">
                        {[
                            { 
                                title: "Custom machine development", 
                                category: "MANUFACTURING", 
                                subtitle: "Precision Engineering Facility", 
                                desc: "Design and fabrication of specialized machinery tailored to unique production requirements, ensuring maximum throughput and durability.",
                                image: cap1 
                            },
                            { 
                                title: "Process automation systems", 
                                category: "AUTOMATION", 
                                subtitle: "Industrial Processing Plant", 
                                desc: "End-to-end automation of complex workflows using advanced PLC and HMI systems to minimize manual error and increase consistency.",
                                image: cap2 
                            },
                            { 
                                title: "Mechanical + Electrical integration", 
                                category: "INTEGRATION", 
                                subtitle: "Complex Assembly Lines", 
                                desc: "Seamless fusion of mechanical robusticity with sophisticated electrical controls for unified system performance and easier maintenance.",
                                image: cap3 
                            },
                            { 
                                title: "Control systems", 
                                category: "ELECTRONICS", 
                                subtitle: "Centralized Monitoring Hub", 
                                desc: "Developing intelligent control architectures that provide real-time logic processing and critical safety interlocks for large-scale operations.",
                                image: cap4 
                            },
                            { 
                                title: "System optimization", 
                                category: "EFFICIENCY", 
                                subtitle: "Legacy Plant Modernization", 
                                desc: "Analyzing and re-engineering existing systems to identify bottlenecks and implement software/hardware upgrades for peak operational efficiency.",
                                image: cap5 
                            },
                            { 
                                title: "Greenfield and brownfield implementation", 
                                category: "PROJECTS", 
                                subtitle: "Global Industrial Expansion", 
                                desc: "Full lifecycle support for new facility builds or retrofitting established sites with modern automation without interrupting current production.",
                                image: cap6 
                            }
                        ].map((cap, index) => (
                <div className="cap-tech-overlay"></div>
            </section>

            {/* 5. BUSINESS OUTCOMES */}
            <section className="solutions-outcomes section-padding dark-v2">
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title light">Operational and Strategic Benefits</h2>
                        <p className="section-subtitle light">Tangible Business Outcomes Through Integrated Engineering</p>
                    </div>
                    <div className="outcomes-track-viewport">
                        <div className="outcomes-track">
                            {[
                                "Improved productivity",
                                "Better consistency",
                                "Reduced operational risk",
                                "Improved process control",
                                "Improved visibility",
                                "Scalability for growth",
                                "Long-term reliability"
                            ].concat(["Improved productivity", "Better consistency", "Reduced operational risk"]).map((outcome, index) => (
                                <div className="outcome-card glass" key={index}>
                                    <div className="outcome-check-box">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p className="outcome-text">{outcome}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. WHERE THIS SOLUTION IS USED */}
            <section className="solutions-industries section-padding light-theme">
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title">Applied Across Industries</h2>
                        <p className="section-subtitle">Engineering solutions tailored for diverse operational sectors.</p>
                    </div>
                    <div className="industries-links-grid">
                        {[
                            { name: "Manufacturing", link: "/industries" },
                            { name: "Food Processing", link: "/industries" },
                            { name: "Tea Processing", link: "/tea-modernization" },
                            { name: "Agriculture", link: "/industries" },
                            { name: "Logistics", link: "/industries" },
                            { name: "Infrastructure", link: "/industries" }
                        ].map((ind, index) => (
                            <Link to={ind.link} className="industry-link-card-v2" key={index}>
                                <span className="industry-name">{ind.name}</span>
                                <span className="industry-arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. RELATED CASE STUDIES */}
            <section className="solutions-case-studies section-padding dark-theme">
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title light">Project References</h2>
                        <p className="section-subtitle light">Real-world Implementations of Our Solutions</p>
                    </div>
                    <div className="case-studies-modern-grid">
                        {[
                            { title: "Industrial Dryer Optimization", image: caseDryer },
                            { title: "RFID Tracking System", image: caseMonitoring },
                            { title: "Greenhouse Monitoring System", image: caseGreenhouse },
                            { title: "Machine Retrofit Project", image: caseRetrofit }
                        ].map((study, index) => (
                            <Link to="/case-studies" className="case-modern-card glass" key={index}>
                                <div className="case-img-container">
                                    <img src={study.image} alt={study.title} />
                                    <div className="case-overlay-v2"></div>
                                </div>
                                <div className="case-info-v2">
                                    <h3 className="case-title-v2">{study.title}</h3>
                                    <span className="case-link-v2">Explore Project →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="centered-content mt-60">
                        <Link to="/case-studies" className="btn btn-secondary-outline white-border">View All Case Studies</Link>
                    </div>
                </div>
            </section>

            {/* 8. RELATED INDUSTRY INITIATIVES */}
            <section className="solutions-initiatives section-padding dark-v2">
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title light">Industry Initiatives</h2>
                        <p className="section-subtitle light">Strategic programs driving sector-wide modernization.</p>
                    </div>
                    <div className="initiatives-modern-grid">
                        {[
                            { name: "Tea Modernization Initiative", link: "/tea-modernization" },
                            { name: "Smart Greenhouse Initiative", link: "/industries" },
                            { name: "Smart Monitoring Initiative", link: "/industries" },
                            { name: "Energy Efficiency Initiative", link: "/industries" }
                        ].map((init, index) => (
                            <Link to={init.link} className="init-link-card glass" key={index}>
                                <span className="init-tag">INITIATIVE</span>
                                <h3 className="init-name">{init.name}</h3>
                                <div className="init-footer">
                                    <span>Learn More</span>
                                    <span className="init-arrow-v2">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="centered-content mt-60">
                        <Link to="/industries" className="btn btn-primary">Explore All Initiatives</Link>
                    </div>
                </div>
            </section>

            {/* 9. WHY SANOTA */}
            <section className="solutions-why section-padding light-theme">
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title">Why Sanota for Solutions</h2>
                        <p className="section-subtitle">The advantages of an integrated engineering partner.</p>
                    </div>
                    <div className="why-solutions-grid">
                        {[
                            { title: "Integrated engineering capability", desc: "Single source for mechanical, electrical & digital engineering." },
                            { title: "Practical implementation approach", desc: "Designed for real-world operational environments." },
                            { title: "Modernization-first thinking", desc: "Upgrading existing assets for maximum efficiency." },
                            { title: "Digital + Engineering integration", desc: "Bringing data-driven insights to physical systems." },
                            { title: "Lifecycle support mindset", desc: "Long-term partnership beyond initial installation." },
                            { title: "Multi-industry experience", desc: "Transferring best practices across diverse sectors." }
                        ].map((item, index) => (
                            <div className="why-solution-item" key={index}>
                                <div className="why-indicator-v2"></div>
                                <div className="why-content-v2">
                                    <h3 className="why-title-v2">{item.title}</h3>
                                    <p className="why-desc-v2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FINAL CTA SECTION */}
            <section className="solutions-final-cta section-padding dark-theme">
                <div className="container centered">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="cta-title">Start with a Practical Discussion</h2>
                        <p className="cta-subtitle">
                            Initial discussions focus on understanding operational requirements and identifying practical next steps.
                        </p>
                        <div className="cta-actions-v2">
                            <Link to="/contact" className="btn btn-primary cta-btn">Discuss Your Requirement</Link>
                            <Link to="/contact" className="btn btn-secondary-outline white-border cta-btn">Request Technical Consultation</Link>
                            <Link to="/contact" className="btn btn-secondary-outline white-border cta-btn">Request System Assessment</Link>
                        </div>
                    </motion.div>
                </div>
                {/* Background animations */}
                <div className="cta-tech-bg-v2">
                    <div className="cta-grid-pattern-v2"></div>
                    <div className="cta-floating-glow-v2"></div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
