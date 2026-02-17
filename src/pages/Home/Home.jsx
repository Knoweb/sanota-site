import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../assets/pic1.jpg';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture3.jpg';
import picture3 from '../../assets/picture5.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import systemIntegrationIcon from '../../assets/system-integration.png';
import expertEngineeringIcon from '../../assets/icon1 (1).png';
import strategicPlanningIcon from '../../assets/icon1 (2).png';
import lifecycleSupportIcon from '../../assets/icon1 (3).png';
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
                        <h1>End-to-End Automation <br /> & Engineering Partner</h1>
                        <p className="hero-subtitle">
                            Sanota delivers integrated automation, engineering, and
                            digital solutions from design and integration to retrofits,
                            software, and long-term support under one accountable
                            partner.
                        </p>
                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary">CONTACT US</Link>
                            <Link to="/case-studies" className="btn btn-secondary-outline">
                                SEE PROJECTS <span className="arrow">→</span>
                            </Link>
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
                                    <div className="stat-text">15+ Years Experience</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-icon">✓</div>
                                    <div className="stat-text">200+ Complete Projects</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-icon">✓</div>
                                    <div className="stat-text">Trusted Engineering Experts</div>
                                </div>
                            </div>

                            <Link to="/about" className="btn btn-primary">ABOUT US</Link>
                        </div>

                        {/* Right: Image Collage */}
                        <div className="about-images">
                            <div className="collage-left">
                                <img src={picture2} alt="Circuit Board Technology" className="left-image" />
                            </div>
                            <div className="collage-right">
                                <img src={picture3} alt="Engineering Work" className="right-image-top" />
                                <img src={picture4} alt="Technical Inspection" className="right-image-bottom" />
                            </div>
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
