import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css';
import sanotalogo from '../../assets/sanotalogo.png';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ type: 'loading', message: 'Signing in...' });

        // Simulate authentication (replace with actual API call in production)
        setTimeout(() => {
            // Simple validation for demo purposes
            if (formData.email && formData.password) {
                // Save user data to context
                login(formData.email, formData.password);

                setFormStatus({
                    type: 'success',
                    message: 'Login successful! Redirecting...'
                });

                // Simulate redirect after successful login
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            } else {
                setFormStatus({
                    type: 'error',
                    message: 'Invalid email or password. Please try again.'
                });
            }
        }, 1500);
    };

    return (
        <div className="login-page">
            <Helmet>
                <title>Login | Sanota Automation Engineering</title>
                <meta name="description" content="Sign in to your Sanota account to access automation solutions and services." />
            </Helmet>

            <div className="login-container">
                {/* Left Side - Branding */}
                <div className="login-branding">
                    <div className="branding-content">
                        <div className="brand-logo">
                            <img src={sanotalogo} alt="Sanota" className="brand-logo-image" />
                        </div>
                        <h2 className="welcome-title">Welcome Back</h2>
                        <p className="welcome-subtitle">
                            Sign in to access your automation solutions and manage your projects with ease.
                        </p>
                        <div className="branding-features">
                            <div className="feature-item">
                                <span className="feature-icon">🔒</span>
                                <span className="feature-text">Secure Authentication</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">⚡</span>
                                <span className="feature-text">Fast & Reliable</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🌐</span>
                                <span className="feature-text">Access Anywhere</span>
                            </div>
                        </div>
                    </div>
                    <div className="branding-overlay"></div>
                </div>

                {/* Right Side - Login Form */}
                <div className="login-form-section">
                    <div className="form-wrapper">
                        <div className="form-header">
                            <h2>Sign In</h2>
                            <p>Enter your credentials to access your account</p>
                        </div>

                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">📧</span>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                        autoComplete="email"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">🔒</span>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? '👁️' : '👁️‍🗨️'}
                                    </button>
                                </div>
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                    />
                                    <span>Remember me</span>
                                </label>
                                <a href="/forgot-password" className="forgot-link">
                                    Forgot password?
                                </a>
                            </div>

                            {formStatus.message && (
                                <div className={`form-status ${formStatus.type}`}>
                                    {formStatus.message}
                                </div>
                            )}

                            <button type="submit" className="btn-login" disabled={formStatus.type === 'loading'}>
                                {formStatus.type === 'loading' ? (
                                    <>
                                        <span className="spinner"></span>
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </form>

                        <div className="form-footer">
                            <p>
                                Don't have an account?{' '}
                                <Link to="/signup" className="signup-link">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
