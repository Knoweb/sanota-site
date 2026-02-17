import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        inquiryType: 'general',
        name: '',
        company: '',
        email: '',
        phone: '',
        industry: '',
        message: '',
        preferredContact: 'email'
    });

    const [formStatus, setFormStatus] = useState({ type: '', message: '' });

    const inquiryCategories = [
        { value: 'general', label: 'General Inquiry', icon: '💬' },
        { value: 'quote', label: 'Request Quote', icon: '💰' },
        { value: 'technical', label: 'Technical Support', icon: '🔧' },
        { value: 'partnership', label: 'Partnership Opportunity', icon: '🤝' },
        { value: 'careers', label: 'Career Inquiry', icon: '👔' },
        { value: 'other', label: 'Other', icon: '📋' }
    ];

    const industries = [
        'Manufacturing',
        'Water & Wastewater',
        'Energy & Power',
        'Food & Beverage',
        'Building Automation',
        'Pharmaceuticals',
        'Other'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ type: 'loading', message: 'Sending your inquiry...' });

        // Simulate form submission (in production, this would send to your backend/email service)
        setTimeout(() => {
            setFormStatus({
                type: 'success',
                message: 'Thank you! Your inquiry has been received. We will get back to you within 24 hours.'
            });

            // Reset form
            setFormData({
                inquiryType: 'general',
                name: '',
                company: '',
                email: '',
                phone: '',
                industry: '',
                message: '',
                preferredContact: 'email'
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setFormStatus({ type: '', message: '' });
            }, 5000);
        }, 1500);
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us | Sanota Automation Engineering</title>
                <meta name="description" content="Get in touch with Sanota for automation solutions, technical support, quotes, or partnership opportunities. Multiple ways to reach us." />
                <meta name="keywords" content="contact Sanota, automation inquiry, request quote, technical support, Sri Lanka automation" />
            </Helmet>

            {/* Hero Section */}
            <section className="contact-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>Get in Touch</h1>
                        <p className="hero-subtitle">
                            We're here to help with your automation needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="contact-methods section bg-gray-50">
                <div className="container">
                    <div className="contact-methods-grid">
                        <div className="contact-method-card">
                            <div className="method-icon">📞</div>
                            <h3>Phone</h3>
                            <p className="method-value">+94 11 234 5678</p>
                            <p className="method-hours">Mon-Fri: 8:00 AM - 5:00 PM</p>
                        </div>
                        <div className="contact-method-card">
                            <div className="method-icon">📧</div>
                            <h3>Email</h3>
                            <p className="method-value">info@sanota.lk</p>
                            <p className="method-hours">24/7 - We respond within 24 hours</p>
                        </div>
                        <div className="contact-method-card">
                            <div className="method-icon">📍</div>
                            <h3>Office</h3>
                            <p className="method-value">No.5, Charlie Mount Industrial zone</p>
                            <p className="method-hours">Udukawa, Weligama, Sri Lanka</p>
                        </div>
                        <div className="contact-method-card">
                            <div className="method-icon">🚨</div>
                            <h3>Emergency Support</h3>
                            <p className="method-value">+94 77 123 4567</p>
                            <p className="method-hours">24/7 for existing clients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section className="inquiry-form-section section">
                <div className="container">
                    <div className="form-layout">
                        <div className="form-intro">
                            <h2>Send Us an Inquiry</h2>
                            <p>
                                Fill out the form below and our team will get back to you as soon as possible.
                                Please provide as much detail as you can to help us understand your needs better.
                            </p>

                            <div className="inquiry-types">
                                <h4>Select Inquiry Type:</h4>
                                <div className="inquiry-types-grid">
                                    {inquiryCategories.map((category) => (
                                        <button
                                            key={category.value}
                                            type="button"
                                            className={`inquiry-type-btn ${formData.inquiryType === category.value ? 'active' : ''}`}
                                            onClick={() => setFormData(prev => ({ ...prev, inquiryType: category.value }))}
                                        >
                                            <span className="inquiry-icon">{category.icon}</span>
                                            <span className="inquiry-label">{category.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="form-container">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your company name"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+94 XX XXX XXXX"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="industry">Industry</label>
                                    <select
                                        id="industry"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select your industry</option>
                                        {industries.map((industry) => (
                                            <option key={industry} value={industry}>{industry}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Please describe your inquiry in detail..."
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Preferred Contact Method</label>
                                    <div className="radio-group">
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="preferredContact"
                                                value="email"
                                                checked={formData.preferredContact === 'email'}
                                                onChange={handleChange}
                                            />
                                            <span>Email</span>
                                        </label>
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="preferredContact"
                                                value="phone"
                                                checked={formData.preferredContact === 'phone'}
                                                onChange={handleChange}
                                            />
                                            <span>Phone</span>
                                        </label>
                                    </div>
                                </div>

                                {formStatus.message && (
                                    <div className={`form-status ${formStatus.type}`}>
                                        {formStatus.message}
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary btn-lg btn-submit">
                                    {formStatus.type === 'loading' ? 'Sending...' : 'Send Inquiry'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section section bg-gray-50">
                <div className="container">
                    <h2 className="text-center">Visit Our Office</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9876543210!2d80.4289!3d5.9739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNTgnMjYuMCJOIDgwwrAyNSc0NC4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sanota Office Location - Weligama"
                        ></iframe>
                        <div className="map-address-info">
                            <p><strong>📍 No.5, Charlie Mount Industrial zone, Udukawa, Weligama, Sri Lanka</strong></p>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Weligama,Sri+Lanka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>What is your typical response time?</h4>
                            <p>We respond to all inquiries within 24 hours during business days. For urgent technical support, our emergency line is available 24/7 for existing clients.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you provide on-site consultations?</h4>
                            <p>Yes, we offer free on-site consultations for potential projects. Contact us to schedule a visit from our technical team.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What areas do you serve?</h4>
                            <p>We serve clients across all provinces in Sri Lanka, with our main office in Colombo and project execution capabilities nationwide.</p>
                        </div>
                        <div className="faq-item">
                            <h4>How do I get a project quote?</h4>
                            <p>Select "Request Quote" as your inquiry type and provide details about your project. Our team will prepare a detailed proposal within 3-5 business days.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
