import { Link } from 'react-router-dom';
import './Footer.css';
import sanotalogo from '../../assets/sanotalogo.png';

function Footer() {
    return (
        <footer className="footer-new strategic-footer">
            <div className="footer-top-border"></div>
            
            <div className="container footer-main-content">
                <div className="footer-grid">
                    {/* Column 1: Brand & Message */}
                    <div className="footer-col brand-col">
                        <img src={sanotalogo} alt="SANOTA" className="footer-logo" />
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
                            <a href="#" className="download-link primary-download">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Download Company Profile
                            </a>
                            <a href="#" className="download-link">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Capability Overview
                            </a>
                            <Link to="/case-studies">Case Studies</Link>
                            <Link to="/knowledge-centre">Knowledge Centre</Link>
                        </nav>

                        <div className="insights-divider"></div>

                        <h4 className="col-title mt-articles">Latest Insights</h4>
                        <ul className="footer-articles">
                            <li>
                                <Link to="/knowledge/retrofit-vs-replacement">When Retrofit is Better than Replacement</Link>
                            </li>
                            <li>
                                <Link to="/knowledge/automation-roi">Understanding Automation ROI</Link>
                            </li>
                        </ul>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                            {/* Facebook */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-name="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-name="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
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
