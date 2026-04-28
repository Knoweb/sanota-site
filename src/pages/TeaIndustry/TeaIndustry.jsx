import React from 'react';
import { Link } from 'react-router-dom';
import './TeaIndustry.css';

// Using an existing image as placeholder
import heroImage from '../../assets/industries-bg.png';

const TeaIndustry = () => {
    return (
        <div className="tea-industry-page">
            {/* 1. HERO SECTION */}
            <section className="tea-hero-section">
                <div className="container tea-hero-container">
                    <div className="tea-hero-content">
                        <p className="tea-hero-tagline">INDUSTRY FOCUS</p>
                        <h1 className="tea-hero-title">Engineering Solutions for the Tea Industry</h1>
                        <h2 className="tea-hero-subtitle">Improving Productivity, Quality, and Operational Reliability</h2>
                        <p className="tea-hero-description">
                            Sanota develops engineering, automation, and digital solutions designed to address operational challenges commonly faced in the tea industry, supporting consistency, efficiency, and long-term performance.
                        </p>
                        <div className="tea-hero-actions">
                            <Link to="/contact" className="btn btn-primary tea-btn-primary">
                                Discuss Your Industry Requirement
                            </Link>
                            <Link to="/solutions" className="btn btn-secondary-outline tea-btn-secondary">
                                Explore Related Solutions
                            </Link>
                        </div>
                    </div>
                    <div className="tea-hero-visual">
                        <div className="tea-visual-wrapper">
                            <img src={heroImage} alt="Tea Industry Engineering" className="tea-hero-img" />
                            {/* Subtle technical graphic overlay */}
                            <div className="tea-tech-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INDUSTRY CONTEXT */}
            <section className="tea-context-section">
                <div className="container">
                    <div className="tea-context-wrapper">
                        <div className="tea-context-header">
                            <h2 className="tea-section-title">Understanding Operational Challenges in This Industry</h2>
                            <p className="tea-context-intro">
                                The tea industry faces unique operational realities that require specialized engineering approaches to ensure quality, consistency, and profitability.
                            </p>
                        </div>
                        <div className="tea-challenges-grid">
                            {[
                                { title: "Process Variability", desc: "Complex chemical and physical changes during withering and rolling require precise control." },
                                { title: "Energy Consumption", desc: "High thermal energy requirements for drying and electricity for machinery drive up costs." },
                                { title: "Manual Dependency", desc: "Heavy reliance on manual handling affects speed, safety, and operational throughput." },
                                { title: "Quality Consistency", desc: "Maintaining exact flavor profiles across different batches remains a significant challenge." },
                                { title: "Aging Infrastructure", desc: "Legacy machinery often lacks the precision and efficiency of modern industrial standards." },
                                { title: "Limited Monitoring", desc: "Lack of real-time data on moisture, temperature, and flow hinders proactive management." },
                                { title: "Disruption-Free Modernization", desc: "The need to upgrade systems without stopping ongoing production during peak seasons." }
                            ].map((challenge, index) => (
                                <div className="tea-challenge-card" key={index}>
                                    <div className="tea-challenge-number">0{index + 1}</div>
                                    <div className="tea-challenge-info">
                                        <h3 className="tea-challenge-title">{challenge.title}</h3>
                                        <p className="tea-challenge-desc">{challenge.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HOW SANOTA SUPPORTS THIS INDUSTRY */}
            <section className="tea-support-section">
                <div className="container">
                    <div className="tea-support-header">
                        <h2 className="tea-section-title light">How Sanota Supports This Industry</h2>
                        <p className="tea-support-lead">
                            Sanota applies integrated engineering, automation, and digital technologies to improve operational performance across key areas.
                        </p>
                    </div>
                    <div className="tea-support-grid">
                        {[
                            { title: "Process Automation", desc: "Automating withering, rolling, and drying processes to ensure precise control and repeatability." },
                            { title: "Equipment Optimization", desc: "Engineering enhancements for rollers, dryers, and sifters to maximize output and quality." },
                            { title: "Monitoring & Control", desc: "Implementing centralized SCADA systems for real-time visibility into factory-wide operations." },
                            { title: "System Modernization", desc: "Converting traditional tea factories into smart facilities through phased technology integration." },
                            { title: "Workflow Efficiency", desc: "Redesigning material handling and production flows to reduce labor intensity and waste." },
                            { title: "Quality Intelligence", desc: "Utilizing sensors and analytics to maintain optimum temperature and moisture profiles." },
                            { title: "Lifecycle Support", desc: "Providing specialized AMC and technical support to ensure 24/7 reliability of critical assets." }
                        ].map((item, index) => (
                            <div className="tea-support-card" key={index}>
                                <div className="tea-support-card-content">
                                    <h3 className="tea-support-card-title">{item.title}</h3>
                                    <p className="tea-support-card-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. RELEVANT SOLUTIONS FOR THIS INDUSTRY */}
            <section className="tea-solutions-section">
                <div className="container">
                    <div className="tea-solutions-wrapper">
                        <div className="tea-section-header">
                            <h2 className="tea-section-title">Relevant Solution Areas</h2>
                            <p className="tea-section-subtitle">Practical engineering and digital solutions tailored for the tea industry.</p>
                        </div>
                        <div className="tea-solutions-grid">
                            {[
                                { title: "End-to-End Engineering & Automation", link: "/solutions" },
                                { title: "Sanota Developed Products", link: "/products" },
                                { title: "Retrofit & System Takeover", link: "/solutions" },
                                { title: "Software & Digital Solutions", link: "/solutions" },
                                { title: "AMC & Lifecycle Support", link: "/solutions" }
                            ].map((solution, index) => (
                                <Link to={solution.link} className="tea-solution-card" key={index}>
                                    <h3 className="tea-solution-card-title">{solution.title}</h3>
                                    <div className="tea-solution-card-arrow">→</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. INDUSTRY-SPECIFIC APPLICATION AREAS */}
            <section className="tea-applications-section">
                <div className="container">
                    <div className="tea-applications-wrapper">
                        <div className="tea-section-header">
                            <h2 className="tea-section-title">Industry-Specific Application Areas</h2>
                            <p className="tea-section-subtitle">Practical engineering implementations designed for tea factory environments.</p>
                        </div>
                        <div className="tea-applications-list">
                            {[
                                { title: "Drying & Withering Systems", desc: "Automated controls for withering troughs and fluid bed dryers to maintain precise moisture levels." },
                                { title: "Rolling & Fermentation Control", desc: "Digital monitoring of rolling pressure and fermentation temperature for optimum quality." },
                                { title: "Material Handling & Sorting", desc: "Efficient conveyor systems and automated sorting to reduce manual dependency and breakage." },
                                { title: "Factory-wide Monitoring", desc: "Centralized dashboards to track production metrics, energy usage, and machine status." },
                                { title: "Energy Management Systems", desc: "Optimizing firewood and electricity consumption through intelligent combustion and motor controls." },
                                { title: "Packaging & Quality Control", desc: "Precision weighing and inspection systems to ensure batch consistency and compliance." }
                            ].map((app, index) => (
                                <div className="tea-application-item" key={index}>
                                    <div className="tea-app-index">{index + 1}.</div>
                                    <div className="tea-app-details">
                                        <h3 className="tea-app-title">{app.title}</h3>
                                        <p className="tea-app-desc">{app.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. RELATED INDUSTRY INITIATIVES */}
            <section className="tea-initiatives-section">
                <div className="container">
                    <div className="tea-initiatives-layout">
                        <div className="tea-initiatives-content">
                            <h2 className="tea-section-title light">Related Industry Initiatives</h2>
                            <p className="tea-initiatives-lead">
                                Sanota is actively involved in broader industry movements aimed at technological advancement and sustainability.
                            </p>
                            <div className="tea-initiatives-list">
                                {[
                                    "Tea modernization initiative",
                                    "Smart greenhouse initiative",
                                    "Smart monitoring initiative",
                                    "Energy efficiency initiative"
                                ].map((initiative, index) => (
                                    <div className="tea-initiative-tag" key={index}>
                                        <span className="tea-initiative-bullet">→</span>
                                        {initiative}
                                    </div>
                                ))}
                            </div>
                            <Link to="/initiatives" className="btn btn-primary tea-btn-primary mt-40">
                                Explore Industry Initiatives
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. RELATED PRODUCTS */}
            <section className="tea-products-section">
                <div className="container">
                    <div className="tea-section-header">
                        <h2 className="tea-section-title">Related Products</h2>
                        <p className="tea-section-subtitle">Specialized engineering products developed for the tea processing industry.</p>
                    </div>
                    <div className="tea-products-grid">
                        {[
                            { name: "Green Tea Dryer", desc: "Advanced thermal control for precise green tea processing." },
                            { name: "Tea Roller", desc: "Heavy-duty engineering for consistent leaf cell rupture." },
                            { name: "Withering Trough", desc: "Automated airflow and temperature control systems." },
                            { name: "Tea Tablet Machine", desc: "Precision compression for specialized tea products." }
                        ].map((product, index) => (
                            <div className="tea-product-card" key={index}>
                                <div className="tea-product-icon">⚙️</div>
                                <h3 className="tea-product-name">{product.name}</h3>
                                <p className="tea-product-desc">{product.desc}</p>
                                <Link to="/products" className="tea-product-link">View Details</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeaIndustry;
