import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './About.css';
import historyImage from '../../assets/old.png';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
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
                {/* History Section */}
                <section className="history-section">
                    <div className="history-content">
                        <span className="section-subtitle">ABOUT OUR COMPANY</span>
                        <h2 className="section-title">Our History</h2>

                        <div className="history-text">
                            <p>
                                Founded in 2009 with a vision to modernize Sri Lanka's industrial sector,
                                Sanota has grown from a specialized engineering team into a nationwide
                                leader in automation. Today, we power over 200 factories with cutting-edge
                                technology, ensuring they operate at maximum efficiency and safety.
                            </p>
                        </div>

                        <div className="features-grid">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <div className="feature-info">
                                    <h3>Turnkey Projects</h3>
                                    <p>End-to-end design & build</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <div className="feature-info">
                                    <h3>Sustainable Solutions</h3>
                                    <p>Energy efficiency & waste reduction</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <div className="feature-info">
                                    <h3>Advanced Automation</h3>
                                    <p>Robotics & PLC integration</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </div>
                                <div className="feature-info">
                                    <h3>Power Systems</h3>
                                    <p>High-voltage safety & distribution</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="history-image-wrapper">
                        <img src={historyImage} alt="Sanota History - Factory Floor" className="history-image" />
                        <div className="orange-accent-box"></div>
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

                    <div className="accordion-image-wrapper">
                        {/* Using picture3.jpg as it looks like a machine/factory image from Home.jsx imports */}
                        <img src="/src/assets/picture3.jpg" alt="Industrial Machine" className="accordion-image" />
                        <div className="accordion-orange-box"></div>
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
