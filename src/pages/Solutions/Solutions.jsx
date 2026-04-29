import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Solutions.css';

// Assets (Using placeholders if exact ones missing, but common ones are likely available)
import solutionsHeroBg from '../../assets/solutions-hero-bg.png';
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
            <section className="solutions-reality section-padding dark-v2">
                <div className="container">
                    <div className="section-header centered">
                        <motion.h2 
                            className="section-title light"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                        >
                            The Operational Reality
                        </motion.h2>
                        <motion.p 
                            className="section-subtitle light"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.1 }}
                        >
                            Common Operational Challenges Organizations Face
                        </motion.p>
                    </div>
                    <div className="reality-grid">
                        {[
                            "Inefficient manual processes",
                            "Inconsistent output quality",
                            "Aging machinery",
                            "Fragmented systems",
                            "Limited operational visibility",
                            "High dependency on manual intervention",
                            "Need for modernization without disruption"
                        ].map((challenge, index) => (
                            <motion.div 
                                className="reality-card glass" 
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
                                <div className="reality-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                </div>
                                <p className="reality-text">{challenge}</p>
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
                    <div className="section-header centered">
                        <h2 className="section-title">Engineering Approach</h2>
                        <p className="section-subtitle">A Lifecycle Responsibility, Not Just an Installation</p>
                    </div>
                    <div className="approach-flow">
                        {[
                            { step: "Assess", desc: "Understanding operational requirements" },
                            { step: "Design", desc: "Custom engineering solutions" },
                            { step: "Build", desc: "Precision fabrication & development" },
                            { step: "Integrate", desc: "Seamless system deployment" },
                            { step: "Support", desc: "Lifecycle maintenance & optimization" }
                        ].map((item, index) => (
                            <div className="flow-item" key={index}>
                                <div className="flow-node">
                                    <div className="flow-number-box">
                                        <span className="flow-number">{index + 1}</span>
                                    </div>
                                    <h3 className="flow-step">{item.step}</h3>
                                    <p className="flow-desc">{item.desc}</p>
                                </div>
                                {index < 4 && <div className="flow-connector"></div>}
                            </div>
                        ))}
                    </div>
                    <div className="approach-summary-box">
                        <p>Sanota approaches each engagement as a <strong>lifecycle responsibility</strong> rather than a one-time installation.</p>
                    </div>
                </div>
            </section>

            {/* 4. CAPABILITY DETAILS */}
            <section className="solutions-capabilities section-padding dark-theme">
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title light">Engineering & Automation Capabilities</h2>
                        <p className="section-subtitle light">Specialized Expertise for Complex Environments</p>
                    </div>
                    <div className="capabilities-grid">
                        {[
                            "Custom machine development",
                            "Process automation systems",
                            "Mechanical + Electrical integration",
                            "Control systems",
                            "System optimization",
                            "Greenfield and brownfield implementation"
                        ].map((cap, index) => (
                            <div className="capability-card glass" key={index}>
                                <div className="capability-indicator"></div>
                                <p className="capability-text">{cap}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Tech background overlay */}
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
