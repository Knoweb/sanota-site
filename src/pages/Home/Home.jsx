import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pic1 from '../../assets/pic1.jpg';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture3.jpg';
import picture3 from '../../assets/picture5.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import systemIntegrationIcon from '../../assets/system-integration.png';
import expertEngineeringIcon from '../../assets/plc-icon-1.png';
import strategicPlanningIcon from '../../assets/plc-icon-2.png';
import lifecycleSupportIcon from '../../assets/plc-icon-3.png';
import project1 from '../../assets/picture22.png';
import project2 from '../../assets/picture33.png';
import project3 from '../../assets/picture44.png';
import project4 from '../../assets/picture455.png';
import client1 from '../../assets/client1.png';
import old from '../../assets/old.png';
import project5 from '../../assets/picture2.jpg';
import project6 from '../../assets/picture1.jpg';
import './Home.css';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        { id: 1, image: project1, name: 'Smart Factory Automation', category: 'Industrial' },
        { id: 2, image: project2, name: 'Water Treatment Facilities', category: 'Commercial' },
        { id: 3, image: project3, name: 'Power Distribution', category: 'Factory' },
        { id: 4, image: project4, name: 'Pharmaceutical Production', category: 'Industrial' },
        { id: 5, image: project5, name: 'Industrial Control Systems', category: 'Commercial' },
        { id: 6, image: project6, name: 'Quality Assurance Lab', category: 'Factory' }
    ];

    const totalSlides = projects.length - 3; // Shows 4 at a time, so 3 slides total

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Auto-rotate Hero lines
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    // Testimonials Logic
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            image: client1,
            name: 'Eng. Saneera Silva',
            title: 'Chief Engineer, National Water Board',
            quote: 'Finding an engineering partner who truly understands 24/7 industrial operations is difficult. Sanota\'s rapid response team and technical expertise have been the backbone of our plant\'s continuous uptime.'
        },
        {
            id: 2,
            image: client1,
            name: 'Mr. David Perera',
            title: 'Operations Director, Lanka Manufacturing',
            quote: 'Sanota delivered our automation project ahead of schedule and with exceptional quality. Their attention to detail and commitment to safety is unmatched in the industry.'
        },
        {
            id: 3,
            image: client1,
            name: 'Ms. Sarah Johnson',
            title: 'Facility Manager, Global Textiles',
            quote: 'We rely on Sanota for all our electrical maintenance needs. Their team is professional, knowledgeable, and always available when we need them most.'
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background" style={{ backgroundImage: `url(${pic1})` }}></div>
                <div className="hero-overlay"></div>

                <div className="container hero-container">
                    <div className="hero-content">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Integrated Engineering <br />
                            <span className="accent-text">for Evolving Industries</span>
                        </motion.h1>

                        <div className="rotating-text-wrapper">
                            <motion.p
                                className="hero-rotating-line"
                                key={currentSlide % 2 === 0 ? "line1" : "line2"}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                            >
                                {currentSlide % 2 === 0 
                                    ? "Designed, Built, Integrated, and Supported by One Team"
                                    : "Automation, Digital Integration, and Lifecycle Support under One Accountable Partner"}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <p className="hero-subtitle">
                                Sanota develops engineering, automation, and digital solutions that 
                                improve productivity, reliability, and operational performance 
                                across industries.
                            </p>
                            <div className="hero-cta">
                                <Link to="/contact" className="btn btn-primary">DISCUSS YOUR REQUIREMENT</Link>
                                <Link to="/solutions" className="btn btn-secondary-outline">
                                    EXPLORE SOLUTIONS <span className="arrow">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Signal Strip */}
            <section className="trust-signal-strip">
                <div className="container trust-container">
                    <div className="trust-grid">
                        <div className="trust-card">
                            <h3 className="trust-number">15+</h3>
                            <p className="trust-label">YEARS EXPERIENCE</p>
                        </div>
                        <div className="trust-card">
                            <h3 className="trust-number">250+</h3>
                            <p className="trust-label">ENGINEERING PROJECTS</p>
                        </div>
                        <div className="trust-card">
                            <h3 className="trust-number">MULTI</h3>
                            <p className="trust-label">INDUSTRY CAPABILITY</p>
                        </div>
                        <div className="trust-card">
                            <h3 className="trust-number">NATION</h3>
                            <p className="trust-label">WIDE IMPLEMENTATION</p>
                        </div>
                        <div className="trust-card">
                            <h3 className="trust-number">ENG+DIGITAL</h3>
                            <p className="trust-label">INTEGRATION</p>
                        </div>
                        <div className="trust-card">
                            <h3 className="trust-number">LIFECYCLE</h3>
                            <p className="trust-label">SUPPORT APPROACH</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        {/* Left: Text Content */}
                        <div className="about-content">
                            <p className="about-tagline">ABOUT OUR COMPANY</p>
                            <h2>We Engineer Innovation, We Are Sanota</h2>
                            <p className="about-description">
                                Founded in 2008, Sanota has grown into one of Sri Lanka's trusted names in
                                industrial automation and engineering solutions. With over 15 years of
                                experience and 200+ completed projects, we deliver innovative automation
                                systems backed by technical expertise, quality, and reliability.
                            </p>

                            <Link to="/about" className="btn btn-primary">ABOUT US</Link>
                        </div>

                        {/* Right: Image Collage */}
                        <div className="about-images">
                            {/* Background Grey Box */}
                            <motion.div
                                className="collage-bg-box"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                            ></motion.div>

                            {/* Image 1: Top Right */}
                            <motion.div
                                className="collage-top-right"
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <motion.img
                                    src={picture3}
                                    alt="Engineering Work"
                                    className="image-cover"
                                    animate={{ y: [0, -8, 0], rotate: [0, -0.5, 0] }}
                                    transition={{
                                        y: { repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 },
                                        rotate: { repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.5 }
                                    }}
                                />
                            </motion.div>

                            {/* Image 2: Left Middle (Largest) */}
                            <motion.div
                                className="collage-left"
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <motion.img
                                    src={picture2}
                                    alt="Circuit Board Technology"
                                    className="image-cover"
                                    animate={{ y: [0, -10, 0], x: [0, 5, 0], rotate: [0, 0.5, 0] }}
                                    transition={{
                                        y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                                        x: { repeat: Infinity, duration: 8.5, ease: "easeInOut" },
                                        rotate: { repeat: Infinity, duration: 10, ease: "easeInOut" }
                                    }}
                                />
                            </motion.div>

                            {/* Image 3: Bottom Right */}
                            <motion.div
                                className="collage-bottom-right"
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <motion.img
                                    src={picture4}
                                    alt="Technical Inspection"
                                    className="image-cover"
                                    animate={{ y: [0, -6, 0], x: [0, -4, 0] }}
                                    transition={{
                                        y: { repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 },
                                        x: { repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 1 }
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capability Areas (5 Pillars) */}
            <section className="capabilities-section">
                <div className="capabilities-header">
                    <p className="capabilities-tagline">CORE CAPABILITY AREAS</p>
                    <h2 className="capabilities-title">Integrated Capability Across the <br />Full System Lifecycle</h2>
                </div>

                <div className="capabilities-ticker-wrapper">
                    <motion.div 
                        className="capabilities-ticker-content"
                    >
                        {/* First set of 5 cards */}
                        {[1, 2].map((set) => (
                            <React.Fragment key={set}>
                                <div className="capability-card">
                                    <div className="capability-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    </div>
                                    <h3 className="capability-card-title">End-to-End Engineering & Automation</h3>
                                    <p className="capability-card-description">Custom-designed engineering and automation systems aligned with operational realities.</p>
                                </div>

                                <div className="capability-card">
                                    <div className="capability-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
                                    </div>
                                    <h3 className="capability-card-title">Sanota Developed Products</h3>
                                    <p className="capability-card-description">Field-proven engineered systems designed for repeatable industrial applications.</p>
                                </div>

                                <div className="capability-card">
                                    <div className="capability-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                    </div>
                                    <h3 className="capability-card-title">Software & Digital Solutions</h3>
                                    <p className="capability-card-description">Monitoring, automation, and operational intelligence platforms developed together with Knoweb.</p>
                                </div>

                                <div className="capability-card">
                                    <div className="capability-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 2v6h6"></path><path d="M2.66 15.57a10 10 0 1 0 .57-8.38"></path></svg>
                                    </div>
                                    <h3 className="capability-card-title">Retrofit & System Modernization</h3>
                                    <p className="capability-card-description">Improving performance and extending life of existing systems without unnecessary replacement.</p>
                                </div>

                                <div className="capability-card">
                                    <div className="capability-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                                    </div>
                                    <h3 className="capability-card-title">Lifecycle Support & AMC</h3>
                                    <p className="capability-card-description">Long-term engineering support ensuring sustained operational reliability.</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>

                <div className="capabilities-cta">
                    <Link to="/solutions" className="btn btn-primary">EXPLORE ALL SOLUTIONS</Link>
                </div>
            </section>

            {/* Industry Initiatives */}
            <section className="initiatives-section">
                <div className="initiatives-header">
                    <p className="initiatives-tagline">INDUSTRY INITIATIVES</p>
                    <h2 className="initiatives-title">Engineering Initiatives Supporting Industry Development</h2>
                    <p className="initiatives-subtitle">Sanota actively develops engineering solutions addressing structural challenges observed across selected industries.</p>
                </div>

                <div className="initiatives-ticker-wrapper">
                    <motion.div 
                        className="initiatives-ticker-content"
                    >
                        {[1, 2].map((set) => (
                            <React.Fragment key={set}>
                                <div className="initiative-card">
                                    <div className="initiative-card-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"></path><path d="M3 21v-3l9-9"></path><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l-3-3Z"></path><path d="M22 22v-3l-5-5-3 3 5 5h3Z"></path></svg>
                                    </div>
                                    <div className="initiative-card-content">
                                        <h3 className="initiative-card-title">Tea Industry Modernization</h3>
                                        <ul className="initiative-list">
                                            <li>process automation</li>
                                            <li>energy-efficient drying</li>
                                            <li>quality consistency</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="initiative-card">
                                    <div className="initiative-card-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a9 9 0 0 1-18 0c0-1.5.1-3 .4-4.4"></path><path d="m13 22-3-3"></path><path d="m15 22-4-4"></path></svg>
                                    </div>
                                    <div className="initiative-card-content">
                                        <h3 className="initiative-card-title">Smart Controlled Agriculture</h3>
                                        <ul className="initiative-list">
                                            <li>greenhouse systems</li>
                                            <li>fertigation automation</li>
                                            <li>precision agriculture</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="initiative-card">
                                    <div className="initiative-card-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                                    </div>
                                    <div className="initiative-card-content">
                                        <h3 className="initiative-card-title">Smart Industrial Systems</h3>
                                        <ul className="initiative-list">
                                            <li>IoT monitoring</li>
                                            <li>workflow visibility</li>
                                            <li>performance analytics</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="initiative-card">
                                    <div className="initiative-card-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                                    </div>
                                    <div className="initiative-card-content">
                                        <h3 className="initiative-card-title">Energy & Resource Efficiency</h3>
                                        <ul className="initiative-list">
                                            <li>monitoring systems</li>
                                            <li>efficiency engineering</li>
                                            <li>sustainability solutions</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="initiative-card">
                                    <div className="initiative-card-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 20.2A9 9 0 1 0 3.8 3.8a9 9 0 1 0 16.4 16.4Z"></path><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M12 12v10"></path><path d="m12 12 4 4"></path><path d="m12 12-4 4"></path></svg>
                                    </div>
                                    <div className="initiative-card-content">
                                        <h3 className="initiative-card-title">Environmental Systems</h3>
                                        <ul className="initiative-list">
                                            <li>Waste Water Management</li>
                                            <li>Emission Control</li>
                                            <li>Waste to Energy</li>
                                        </ul>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>

                <div className="initiatives-cta">
                    <Link to="/initiatives" className="btn btn-secondary-outline">EXPLORE INDUSTRY INITIATIVES <span className="arrow">→</span></Link>
                </div>
            </section>

            {/* Industries Served */}
            <section className="industries-served-section">
                <div className="container">
                    <div className="industries-header">
                        <p className="industries-count">9+ Industries Served</p>
                        <h2 className="industries-title">Engineering Experience Across <br />Diverse Industries</h2>
                    </div>

                    <div className="industries-grid">
                        {[
                            { name: "Manufacturing", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg> },
                            { name: "Food Processing", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12 2.1 12.5A10 10 0 1 1 12 2v10z"></path></svg> },
                            { name: "Tea Industry", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a9 9 0 0 1-18 0c0-1.5.1-3 .4-4.4"></path></svg> },
                            { name: "Agriculture", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"></path><path d="M10 20c5.5 0 8-10 8-10"></path><path d="M14 20c-5.5 0-8-10-8-10"></path></svg> },
                            { name: "Logistics", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L17 7h-3"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg> },
                            { name: "Infrastructure", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 4v.01"></path><path d="M16 4v.01"></path><path d="M12 4v.01"></path><path d="M12 8v.01"></path><path d="M12 12v.01"></path></svg> },
                            { name: "Institutions", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
                            { name: "Energy", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg> },
                            { name: "Environmental Systems", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 20.2A9 9 0 1 0 3.8 3.8a9 9 0 1 0 16.4 16.4Z"></path><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M12 12v10"></path><path d="m12 12 4 4"></path><path d="m12 12-4 4"></path></svg> }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                className="industry-item"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="industry-icon-box">
                                    {item.icon}
                                </div>
                                <p className="industry-name">{item.name}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="industries-cta">
                        <Link to="/industries" className="btn btn-primary">VIEW INDUSTRIES</Link>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="differentiation-section">
                <div className="container">
                    <div className="diff-header">
                        <p className="diff-tagline">OUR ADVANTAGE</p>
                        <h2 className="diff-title">Why Organizations Work with Sanota</h2>
                    </div>

                    <div className="diff-grid">
                        {[
                            { title: "Single-point accountability", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> },
                            { title: "Engineering + software integration", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg> },
                            { title: "Modernization before replacement", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg> },
                            { title: "Experience-led engineering decisions", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"></path></svg> },
                            { title: "Long-term partnership mindset", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
                            { title: "Lifecycle responsibility", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M3 21v-5h5"></path></svg> },
                            { title: "Aligned with company philosophy", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m16.2 7.8-2 2"></path><path d="m7.8 16.2 2-2"></path><path d="M12 12V4"></path><path d="M12 12h8"></path><path d="M12 12l5.7 5.7"></path></svg> }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                className="diff-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="diff-icon-circle">
                                    {item.icon}
                                </div>
                                <span className="diff-text">{item.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="projects-section">
                <div className="projects-container">
                    <div className="projects-header">
                        <div className="projects-header-left">
                            <p className="projects-tagline">LATEST PROJECTS</p>
                            <h2 className="projects-title">Featured Projects</h2>
                        </div>
                        <Link to="/case-studies" className="btn btn-primary">PROJECTS</Link>
                    </div>
                    <div className="projects-carousel">
                        <div className="projects-grid">
                            {projects.slice(currentSlide, currentSlide + 4).map((project) => (
                                <div key={project.id} className="project-card">
                                    <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                                    <div className="project-overlay">
                                        <h3 className="project-name">{project.name}</h3>
                                        <p className="project-category">{project.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="carousel-dots">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="testimonials-container">
                    <div className="testimonials-header">
                        <p className="testimonials-tagline">TESTIMONIALS</p>
                        <h2 className="testimonials-title">What Clients Say?</h2>
                    </div>

                    <div className="testimonials-carousel">
                        <div className="testimonial-card">
                            <button className="testimonial-btn prev" onClick={prevTestimonial}>
                                ←
                            </button>

                            <div className="testimonial-image-wrapper">
                                <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="testimonial-image" />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-quote">"{testimonials[currentTestimonial].quote}"</p>
                                <div className="testimonial-author">
                                    <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                                    <p className="author-title">{testimonials[currentTestimonial].title}</p>
                                </div>
                            </div>

                            <button className="testimonial-btn next" onClick={nextTestimonial}>
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="history-section">
                <div className="coverage-content-wrapper">
                    <div className="history-grid">
                        <div className="history-image-container">
                            <div className="history-square-top"></div>
                            <img src={old} alt="Factory History" className="history-image" />
                            <div className="history-square-bottom">
                                <span className="history-count">200+</span>
                                <span className="history-label">Projects Done</span>
                            </div>
                        </div>
                        <div className="history-content">
                            <span className="history-tagline">Our History</span>
                            <h2 className="history-title">Engineering Excellence Since 2009</h2>
                            <p className="history-description">
                                Started as a specialized engineering team, Sanota has grown into Sri Lanka's leading partner for end-to-end industrial automation. Over the last 15 years, we have modernized factories, secured critical infrastructure, and delivered innovative engineering solutions that power the nation's industries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="news-section">
                <div className="news-container">
                    <div className="news-header">
                        <p className="news-tagline">LATEST NEWS</p>
                        <h2 className="news-title">Don't Miss Anything</h2>
                    </div>
                    <div className="news-grid">
                        <div className="news-card">
                            <div className="news-image-wrapper">
                                <img src={project4} alt="Industry 4.0" className="news-image" />
                                <div className="news-overlay">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <line x1="3" y1="18" x2="21" y2="18"></line>
                                    </svg>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className="news-date">10 Feb 2026</div>
                                <h3 className="news-headline">Industry 4.0 in Sri Lanka</h3>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-image-wrapper">
                                <img src={project3} alt="Smart Grid Savings" className="news-image" />
                                <div className="news-overlay">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <line x1="3" y1="18" x2="21" y2="18"></line>
                                    </svg>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className="news-date">25 Jan 2026</div>
                                <h3 className="news-headline">Smart Grid Savings</h3>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-image-wrapper">
                                <img src={project2} alt="Retrofit or Replace" className="news-image" />
                                <div className="news-overlay">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <line x1="3" y1="18" x2="21" y2="18"></line>
                                    </svg>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className="news-date">12 Jan 2026</div>
                                <h3 className="news-headline">Retrofit or Replace</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
