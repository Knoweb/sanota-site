import { Helmet } from 'react-helmet-async';
import './Careers.css';
import heroBg from '../../assets/career pic.jpg'; // Using career pic for hero background
import careerImg from '../../assets/career2.png'; // Using one of the new images for the side content
import career3 from '../../assets/career3.png';
import career4 from '../../assets/career4.png';
import career5 from '../../assets/career5.png';
import career6 from '../../assets/career6.png';

import career10 from '../../assets/carrer10.jpg';

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

            {/* Life at Sanota Section */}
            <section className="life-at-sanota-section" style={{ backgroundImage: `url(${career10})` }}>
                <div className="life-overlay"></div>
                <div className="container life-content">
                    <div className="life-header">
                        <h2>Life at Sanota</h2>
                        <p className="life-subtitle">A workplace where engineering meets opportunity</p>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Years in Business</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">200+</span>
                            <span className="stat-label">Projects Delivered</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">30+</span>
                            <span className="stat-label">Team Members</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">6</span>
                            <span className="stat-label">Industries Served</span>
                        </div>
                    </div>

                    {/* Feature Card - Orange (Slider) */}
                    <div className="life-slider-wrapper">
                        <button className="slider-arrow left">←</button>
                        <div className="life-slider-card">
                            <h3>Real Engineering Work</h3>
                            <p>
                                At Sanota, you'll work on real industrial projects from day one. Our engineers
                                design, program, and commission automation systems for leading companies
                                across Sri Lanka. You'll gain hands-on experience with PLCs, SCADA systems,
                                industrial networks, and control panels.
                            </p>
                        </div>
                        <button className="slider-arrow right">→</button>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="open-positions-section">
                <div className="container">
                    <div className="section-header text-left">
                        <h2 className="section-title">Open Positions</h2>
                        <p className="section-subtitle">Current opportunities to join our team</p>
                    </div>

                    <div className="positions-grid">
                        {/* Position 1 */}
                        <div className="position-card">
                            <div className="position-image-wrapper">
                                <img src={career3} alt="Senior Automation Engineer" className="position-image" />
                            </div>
                            <div className="position-content">
                                <h3 className="position-title">Senior Automation Engineer</h3>
                                <button className="btn-see-more">See More...</button>
                            </div>
                        </div>

                        {/* Position 2 */}
                        <div className="position-card">
                            <div className="position-image-wrapper">
                                <img src={career4} alt="SCADA Software Developer" className="position-image" />
                            </div>
                            <div className="position-content">
                                <h3 className="position-title">SCADA Software Developer</h3>
                                <button className="btn-see-more">See More...</button>
                            </div>
                        </div>

                        {/* Position 3 */}
                        <div className="position-card">
                            <div className="position-image-wrapper">
                                <img src={career5} alt="Electrical Design Engineer" className="position-image" />
                            </div>
                            <div className="position-content">
                                <h3 className="position-title">Electrical Design Engineer</h3>
                                <button className="btn-see-more">See More...</button>
                            </div>
                        </div>

                        {/* Position 4 */}
                        <div className="position-card">
                            <div className="position-image-wrapper">
                                <img src={career6} alt="Project Engineer" className="position-image" />
                            </div>
                            <div className="position-content">
                                <h3 className="position-title">Project Engineer</h3>
                                <button className="btn-see-more">See More...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="application-form-section">
                <div className="container">
                    <div className="careers-form-wrapper">
                        <div className="form-header">
                            <h2 className="form-title">Submit Your Application</h2>
                            <p className="form-subtitle">Fill out the form below to apply</p>
                        </div>

                        <form className="application-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full name*</label>
                                    <input type="text" id="fullName" placeholder="Your full Name (*)" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address*</label>
                                    <input type="email" id="email" placeholder="Your Email (*)" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number*</label>
                                    <input type="tel" id="phone" placeholder="Your Phone Number" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="position">Position Applied For</label>
                                    <select id="position">
                                        <option value="" disabled selected>Select a position</option>
                                        <option value="Senior Automation Engineer">Senior Automation Engineer</option>
                                        <option value="SCADA Software Developer">SCADA Software Developer</option>
                                        <option value="Electrical Design Engineer">Electrical Design Engineer</option>
                                        <option value="Project Engineer">Project Engineer</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="cv">Upload CV (PDF or Doc)</label>
                                <div className="file-upload-wrapper">
                                    <input type="file" id="cv" accept=".pdf,.doc,.docx" className="file-input" />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="message">Cover letter/Message (Optional)</label>
                                <textarea id="message" rows="4" placeholder="Tell us why you're interested in this position..."></textarea>
                            </div>

                            <div className="form-submit">
                                <button type="submit" className="btn-submit-application">Submit Application</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Careers;
