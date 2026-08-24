import { Link } from 'react-router-dom';
import './Footer.css';
import SanotaLogo from '../SanotaLogo/SanotaLogo';

function Footer() {
    return (
        <footer className="footer-new strategic-footer">
            
            <div className="container footer-main-content">
                <div className="footer-grid">
                    {/* Column 1: Brand & Message */}
                    <div className="footer-col brand-col">
                        <SanotaLogo className="footer-logo" />
                        <h4 className="brand-tagline">Integrated Engineering for Evolving Industries</h4>
                        <p className="brand-desc">
                            Delivering advanced automation, IoT, and mechanical engineering solutions 
                            that drive operational excellence across Sri Lanka.
                        </p>
                        <address className="footer-address">
                            No.5, Charlie Mount Industrial zone, Udukuwa,<br />
                            Weligama, Sri Lanka
                        </address>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col links-col">
                        <h4 className="col-title">Quick Links</h4>
                        <nav className="footer-nav-list">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/solutions">Solutions</Link>
                            <Link to="/case-studies">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </nav>
                    </div>

                    {/* Column 3: Resources & Downloads */}
                    <div className="footer-col resources-col">
                        <h4 className="col-title">Resources</h4>
                        <nav className="footer-nav-list">
                            <a href="#" className="resource-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                                Capability Overview
                            </a>
                            <Link to="/case-studies" className="resource-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                                Case Studies
                            </Link>
                            <Link to="/knowledge-centre" className="resource-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                </svg>
                                Knowledge Centre
                            </Link>
                            <a href="#" className="download-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                Company Profile
                            </a>
                        </nav>
                    </div>

                    {/* Column 4: Contact & Social */}
                    <div className="footer-col contact-col">
                        <h4 className="col-title">Contact</h4>
                        <div className="contact-details">
                            <a href="tel:+94771234567" className="contact-link phone-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="phone-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                +94 77 123 4567
                            </a>
                            <a href="mailto:info@sanota.lk" className="contact-link email-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="email-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                info@sanota.lk
                            </a>
                        </div>
                        
                        <h4 className="col-title mt-social">Connect With Us</h4>
                        <div className="footer-socials">
                            {/* LinkedIn First */}
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-name="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-name="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-name="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 5: Insights */}
                    <div className="footer-col insights-col">
                        <h4 className="col-title">Latest Insights</h4>
                        <ul className="footer-articles">
                            <li>
                                <Link to="/knowledge/retrofit-vs-replacement">When Retrofit is Better than Replacement</Link>
                            </li>
                            <li>
                                <Link to="/knowledge/automation-roi">Understanding Automation ROI</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Legal */}
            <div className="footer-bottom-bar">
                <div className="container bottom-content">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Sanota. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span className="divider">|</span>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
