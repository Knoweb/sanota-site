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
import outcomesVisual from '../../assets/solutions_outcomes_engineering_1777521314789.png';
import industryManufacturing from '../../assets/industry_manufacturing.png';
import industryFood from '../../assets/industry_food.png';
import industryTea from '../../assets/industry_tea.png';
import industryAgri from '../../assets/industry_agri.png';
import industryLogistics from '../../assets/industry_logistics.png';
import industryInfra from '../../assets/industry_infra.png';
import whySanotaBg from '../../assets/why_sanota_bg.png';
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
    const [capIndex, setCapIndex] = useState(0);

    const industries = [
        { name: "Manufacturing", image: industryManufacturing, link: "/industries", desc: "Advanced robotics and precision automation for modern factory floors." },
        { name: "Food Processing", image: industryFood, link: "/industries", desc: "Hygienic automated processing and packaging solutions for the food industry." },
        { name: "Tea Processing", image: industryTea, link: "/tea-modernization", desc: "Revolutionizing traditional tea factories with smart engineering and digital control." },
        { name: "Agriculture", image: industryAgri, link: "/industries", desc: "Smart greenhouse and vertical farming systems driven by sensor data." },
        { name: "Logistics", image: industryLogistics, link: "/industries", desc: "Automated warehouse management and robotic sorting for efficient distribution." },
        { name: "Infrastructure", image: industryInfra, link: "/industries", desc: "Smart urban engineering and monitoring systems for resilient cities." }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLineIndex((prev) => (prev + 1) % supportingLines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const capabilities = [
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
    ];

    const nextCap = () => {
        if (capIndex < capabilities.length - 3) {
            setCapIndex(capIndex + 1);
        }
    };

    const prevCap = () => {
        if (capIndex > 0) {
            setCapIndex(capIndex - 1);
        }
    };

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
                            { title: "Inconsistent output quality", image: reality2, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5c0 1.66 4 3 9 3s9-1.34-9-3"/><path d="M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5"/></svg> },
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

            {/* 4. CAPABILITY DETAILS (Slider) */}
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

                    <div className="capabilities-slider-container">
                        <button className={`slider-arrow left ${capIndex === 0 ? 'disabled' : ''}`} onClick={prevCap}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                        
                        <div className="capabilities-slider-viewport">
                            <motion.div 
                                className="capabilities-slider-track"
                                animate={{ x: `-${capIndex * 33.333}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {capabilities.map((cap, index) => (
                                    <div className="cap-card-v2" key={index}>
                                        <div className="cap-img-wrapper">
                                            <img src={cap.image} alt={cap.title} />
                                            <div className="cap-badge">{cap.category}</div>
                                        </div>
                                        <div className="cap-body">
                                            <h3 className="cap-card-title">{cap.title}</h3>
                                            <p className="cap-card-subtitle">{cap.subtitle}</p>
                                            <p className="cap-card-desc">{cap.desc}</p>
                                        </div>
                                        <div className="cap-footer">
                                            <a href="#" className="see-details">SEE MORE DETAILS <span className="arrow-down">▾</span></a>
                                            <a href="#" className="inquire-btn">Inquire →</a>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <button className={`slider-arrow right ${capIndex >= capabilities.length - 3 ? 'disabled' : ''}`} onClick={nextCap}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                    </div>

                    <div className="slider-dots">
                        {Array.from({ length: capabilities.length - 2 }).map((_, i) => (
                            <div 
                                key={i} 
                                className={`slider-dot ${capIndex === i ? 'active' : ''}`}
                                onClick={() => setCapIndex(i)}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="cap-tech-overlay"></div>
            </section>


            {/* 5. BUSINESS OUTCOMES - Redesigned to match Engineering Approach style */}
            <section className="solutions-outcomes-v5 section-padding dark-v2">
                <div className="container">
                    <div className="outcomes-container-v5">
                        <div className="outcomes-content-v5">
                            <motion.div 
                                className="outcomes-left-v5"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="section-title light">Operational & Strategic Benefits</h2>
                                <p className="section-subtitle light">
                                    Tangible business outcomes achieved through integrated engineering, 
                                    automation, and technical excellence.
                                </p>

                                <div className="visual-box-v5">
                                    <motion.div 
                                        className="blue-accent-v5"
                                        animate={{ 
                                            scale: [1, 1.05, 1],
                                            rotate: [0, 1, 0]
                                        }}
                                        transition={{ 
                                            duration: 6, 
                                            repeat: Infinity, 
                                            ease: "easeInOut" 
                                        }}
                                    ></motion.div>
                                    <div className="outcomes-main-img-v5">
                                        <img src={outcomesVisual} alt="Business Outcomes Engineering" />
                                    </div>
                                </div>
                            </motion.div>

                            <div className="outcomes-right-v5">
                                <div className="outcomes-list-v5">
                                    {[
                                        { title: "Improved Productivity", desc: "Optimized operational flows for maximum output efficiency." },
                                        { title: "Better Consistency", desc: "Ensuring uniform product quality through precision control." },
                                        { title: "Reduced Operational Risk", desc: "Robust engineering frameworks for safe and stable production." },
                                        { title: "Improved Process Control", desc: "Seamlessly embedding automation into existing workflows." },
                                        { title: "Improved Visibility", desc: "Real-time data acquisition and factory-wide monitoring." },
                                        { title: "Scalability for Growth", desc: "Modular designs that evolve with your business requirements." },
                                        { title: "Long-term Reliability", desc: "Engineering for lifecycle stability and maintenance efficiency." },
                                        { title: "Technical Excellence", desc: "Applying state-of-the-art standards to industrial challenges." }
                                    ].map((item, index) => (
                                        <motion.div 
                                            className="outcome-item-v5" 
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <div className="outcome-num-v5">0{index + 1}</div>
                                            <div className="outcome-text-v5">
                                                <h3 className="item-title-v5">{item.title}</h3>
                                                <p className="item-desc-v5">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. WHERE THIS SOLUTION IS USED - Redesigned as Image Slider */}
            <section className="solutions-industries-v3 section-padding light-theme">
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title">Applied Across Industries</h2>
                        <p className="section-subtitle">Engineering solutions tailored for diverse operational sectors.</p>
                    </div>

                    <div className="industries-ticker-viewport">
                        <div className="industries-ticker-track">
                            {[...industries, ...industries].map((ind, index) => (
                                <Link to={ind.link} className="industry-card-v3" key={index}>
                                    <div className="ind-img-box">
                                        <img src={ind.image} alt={ind.name} />
                                        <div className="ind-overlay"></div>
                                    </div>
                                    <div className="ind-body">
                                        <h3 className="ind-name">{ind.name}</h3>
                                        <p className="ind-desc">{ind.desc}</p>
                                        <span className="ind-link-v3">Explore Industry →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
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

            {/* 8. RELATED INDUSTRY INITIATIVES - Redesigned to be Modern & Light */}
            <section className="solutions-initiatives-v4 section-padding bg-light-v2">
                <div className="initiatives-bg-pattern"></div>
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title">Industry Initiatives</h2>
                        <p className="section-subtitle">Strategic programs driving sector-wide modernization.</p>
                    </div>
                    <div className="initiatives-modern-grid-v4">
                        {[
                            { name: "Tea Modernization Initiative", link: "/tea-modernization", desc: "Digitalizing the traditional tea industry with IoT and automation." },
                            { name: "Smart Greenhouse Initiative", link: "/industries", desc: "Optimizing agricultural output through climate-controlled environments." },
                            { name: "Smart Monitoring Initiative", link: "/industries", desc: "Factory-wide data acquisition for real-time operational visibility." },
                            { name: "Energy Efficiency Initiative", link: "/industries", desc: "Reducing operational costs through intelligent power management." }
                        ].map((init, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link to={init.link} className="init-card-v4">
                                    <div className="init-top">
                                        <span className="init-tag-v4">INITIATIVE</span>
                                        <div className="init-icon-dot"></div>
                                    </div>
                                    <h3 className="init-name-v4">{init.name}</h3>
                                    <p className="init-desc-v4">{init.desc}</p>
                                    <div className="init-footer-v4">
                                        <span>Learn More</span>
                                        <span className="init-arrow-v4">→</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <div className="centered-content mt-60">
                        <Link to="/industries" className="btn btn-primary">Explore All Initiatives</Link>
                    </div>
                </div>
            </section>

            {/* 9. WHY SANOTA - Redesigned to match Image 2 */}
            <section className="why-sanota-v5">
                <div className="why-hero-v5" style={{ backgroundImage: `url(${whySanotaBg})` }}>
                    <div className="why-overlay-v5"></div>
                    <div className="container">
                        <div className="why-header-v5">
                            <h2 className="why-title-v5">Why Sanota for Solutions</h2>
                            <p className="why-subtitle-v5">The advantages of an integrated engineering partner.</p>
                        </div>
                    </div>
                </div>

                <div className="why-cards-section-v5">
                    <div className="container">
                        <div className="why-grid-v5">
                            {[
                                { title: "Integrated Engineering", desc: "Single source for mechanical, electrical & digital engineering.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
                                { title: "Practical Approach", desc: "Designed for real-world operational environments.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                                { title: "Modernization First", desc: "Upgrading existing assets for maximum efficiency.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                                { title: "Digital Integration", desc: "Bringing data-driven insights to physical systems.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", highlighted: true },
                                { title: "Lifecycle Support", desc: "Long-term partnership beyond initial installation.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                                { title: "Multi-Industry Exp", desc: "Transferring best practices across diverse sectors.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" }
                            ].map((item, index) => (
                                <motion.div 
                                    className={`why-card-v5 ${item.highlighted ? 'highlighted' : ''}`} 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="why-icon-v5">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={item.icon}></path>
                                        </svg>
                                    </div>
                                    <h3 className="why-item-title-v5">{item.title}</h3>
                                    <p className="why-item-desc-v5">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FINAL CTA SECTION - Modern Light Theme */}
            <section className="solutions-final-cta section-padding light-theme">
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
                            <Link to="/contact" className="btn btn-secondary-outline dark-border cta-btn">Request Technical Consultation</Link>
                            <Link to="/contact" className="btn btn-secondary-outline dark-border cta-btn">Request System Assessment</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
