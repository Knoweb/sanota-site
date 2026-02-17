import './CaseStudies.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';

function CaseStudies() {
    const caseStudies = [
        {
            id: 1,
            title: 'Complete Factory Automation Transformation',
            industry: 'Manufacturing',
            client: 'Leading Textile Manufacturing Facility',
            image: picture1,
            problem: {
                title: 'The Challenge',
                description: 'A major textile manufacturing facility was struggling with outdated manual production processes that created significant operational bottlenecks. The facility faced multiple critical issues:',
                points: [
                    'Manual quality control resulting in 15% defect rate',
                    'Production bottlenecks causing 30% capacity underutilization',
                    'No real-time visibility into production metrics',
                    'Inconsistent product quality across different shifts',
                    'High labor costs due to manual intervention requirements',
                    'Difficulty meeting increasing customer demand'
                ]
            },
            solution: {
                title: 'Our Approach',
                description: 'Sanota implemented a comprehensive automation solution that transformed the entire production line:',
                points: [
                    'Deployed PLC-based control systems across 12 production lines',
                    'Integrated SCADA system for centralized monitoring and control',
                    'Implemented automated quality inspection systems with vision technology',
                    'Installed MES (Manufacturing Execution System) for production tracking',
                    'Developed custom HMI interfaces for operator control',
                    'Provided comprehensive training and documentation'
                ],
                timeline: '6 months from design to full commissioning',
                technologies: ['Siemens S7-1500 PLCs', 'WinCC SCADA', 'Vision Inspection Systems', 'Industrial Ethernet']
            },
            outcome: {
                title: 'Results Achieved',
                description: 'The automation transformation delivered exceptional results that exceeded client expectations:',
                metrics: [
                    { value: '40%', label: 'Increase in Production Output' },
                    { value: '60%', label: 'Reduction in Defect Rate' },
                    { value: '25%', label: 'Lower Operational Costs' },
                    { value: '100%', label: 'Real-Time Visibility' }
                ],
                benefits: [
                    'Consistent product quality across all shifts',
                    'Ability to meet increased customer demand',
                    'Reduced labor costs through automation',
                    'Complete production traceability',
                    'Predictive maintenance capabilities',
                    'ROI achieved within 18 months'
                ]
            }
        },
        {
            id: 2,
            title: 'Comprehensive SCADA System for Water Treatment',
            industry: 'Water & Wastewater',
            client: 'Municipal Water Treatment Authority',
            image: picture2,
            problem: {
                title: 'The Challenge',
                description: 'A municipal water authority managing multiple distributed treatment facilities faced critical operational challenges:',
                points: [
                    'Limited visibility into operations across 8 remote facilities',
                    'Manual water quality testing causing delayed responses',
                    'High energy consumption from inefficient pump operations',
                    'Difficulty meeting regulatory compliance requirements',
                    'Slow incident response times affecting service quality',
                    'Lack of historical data for optimization'
                ]
            },
            solution: {
                title: 'Our Approach',
                description: 'Sanota deployed a comprehensive SCADA solution connecting all facilities:',
                points: [
                    'Implemented centralized SCADA system with redundant servers',
                    'Installed automated water quality monitoring sensors',
                    'Deployed energy-optimized pump control algorithms',
                    'Integrated automated compliance reporting systems',
                    'Established secure remote access for 24/7 monitoring',
                    'Implemented historian for long-term data analysis'
                ],
                timeline: '8 months including all 8 facilities',
                technologies: ['Wonderware System Platform', 'Modbus/TCP', 'Online Water Quality Analyzers', 'VFD Pump Control']
            },
            outcome: {
                title: 'Results Achieved',
                description: 'The SCADA implementation transformed water treatment operations:',
                metrics: [
                    { value: '100%', label: 'Remote Monitoring Coverage' },
                    { value: '35%', label: 'Energy Cost Reduction' },
                    { value: '60%', label: 'Faster Incident Response' },
                    { value: '99.9%', label: 'System Uptime' }
                ],
                benefits: [
                    'Complete visibility across all facilities',
                    'Automated regulatory compliance reporting',
                    'Significant energy savings from optimized operations',
                    'Improved water quality consistency',
                    'Reduced operational expenses',
                    'Enhanced public service delivery'
                ]
            }
        },
        {
            id: 3,
            title: 'Power Distribution System Modernization',
            industry: 'Energy & Power',
            client: 'Regional Power Distribution Company',
            image: picture3,
            problem: {
                title: 'The Challenge',
                description: 'A regional power distributor faced reliability issues with aging infrastructure:',
                points: [
                    'Frequent power outages affecting 50,000+ customers',
                    'Limited fault detection and isolation capabilities',
                    'Manual meter reading causing billing delays',
                    'Grid instability during peak demand periods',
                    'High maintenance costs for aging equipment',
                    'Customer dissatisfaction due to service interruptions'
                ]
            },
            solution: {
                title: 'Our Approach',
                description: 'Sanota implemented a comprehensive distribution management solution:',
                points: [
                    'Deployed advanced distribution management system (ADMS)',
                    'Installed automated protection and switching equipment',
                    'Implemented smart metering infrastructure (AMI)',
                    'Integrated load management and demand response systems',
                    'Established network monitoring and control center',
                    'Upgraded communication infrastructure'
                ],
                timeline: '12 months phased implementation',
                technologies: ['ABB DMS600', 'Smart Meters', 'Automated Reclosers', 'SCADA Integration', 'GIS Mapping']
            },
            outcome: {
                title: 'Results Achieved',
                description: 'The modernization dramatically improved distribution reliability:',
                metrics: [
                    { value: '90%', label: 'Reduction in Outage Duration' },
                    { value: '99.9%', label: 'System Reliability' },
                    { value: '100%', label: 'Automated Metering' },
                    { value: '45%', label: 'Faster Fault Location' }
                ],
                benefits: [
                    'Significantly improved customer satisfaction',
                    'Automated billing and revenue collection',
                    'Enhanced grid stability and efficiency',
                    'Reduced operational and maintenance costs',
                    'Real-time network visibility',
                    'Improved regulatory compliance'
                ]
            }
        },
        {
            id: 4,
            title: 'Food Processing Plant Automation',
            industry: 'Food & Beverage',
            client: 'Major Food Processing Facility',
            image: picture4,
            problem: {
                title: 'The Challenge',
                description: 'A food processing facility needed to meet stringent safety and quality requirements:',
                points: [
                    'Manual batch processes causing quality inconsistencies',
                    'Difficulty maintaining hygiene standards',
                    'Limited traceability for regulatory compliance',
                    'Temperature control issues affecting product quality',
                    'High risk of contamination from manual handling',
                    'Inefficient production scheduling'
                ]
            },
            solution: {
                title: 'Our Approach',
                description: 'Sanota implemented hygienic automation with full traceability:',
                points: [
                    'Deployed washdown-rated automation equipment',
                    'Implemented automated batch control and recipe management',
                    'Installed environmental monitoring systems',
                    'Integrated automated traceability and documentation',
                    'Developed clean-in-place (CIP) automation',
                    'Implemented quality management integration'
                ],
                timeline: '5 months with minimal production disruption',
                technologies: ['Rockwell ControlLogix', 'Batch Management', 'Environmental Sensors', 'Traceability Software']
            },
            outcome: {
                title: 'Results Achieved',
                description: 'The automation ensured consistent quality and compliance:',
                metrics: [
                    { value: '100%', label: 'Batch Traceability' },
                    { value: '50%', label: 'Quality Incident Reduction' },
                    { value: '30%', label: 'Production Efficiency Gain' },
                    { value: '100%', label: 'Regulatory Compliance' }
                ],
                benefits: [
                    'Full compliance with food safety regulations',
                    'Consistent product quality across all batches',
                    'Complete production traceability',
                    'Reduced contamination risk',
                    'Improved production efficiency',
                    'Enhanced brand reputation'
                ]
            }
        },
        {
            id: 5,
            title: 'Smart Building Management System',
            industry: 'Building Automation',
            client: 'Commercial Office Complex',
            image: picture5,
            problem: {
                title: 'The Challenge',
                description: 'A large commercial office complex faced high energy costs and comfort issues:',
                points: [
                    'Excessive energy consumption from inefficient HVAC',
                    'Manual lighting control causing energy waste',
                    'Inconsistent temperature control across floors',
                    'No centralized facility management',
                    'High maintenance costs',
                    'Tenant complaints about comfort levels'
                ]
            },
            solution: {
                title: 'Our Approach',
                description: 'Sanota implemented an integrated building management solution:',
                points: [
                    'Deployed comprehensive BMS across entire complex',
                    'Implemented smart HVAC control with optimization',
                    'Installed automated lighting with occupancy sensing',
                    'Integrated energy monitoring and analytics',
                    'Developed centralized management dashboard',
                    'Implemented predictive maintenance system'
                ],
                timeline: '4 months with building occupied',
                technologies: ['Johnson Controls Metasys', 'Smart Sensors', 'Energy Analytics', 'IoT Integration']
            },
            outcome: {
                title: 'Results Achieved',
                description: 'The BMS delivered significant energy savings and improved comfort:',
                metrics: [
                    { value: '45%', label: 'Energy Cost Reduction' },
                    { value: '30%', label: 'Lower Maintenance Costs' },
                    { value: '95%', label: 'Tenant Satisfaction' },
                    { value: '100%', label: 'Centralized Control' }
                ],
                benefits: [
                    'Dramatic reduction in energy expenses',
                    'Improved occupant comfort and satisfaction',
                    'Centralized facility management',
                    'Predictive maintenance capabilities',
                    'Enhanced building value',
                    'Environmental sustainability achieved'
                ]
            }
        }
    ];

    return (
        <div className="case-studies-page">
            {/* Hero Section */}
            <section className="case-studies-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>Success Stories</h1>
                        <p className="hero-subtitle">
                            Real-world automation projects delivering measurable results
                        </p>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="case-studies-overview section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Featured Case Studies</h2>
                        <p className="section-intro">
                            Explore how we've helped businesses transform their operations
                        </p>
                    </div>
                    <div className="case-studies-grid">
                        {caseStudies.map((study) => (
                            <a
                                key={study.id}
                                href={`#case-${study.id}`}
                                className="case-study-preview-card"
                            >
                                <div className="preview-image" style={{ backgroundImage: `url(${study.image})` }}>
                                    <div className="preview-badge">{study.industry}</div>
                                </div>
                                <div className="preview-content">
                                    <h3>{study.title}</h3>
                                    <p className="preview-client">{study.client}</p>
                                    <div className="preview-metrics">
                                        {study.outcome.metrics.slice(0, 2).map((metric, idx) => (
                                            <div key={idx} className="preview-metric">
                                                <span className="metric-value">{metric.value}</span>
                                                <span className="metric-label">{metric.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Case Studies */}
            {caseStudies.map((study, index) => (
                <section
                    key={study.id}
                    id={`case-${study.id}`}
                    className={`case-study-detail section ${index % 2 === 0 ? '' : 'bg-gray-50'}`}
                >
                    <div className="container">
                        {/* Header */}
                        <div className="case-study-header">
                            <div className="case-study-header-content">
                                <div className="case-study-meta">
                                    <span className="industry-badge">{study.industry}</span>
                                    <span className="client-name">{study.client}</span>
                                </div>
                                <h2>{study.title}</h2>
                            </div>
                            <div
                                className="case-study-header-image"
                                style={{ backgroundImage: `url(${study.image})` }}
                            />
                        </div>

                        {/* Problem Section */}
                        <div className="case-study-section problem-section">
                            <div className="section-icon">⚠️</div>
                            <h3>{study.problem.title}</h3>
                            <p className="section-description">{study.problem.description}</p>
                            <ul className="section-list">
                                {study.problem.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Solution Section */}
                        <div className="case-study-section solution-section">
                            <div className="section-icon">🔧</div>
                            <h3>{study.solution.title}</h3>
                            <p className="section-description">{study.solution.description}</p>
                            <ul className="section-list">
                                {study.solution.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                            <div className="solution-details">
                                <div className="detail-item">
                                    <strong>Timeline:</strong> {study.solution.timeline}
                                </div>
                                <div className="detail-item">
                                    <strong>Technologies:</strong> {study.solution.technologies.join(', ')}
                                </div>
                            </div>
                        </div>

                        {/* Outcome Section */}
                        <div className="case-study-section outcome-section">
                            <div className="section-icon">🎯</div>
                            <h3>{study.outcome.title}</h3>
                            <p className="section-description">{study.outcome.description}</p>

                            <div className="outcome-metrics">
                                {study.outcome.metrics.map((metric, idx) => (
                                    <div key={idx} className="outcome-metric">
                                        <div className="metric-value">{metric.value}</div>
                                        <div className="metric-label">{metric.label}</div>
                                    </div>
                                ))}
                            </div>

                            <ul className="section-list">
                                {study.outcome.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className="cta-section section bg-gradient">
                <div className="container text-center">
                    <h2>Ready to Create Your Success Story?</h2>
                    <p className="section-intro-light">
                        Let's discuss how we can deliver similar results for your business
                    </p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary btn-lg">Request Consultation</a>
                        <a href="/solutions" className="btn btn-secondary-light btn-lg">Explore Solutions</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CaseStudies;
