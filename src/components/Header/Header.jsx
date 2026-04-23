import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';
import sanotalogo from '../../assets/sanotalogo.png';

function Header() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

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
                            {/* 1. Solutions Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/solutions" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    SOLUTIONS <span className="nav-dropdown-arrow">▼</span>
                                </NavLink>
                                <div className="nav-dropdown-menu">
                                    <Link to="/solutions/engineering-automation" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">End-to-End Engineering & Automation</span>
                                    </Link>
                                    <Link to="/solutions/developed-products" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Sanota Developed Products</span>
                                    </Link>
                                    <Link to="/solutions/digital-solutions" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Software & Digital Solutions</span>
                                    </Link>
                                    <Link to="/solutions/retrofit-takeover" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Retrofit & System Takeover</span>
                                    </Link>
                                    <Link to="/solutions/lifecycle-support" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">AMC & Lifecycle Support</span>
                                    </Link>
                                </div>
                            </li>

                            {/* 2. Industries Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/industries" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    INDUSTRIES <span className="nav-dropdown-arrow">▼</span>
                                </NavLink>
                                <div className="nav-dropdown-menu">
                                    <Link to="/industries/manufacturing-processing" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Manufacturing & Processing</span>
                                    </Link>
                                    <Link to="/industries/food-processing" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Food Processing</span>
                                    </Link>
                                    <Link to="/industries/tea-industry" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Tea Industry</span>
                                    </Link>
                                    <Link to="/industries/agriculture-greenhouse" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Agriculture & Greenhouse</span>
                                    </Link>
                                    <Link to="/industries/logistics-warehousing" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Logistics & Warehousing</span>
                                    </Link>
                                    <Link to="/industries/infrastructure-utilities" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Infrastructure & Utilities</span>
                                    </Link>
                                    <Link to="/industries/institutions-government" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Institutions & Government</span>
                                    </Link>
                                    <Link to="/industries/energy-systems" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Energy Systems</span>
                                    </Link>
                                    <Link to="/industries/environmental-systems" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Environmental Systems</span>
                                    </Link>
                                </div>
                            </li>

                            {/* 3. Industry Initiatives Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/industry-initiatives" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    INDUSTRY INITIATIVES <span className="nav-dropdown-arrow">▼</span>
                                </NavLink>
                                <div className="nav-dropdown-menu">
                                    <Link to="/industry-initiatives/tea-modernization" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Tea Industry Modernization</span>
                                    </Link>
                                    <Link to="/industry-initiatives/smart-agriculture" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Smart Controlled Agriculture</span>
                                    </Link>
                                    <Link to="/industry-initiatives/smart-industrial" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Smart Industrial Systems</span>
                                    </Link>
                                    <Link to="/industry-initiatives/energy-efficiency" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Energy Efficiency Systems</span>
                                    </Link>
                                    <Link to="/industry-initiatives/environmental-systems" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Environmental Systems</span>
                                    </Link>
                                </div>
                            </li>

                            {/* 4. Case Studies */}
                            <li><NavLink to="/case-studies" className={({ isActive }) => isActive ? "active" : ""}>CASE STUDIES</NavLink></li>

                            {/* 5. Knowledge Centre Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/knowledge-centre" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    KNOWLEDGE CENTRE <span className="nav-dropdown-arrow">▼</span>
                                </NavLink>
                                <div className="nav-dropdown-menu">
                                    <Link to="/insights" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Insights</span>
                                    </Link>
                                    <Link to="/knowledge-centre/engineering-knowledge" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Engineering Knowledge</span>
                                    </Link>
                                    <Link to="/knowledge-centre/industry-perspectives" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Industry Perspectives</span>
                                    </Link>
                                    <Link to="/knowledge-centre/innovation-thinking" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Innovation Thinking</span>
                                    </Link>
                                </div>
                            </li>

                            {/* 6. Products Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/products" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    PRODUCTS <span className="nav-dropdown-arrow">▼</span>
                                </NavLink>
                                <div className="nav-dropdown-menu">
                                    <Link to="/products/categories" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Product Categories</span>
                                    </Link>
                                    <Link to="/products/tea-processing" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Tea Processing Systems</span>
                                    </Link>
                                    <Link to="/products/food-processing" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Food Processing Systems</span>
                                    </Link>
                                    <Link to="/products/smart-automation" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Smart Automation Systems</span>
                                    </Link>
                                    <Link to="/products/automation-modules" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Industrial Automation Modules</span>
                                    </Link>
                                    <Link to="/products/environmental-systems" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Environmental Systems</span>
                                    </Link>
                                    <Link to="/products/specialized-devices" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Specialized Devices</span>
                                    </Link>
                                </div>
                            </li>

                            {/* 7. About Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    ABOUT <span className="nav-dropdown-arrow">▼</span>
                                </NavLink>
                                <div className="nav-dropdown-menu">
                                    <Link to="/about/overview" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Company Overview</span>
                                    </Link>
                                    <Link to="/about/philosophy" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Engineering Philosophy</span>
                                    </Link>
                                    <Link to="/about/capability" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Integrated Capability</span>
                                    </Link>
                                    <Link to="/clients-experience" className="nav-dropdown-item">
                                        <span className="nav-dropdown-title">Clients & Experience</span>
                                    </Link>
                                </div>
                            </li>

                            {/* 8. Contact */}
                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>CONTACT</NavLink></li>
                        </ul>
                    </nav>

                    {/* Right: Actions */}
                    <div className="header-actions">
                        <Link to="/contact" className="quote-button">DISCUSS YOUR REQUIREMENT</Link>
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

