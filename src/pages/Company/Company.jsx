import { Helmet } from 'react-helmet-async';
import './Company.css';

function Company() {
    return (
        <div className="company-page">
            <Helmet>
                <title>Company | Sanota</title>
                <meta name="description" content="Sanota Company Information" />
            </Helmet>

            {/* Hero Section */}
            <section className="company-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>Company</h1>
                        <p className="hero-subtitle">
                            Coming Soon
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Company;
