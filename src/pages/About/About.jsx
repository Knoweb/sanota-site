import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';
import historyImage from '../../assets/old.png';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import picture2 from '../../assets/picture3.jpg';
import picture3 from '../../assets/picture5.jpg';
import picture4 from '../../assets/picture4.jpg';
import { CountUp } from '../../components/AnimatedStats/AnimatedStats';

function About() {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const accordionData = [
        {
            title: "COMPLETE PRODUCTION LINE INSTALLATION",
            content: "From concept to commissioning, we handle the entire setup of your manufacturing facility. Our team ensures seamless integration of mechanical, electrical, and control systems for maximum operational efficiency."
        },
        {
            title: "CUSTOM CONTROL PANEL FABRICATION",
            content: "We design and build custom control panels tailored to your specific industrial needs, ensuring safety, reliability, and compliance with international standards."
        },
        {
            title: "INDUSTRIAL PIPING & UTILITY SYSTEMS",
            content: "Expert installation of industrial piping for water, steam, compressed air, and other utilities, designed for durability and optimal flow performance."
        },
        {
            title: "MACHINE RETROFITTING & OVERHAUL",
            content: "Extending the lifespan of your existing machinery through modern control upgrades, mechanical overhauls, and performance optimization."
        }
    ];

    return (
        <div className="about-page">
            <Helmet>
                <title>About Sanota | Leading Automation Engineering Company in Sri Lanka</title>
                <meta name="description" content="Learn about Sanota's 15+ year journey in industrial automation." />
            </Helmet>

            {/* Hero Section */}
            <div className="about-hero-section">
                <div className="container">
                    <div className="hero-inner">
                        <h1 className="about-hero-title">About Sanota</h1>
                        <div className="breadcrumbs">
                            <Link to="/" className="breadcrumb-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                                </svg>
                            </Link>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-current">About Sanota</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {/* About Section (Transferred from Home) */}
                <section className="about-section">
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
                </section>


            </div>

            {/* Application Form Section (Removed from here, ensuring it's not needed or if it was part of previous instructions. 
               Wait, the user asked for "What We Did" and "Testimonials".
               I will add them here.) */}

            {/* Results Section */}
            <section className="results-section">
                <div className="results-overlay"></div>
                <div className="container">
                    <span className="section-subtitle-center">OUR RESULTS</span>
                    <h2 className="section-title-center text-white">What We Did?</h2>

                    <div className="results-grid">
                        <div className="result-item fade-in-up" style={{ animationDelay: '0s' }}>
                            <span className="result-number">
                                <CountUp end={15} duration={3000} suffix="+" />
                            </span>
                            <p className="result-label">Years of Experience</p>
                        </div>
                        <div className="result-item fade-in-up" style={{ animationDelay: '0.15s' }}>
                            <span className="result-number">
                                <CountUp end={200} duration={3000} suffix="+" />
                            </span>
                            <p className="result-label">Successful Projects</p>
                        </div>
                        <div className="result-item fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <span className="result-number">
                                <CountUp end={50} duration={3000} suffix="+" />
                            </span>
                            <p className="result-label">Loyal Clients</p>
                        </div>
                        <div className="result-item fade-in-up" style={{ animationDelay: '0.45s' }}>
                            <span className="result-number">
                                <CountUp end={9} duration={3000} suffix="" />
                            </span>
                            <p className="result-label">Provinces Covered</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="about-testimonials-section">
                <div className="container">
                    <span className="section-subtitle-center text-blue">TESTIMONIALS</span>
                    <h2 className="section-title-center text-black">What Clients Say?</h2>

                    <div className="testimonial-carousel-container">
                        <button className="nav-arrow left-arrow">←</button>

                        <div className="testimonial-card-dark">
                            <div className="testimonial-user-image">
                                {/* Using client1.png as placeholder */}
                                <img src="/src/assets/client1.png" alt="Client" />
                            </div>
                            <p className="testimonial-quote">
                                "We upgraded our hotel's central air conditioning and BMS system with Sanota. The energy savings have been remarkable, and their maintenance team is always just a call away."
                            </p>
                            <div className="testimonial-author">
                                <h4>Nimal Perera</h4>
                                <p>Engineer</p>
                            </div>
                        </div>

                        <button className="nav-arrow right-arrow">→</button>
                    </div>
                </div>
            </section>
            {/* Services Accordion Section */}
            <section className="services-accordion-section">
                <div className="container accordion-container">
                    <div className="accordion-content">
                        {accordionData.map((item, index) => (
                            <div
                                key={index}
                                className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className={`accordion-header ${activeAccordion === index ? 'active' : ''}`}>
                                    <span>{item.title}</span>
                                    <span className="accordion-icon">
                                        {activeAccordion === index ? '−' : '+'}
                                    </span>
                                </div>
                                <div className={`accordion-body ${activeAccordion === index ? 'open' : ''}`}>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="accordion-image-wrapper" style={{ position: 'relative' }}>
                        {/* Background Blue Shape with smooth scale-in and infinite float */}
                        <motion.div
                            style={{ position: 'absolute', bottom: '-30px', right: '-30px', zIndex: 1 }}
                            initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                            transition={{ duration: 1.1, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                className="accordion-orange-box"
                                style={{ position: 'relative', bottom: 'auto', right: 'auto' }}
                                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                            ></motion.div>
                        </motion.div>

                        {/* Image Engine Animation with continuous float and hover scale */}
                        <motion.div
                            initial={{ opacity: 0, y: 60, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            style={{ position: 'relative', zIndex: 2 }}
                        >
                            <motion.img
                                src="/src/assets/picture3.jpg"
                                alt="Industrial Machine"
                                className="accordion-image"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    y: { repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.2 }
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    transition: { duration: 0.4, ease: 'easeOut' }
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Clients Logo Marquee Section */}
            <section className="partners">
                <div className="container">
                    <div className="logo-marquee">
                        <div className="logo-track">
                            {/* Set 1 */}
                            <img src={logo1} alt="Client 1" />
                            <img src={logo2} alt="Client 2" />
                            <img src={logo3} alt="Client 3" />
                            <img src={logo4} alt="Client 4" />
                            <img src={logo5} alt="Client 5" />

                            {/* Set 2 (Duplicate for seamless loop) */}
                            <img src={logo1} alt="Client 1" />
                            <img src={logo2} alt="Client 2" />
                            <img src={logo3} alt="Client 3" />
                            <img src={logo4} alt="Client 4" />
                            <img src={logo5} alt="Client 5" />

                            {/* Set 3 (Extra duplication for wide screens) */}
                            <img src={logo1} alt="Client 1" />
                            <img src={logo2} alt="Client 2" />
                            <img src={logo3} alt="Client 3" />
                            <img src={logo4} alt="Client 4" />
                            <img src={logo5} alt="Client 5" />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default About;
