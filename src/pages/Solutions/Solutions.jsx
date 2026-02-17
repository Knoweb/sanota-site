import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';
import success1 from '../../assets/succes1.png';
import success2 from '../../assets/succes2.png';
import success3 from '../../assets/succes3.png';
import success4 from '../../assets/succes4.png';
import success5 from '../../assets/picture455.png';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import pic1 from '../../assets/pic1.jpg';
import project1 from '../../assets/picture22.png';
import project2 from '../../assets/picture33.png';
import project3 from '../../assets/picture44.png';
import project4 from '../../assets/picture455.png';
import project5 from '../../assets/picture2.jpg';
import project6 from '../../assets/picture1.jpg';

function Solutions() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setVisibleCards(1);
            } else if (window.innerWidth <= 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const services = [
        {
            title: "INDUSTRIAL AUTOMATION (CORE)",
            description: "Optimizing your entire production line with advanced PLC & control systems.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.17.31a1.464 1.464 0 0 1-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.31-.17a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.17-.31a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.31.17a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.858 2.928 2.928 0 0 1 0 5.858z" />
                </svg>
            )
        },
        {
            title: "SCADA & DIGITALIZATION (SOFTWARE)",
            description: "Real-time visibility and data-driven insights for smarter decision making.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zm-3 8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4zm-3-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zM2 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3z" />
                </svg>
            )
        },
        {
            title: "ELECTRICAL ENGINEERING (POWER)",
            description: "End-to-end power distribution, switchgear, and industrial safety solutions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM9 2.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zM10.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zM2.5 10a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM9 10.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                </svg>
            )
        },
        {
            title: "RETROFITS & UPGRADES",
            description: "Modernizing legacy machinery to extend lifecycle and boost efficiency.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A4.902 4.902 0 0 1 8 2c2.723 0 5 2.277 5 5 0 1.956-1.144 3.642-2.8 4.433a.5.5 0 0 1-.4-.917C11.144 9.858 12 8.528 12 7c0-2.21-1.791-4-4-4zm-6.002 4a3.1 3.1 0 0 1 .012-.272.5.5 0 1 1 .984.181A1.996 1.996 0 0 0 3 7c0 1.105.895 2 2 2 1.105 0 2-.895 2-2 0-1.105-.895-2-2-2a.5.5 0 1 1 0-1c2.21 0 4 1.791 4 4 0 2.21-1.791 4-4 4-2.21 0-4-1.791-4-4z" />
                </svg>
            )
        },
        {
            title: "CONTROL PANEL DESIGN",
            description: "Custom-designed control panels and cabinets built to international standards.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 11.107V3.29c0-.592.441-1.107 1-1.107h12c.559 0 1 .515 1 1.107v7.817c0 .592-.441 1.107-1 1.107H2c-.559 0-1-.515-1-1.107zM2.5 3c-.276 0-.5.224-.5.5v7c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-7c0-.276-.224-.5-.5-.5h-11z" />
                    <path d="M3 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zM3 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zM3 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zM3 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                </svg>
            )
        },
        {
            title: "MAINTENANCE & SUPPORT (AMC)",
            description: "24/7 technical assistance and rapid response to minimize downtime.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0h-13zM1 1.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-13z" />
                </svg>
            )
        }
    ];

    const stories = [
        {
            tag: "Manufacturing",
            image: success1,
            challenge: "Manual packing caused delays.",
            solution: "Installed automated conveyor system.",
            result: "40% Increase in daily output."
        },
        {
            tag: "Water Treatment",
            image: success2,
            challenge: "High electricity bills in pump houses.",
            solution: "VFD Motor Control & SCADA monitoring.",
            result: "25% Reduction in energy costs."
        },
        {
            tag: "Energy",
            image: success3,
            challenge: "Frequent power trips.",
            solution: "Upgraded switchgear protection.",
            result: "100% Uptime for the last 12 months."
        },
        {
            tag: "Building Systems",
            image: success4,
            challenge: "Inefficient HVAC and lighting control.",
            solution: "Integrated Building Management System (BMS).",
            result: "30% reduction in utility costs."
        },
        {
            tag: "Food & Beverage",
            image: success5,
            challenge: "Manual temperature monitoring and logging.",
            solution: "IoT-based environmental monitoring & SCADA.",
            result: "Complete data traceability and 0 batches lost."
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    // Featured Projects Logic
    const [currentProjectSlide, setCurrentProjectSlide] = useState(0);

    const projects = [
        { id: 1, image: project1, name: 'Smart Factory Automation', category: 'Industrial' },
        { id: 2, image: project2, name: 'Water Treatment Facilities', category: 'Commercial' },
        { id: 3, image: project3, name: 'Power Distribution', category: 'Factory' },
        { id: 4, image: project4, name: 'Pharmaceutical Production', category: 'Industrial' },
        { id: 5, image: project5, name: 'Industrial Control Systems', category: 'Commercial' },
        { id: 6, image: project6, name: 'Quality Assurance Lab', category: 'Factory' }
    ];

    const totalProjectSlides = projects.length - 3; // Shows 4 at a time

    return (
        <div className="solutions-page">
            {/* Solutions Bar / Sub-header */}
            <div className="solutions-bar">
                <div className="container bar-content">
                    <h1 className="bar-title">Solutions</h1>
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <span className="separator"> &gt; </span>
                        <span className="current">Solutions</span>
                    </div>
                </div>
            </div>

            {/* Expertise Section - Styled like Home Services */}
            <section className="expertise-services-section">
                <div className="services-background" style={{ backgroundImage: `url(${picture4})` }}></div>
                <div className="services-overlay"></div>
                <div className="container services-container">
                    <div className="services-header text-center">
                        <p className="services-tagline">OUR EXPERTISE</p>
                        <h2 className="services-title">Engineering Solutions</h2>
                        <p className="services-subtitle">"Providing comprehensive industrial automation and engineering expertise to power your operational success."</p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div className="service-card" key={index}>
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-name">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="success-stories-section section" style={{ backgroundImage: `url(${picture3})` }}>
                <div className="success-overlay"></div>
                <div className="container stories-container">
                    <div className="stories-header text-center">
                        <span className="stories-tagline">See how we've helped businesses transform their operations</span>
                        <h2 className="stories-title">Success Stories</h2>
                    </div>

                    <div className="stories-carousel">
                        <div className="stories-track" style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}>
                            {stories.map((story, index) => (
                                <div className="story-card-wrapper" key={index}>
                                    <div className="story-card">
                                        <div className="story-image">
                                            <img src={story.image} alt={`${story.tag} Success`} />
                                            <div className="story-tag">{story.tag}</div>
                                        </div>
                                        <div className="story-details">
                                            <ul>
                                                <li><strong>Challenge:</strong> {story.challenge}</li>
                                                <li><strong>Solution:</strong> {story.solution}</li>
                                                <li><strong>Result:</strong> {story.result}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="stories-nav">
                        <button className="nav-btn prev" onClick={handlePrev}>←</button>
                        <div className="nav-dots">
                            {stories.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                        <button className="nav-btn next" onClick={handleNext}>→</button>
                    </div>
                </div>
            </section>

            {/* Project Inquiry Section */}

            {/* Project Inquiry Section */}
            <section className="inquiry-section">
                <div className="inquiry-bg-wrapper" style={{ backgroundImage: `url(${pic1})` }}>
                    <div className="inquiry-overlay"></div>
                </div>
                <div className="container inquiry-container">
                    <div className="inquiry-header text-center">
                        <span className="inquiry-tagline">24/7 TECHNICAL SUPPORT</span>
                        <h2 className="inquiry-main-title">Have a Project in Mind?</h2>
                    </div>

                    <div className="inquiry-content-wrapper">
                        <div className="inquiry-info-box">
                            <span className="info-tag">PROJECT INQUIRY</span>
                            <h3 className="info-title">NEED AN EXPERT OPINION?</h3>
                            <p className="info-text">
                                Reach out to our certified engineering team for a feasibility assessment and technical proposal. We're here to solve complex automation challenges.
                            </p>
                        </div>

                        <div className="inquiry-form-card">
                            <form className="inquiry-form">
                                <div className="form-row">
                                    <input type="text" placeholder="Your Name (*)" required />
                                    <input type="email" placeholder="Your Email (*)" required />
                                </div>
                                <div className="form-row">
                                    <input type="text" placeholder="Subject" />
                                    <select defaultValue="">
                                        <option value="" disabled>Business Department</option>
                                        <option value="automation">Industrial Automation</option>
                                        <option value="electrical">Electrical Engineering</option>
                                        <option value="software">SCADA & Digitalization</option>
                                        <option value="maintenance">Maintenance & Support</option>
                                    </select>
                                </div>
                                <textarea placeholder="Your Message" rows="5"></textarea>
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
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
                            {projects.slice(currentProjectSlide, currentProjectSlide + 4).map((project) => (
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
                        {Array.from({ length: totalProjectSlides }).map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${index === currentProjectSlide ? 'active' : ''}`}
                                onClick={() => setCurrentProjectSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Solutions;
