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
                    <div className="trust-signals">
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <span className="trust-text">15+ Years Experience</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <span className="trust-text">250+ Engineering Projects</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <span className="trust-text">Multi-Industry Capability</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <span className="trust-text">Nationwide Implementation</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <span className="trust-text">Engineering + Digital Integration</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <span className="trust-text">Lifecycle Support Approach</span>
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

                            <div className="about-stats">
                                <div className="stat-item">
                                    <div className="stat-icon">✓</div>
                                    <div className="stat-text">15+ Years<br />Experience</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-icon">✓</div>
                                    <div className="stat-text">200+ Complete<br />Projects</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-icon">✓</div>
                                    <div className="stat-text">Trusted Engineering<br />Experts</div>
                                </div>
                            </div>

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

            {/* Services Section */}
            <section className="services-section">
                <div className="services-background" style={{ backgroundImage: `url(${picture4})` }}></div>
                <div className="services-overlay"></div>
                <div className="services-container">
                    <div className="services-header">
                        <p className="services-tagline">OUR SERVICES</p>
                        <h2 className="services-title">What We Offer &<br />What We Do.</h2>
                        <p className="services-subtitle">"Transforming industries with innovative, tailored, and future-focused, automated success delivery."</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <img src={systemIntegrationIcon} alt="System Integration" />
                            </div>
                            <h3 className="service-name">System Integration</h3>
                            <p className="service-description">Integrating all elements into the final system</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <img src={expertEngineeringIcon} alt="Expert Engineering" />
                            </div>
                            <h3 className="service-name">Expert Engineering</h3>
                            <p className="service-description">Certified experts for unparalleled automation systems</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <img src={strategicPlanningIcon} alt="Strategic Planning" />
                            </div>
                            <h3 className="service-name">Strategic Planning</h3>
                            <p className="service-description">Smart planning with clear roadmap and milestones</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <img src={lifecycleSupportIcon} alt="Lifecycle Support" />
                            </div>
                            <h3 className="service-name">Lifecycle Support</h3>
                            <p className="service-description">Full support to keep your systems running smoothly</p>
                        </div>
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
