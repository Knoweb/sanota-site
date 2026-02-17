import { Helmet } from 'react-helmet-async';
import './Careers.css';
import heroBg from '../../assets/career pic.jpg'; // Using career pic for hero background
import careerImg from '../../assets/img2.png'; // Using one of the new images for the side content

function Careers() {
    return (
        <div className="careers-page">
            <Helmet>
                <title>Careers | Sanota</title>
                <meta name="description" content="Build Your Career with Sanota - Join a team committed to engineering excellence." />
            </Helmet>

            {/* Hero Section */}
            <div className="careers-hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title">Build Your Career with Sanota</h1>
                    <p className="hero-subtitle">Join a team committed to engineering excellence, continuous learning, and long-term growth</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">View Open Positions</button>
                        <button className="btn-secondary">Apply Now</button>
                    </div>
                </div>
            </div>

            {/* Why Build Your Career Section */}
            <section className="why-careers-section">
                <div className="container">
                    <div className="why-careers-grid">
                        {/* Text Content */}
                        <div className="why-careers-content">
                            <span className="section-label">Mission & Vision Focused</span>
                            <h2 className="section-title">Why Build Your Career at Sanota?</h2>
                            <p className="section-description">
                                At Sanota, you don't just find a job; you build a future in automation excellence. Join a team where cutting-edge technology meets real-world engineering challenges. We empower our people to innovate, lead, and drive the industrial revolution of Sri Lanka, providing a platform for continuous learning and professional growth.
                            </p>

                            <div className="benefits-list">
                                <div className="benefit-item">
                                    <div className="check-icon">✔</div>
                                    <span>Career Advancement Opportunities</span>
                                </div>
                                <div className="benefit-item">
                                    <div className="check-icon">✔</div>
                                    <span>Exposure to Diverse Industrial Projects</span>
                                </div>
                                <div className="benefit-item">
                                    <div className="check-icon">✔</div>
                                    <span>Comprehensive Training Programs</span>
                                </div>
                                <div className="benefit-item">
                                    <div className="check-icon">✔</div>
                                    <span>Competitive Salary Packages</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="why-careers-image-wrapper">
                            <img src={careerImg} alt="Engineering Team at Sanota" className="why-careers-image" />
                            <div className="image-accent-border"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Careers;
