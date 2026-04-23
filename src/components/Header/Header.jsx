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
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>HOME</NavLink></li>
                            <li><NavLink to="/solutions" className={({ isActive }) => isActive ? "active" : ""}>SOLUTIONS</NavLink></li>
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

