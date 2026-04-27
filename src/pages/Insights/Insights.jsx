import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Insights.css';
import heroBg from '../../assets/pic1.jpg';
import img1 from '../../assets/picture1.jpg';
import img2 from '../../assets/picture2.jpg';
import img3 from '../../assets/picture3.jpg';
import img4 from '../../assets/picture4.jpg';
import img5 from '../../assets/picture5.jpg';

function Insights() {
    const [searchTerm, setSearchTerm] = useState('');

    const posts = [
        {
            id: 1,
            title: "When retrofit is better than replacement",
            category: "Engineering",
            date: "27 April 2026",
            image: img1,
            excerpt: "Discover when upgrading existing systems is more cost-effective and operationally efficient than a full equipment replacement."
        },
        {
            id: 2,
            title: "Understanding automation ROI",
            category: "Automation",
            date: "27 April 2026",
            image: img2,
            excerpt: "How to calculate the real profit and value of automation investments. Learn to measure both tangible and intangible gains."
        },
        {
            id: 3,
            title: "Designing systems for long-term maintainability",
            category: "Systems",
            date: "27 April 2026",
            image: img5,
            excerpt: "Engineering systems that are easy to maintain and support for decades. Focus on modular design and standard components."
        },
        {
            id: 4,
            title: "Engineering considerations in food processing",
            category: "Industry",
            date: "27 April 2026",
            image: img3,
            excerpt: "Key technical factors when designing systems for the food industry, including hygiene standards and material selection."
        }
    ];

    const categories = [
        "Industrial Automation",
        "Electrical Engineering",
        "Smart Technology (IoT)",
        "Food Processing",
        "Maintenance & Support"
    ];

    const projects = [img1, img2, img3, img4, img5, heroBg];

    return (
        <div className="insights-page">
            <Helmet>
                <title>Knowledge Centre | Sanota Automation</title>
            </Helmet>

            {/* Top Resource Bar */}
            <div className="resources-top-bar">
                <div className="container bar-content">
                    <span className="bar-title">Knowledge Centre</span>
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumb-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                            </svg>
                        </Link>
                        <span className="separator">›</span>
                        <span className="current">Knowledge Centre</span>
                    </div>
                </div>
            </div>

            <div className="container insights-container">
                <div className="row">
                    {/* Left Column: Blog Posts */}
                    <div className="col-left">
                        <div className="posts-list">
                            {posts.map(post => (
                                <div key={post.id} className="blog-card">
                                    <div className="blog-card-image">
                                        <img src={post.image} alt={post.title} />
                                    </div>
                                    <div className="blog-card-content">
                                        <h2 className="blog-title">{post.title}</h2>
                                        <div className="blog-meta">
                                            <div className="meta-item">
                                                <span className="meta-icon">👤</span> {/* Placeholder icon */}
                                                <span className="meta-text">{post.category}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-text">{post.date}</span>
                                            </div>
                                        </div>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <button className="read-more-btn">Read More</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="pagination">
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">»</button>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="col-right sidebar">

                        {/* Search Widget */}
                        <div className="widget search-widget">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="search-btn">Search</button>
                        </div>

                        {/* Categories Widget */}
                        <div className="widget categories-widget">
                            <h3 className="widget-title">Categories</h3>
                            <ul className="categories-list">
                                {categories.map((cat, idx) => (
                                    <li key={idx}><a href="#">{cat}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Projects Gallery Widget */}
                        <div className="widget projects-widget">
                            <h3 className="widget-title">Projects</h3>
                            <div className="projects-grid">
                                {projects.map((img, idx) => (
                                    <div key={idx} className="project-thumb">
                                        <img src={img} alt="Project" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Latest Posts Widget */}
                        <div className="widget latest-posts-widget">
                            <h3 className="widget-title">Latest Posts</h3>
                            <div className="latest-list">
                                {posts.slice(0, 3).map(post => (
                                    <div key={post.id} className="latest-item">
                                        <img src={post.image} alt={post.title} className="latest-thumb" />
                                        <div className="latest-info">
                                            <h4>{post.title}</h4>
                                            <span className="latest-date">🕒 {post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter Widget */}
                        <div className="widget newsletter-widget">
                            <h3 className="widget-title">Stay Updated with Sanota</h3>
                            <div className="newsletter-content">
                                <p>Get the latest industrial automation trends and company updates delivered to your inbox.</p>
                                <input type="email" placeholder="Your Email" />
                                <button className="subscribe-btn">Subscribe</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Insights;
