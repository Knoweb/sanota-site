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
                                    INDUSTRIES <span className="nav-dropdown-arrow">▼</span>
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
                                    INDUSTRY INITIATIVES <span className="nav-dropdown-arrow">▼</span>
                                </NavLink>
                                <ul className="nav-dropdown-menu">
                                    <li><Link to="/initiatives/tea-modernization" className="nav-dropdown-item">Tea Industry Modernization</Link></li>
                                    <li><Link to="/initiatives/smart-agriculture" className="nav-dropdown-item">Smart Controlled Agriculture</Link></li>
                                    <li><Link to="/initiatives/smart-industrial" className="nav-dropdown-item">Smart Industrial Systems</Link></li>
                                    <li><Link to="/initiatives/energy-efficiency" className="nav-dropdown-item">Energy Efficiency Systems</Link></li>
                                    <li><Link to="/initiatives/environmental" className="nav-dropdown-item">Environmental Systems</Link></li>
                                </ul>
                            </li>

                            {/* 4. Case Studies */}
                            <li><NavLink to="/case-studies" className={({ isActive }) => isActive ? "active" : ""}>CASE STUDIES</NavLink></li>

                            {/* 5. Knowledge Centre Dropdown */}
                            <li className="nav-dropdown">
                                <NavLink to="/knowledge-centre" className={({ isActive }) => isActive ? "active nav-dropdown-button" : "nav-dropdown-button"}>
                                    KNOWLEDGE CENTRE <span className="nav-dropdown-arrow">▼</span>
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
                                    PRODUCTS <span className="nav-dropdown-arrow">▼</span>
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
                                    ABOUT <span className="nav-dropdown-arrow">▼</span>
                                </NavLink>
                                <ul className="nav-dropdown-menu">
                                    <li><Link to="/about/overview" className="nav-dropdown-item">Company Overview</Link></li>
                                    <li><Link to="/about/philosophy" className="nav-dropdown-item">Engineering Philosophy</Link></li>
                                    <li><Link to="/about/capability" className="nav-dropdown-item">Integrated Capability</Link></li>
                                    <li><Link to="/clients-experience" className="nav-dropdown-item">Clients & Experience</Link></li>
                                </ul>
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

