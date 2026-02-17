import { Helmet } from 'react-helmet-async';
import './About.css';

function About() {
    const teamMembers = [
        {
            name: 'Eng. Rajitha Perera',
            position: 'Founder & Managing Director',
            expertise: 'Industrial Automation & Control Systems',
            description: '20+ years of experience in automation engineering and project management',
            icon: '👨‍💼'
        },
        {
            name: 'Eng. Samantha Silva',
            position: 'Technical Director',
            expertise: 'SCADA Systems & Software Development',
            description: 'Expert in SCADA design and industrial software solutions',
            icon: '👨‍💻'
        },
        {
            name: 'Eng. Nimal Fernando',
            position: 'Projects Manager',
            expertise: 'Project Execution & Commissioning',
            description: 'Specialized in large-scale automation project delivery',
            icon: '👨‍🔧'
        },
        {
            name: 'Eng. Priya Wickramasinghe',
            position: 'Lead Electrical Engineer',
            expertise: 'Electrical Design & Panel Engineering',
            description: 'Expert in electrical system design and control panel fabrication',
            icon: '👩‍🔬'
        },
        {
            name: 'Eng. Kasun Jayawardena',
            position: 'Senior Automation Engineer',
            expertise: 'PLC Programming & System Integration',
            description: 'Specialist in PLC programming and system integration',
            icon: '👨‍💼'
        },
        {
            name: 'Eng. Dilini Amarasinghe',
            position: 'Software Engineer',
            expertise: 'HMI/SCADA Development',
            description: 'Expert in HMI design and SCADA application development',
            icon: '👩‍💻'
        }
    ];

    const certifications = [
        {
            title: 'ISO 9001:2015',
            category: 'Quality Management',
            description: 'Certified quality management system ensuring consistent delivery of high-quality solutions',
            icon: '🏆'
        },
        {
            title: 'Siemens Solution Partner',
            category: 'Technology Partnership',
            description: 'Authorized Siemens solution partner for automation and drive technologies',
            icon: '🤝'
        },
        {
            title: 'Rockwell Automation Partner',
            category: 'Technology Partnership',
            description: 'Certified partner for Allen-Bradley and Rockwell Automation products',
            icon: '🤝'
        },
        {
            title: 'Schneider Electric Partner',
            category: 'Technology Partnership',
            description: 'Authorized partner for Schneider Electric automation solutions',
            icon: '🤝'
        },
        {
            title: 'IESL Corporate Member',
            category: 'Professional Membership',
            description: 'Corporate member of Institution of Engineers Sri Lanka',
            icon: '📜'
        },
        {
            title: 'Electrical Installation License',
            category: 'Regulatory Compliance',
            description: 'Licensed electrical installation contractor in Sri Lanka',
            icon: '⚡'
        }
    ];

    const values = [
        {
            title: 'Excellence',
            description: 'We strive for excellence in every project, delivering solutions that exceed expectations',
            icon: '⭐'
        },
        {
            title: 'Innovation',
            description: 'Continuously adopting cutting-edge technologies to provide innovative automation solutions',
            icon: '💡'
        },
        {
            title: 'Integrity',
            description: 'Operating with honesty, transparency, and ethical business practices',
            icon: '🛡️'
        },
        {
            title: 'Customer Focus',
            description: 'Putting our clients\' needs first and building long-term partnerships',
            icon: '🎯'
        },
        {
            title: 'Quality',
            description: 'Maintaining the highest standards in design, implementation, and support',
            icon: '✓'
        },
        {
            title: 'Teamwork',
            description: 'Collaborating effectively to deliver comprehensive automation solutions',
            icon: '🤝'
        }
    ];

    return (
        <div className="about-page">
            <Helmet>
                <title>About Sanota | Leading Automation Engineering Company in Sri Lanka</title>
                <meta name="description" content="Learn about Sanota's 15+ year journey in industrial automation, our expert team, certifications, and commitment to excellence in engineering solutions." />
                <meta name="keywords" content="about Sanota, automation company Sri Lanka, engineering team, ISO certified, automation partners" />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>About Sanota</h1>
                        <p className="hero-subtitle">
                            Engineering Excellence in Industrial Automation Since 2008
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="story-section section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2>Our Story</h2>
                            <p className="lead">
                                Founded in 2008, Sanota has grown from a small automation startup to become one of Sri Lanka's most trusted names in industrial automation and engineering solutions.
                            </p>
                            <p>
                                Our journey began with a simple vision: to bring world-class automation technology to Sri Lankan industries. What started as a team of passionate engineers has evolved into a comprehensive automation solutions provider, serving clients across multiple industries throughout the country.
                            </p>
                            <p>
                                Over the past 15+ years, we've completed more than 200 projects, ranging from small machine automation to large-scale SCADA systems for critical infrastructure. Our success is built on a foundation of technical expertise, customer focus, and unwavering commitment to quality.
                            </p>
                            <p>
                                Today, Sanota stands as a testament to what can be achieved through dedication, innovation, and a relentless pursuit of excellence. We continue to invest in our people, technology, and processes to ensure we remain at the forefront of automation engineering in Sri Lanka.
                            </p>
                        </div>
                        <div className="story-stats">
                            <div className="stat-box">
                                <div className="stat-number">2008</div>
                                <div className="stat-label">Founded</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">15+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">200+</div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Active Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision-section section bg-gray-50">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-card">
                            <div className="mv-icon">🎯</div>
                            <h3>Our Mission</h3>
                            <p>
                                To deliver innovative, reliable, and cost-effective automation solutions that empower Sri Lankan industries to achieve operational excellence and compete globally.
                            </p>
                        </div>
                        <div className="vision-card">
                            <div className="mv-icon">🔭</div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the most trusted and preferred automation engineering partner in Sri Lanka, recognized for technical excellence, innovation, and customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Core Values</h2>
                        <p className="section-intro">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Leadership Team</h2>
                        <p className="section-intro">
                            Experienced professionals driving innovation and excellence
                        </p>
                    </div>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="team-avatar">{member.icon}</div>
                                <h3>{member.name}</h3>
                                <p className="team-position">{member.position}</p>
                                <p className="team-expertise">{member.expertise}</p>
                                <p className="team-description">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="certifications-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Certifications & Partnerships</h2>
                        <p className="section-intro">
                            Recognized expertise and trusted partnerships
                        </p>
                    </div>
                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-card">
                                <div className="cert-icon">{cert.icon}</div>
                                <h3>{cert.title}</h3>
                                <p className="cert-category">{cert.category}</p>
                                <p className="cert-description">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section bg-gradient">
                <div className="container text-center">
                    <h2>Join Us on Our Journey</h2>
                    <p className="section-intro-light">
                        Partner with Sanota for your automation needs and experience the difference that expertise and dedication make
                    </p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary btn-lg">Get in Touch</a>
                        <a href="/careers" className="btn btn-secondary-light btn-lg">Join Our Team</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
