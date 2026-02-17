import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './SignUp.css';
import sanotalogo from '../../assets/sanotalogo.png';

function SignUp() {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Update password strength indicator
        if (name === 'password') {
            if (value.length === 0) {
                setPasswordStrength('');
            } else if (value.length < 6) {
                setPasswordStrength('weak');
            } else if (value.length < 10) {
                setPasswordStrength('medium');
            } else {
                setPasswordStrength('strong');
            }
        }
    };

    const validateForm = () => {
        // Check all fields are filled
        if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
            setFormStatus({ type: 'error', message: 'Please fill in all fields.' });
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
            return false;
        }

        // Check password length
        if (formData.password.length < 6) {
            setFormStatus({ type: 'error', message: 'Password must be at least 6 characters long.' });
            return false;
        }

        // Check passwords match
        if (formData.password !== formData.confirmPassword) {
            setFormStatus({ type: 'error', message: 'Passwords do not match.' });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setFormStatus({ type: 'loading', message: 'Creating your account...' });

        // Simulate API call
        setTimeout(() => {
            const result = signup(formData.fullName, formData.email, formData.password);

            if (result.success) {
                setFormStatus({
                    type: 'success',
                    message: 'Account created successfully! Redirecting...'
                });

                // Redirect after successful signup
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            } else {
                setFormStatus({
                    type: 'error',
                    message: result.error
                });
            }
        }, 1500);
    };

    return (
        <div className="signup-page">
            <Helmet>
                <title>Sign Up | Sanota Automation Engineering</title>
                <meta name="description" content="Create your Sanota account to access automation solutions and services." />
            </Helmet>

            <div className="signup-container">
                {/* Left Side - Branding */}
                <div className="signup-branding">
                    <div className="branding-content">
                        <div className="brand-logo">
                            <img src={sanotalogo} alt="Sanota" className="brand-logo-image" />
                        </div>
                        <h2 className="welcome-title">Join Sanota</h2>
                        <p className="welcome-subtitle">
                            Create your account and start transforming your business with cutting-edge automation solutions.
                        </p>
                        <div className="branding-features">
                            <div className="feature-item">
                                <span className="feature-icon">🚀</span>
                                <span className="feature-text">Quick Setup</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🔒</span>
                                <span className="feature-text">Secure & Private</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">💼</span>
                                <span className="feature-text">Professional Tools</span>
                            </div>
                        </div>
                    </div>
                    <div className="branding-overlay"></div>
                </div>

                {/* Right Side - Sign Up Form */}
                <div className="signup-form-section">
                    <div className="form-wrapper">
                        <div className="form-header">
                            <h2>Create Account</h2>
                            <p>Fill in your details to get started</p>
                        </div>

                        <form onSubmit={handleSubmit} className="signup-form">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">👤</span>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        autoComplete="name"
                                    />
                                </div>
                            </div>

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
                                        placeholder="Create a strong password"
                                        autoComplete="new-password"
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
                                {passwordStrength && (
                                    <div className={`password-strength ${passwordStrength}`}>
                                        <div className="strength-bar"></div>
                                        <span className="strength-text">
                                            {passwordStrength === 'weak' && 'Weak password'}
                                            {passwordStrength === 'medium' && 'Medium strength'}
                                            {passwordStrength === 'strong' && 'Strong password'}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">🔒</span>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        placeholder="Re-enter your password"
                                        autoComplete="new-password"
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                                    </button>
                                </div>
                            </div>

                            {formStatus.message && (
                                <div className={`form-status ${formStatus.type}`}>
                                    {formStatus.message}
                                </div>
                            )}

                            <button type="submit" className="btn-signup" disabled={formStatus.type === 'loading'}>
                                {formStatus.type === 'loading' ? (
                                    <>
                                        <span className="spinner"></span>
                                        Creating Account...
                                    </>
                                ) : (
                                    'Create Account'
                                )}
                            </button>
                        </form>

                        <div className="form-footer">
                            <p>
                                Already have an account?{' '}
                                <Link to="/login" className="signin-link">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
