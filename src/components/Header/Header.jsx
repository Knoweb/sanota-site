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
                            {/* Solutions Dropdown */}
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
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>HOME</NavLink></li>
                            <li><NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>PRODUCTS</NavLink></li>
                            <li><NavLink to="/industries" className={({ isActive }) => isActive ? "active" : ""}>INDUSTRIES</NavLink></li>
                            <li><NavLink to="/clients-experience" className={({ isActive }) => isActive ? "active" : ""}>CLIENTS & EXPERIENCE</NavLink></li>
                            <li><NavLink to="/case-studies" className={({ isActive }) => isActive ? "active" : ""}>CASE STUDIES</NavLink></li>
                            <li><NavLink to="/insights" className={({ isActive }) => isActive ? "active" : ""}>INSIGHTS</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>ABOUT SANOTA</NavLink></li>
                            <li><NavLink to="/careers" className={({ isActive }) => isActive ? "active" : ""}>CAREERS</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>CONTACT US</NavLink></li>
                        </ul>
                    </nav>

                    {/* Right: Actions */}
                    <div className="header-actions">
                        <Link to="/contact" className="quote-button">REQUEST A QUOTE</Link>
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

