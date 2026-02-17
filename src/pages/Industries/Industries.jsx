import './Industries.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';

function Industries() {
    const industries = [
        {
            id: 'manufacturing',
            name: 'Manufacturing',
            icon: '🏭',
            image: picture1,
            challenges: [
                'Manual production processes causing bottlenecks',
                'Inconsistent product quality and high defect rates',
                'Limited real-time visibility into production metrics',
                'Difficulty scaling operations to meet demand'
            ],
            solutions: [
                'PLC-based production line automation',
                'SCADA systems for real-time monitoring',
                'Quality control and inspection systems',
                'MES integration for production tracking'
            ],
            benefits: [
                '40% increase in production output',
                '60% reduction in defect rates',
                'Real-time production visibility',
                '25% reduction in operational costs'
            ]
        },
        {
            id: 'water',
            name: 'Water & Wastewater',
            icon: '💧',
            image: picture2,
            challenges: [
                'Distributed facilities requiring centralized monitoring',
                'Manual water quality testing and reporting',
                'Energy-intensive pumping and treatment processes',
                'Regulatory compliance and documentation requirements'
            ],
            solutions: [
                'Comprehensive SCADA deployment',
                'Automated water quality monitoring systems',
                'Energy optimization and pump control',
                'Automated reporting and compliance systems'
            ],
            benefits: [
                '100% remote monitoring capability',
                '35% energy consumption reduction',
                'Automated compliance reporting',
                '60% faster incident response'
            ]
        },
        {
            id: 'energy',
            name: 'Energy & Power',
            icon: '⚡',
            image: picture3,
            challenges: [
                'Aging infrastructure with frequent outages',
                'Limited fault detection and isolation capabilities',
                'Manual meter reading and billing processes',
                'Grid stability and load balancing issues'
            ],
            solutions: [
                'Advanced distribution management systems',
                'Automated protection and switching',
                'Smart metering and AMI infrastructure',
                'Load management and demand response systems'
            ],
            benefits: [
                '90% reduction in outage duration',
                '99.9% system reliability achieved',
                'Automated billing and revenue collection',
                'Improved grid stability and efficiency'
            ]
        },
        {
            id: 'food',
            name: 'Food & Beverage',
            icon: '🍃',
            image: picture4,
            challenges: [
                'Strict hygiene and safety requirements',
                'Batch consistency and traceability needs',
                'Temperature and humidity control challenges',
                'Regulatory compliance and audit requirements'
            ],
            solutions: [
                'Hygienic automation with washdown-rated equipment',
                'Batch control and recipe management systems',
                'Environmental monitoring and control',
                'Automated traceability and documentation'
            ],
            benefits: [
                '100% batch traceability',
                '50% reduction in quality incidents',
                'Full regulatory compliance',
                '30% improvement in production efficiency'
            ]
        },
        {
            id: 'building',
            name: 'Building Automation',
            icon: '🏗️',
            image: picture5,
            challenges: [
                'High energy consumption from HVAC systems',
                'Manual lighting and climate control',
                'Lack of integrated building management',
                'Occupant comfort and productivity issues'
            ],
            solutions: [
                'Integrated building management systems (BMS)',
                'Smart HVAC control and optimization',
                'Automated lighting and occupancy sensing',
                'Energy monitoring and analytics'
            ],
            benefits: [
                '45% reduction in energy costs',
                'Improved occupant comfort',
                'Centralized facility management',
                '30% lower maintenance costs'
            ]
        },
        {
            id: 'pharma',
            name: 'Pharmaceuticals',
            icon: '🔬',
            image: picture1,
            challenges: [
                'Stringent GMP and validation requirements',
                'Critical process parameter monitoring',
                'Clean room environmental control',
                'Extensive documentation and audit trails'
            ],
            solutions: [
                'GMP-compliant automation systems',
                'Electronic batch records (EBR)',
                'Clean room monitoring and control',
                'Validated SCADA and historian systems'
            ],
            benefits: [
                'Full GMP compliance achieved',
                '100% electronic documentation',
                'Reduced validation time by 40%',
                'Zero audit findings'
            ]
        }
    ];

    return (
        <div className="industries-page">
            {/* Hero Section */}
            <section className="industries-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>Industries We Serve</h1>
                        <p className="hero-subtitle">
                            Specialized automation solutions tailored to your industry's unique challenges
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Overview */}
            <section className="industries-overview section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Expertise Across Multiple Sectors</h2>
                        <p className="section-intro">
                            Deep industry knowledge combined with technical excellence
                        </p>
                    </div>
                    <div className="industries-grid">
                        {industries.map((industry) => (
                            <a
                                key={industry.id}
                                href={`#${industry.id}`}
                                className="industry-overview-card"
                            >
                                <div className="industry-overview-icon">{industry.icon}</div>
                                <h3>{industry.name}</h3>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Individual Industry Sections */}
            {industries.map((industry, index) => (
                <section
                    key={industry.id}
                    id={industry.id}
                    className={`industry-detail section ${index % 2 === 0 ? '' : 'bg-gray-50'}`}
                >
                    <div className="container">
                        <div className="industry-header">
                            <div className="industry-header-content">
                                <div className="industry-icon-large">{industry.icon}</div>
                                <h2>{industry.name}</h2>
                            </div>
                            <div
                                className="industry-header-image"
                                style={{ backgroundImage: `url(${industry.image})` }}
                            />
                        </div>

                        <div className="industry-sections">
                            {/* Challenges */}
                            <div className="industry-subsection">
                                <h3>Industry Challenges</h3>
                                <div className="challenges-list">
                                    {industry.challenges.map((challenge, idx) => (
                                        <div key={idx} className="challenge-item">
                                            <span className="challenge-icon">⚠️</span>
                                            <p>{challenge}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Solutions */}
                            <div className="industry-subsection">
                                <h3>Solutions Implemented</h3>
                                <div className="solutions-list">
                                    {industry.solutions.map((solution, idx) => (
                                        <div key={idx} className="solution-item">
                                            <span className="solution-icon">✓</span>
                                            <p>{solution}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="industry-subsection">
                                <h3>Benefits Achieved</h3>
                                <div className="benefits-list">
                                    {industry.benefits.map((benefit, idx) => (
                                        <div key={idx} className="benefit-item">
                                            <span className="benefit-icon">🎯</span>
                                            <p>{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className="cta-section section bg-gradient">
                <div className="container text-center">
                    <h2>Ready to Transform Your Industry Operations?</h2>
                    <p className="section-intro-light">
                        Let's discuss how our industry-specific solutions can address your unique challenges
                    </p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary btn-lg">Request Consultation</a>
                        <a href="/case-studies" className="btn btn-secondary-light btn-lg">View Case Studies</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Industries;
