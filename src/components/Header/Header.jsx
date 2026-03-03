import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';
import sanotalogo from '../../assets/sanotalogo.png';

function Header() {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

    const handleLogout = () => {
        logout();
        setShowUserDropdown(false);
        navigate('/');
    };

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="header-content">
                    {/* Left: Logo */}
                    <Link to="/" className="logo">
                        <img src={sanotalogo} alt="Sanota" className="logo-image" />
                    </Link>

                    {/* Center: Navigation */}
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>HOME</NavLink></li>
                            <li><NavLink to="/solutions" className={({ isActive }) => isActive ? "active" : ""}>SOLUTIONS</NavLink></li>
                            <li><NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>PRODUCTS</NavLink></li>

                            {/* Resources Dropdown */}
                            <li
                                className="nav-dropdown"
                                onMouseEnter={() => setShowResourcesDropdown(true)}
                                onMouseLeave={() => setShowResourcesDropdown(false)}
                            >
                                <button className={`nav-dropdown-button ${showResourcesDropdown ? 'active' : ''}`}>
                                    RESOURCES
                                    <span className="nav-dropdown-arrow">▼</span>
                                </button>

                                {showResourcesDropdown && (
                                    <div className="nav-dropdown-menu">
                                        <NavLink to="/industries" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">Industries</span>
                                                <span className="nav-dropdown-desc">Sectors we serve</span>
                                            </div>
                                        </NavLink>
                                        <NavLink to="/clients-experience" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">Clients & Experience</span>
                                                <span className="nav-dropdown-desc">Our client portfolio</span>
                                            </div>
                                        </NavLink>
                                        <NavLink to="/case-studies" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">Case Studies</span>
                                                <span className="nav-dropdown-desc">Success stories</span>
                                            </div>
                                        </NavLink>
                                        <NavLink to="/insights" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">Insights</span>
                                                <span className="nav-dropdown-desc">Industry knowledge</span>
                                            </div>
                                        </NavLink>
                                    </div>
                                )}
                            </li>

                            {/* Company Dropdown */}
                            <li
                                className="nav-dropdown"
                                onMouseEnter={() => setShowCompanyDropdown(true)}
                                onMouseLeave={() => setShowCompanyDropdown(false)}
                            >
                                <button className={`nav-dropdown-button ${showCompanyDropdown ? 'active' : ''}`}>
                                    COMPANY
                                    <span className="nav-dropdown-arrow">▼</span>
                                </button>

                                {showCompanyDropdown && (
                                    <div className="nav-dropdown-menu">
                                        <NavLink to="/about" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">About Sanota</span>
                                                <span className="nav-dropdown-desc">Our story & values</span>
                                            </div>
                                        </NavLink>
                                        <NavLink to="/careers" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">Careers</span>
                                                <span className="nav-dropdown-desc">Join our team</span>
                                            </div>
                                        </NavLink>
                                    </div>
                                )}
                            </li>

                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>CONTACT</NavLink></li>
                        </ul>
                    </nav>

                    {/* Right: Actions */}
                    <div className="header-actions">


                        <Link to="/contact" className="quote-button">REQUEST A QUOTE</Link>

                        {/* Login/Profile - Simplified for Header */}
                        {isAuthenticated ? (
                            <Link to="/profile" className="profile-icon-link">
                                <span className="user-icon">👤</span>
                            </Link>
                        ) : (
                            <Link to="/login" className="login-link">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
