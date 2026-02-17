import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ArticlePage.css';

function ArticlePage() {
    const { slug } = useParams();

    // In a real application, this would fetch from an API or CMS
    const articles = {
        'future-industrial-automation-sri-lanka': {
            title: 'The Future of Industrial Automation in Sri Lanka',
            category: 'Automation',
            author: 'Sanota Engineering Team',
            date: '2024-01-15',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200',
            content: `
                <p class="lead">Industrial automation is rapidly evolving in Sri Lanka, driven by technological advancements and the need for increased productivity and efficiency. This article explores the key trends shaping the future of automation in our industrial landscape.</p>

                <h2>Current State of Automation in Sri Lanka</h2>
                <p>Sri Lankan industries have made significant strides in adopting automation technologies over the past decade. From textile manufacturing to food processing, automation has become a critical component of competitive operations.</p>

                <h3>Key Adoption Areas</h3>
                <ul>
                    <li>Manufacturing process automation</li>
                    <li>Quality control and inspection systems</li>
                    <li>Energy management and optimization</li>
                    <li>Supply chain and logistics automation</li>
                </ul>

                <h2>Emerging Technologies</h2>
                <p>Several cutting-edge technologies are set to transform industrial automation in Sri Lanka:</p>

                <h3>1. Industrial Internet of Things (IIoT)</h3>
                <p>IIoT enables real-time monitoring and data collection from industrial equipment, providing unprecedented visibility into operations. This connectivity allows for predictive maintenance, energy optimization, and improved decision-making.</p>

                <h3>2. Artificial Intelligence and Machine Learning</h3>
                <p>AI and ML are being integrated into automation systems to enable adaptive control, quality prediction, and autonomous optimization. These technologies can analyze vast amounts of data to identify patterns and optimize processes continuously.</p>

                <h3>3. Digital Twin Technology</h3>
                <p>Digital twins create virtual replicas of physical systems, allowing for simulation, testing, and optimization without disrupting actual operations. This technology is particularly valuable for complex manufacturing processes.</p>

                <h2>Challenges and Opportunities</h2>
                <p>While the future is promising, several challenges need to be addressed:</p>

                <h3>Challenges</h3>
                <ul>
                    <li>Skills gap in advanced automation technologies</li>
                    <li>Initial investment requirements</li>
                    <li>Integration with legacy systems</li>
                    <li>Cybersecurity concerns</li>
                </ul>

                <h3>Opportunities</h3>
                <ul>
                    <li>Increased global competitiveness</li>
                    <li>Job creation in high-tech sectors</li>
                    <li>Sustainable manufacturing practices</li>
                    <li>Export market expansion</li>
                </ul>

                <h2>The Path Forward</h2>
                <p>For Sri Lankan industries to fully capitalize on automation opportunities, a collaborative approach is essential. This includes:</p>

                <ol>
                    <li><strong>Investment in Education:</strong> Developing skilled workforce through specialized training programs</li>
                    <li><strong>Government Support:</strong> Policies and incentives to encourage automation adoption</li>
                    <li><strong>Industry Collaboration:</strong> Sharing best practices and lessons learned</li>
                    <li><strong>Technology Partnerships:</strong> Working with experienced automation providers</li>
                </ol>

                <h2>Conclusion</h2>
                <p>The future of industrial automation in Sri Lanka is bright, with tremendous potential for growth and innovation. By embracing emerging technologies and addressing current challenges, Sri Lankan industries can achieve world-class operational excellence and compete effectively in global markets.</p>

                <p>At Sanota, we're committed to being your partner in this automation journey, providing cutting-edge solutions and expert guidance to help you navigate the future of industrial automation.</p>
            `,
            tags: ['Automation', 'Industry 4.0', 'Sri Lanka', 'Manufacturing', 'Technology Trends']
        },
        'implementing-industry-4-0-practical-guide': {
            title: 'Implementing Industry 4.0: A Practical Guide',
            category: 'Industry 4.0',
            author: 'Sanota Engineering Team',
            date: '2024-01-10',
            readTime: '10 min read',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200',
            content: `
                <p class="lead">Industry 4.0 represents the fourth industrial revolution, characterized by the integration of digital technologies into manufacturing processes. This guide provides a practical roadmap for implementing Industry 4.0 in your organization.</p>

                <h2>Understanding Industry 4.0</h2>
                <p>Industry 4.0 encompasses several key technologies working together to create smart, connected manufacturing environments.</p>

                <h3>Core Technologies</h3>
                <ul>
                    <li>Industrial Internet of Things (IIoT)</li>
                    <li>Cloud Computing</li>
                    <li>Big Data Analytics</li>
                    <li>Artificial Intelligence</li>
                    <li>Cyber-Physical Systems</li>
                </ul>

                <h2>Implementation Roadmap</h2>
                
                <h3>Phase 1: Assessment and Planning</h3>
                <p>Begin with a comprehensive assessment of your current operations:</p>
                <ul>
                    <li>Evaluate existing systems and processes</li>
                    <li>Identify pain points and opportunities</li>
                    <li>Define clear objectives and KPIs</li>
                    <li>Develop a phased implementation plan</li>
                </ul>

                <h3>Phase 2: Infrastructure Development</h3>
                <p>Build the foundation for Industry 4.0:</p>
                <ul>
                    <li>Upgrade network infrastructure</li>
                    <li>Implement data collection systems</li>
                    <li>Establish cloud connectivity</li>
                    <li>Ensure cybersecurity measures</li>
                </ul>

                <h3>Phase 3: Technology Integration</h3>
                <p>Deploy and integrate Industry 4.0 technologies:</p>
                <ul>
                    <li>Install IoT sensors and devices</li>
                    <li>Implement data analytics platforms</li>
                    <li>Integrate AI and ML capabilities</li>
                    <li>Connect systems and create data flows</li>
                </ul>

                <h2>Best Practices</h2>
                <ol>
                    <li><strong>Start Small:</strong> Begin with pilot projects to prove value</li>
                    <li><strong>Focus on ROI:</strong> Prioritize initiatives with clear business benefits</li>
                    <li><strong>Invest in People:</strong> Train your workforce on new technologies</li>
                    <li><strong>Ensure Data Quality:</strong> Implement proper data governance</li>
                    <li><strong>Maintain Flexibility:</strong> Design systems that can evolve</li>
                </ol>

                <h2>Conclusion</h2>
                <p>Industry 4.0 implementation is a journey, not a destination. With careful planning, the right technology partners, and a commitment to continuous improvement, your organization can successfully transform into a smart, connected enterprise.</p>
            `,
            tags: ['Industry 4.0', 'Digital Transformation', 'Smart Manufacturing', 'IIoT', 'Implementation']
        },
        'scada-system-design-best-practices': {
            title: 'SCADA System Design Best Practices',
            category: 'SCADA & HMI',
            author: 'Sanota Engineering Team',
            date: '2024-01-05',
            readTime: '12 min read',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
            content: `
                <p class="lead">Designing a robust and scalable SCADA system requires careful planning and adherence to industry best practices. This comprehensive guide covers essential considerations for successful SCADA implementation.</p>

                <h2>SCADA System Architecture</h2>
                <p>A well-designed SCADA architecture is the foundation of a reliable system.</p>

                <h3>Key Components</h3>
                <ul>
                    <li>SCADA servers (primary and backup)</li>
                    <li>HMI workstations</li>
                    <li>Communication infrastructure</li>
                    <li>Field devices and RTUs/PLCs</li>
                    <li>Historian and database systems</li>
                </ul>

                <h2>Design Principles</h2>

                <h3>1. Redundancy and Reliability</h3>
                <p>Implement redundancy at all critical levels:</p>
                <ul>
                    <li>Redundant SCADA servers</li>
                    <li>Dual communication paths</li>
                    <li>Backup power systems</li>
                    <li>Failover mechanisms</li>
                </ul>

                <h3>2. Scalability</h3>
                <p>Design systems that can grow with your needs:</p>
                <ul>
                    <li>Modular architecture</li>
                    <li>Flexible tag database</li>
                    <li>Expandable I/O capacity</li>
                    <li>Cloud-ready infrastructure</li>
                </ul>

                <h3>3. Security</h3>
                <p>Implement comprehensive cybersecurity measures:</p>
                <ul>
                    <li>Network segmentation</li>
                    <li>User authentication and authorization</li>
                    <li>Encrypted communications</li>
                    <li>Regular security audits</li>
                </ul>

                <h2>HMI Design Guidelines</h2>
                <p>Effective HMI design is crucial for operator efficiency:</p>
                <ul>
                    <li>Consistent layout and navigation</li>
                    <li>Clear alarm management</li>
                    <li>Intuitive graphics and symbols</li>
                    <li>Responsive design for different screen sizes</li>
                </ul>

                <h2>Communication Protocols</h2>
                <p>Select appropriate protocols based on your requirements:</p>
                <ul>
                    <li>Modbus TCP/IP for standard industrial devices</li>
                    <li>OPC UA for modern interoperability</li>
                    <li>DNP3 for utility applications</li>
                    <li>Proprietary protocols when necessary</li>
                </ul>

                <h2>Testing and Validation</h2>
                <p>Thorough testing ensures system reliability:</p>
                <ol>
                    <li>Factory Acceptance Testing (FAT)</li>
                    <li>Site Acceptance Testing (SAT)</li>
                    <li>Performance testing under load</li>
                    <li>Failover and recovery testing</li>
                    <li>Cybersecurity penetration testing</li>
                </ol>

                <h2>Conclusion</h2>
                <p>Following these best practices will help ensure your SCADA system is reliable, secure, and capable of meeting your operational needs both now and in the future.</p>
            `,
            tags: ['SCADA', 'HMI', 'System Design', 'Best Practices', 'Industrial Control']
        }
    };

    const article = articles[slug];

    if (!article) {
        return (
            <div className="article-page">
                <div className="container">
                    <div className="article-not-found">
                        <h1>Article Not Found</h1>
                        <p>The article you're looking for doesn't exist.</p>
                        <Link to="/insights" className="btn btn-primary">Back to Insights</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="article-page">
            <Helmet>
                <title>{article.title} | Sanota Insights</title>
                <meta name="description" content={article.content.substring(0, 160)} />
                <meta name="keywords" content={article.tags.join(', ')} />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.content.substring(0, 160)} />
                <meta property="og:image" content={article.image} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* Article Header */}
            <section className="article-header">
                <div
                    className="article-hero-image"
                    style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="container">
                    <div className="article-header-content">
                        <Link to="/insights" className="back-link">← Back to Insights</Link>
                        <div className="article-meta">
                            <span className="category-badge">{article.category}</span>
                            <span className="read-time">{article.readTime}</span>
                        </div>
                        <h1>{article.title}</h1>
                        <div className="article-author-info">
                            <span className="author">{article.author}</span>
                            <span className="date">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="article-content-section">
                <div className="container">
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

                    {/* Tags */}
                    <div className="article-tags">
                        <h4>Tags:</h4>
                        <div className="tags-list">
                            {article.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Share */}
                    <div className="article-share">
                        <h4>Share this article:</h4>
                        <div className="share-buttons">
                            <button className="share-btn">LinkedIn</button>
                            <button className="share-btn">Twitter</button>
                            <button className="share-btn">Facebook</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles CTA */}
            <section className="related-cta section bg-gray-50">
                <div className="container text-center">
                    <h2>Explore More Insights</h2>
                    <p className="section-intro">
                        Discover more expert articles and industry best practices
                    </p>
                    <Link to="/insights" className="btn btn-primary btn-lg">View All Articles</Link>
                </div>
            </section>
        </div>
    );
}

export default ArticlePage;
