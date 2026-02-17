import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import heroBg from '../../assets/pic1.jpg'; // Using pic1 for industrial background
import controlIcon from '../../assets/icon1 (1).png';
import customIcon from '../../assets/icon1 (2).png';
import sensorIcon from '../../assets/icon1 (3).png';
import softwareIcon from '../../assets/icon1 (4).png';

// Using placeholder icons or existing assets where possible, matching the 5 cards

// Additional images for Catalog Grid
import prod1 from '../../assets/img1.png';
import prod2 from '../../assets/img2.png';
import prod3 from '../../assets/img3.png';
import prod4 from '../../assets/img4.png';
import prod5 from '../../assets/img5.png';
import prod6 from '../../assets/picture22.png'; // Keeping one as placeholder or maybe img1 again? 
// User said "add img1,img2,img3,img4,img5". That's 5 images. I have 6 cards.
// I'll use img1 for the 6th card as well, or maybe img5 again. 
// Actually, let's look at the mapping. 
// Card 1: Industrial PLC Systems -> prod2 (was picture2)
// Card 2: SCADA -> prod4 (was picture4)
// Card 3: HMI -> prod6 (was picture22)
// Card 4: VFD -> prod1 (was picture1)
// Card 5: Sensors -> prod3 (was picture3)
// Card 6: MES -> prod5 (was picture5)

// I will map:
// Card 1 -> img1
// Card 2 -> img2
// Card 3 -> img3
// Card 4 -> img4
// Card 5 -> img5
// Card 6 -> img1 (Recycle img1 or maybe just use img5) - User only gave 5. I'll use img1 for the last one or leave the 6th card as is?
// "to that sections" (plural/singular?). 
// Let's assume they want these 5 images for the first 5 cards.
// I will import them as img1, img2... and use them.



function Products() {
    return (
        <div className="products-page">
            {/* 1. Header Bar */}
            <div className="products-header-bar">
                <div className="container header-bar-content">
                    <h1 className="header-title">Products</h1>
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <span className="separator"> &gt; </span>
                        <span className="current">Products</span>
                    </div>
                </div>
            </div>

            {/* 2. Hero Section */}
            <section className="products-hero">
                <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="hero-overlay"></div>
                </div>
                <div className="container hero-content">
                    <h2 className="hero-main-title">Products & Solutions</h2>
                    <p className="hero-subtitle">Comprehensive range of industrial automation products and custom solutions</p>
                </div>
            </section>

            {/* 3. Cards Section */}
            <section className="product-cards-section">
                <div className="container">
                    <div className="product-cards-grid">
                        {/* Card 1 */}
                        <div className="product-feature-card">
                            <div className="card-icon">
                                {/* SVG or Image Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3>Control Systems</h3>
                            <p>Automation systems for efficient industrial control.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="product-feature-card">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3>Custom Solutions</h3>
                            <p>Tailored automation for unique needs.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="product-feature-card">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <h3>Sensors & Instrumentation</h3>
                            <p>Accurate sensing and measurement systems.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="product-feature-card">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>
                            <h3>Software Solutions</h3>
                            <p>24/7 support to keep your systems running.</p>
                        </div>

                        {/* Card 5 */}
                        <div className="product-feature-card">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>SCADA & HMI</h3>
                            <p>Real-time monitoring and control solutions.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Product Catalog Grid */}
            <section className="product-catalog-section">
                <div className="container">
                    <div className="catalog-grid">
                        {/* Card 1 */}
                        <div className="catalog-card">
                            <img src={prod1} alt="Industrial PLC Systems" className="catalog-image" />
                            <div className="catalog-overlay">
                                <h3 className="catalog-title">Industrial PLC Systems</h3>
                                <button className="btn-more">More.....</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="catalog-card">
                            <img src={prod2} alt="SCADA Software Platforms" className="catalog-image" />
                            <div className="catalog-overlay">
                                <h3 className="catalog-title">SCADA Software Platforms</h3>
                                <button className="btn-more">More.....</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="catalog-card">
                            <img src={prod3} alt="Industrial HMI Panels" className="catalog-image" />
                            <div className="catalog-overlay">
                                <h3 className="catalog-title">Industrial HMI Panels</h3>
                                <button className="btn-more">More...</button>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="catalog-card">
                            <img src={prod4} alt="Variable Frequency Drives" className="catalog-image" />
                            <div className="catalog-overlay">
                                <h3 className="catalog-title">Variable Frequency Drives</h3>
                                <button className="btn-more">More...</button>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="catalog-card">
                            <img src={prod5} alt="Industrial Sensors & Transmitters" className="catalog-image" />
                            <div className="catalog-overlay">
                                <h3 className="catalog-title">Industrial Sensors & Transmitters</h3>
                                <button className="btn-more">More...</button>
                            </div>
                        </div>

                        {/* Card 6 - Reusing prod1 since only 5 images provided */}
                        <div className="catalog-card">
                            <img src={prod1} alt="MES Software Solutions" className="catalog-image" />
                            <div className="catalog-overlay">
                                <h3 className="catalog-title">MES Software Solutions</h3>
                                <button className="btn-more">More...</button>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="catalog-pagination">
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn next">»</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Products;
