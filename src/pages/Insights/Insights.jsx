import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Insights.css';

function Insights() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        'All',
        'Automation',
        'Industry 4.0',
        'SCADA & HMI',
        'Energy Management',
        'Best Practices',
        'Case Studies'
    ];

    const articles = [
        {
            id: 1,
            title: 'The Future of Industrial Automation in Sri Lanka',
            slug: 'future-industrial-automation-sri-lanka',
            excerpt: 'Exploring emerging trends and technologies shaping the future of automation in Sri Lankan manufacturing and industrial sectors.',
            category: 'Automation',
            author: 'Sanota Engineering Team',
            date: '2024-01-15',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
            featured: true
        },
        {
            id: 2,
            title: 'Implementing Industry 4.0: A Practical Guide',
            slug: 'implementing-industry-4-0-practical-guide',
            excerpt: 'Step-by-step approach to implementing Industry 4.0 technologies in traditional manufacturing environments.',
            category: 'Industry 4.0',
            author: 'Sanota Engineering Team',
            date: '2024-01-10',
            readTime: '10 min read',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
            featured: true
        },
        {
            id: 3,
            title: 'SCADA System Design Best Practices',
            slug: 'scada-system-design-best-practices',
            excerpt: 'Essential considerations and best practices for designing robust and scalable SCADA systems.',
            category: 'SCADA & HMI',
            author: 'Sanota Engineering Team',
            date: '2024-01-05',
            readTime: '12 min read',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
            featured: false
        },
        {
            id: 4,
            title: 'Energy Optimization in Water Treatment Plants',
            slug: 'energy-optimization-water-treatment',
            excerpt: 'How automation and smart control strategies can reduce energy consumption in water treatment facilities.',
            category: 'Energy Management',
            author: 'Sanota Engineering Team',
            date: '2023-12-28',
            readTime: '7 min read',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800',
            featured: false
        },
        {
            id: 5,
            title: 'PLC Programming Standards and Guidelines',
            slug: 'plc-programming-standards-guidelines',
            excerpt: 'Comprehensive guide to PLC programming standards that ensure maintainable and reliable automation systems.',
            category: 'Best Practices',
            author: 'Sanota Engineering Team',
            date: '2023-12-20',
            readTime: '15 min read',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
            featured: false
        },
        {
            id: 6,
            title: 'Successful Factory Automation: Lessons Learned',
            slug: 'successful-factory-automation-lessons',
            excerpt: 'Key insights and lessons from implementing complete factory automation projects across different industries.',
            category: 'Case Studies',
            author: 'Sanota Engineering Team',
            date: '2023-12-15',
            readTime: '9 min read',
            image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800',
            featured: false
        }
    ];

    const filteredArticles = selectedCategory === 'All'
        ? articles
        : articles.filter(article => article.category === selectedCategory);

    const featuredArticles = articles.filter(article => article.featured);

    return (
        <div className="insights-page">
            <Helmet>
                <title>Insights & Articles | Sanota Automation Engineering</title>
                <meta name="description" content="Expert insights, technical articles, and industry best practices in industrial automation, SCADA systems, and engineering solutions from Sanota." />
                <meta name="keywords" content="automation insights, industrial automation articles, SCADA best practices, Industry 4.0, engineering blog" />
            </Helmet>

            {/* Hero Section */}
            <section className="insights-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>Insights & Knowledge Hub</h1>
                        <p className="hero-subtitle">
                            Expert insights, technical articles, and industry best practices in automation and engineering
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            {featuredArticles.length > 0 && (
                <section className="featured-section section">
                    <div className="container">
                        <h2 className="section-title">Featured Articles</h2>
                        <div className="featured-grid">
                            {featuredArticles.map((article) => (
                                <Link
                                    key={article.id}
                                    to={`/insights/${article.slug}`}
                                    className="featured-article-card"
                                >
                                    <div
                                        className="featured-image"
                                        style={{ backgroundImage: `url(${article.image})` }}
                                    >
                                        <div className="featured-badge">Featured</div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="article-meta">
                                            <span className="category-badge">{article.category}</span>
                                            <span className="read-time">{article.readTime}</span>
                                        </div>
                                        <h3>{article.title}</h3>
                                        <p>{article.excerpt}</p>
                                        <div className="article-footer">
                                            <span className="author">{article.author}</span>
                                            <span className="date">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Category Filter & Articles */}
            <section className="articles-section section bg-gray-50">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">All Articles</h2>

                        {/* Category Filter */}
                        <div className="category-filter">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="articles-grid">
                        {filteredArticles.map((article) => (
                            <Link
                                key={article.id}
                                to={`/insights/${article.slug}`}
                                className="article-card"
                            >
                                <div
                                    className="article-image"
                                    style={{ backgroundImage: `url(${article.image})` }}
                                />
                                <div className="article-content">
                                    <div className="article-meta">
                                        <span className="category-badge">{article.category}</span>
                                        <span className="read-time">{article.readTime}</span>
                                    </div>
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt}</p>
                                    <div className="article-footer">
                                        <span className="date">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredArticles.length === 0 && (
                        <div className="no-articles">
                            <p>No articles found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="newsletter-section section bg-gradient">
                <div className="container text-center">
                    <h2>Stay Updated</h2>
                    <p className="section-intro-light">
                        Subscribe to our newsletter for the latest insights and industry updates
                    </p>
                    <div className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="newsletter-input"
                        />
                        <button className="btn btn-primary btn-lg">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Insights;
