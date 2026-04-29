import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './TeaInitiative.css';
import initiativeHero from '../../assets/tea-initiative-hero.png';
import caseDryer from '../../assets/case-dryer.png';
import caseGreenhouse from '../../assets/case-greenhouse.png';
import caseRetrofit from '../../assets/case-retrofit.png';
import caseMonitoring from '../../assets/case-rfid.png';

const TeaInitiative = () => {
    return (
        <div className="tea-initiative-page">
            {/* 1. HERO SECTION */}
            <section className="initiative-hero">
                <div className="container initiative-hero-grid">
                    <motion.div 
                        className="initiative-hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="initiative-hero-subtitle">Integrated Engineering for Evolving Industries</p>
                        <h1 className="initiative-hero-title">Tea Industry Modernization Initiative</h1>
                        <p className="initiative-hero-desc">
                            Sanota develops engineering and automation solutions addressing key operational challenges 
                            observed in the tea industry, supporting improved consistency, efficiency, and 
                            long-term competitiveness.
                        </p>
                        <div className="initiative-hero-actions">
                            <Link to="/contact" className="btn btn-primary initiative-btn-primary">
                                Discuss This Initiative
                            </Link>
                            <Link to="/solutions" className="btn btn-secondary-outline initiative-btn-secondary">
                                Explore Related Solutions
                            </Link>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="initiative-hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="initiative-visual-container">
                            <img src={initiativeHero} alt="Tea Industry Modernization Concept" className="initiative-hero-img" />
                            <div className="initiative-tech-overlay"></div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* 2. INDUSTRY CONTEXT */}
            <section className="initiative-context-section">
                <div className="container">
                    <div className="initiative-context-grid">
                        <div className="initiative-context-text">
                            <h2 className="initiative-section-title">Industry Context</h2>
                            <p className="initiative-context-lead">
                                Many industries face structural challenges that create a critical need for practical engineering improvements.
                            </p>
                        </div>
                        <div className="initiative-challenges-list">
                            {[
                                "Inefficient processes",
                                "Energy consumption pressures",
                                "Quality variability",
                                "Aging infrastructure",
                                "Limited monitoring capability",
                                "Increasing global competition",
                                "Evolving regulatory expectations"
                            ].map((challenge, index) => (
                                <div className="initiative-challenge-item" key={index}>
                                    <span className="initiative-challenge-dot"></span>
                                    {challenge}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* 3. KEY CHALLENGES IDENTIFIED */}
            <section className="initiative-challenges-section">
                <div className="container">
                    <div className="initiative-section-header centered">
                        <h2 className="initiative-section-title light">Key Operational Challenges</h2>
                        <p className="initiative-section-subtitle">Identified areas where traditional tea processing requires engineering transformation.</p>
                    </div>

                    <div className="initiative-challenges-carousel-viewport">
                        <div className="initiative-challenges-carousel-track">
                            {[
                                { 
                                    title: "Process Inefficiencies", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg> 
                                },
                                { 
                                    title: "Inconsistent Product Quality", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18M5 5l14 14M19 5L5 19"/><circle cx="12" cy="12" r="3"/></svg> 
                                },
                                { 
                                    title: "Manual Intervention Dependency", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 7l10 10M17 7L7 17M12 3v2M12 19v2M3 12h2M19 12h2"/></svg> 
                                },
                                { 
                                    title: "Limited Operational Visibility", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M12 7v2M12 15v2M7 12h2M15 12h2"/></svg> 
                                },
                                { 
                                    title: "Rising Production Costs", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> 
                                },
                                { 
                                    title: "Lack of Integrated Monitoring", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> 
                                },
                                { 
                                    title: "Need for Scalable Solutions", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z"/></svg> 
                                }
                            ].concat([
                                { 
                                    title: "Process Inefficiencies", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg> 
                                },
                                { 
                                    title: "Inconsistent Product Quality", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18M5 5l14 14M19 5L5 19"/><circle cx="12" cy="12" r="3"/></svg> 
                                },
                                { 
                                    title: "Manual Intervention Dependency", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 7l10 10M17 7L7 17M12 3v2M12 19v2M3 12h2M19 12h2"/></svg> 
                                },
                                { 
                                    title: "Limited Operational Visibility", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M12 7v2M12 15v2M7 12h2M15 12h2"/></svg> 
                                },
                                { 
                                    title: "Rising Production Costs", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> 
                                },
                                { 
                                    title: "Lack of Integrated Monitoring", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> 
                                },
                                { 
                                    title: "Need for Scalable Solutions", 
                                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z"/></svg> 
                                }
                            ]).map((item, index) => (
                                <div className="initiative-op-challenge-card" key={index}>
                                    <div className="initiative-op-challenge-icon">{item.icon}</div>
                                    <h3 className="initiative-op-challenge-title">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* 4. SANOTA INITIATIVE APPROACH */}
            <section className="initiative-approach-section">
                <div className="container">
                    <div className="initiative-approach-grid">
                        <div className="initiative-approach-content">
                            <h2 className="initiative-section-title">Engineering Approach</h2>
                            <p className="initiative-approach-lead">
                                Sanota develops integrated engineering solutions combining mechanical systems, 
                                automation technologies, and digital monitoring capabilities aligned with real 
                                operational environments.
                            </p>
                            <div className="initiative-approach-visual-hint">
                                <div className="hint-line"></div>
                                <span>INTEGRATED SYSTEMS</span>
                            </div>
                        </div>
                        <div className="initiative-approach-pillars">
                            {[
                                { title: "Engineering System Design", desc: "Developing robust mechanical frameworks tailored for tea processing." },
                                { title: "Process Optimization", desc: "Refining operational flows for maximum output and quality consistency." },
                                { title: "Automation Integration", desc: "Seamlessly embedding PLC and SCADA systems into existing lines." },
                                { title: "Monitoring Capability Development", desc: "Real-time data acquisition and factory-wide visibility solutions." },
                                { title: "Retrofit Modernization Concepts", desc: "Modernizing legacy machinery with current automation standards." },
                                { title: "Lifecycle Reliability Focus", desc: "Ensuring long-term operational stability and maintenance efficiency." }
                            ].map((pillar, index) => (
                                <div className="initiative-pillar-item" key={index}>
                                    <div className="initiative-pillar-header">
                                        <div className="initiative-pillar-number">0{index + 1}</div>
                                        <h3 className="initiative-pillar-title">{pillar.title}</h3>
                                    </div>
                                    <p className="initiative-pillar-desc">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* 5. SOLUTION DIRECTIONS UNDER DEVELOPMENT */}
            <section className="initiative-solutions-direction">
                <div className="container">
                    <div className="initiative-section-header">
                        <h2 className="initiative-section-title">Solution Directions</h2>
                        <p className="initiative-section-subtitle">Actively developing engineering concepts for the tea industry's future requirements.</p>
                    </div>

                    <div className="initiative-solutions-grid">
                        {[
                            { title: "Energy-Efficient Drying Systems", desc: "Developing thermal systems focused on reducing firewood and electricity footprint." },
                            { title: "Process Automation Modules", desc: "Modular control units designed for incremental factory-wide automation." },
                            { title: "Monitoring and Control Systems", desc: "Advanced sensor integration for real-time visibility of process variables." },
                            { title: "Workflow Optimization Approaches", desc: "Engineering studies to streamline leaf flow and reduce handling losses." },
                            { title: "Quality Consistency Improvement", desc: "Automated feedback loops to ensure uniform product grade and flavor profile." }
                        ].map((solution, index) => (
                            <div className="initiative-solution-card" key={index}>
                                <div className="initiative-solution-status">Development Direction</div>
                                <h3 className="initiative-solution-title">{solution.title}</h3>
                                <p className="initiative-solution-desc">{solution.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="initiative-disclaimer">
                        <p>* We describe development directions and engineering objectives, not fixed product claims.</p>
                    </div>
                </div>
            </section>
            {/* 6. POTENTIAL INDUSTRY BENEFITS */}
            <section className="initiative-benefits-section">
                <div className="container">
                    <div className="initiative-section-header centered">
                        <h2 className="initiative-section-title">Expected Industry Benefits</h2>
                        <p className="initiative-section-subtitle">Practical improvements aimed at enhancing long-term operational viability.</p>
                    </div>

                    <div className="initiative-benefits-grid">
                        {[
                            "Improved productivity",
                            "Improved product consistency",
                            "Reduced waste",
                            "Better resource utilization",
                            "Improved monitoring capability",
                            "Scalability for growth",
                            "Improved global competitiveness"
                        ].map((benefit, index) => (
                            <div className="initiative-benefit-card" key={index}>
                                <div className="initiative-benefit-check">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17L4 12"/></svg>
                                </div>
                                <span className="initiative-benefit-text">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* 7. RELATED SOLUTION AREAS */}
            <section className="initiative-related-solutions">
                <div className="container">
                    <div className="initiative-section-header">
                        <h2 className="initiative-section-title">Related Solution Areas</h2>
                    </div>
                    <div className="initiative-solutions-link-grid">
                        {[
                            { title: "Engineering & Automation", link: "/solutions" },
                            { title: "Products", link: "/products" },
                            { title: "Software & Digital Solutions", link: "/solutions" },
                            { title: "Retrofit Capability", link: "/solutions" },
                            { title: "Lifecycle Support", link: "/solutions" }
                        ].map((item, index) => (
                            <Link to={item.link} className="initiative-solution-link-card" key={index}>
                                <span className="initiative-solution-link-title">{item.title}</span>
                                <span className="initiative-solution-link-arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. RELATED INDUSTRIES */}
            <section className="initiative-related-industries">
                <div className="container">
                    <div className="initiative-section-header">
                        <h2 className="initiative-section-title">Related Industries</h2>
                    </div>
                    <div className="initiative-industries-tag-cloud">
                        {[
                            "Food processing",
                            "Agriculture",
                            "Manufacturing",
                            "Logistics",
                            "Infrastructure"
                        ].map((industry, index) => (
                            <div className="initiative-industry-tag" key={index}>
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* 9. RELATED CASE STUDIES */}
            <section className="initiative-case-studies">
                <div className="container">
                    <div className="initiative-section-header centered">
                        <h2 className="initiative-section-title">Project References</h2>
                        <p className="initiative-section-subtitle">Real-world engineering implementations relevant to this initiative.</p>
                    </div>
                    <div className="initiative-case-grid">
                        {[
                            { title: "Smart Greenhouse Monitoring", image: caseGreenhouse },
                            { title: "Industrial Dryer Systems", image: caseDryer },
                            { title: "Automation Upgrades", image: caseRetrofit },
                            { title: "Monitoring Solutions", image: caseMonitoring }
                        ].map((item, index) => (
                            <Link to="/case-studies" className="initiative-case-card" key={index}>
                                <div className="initiative-case-img-box">
                                    <img src={item.image} alt={item.title} className="initiative-case-img" />
                                </div>
                                <div className="initiative-case-content">
                                    <h3 className="initiative-case-title">{item.title}</h3>
                                    <span className="initiative-case-link">View Details →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. COLLABORATION INVITATION */}
            <section className="initiative-collaboration">
                <div className="container">
                    <div className="initiative-collab-wrapper">
                        <h2 className="initiative-collab-title">Collaboration Opportunities</h2>
                        <p className="initiative-collab-desc">
                            Sanota welcomes collaboration with industry stakeholders, institutions, and organizations 
                            interested in developing practical engineering solutions addressing industry challenges.
                        </p>
                        <div className="initiative-collab-actions">
                            <Link to="/contact" className="btn btn-primary initiative-btn-primary">Discuss Collaboration</Link>
                            <Link to="/contact" className="btn btn-secondary-outline initiative-btn-secondary">Discuss Application</Link>
                            <Link to="/contact" className="btn btn-secondary-outline initiative-btn-secondary">Request Technical Discussion</Link>
                        </div>
                    </div>
                </div>
                
                {/* Tech Background elements */}
                <div className="collab-tech-bg">
                    <div className="collab-grid-pattern"></div>
                    <div className="collab-glow-beam"></div>
                </div>
            </section>
            {/* 11. KNOWLEDGE CONNECTION */}
            <section className="initiative-knowledge-connection">
                <div className="container">
                    <div className="initiative-knowledge-grid">
                        <div className="initiative-knowledge-content">
                            <h2 className="initiative-section-title">Knowledge Connection</h2>
                            <p className="initiative-knowledge-lead">
                                Explore detailed technical insights and research relevant to tea industry modernization.
                            </p>
                            <Link to="/insights" className="btn btn-secondary-outline initiative-btn-secondary mt-30">
                                View Related Insights
                            </Link>
                        </div>
                        <div className="initiative-knowledge-links">
                            {[
                                "Automation trends in agriculture",
                                "Retrofit vs replacement",
                                "Energy efficiency engineering",
                                "Monitoring systems benefits"
                            ].map((insight, index) => (
                                <Link to="/insights" className="initiative-insight-item" key={index}>
                                    <span className="initiative-insight-title">{insight}</span>
                                    <span className="initiative-insight-arrow">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeaInitiative;
