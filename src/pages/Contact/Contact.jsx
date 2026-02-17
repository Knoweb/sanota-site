import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry. We will get back to you soon.');
    };

    return (
        <div className="contact-page">
            {/* Dark Bar Header Section */}
            <div className="contact-page-header">
                <div className="container header-flex">
                    <h1>Contact Us</h1>
                    <div className="breadcrumbs">
                        <Link to="/" className="home-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                        </Link>
                        <span className="separator">&gt;</span>
                        <span className="current">Contact Us</span>
                    </div>
                </div>
            </div>

            <div className="container contact-content">
                {/* Contact Info Cards */}
                <div className="contact-info-grid">
                    <div className="info-card">
                        <div className="info-icon-wrapper">
                            <svg className="contact-social-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div className="info-details">
                            <h3>Phone</h3>
                            <p>+94 11 234 5678</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-icon-wrapper">
                            <svg className="contact-social-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div className="info-details">
                            <h3>Email</h3>
                            <p>info@sanota.lk</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-icon-wrapper">
                            <svg className="contact-social-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div className="info-details">
                            <h3>Office Address</h3>
                            <p>No.5, Charlie Mount Industrial zone, Udukuwa, Weligama, Sri Lanka</p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-section">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.306062758254!2d80.41968845!3d5.9727763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fce2187313d%3A0x651030cc4b3607f2!2sWeligama!5e0!3m2!1sen!2slk!4v1708170000000!5m2!1sen!2slk"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sanota Location"
                    ></iframe>
                </div>

                {/* Clean Inquiry Section (Split Layout) */}
                <div className="clean-inquiry-section">
                    <div className="inquiry-left-col">
                        <span className="inquiry-tagline">GET IN TOUCH</span>
                        <h2>Send Us an Inquiry</h2>
                        <p>
                            Fill out the form below and our team will get back to you as soon as
                            possible. Please provide as much detail as you can to help us
                            understand your needs better.
                        </p>

                        <div className="contact-social-icons">
                            <a href="#" className="contact-social-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" className="contact-social-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className="contact-social-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="inquiry-right-col">
                        <form onSubmit={handleSubmit} className="clean-inquiry-form">
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name (*)"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email (*)"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Your Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-row full-width">
                                <select
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Your Industry</option>
                                    <option value="manufacturing">Manufacturing</option>
                                    <option value="energy">Energy & Power</option>
                                    <option value="water">Water Treatment</option>
                                    <option value="pharmaceutical">Pharmaceutical</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-row full-width">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="form-submit">
                                <button type="submit" className="btn-submit">Send Inquiry</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
