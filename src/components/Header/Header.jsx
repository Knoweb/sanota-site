import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';
import SanotaLogo from '../SanotaLogo/SanotaLogo';

function Header() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleDropdown = (dropdownName) => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdownName);
        }
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="header-content">
                    {/* Left: Logo */}
                    <Link to="/" className="logo" onClick={handleLinkClick}>
                        <SanotaLogo className="logo-image" />
                    </Link>

                    {/* Center: Desktop Navigation */}
                    <nav className="nav">
                        <ul className="nav-list">
                            {/* 1. Solutions Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/solutions" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    SOLUTIONS <span className="nav-dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="nav-dropdown-menu">
                                    <li><Link to="/solutions/engineering-automation" className="nav-dropdown-item">End-to-End Engineering & Automation</Link></li>
                                    <li><Link to="/solutions/sanota-products" className="nav-dropdown-item">Sanota Developed Products</Link></li>
                                    <li><Link to="/solutions/software-digital" className="nav-dropdown-item">Software & Digital Solutions</Link></li>
                                    <li><Link to="/solutions/retrofit-takeover" className="nav-dropdown-item">Retrofit & System Takeover</Link></li>
                                    <li><Link to="/solutions/amc-lifecycle" className="nav-dropdown-item">AMC & Lifecycle Support</Link></li>
                                </ul>
                            </li>

                            {/* 2. Industries Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/industries" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    INDUSTRIES <span className="nav-dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="nav-dropdown-menu">
                                    <li><Link to="/industries/manufacturing-processing" className="nav-dropdown-item">Manufacturing & Processing</Link></li>
                                    <li><Link to="/industries/food-processing" className="nav-dropdown-item">Food Processing</Link></li>
                                    <li><Link to="/industries/tea-industry" className="nav-dropdown-item">Tea Industry</Link></li>
                                    <li><Link to="/industries/agriculture-greenhouse" className="nav-dropdown-item">Agriculture & Greenhouse</Link></li>
                                    <li><Link to="/industries/logistics-warehousing" className="nav-dropdown-item">Logistics & Warehousing</Link></li>
                                    <li><Link to="/industries/infrastructure-utilities" className="nav-dropdown-item">Infrastructure & Utilities</Link></li>
                                    <li><Link to="/industries/institutions-government" className="nav-dropdown-item">Institutions & Government</Link></li>
                                    <li><Link to="/industries/energy-systems" className="nav-dropdown-item">Energy Systems</Link></li>
                                    <li><Link to="/industries/environmental-systems" className="nav-dropdown-item">Environmental Systems</Link></li>
                                </ul>
                            </li>

                            {/* 3. Industry Initiatives Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/initiatives" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    INDUSTRY<br />INITIATIVES <span className="nav-dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="nav-dropdown-menu">
                                    <li><Link to="/initiatives/tea-modernization" className="nav-dropdown-item">Tea Industry Modernization</Link></li>
                                    <li><Link to="/initiatives/smart-agriculture" className="nav-dropdown-item">Smart Controlled Agriculture</Link></li>
                                    <li><Link to="/initiatives/smart-industrial" className="nav-dropdown-item">Smart Industrial Systems</Link></li>
                                    <li><Link to="/initiatives/energy-efficiency" className="nav-dropdown-item">Energy Efficiency Systems</Link></li>
                                    <li><Link to="/initiatives/environmental" className="nav-dropdown-item">Environmental Systems</Link></li>
                                </ul>
                            </li>

                            {/* 5. Knowledge Centre Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/knowledge-centre" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    KNOWLEDGE<br />CENTRE <span className="nav-dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="nav-dropdown-menu">
                                    <li><Link to="/knowledge-centre/insights" className="nav-dropdown-item">Insights</Link></li>
                                    <li><Link to="/knowledge-centre/engineering" className="nav-dropdown-item">Engineering Knowledge</Link></li>
                                    <li><Link to="/knowledge-centre/perspectives" className="nav-dropdown-item">Industry Perspectives</Link></li>
                                    <li><Link to="/knowledge-centre/innovation" className="nav-dropdown-item">Innovation Thinking</Link></li>
                                </ul>
                            </li>

                            {/* 6. Products Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/products" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    PRODUCTS <span className="nav-dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="nav-dropdown-menu">
                                    <li><Link to="/products/categories" className="nav-dropdown-item">Product Categories</Link></li>
                                    <li><Link to="/products/tea-processing" className="nav-dropdown-item">Tea Processing Systems</Link></li>
                                    <li><Link to="/products/food-processing" className="nav-dropdown-item">Food Processing Systems</Link></li>
                                    <li><Link to="/products/smart-automation" className="nav-dropdown-item">Smart Automation Systems</Link></li>
                                    <li><Link to="/products/automation-modules" className="nav-dropdown-item">Industrial Automation Modules</Link></li>
                                    <li><Link to="/products/environmental" className="nav-dropdown-item">Environmental Systems</Link></li>
                                    <li><Link to="/products/specialized-devices" className="nav-dropdown-item">Specialized Devices</Link></li>
                                </ul>
                            </li>

                            {/* 7. About Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    ABOUT <span className="nav-dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="nav-dropdown-menu">
                                    <li><Link to="/about/overview" className="nav-dropdown-item">Company Overview</Link></li>
                                    <li><Link to="/about/philosophy" className="nav-dropdown-item">Engineering Philosophy</Link></li>
                                    <li><Link to="/about/capability" className="nav-dropdown-item">Integrated Capability</Link></li>
                                    <li><Link to="/clients-experience" className="nav-dropdown-item">Clients & Experience</Link></li>
                                    <li><Link to="/careers" className="nav-dropdown-item">Careers</Link></li>
                                </ul>
                            </li>

                            {/* 8. Contact */}
                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>CONTACT</NavLink></li>
                        </ul>
                    </nav>

                    {/* Right: Actions */}
                    <div className="header-actions">
                        {isAuthenticated ? (
                            <Link to="/profile" className="profile-icon-link">
                                <span className="user-icon">👤</span>
                            </Link>
                        ) : (
                            <Link to="/login" className="login-plus-link">
                                <span className="plus-icon">+</span>
                            </Link>
                        )}

                        {/* Hamburger Button for Mobile */}
                        <button 
                            className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-drawer-header">
                    <Link to="/" onClick={handleLinkClick}>
                        <SanotaLogo className="logo-image" />
                    </Link>
                </div>
                
                <nav className="mobile-drawer-nav">
                    <ul className="mobile-nav-list">
                        {/* Solutions Dropdown */}
                        <li className="mobile-nav-item">
                            <button 
                                className={`mobile-nav-dropdown-btn ${activeDropdown === 'solutions' ? 'active' : ''}`}
                                onClick={() => toggleDropdown('solutions')}
                            >
                                SOLUTIONS <span className="arrow">▾</span>
                            </button>
                            <ul className={`mobile-dropdown-menu ${activeDropdown === 'solutions' ? 'open' : ''}`}>
                                <li><Link to="/solutions/engineering-automation" onClick={handleLinkClick}>End-to-End Engineering & Automation</Link></li>
                                <li><Link to="/solutions/sanota-products" onClick={handleLinkClick}>Sanota Developed Products</Link></li>
                                <li><Link to="/solutions/software-digital" onClick={handleLinkClick}>Software & Digital Solutions</Link></li>
                                <li><Link to="/solutions/retrofit-takeover" onClick={handleLinkClick}>Retrofit & System Takeover</Link></li>
                                <li><Link to="/solutions/amc-lifecycle" onClick={handleLinkClick}>AMC & Lifecycle Support</Link></li>
                            </ul>
                        </li>

                        {/* Industries Dropdown */}
                        <li className="mobile-nav-item">
                            <button 
                                className={`mobile-nav-dropdown-btn ${activeDropdown === 'industries' ? 'active' : ''}`}
                                onClick={() => toggleDropdown('industries')}
                            >
                                INDUSTRIES <span className="arrow">▾</span>
                            </button>
                            <ul className={`mobile-dropdown-menu ${activeDropdown === 'industries' ? 'open' : ''}`}>
                                <li><Link to="/industries/manufacturing-processing" onClick={handleLinkClick}>Manufacturing & Processing</Link></li>
                                <li><Link to="/industries/food-processing" onClick={handleLinkClick}>Food Processing</Link></li>
                                <li><Link to="/industries/tea-industry" onClick={handleLinkClick}>Tea Industry</Link></li>
                                <li><Link to="/industries/agriculture-greenhouse" onClick={handleLinkClick}>Agriculture & Greenhouse</Link></li>
                                <li><Link to="/industries/logistics-warehousing" onClick={handleLinkClick}>Logistics & Warehousing</Link></li>
                                <li><Link to="/industries/infrastructure-utilities" onClick={handleLinkClick}>Infrastructure & Utilities</Link></li>
                                <li><Link to="/industries/institutions-government" onClick={handleLinkClick}>Institutions & Government</Link></li>
                                <li><Link to="/industries/energy-systems" onClick={handleLinkClick}>Energy Systems</Link></li>
                                <li><Link to="/industries/environmental-systems" onClick={handleLinkClick}>Environmental Systems</Link></li>
                            </ul>
                        </li>

                        {/* Initiatives Dropdown */}
                        <li className="mobile-nav-item">
                            <button 
                                className={`mobile-nav-dropdown-btn ${activeDropdown === 'initiatives' ? 'active' : ''}`}
                                onClick={() => toggleDropdown('initiatives')}
                            >
                                INDUSTRY INITIATIVES <span className="arrow">▾</span>
                            </button>
                            <ul className={`mobile-dropdown-menu ${activeDropdown === 'initiatives' ? 'open' : ''}`}>
                                <li><Link to="/initiatives/tea-modernization" onClick={handleLinkClick}>Tea Industry Modernization</Link></li>
                                <li><Link to="/initiatives/smart-agriculture" onClick={handleLinkClick}>Smart Controlled Agriculture</Link></li>
                                <li><Link to="/initiatives/smart-industrial" onClick={handleLinkClick}>Smart Industrial Systems</Link></li>
                                <li><Link to="/initiatives/energy-efficiency" onClick={handleLinkClick}>Energy Efficiency Systems</Link></li>
                                <li><Link to="/initiatives/environmental" onClick={handleLinkClick}>Environmental Systems</Link></li>
                            </ul>
                        </li>

                        {/* Knowledge Dropdown */}
                        <li className="mobile-nav-item">
                            <button 
                                className={`mobile-nav-dropdown-btn ${activeDropdown === 'knowledge' ? 'active' : ''}`}
                                onClick={() => toggleDropdown('knowledge')}
                            >
                                KNOWLEDGE CENTRE <span className="arrow">▾</span>
                            </button>
                            <ul className={`mobile-dropdown-menu ${activeDropdown === 'knowledge' ? 'open' : ''}`}>
                                <li><Link to="/knowledge-centre/insights" onClick={handleLinkClick}>Insights</Link></li>
                                <li><Link to="/knowledge-centre/engineering" onClick={handleLinkClick}>Engineering Knowledge</Link></li>
                                <li><Link to="/knowledge-centre/perspectives" onClick={handleLinkClick}>Industry Perspectives</Link></li>
                                <li><Link to="/knowledge-centre/innovation" onClick={handleLinkClick}>Innovation Thinking</Link></li>
                            </ul>
                        </li>

                        {/* Products Dropdown */}
                        <li className="mobile-nav-item">
                            <button 
                                className={`mobile-nav-dropdown-btn ${activeDropdown === 'products' ? 'active' : ''}`}
                                onClick={() => toggleDropdown('products')}
                            >
                                PRODUCTS <span className="arrow">▾</span>
                            </button>
                            <ul className={`mobile-dropdown-menu ${activeDropdown === 'products' ? 'open' : ''}`}>
                                <li><Link to="/products/categories" onClick={handleLinkClick}>Product Categories</Link></li>
                                <li><Link to="/products/tea-processing" onClick={handleLinkClick}>Tea Processing Systems</Link></li>
                                <li><Link to="/products/food-processing" onClick={handleLinkClick}>Food Processing Systems</Link></li>
                                <li><Link to="/products/smart-automation" onClick={handleLinkClick}>Smart Automation Systems</Link></li>
                                <li><Link to="/products/automation-modules" onClick={handleLinkClick}>Industrial Automation Modules</Link></li>
                                <li><Link to="/products/environmental" onClick={handleLinkClick}>Environmental Systems</Link></li>
                                <li><Link to="/products/specialized-devices" onClick={handleLinkClick}>Specialized Devices</Link></li>
                            </ul>
                        </li>

                        {/* About Dropdown */}
                        <li className="mobile-nav-item">
                            <button 
                                className={`mobile-nav-dropdown-btn ${activeDropdown === 'about' ? 'active' : ''}`}
                                onClick={() => toggleDropdown('about')}
                            >
                                ABOUT <span className="arrow">▾</span>
                            </button>
                            <ul className={`mobile-dropdown-menu ${activeDropdown === 'about' ? 'open' : ''}`}>
                                <li><Link to="/about/overview" onClick={handleLinkClick}>Company Overview</Link></li>
                                <li><Link to="/about/philosophy" onClick={handleLinkClick}>Engineering Philosophy</Link></li>
                                <li><Link to="/about/capability" onClick={handleLinkClick}>Integrated Capability</Link></li>
                                <li><Link to="/clients-experience" onClick={handleLinkClick}>Clients & Experience</Link></li>
                                <li><Link to="/careers" onClick={handleLinkClick}>Careers</Link></li>
                            </ul>
                        </li>

                        {/* Contact */}
                        <li className="mobile-nav-item">
                            <NavLink to="/contact" className="mobile-direct-link" onClick={handleLinkClick}>CONTACT</NavLink>
                        </li>
                    </ul>
                    
                    {/* Drawer Action Button */}
                    <div className="mobile-drawer-footer">
                        <Link to="/contact" className="btn btn-primary btn-block" onClick={handleLinkClick}>
                            Discuss Your Requirement
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Backdrop Overlay */}
            {isMenuOpen && <div className="mobile-drawer-backdrop" onClick={() => setIsMenuOpen(false)}></div>}
        </header>
    );
}

export default Header;