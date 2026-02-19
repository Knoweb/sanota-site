
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './ClientsExperience.css';
import heroBg from '../../assets/pic1.jpg';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import logo6 from '../../assets/logo6.jpg';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.webp';
import logo9 from '../../assets/logo9.webp';
import logo10 from '../../assets/logo10.png';

function ClientsExperience() {

    const stats = [
        { value: '15+', label: 'Years of Experience' },
        { value: '200+', label: 'Successful Projects' },
        { value: '50+', label: 'Loyal Clients' },
        { value: '9', label: 'Provinces Covered' }
    ];

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const journeyEvents = [
        {
            year: '2008',
            title: 'Company Founded',
            description: 'Sanota established with a vision to deliver world-class automation solutions in Sri Lanka',
            image: picture1
        },
        {
            year: '2010',
            title: 'First Major SCADA Project',
            description: 'Deployed comprehensive SCADA system for water treatment facility',
            image: picture2
        },
        {
            year: '2012',
            title: 'Expanded to Manufacturing',
            description: 'Successfully completed first large-scale factory automation project',
            image: picture3
        },
        {
            year: '2015',
            title: 'Nationwide Coverage',
            description: 'Expanded operations to cover all major industrial zones in the country',
            image: picture1 // Reusing for demo
        },
        {
            year: '2020',
            title: 'Industry 4.0 Leader',
            description: 'Pioneered IoT-based smart factory solutions for top exporters',
            image: picture2 // Reusing for demo
        }
    ];

    const [provinces, setProvinces] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulating API call to fetch project locations
        // In a real scenario: fetch('https://api.sanota.com/projects/locations')
        const fetchProjectData = async () => {
            try {
                // Mock data matching the old system structure
                const mockData = [
                    { name: 'Western Province', projects: 85, cities: ['Colombo', 'Gampaha', 'Kalutara'], coords: [6.9271, 79.8612] },
                    { name: 'Central Province', projects: 28, cities: ['Kandy', 'Matale', 'Nuwara Eliya'], coords: [7.2906, 80.6337] },
                    { name: 'Southern Province', projects: 22, cities: ['Galle', 'Matara', 'Hambantota'], coords: [6.0535, 80.2210] },
                    { name: 'Northern Province', projects: 12, cities: ['Jaffna', 'Kilinochchi', 'Mannar'], coords: [9.6615, 80.0255] },
                    { name: 'Eastern Province', projects: 15, cities: ['Trincomalee', 'Batticaloa', 'Ampara'], coords: [8.5874, 81.2152] },
                    { name: 'North Western Province', projects: 18, cities: ['Kurunegala', 'Puttalam'], coords: [7.4863, 80.3623] },
                    { name: 'North Central Province', projects: 14, cities: ['Anuradhapura', 'Polonnaruwa'], coords: [8.3114, 80.4037] },
                    { name: 'Uva Province', projects: 10, cities: ['Badulla', 'Monaragala'], coords: [6.9934, 81.0550] },
                    { name: 'Sabaragamuwa Province', projects: 16, cities: ['Ratnapura', 'Kegalle'], coords: [6.6828, 80.4014] }
                ];

                setTimeout(() => {
                    setProvinces(mockData);
                    setLoading(false);
                }, 800); // Simulate network latency
            } catch (error) {
                console.error("Failed to fetch project data", error);
                setLoading(false);
            }
        };

        fetchProjectData();
    }, []);

    const nextSlide = () => {
        // We show 3 slides at once. If we have N slides, we can scroll up to index N-3.
        // However, if the user wants infinite scroll or wrap around, the logic needs to be robust.
        // Here, wrapping around when we reach the end:
        setCurrentSlide((prev) => (prev + 1) % (journeyEvents.length - 2));
    };

    const prevSlide = () => {
        // Wrapping around when going backward from 0
        setCurrentSlide((prev) => (prev - 1 + (journeyEvents.length - 2)) % (journeyEvents.length - 2));
    };
    // Province Navigation Logic
    const [currentProvinceSlide, setCurrentProvinceSlide] = React.useState(0);
    const itemsPerSlide = 6;
    const totalProvincePages = Math.ceil(provinces.length / itemsPerSlide);

    const nextProvinceSlide = () => {
        setCurrentProvinceSlide((prev) => (prev + 1) % totalProvincePages);
    };

    const prevProvinceSlide = () => {
        setCurrentProvinceSlide((prev) => (prev - 1 + totalProvincePages) % totalProvincePages);
    };

    const displayedProvinces = provinces.slice(
        currentProvinceSlide * itemsPerSlide,
        (currentProvinceSlide + 1) * itemsPerSlide
    );

    return (
        <div className="clients-experience-page">
            <Helmet>
                <title>Clients & Experience | Sanota Automation Engineering</title>
                <meta name="description" content="15+ years of delivering automation excellence across Sri Lanka. Trusted by leading organizations." />
            </Helmet>

            {/* Top Resource Bar */}
            <div className="resources-top-bar">
                <div className="container bar-content">
                    <span className="bar-title">Resources</span>
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumb-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                            </svg>
                        </Link>
                        <span className="separator">›</span>
                        <span className="current">Client & Experience</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="clients-hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-text-content">
                        <p className="hero-subtitle">15+ years of delivering automation excellence across Sri Lanka</p>
                        <h1 className="hero-title">Clients & Experience</h1>
                    </div>

                    <div className="hero-stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="hero-stat-item">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Journey Section */}
            <section className="journey-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title-dark">Our Journey</h2>
                        <p className="section-subtitle-orange">A timeline of growth, innovation, and excellence</p>
                    </div>

                    <div className="journey-carousel-container">
                        <button className="carousel-btn prev-btn" onClick={prevSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </button>

                        <div className="carousel-track-wrapper">
                            <div
                                className="carousel-track"
                                style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
                            >
                                {journeyEvents.map((event, index) => (
                                    <div key={index} className="journey-card">
                                        <div className="journey-image-wrapper">
                                            <img src={event.image} alt={event.title} className="journey-image" />
                                            <div className="journey-label-orange">{event.title}</div>
                                        </div>
                                        <div className="journey-content">
                                            <p className="journey-desc">{event.description}</p>
                                            <div className="journey-year">{event.year}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="carousel-btn next-btn" onClick={nextSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="carousel-indicators">
                        {Array.from({ length: journeyEvents.length - 2 }).map((_, idx) => (
                            <span
                                key={idx}
                                className={`indicator-dash ${currentSlide === idx ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(idx)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nationwide Coverage Section */}
            <section className="coverage-section">
                <div className="container">
                    <div className="coverage-header text-center">
                        <h2 className="section-title-dark">Nationwide Coverage</h2>
                    </div>

                    <div className="coverage-content-wrapper">
                        {/* Left: Map Image */}
                        <div className="coverage-map-container">
                            <div className="orange-l-shape"></div>
                            <div className="leaflet-map-wrapper">
                                {loading ? (
                                    <div className="map-loading-state" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0' }}>
                                        <p>Loading project data...</p>
                                    </div>
                                ) : (
                                    <MapContainer
                                        center={[7.8731, 80.7718]} // Center of Sri Lanka
                                        zoom={7}
                                        minZoom={7}
                                        maxZoom={10}
                                        scrollWheelZoom={false}
                                        style={{ height: '750px', width: '100%', borderRadius: '0px' }}
                                    >
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />

                                        {/* Province Markers */}
                                        {provinces.map((province, index) => (
                                            <CircleMarker
                                                key={index}
                                                center={province.coords}
                                                radius={Math.max(10, province.projects / 3)} // Dynamic size
                                                pathOptions={{ fillColor: '#2233AD', color: '#fff', weight: 2, opacity: 1, fillOpacity: 0.8 }}
                                                eventHandlers={{
                                                    mouseover: (e) => {
                                                        e.target.setStyle({ fillColor: '#000000' }); // Black on Hover
                                                    },
                                                    mouseout: (e) => {
                                                        e.target.setStyle({ fillColor: '#2233AD' }); // Back to Blue
                                                    }
                                                }}
                                            >
                                                <Popup>
                                                    <div style={{ textAlign: 'center', color: '#000' }}>
                                                        <h3 style={{ margin: '0 0 5px 0', color: '#000', fontSize: '1.2rem', fontWeight: 'bold' }}>{province.name}</h3>
                                                        <p style={{ margin: 0, fontWeight: 'bold', color: '#000' }}>{province.projects} Projects</p>
                                                        <p style={{ fontSize: '0.9rem', color: '#000', marginTop: '5px' }}>{province.cities.join(' • ')}</p>
                                                    </div>
                                                </Popup>
                                                <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
                                                    <strong>{province.name}</strong><br />
                                                    {province.projects} Projects
                                                </Tooltip>
                                            </CircleMarker>
                                        ))}
                                    </MapContainer>
                                )}
                            </div>
                        </div>

                        {/* Right: Stats Grid */}
                        <div className="coverage-stats-container">
                            <div className="province-stats-grid">
                                {displayedProvinces.map((province, index) => (
                                    <div key={index} className="province-stat-item">
                                        <div className="province-value">{province.projects}+</div>
                                        <div className="province-label">{province.name}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons (Visual Only) */}
                            <div className="coverage-nav-buttons">
                                <button className="cov-nav-btn prev" onClick={prevProvinceSlide}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </button>
                                <button className="cov-nav-btn next" onClick={nextProvinceSlide}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted by Industry Leaders Section */}
            <section className="trusted-leaders-section">
                <div className="trusted-header">
                    <div className="container text-center">
                        <h2 className="section-title-white">Trusted by Industry Leaders</h2>
                        <p className="section-subtitle-orange">Proud to serve leading organizations across diverse industries</p>
                    </div>
                </div>
                <div className="trusted-logos-container">
                    <div className="container">
                        <div className="logo-marquee">
                            <div className="logo-track">
                                {/* Set 1 */}
                                <img src={logo6} alt="Client Logo 6" className="client-logo-marquee" />
                                <img src={logo7} alt="Client Logo 7" className="client-logo-marquee" />
                                <img src={logo8} alt="Client Logo 8" className="client-logo-marquee" />
                                <img src={logo9} alt="Client Logo 9" className="client-logo-marquee" />
                                <img src={logo10} alt="Client Logo 10" className="client-logo-marquee" />

                                {/* Set 2 */}
                                <img src={logo6} alt="Client Logo 6" className="client-logo-marquee" />
                                <img src={logo7} alt="Client Logo 7" className="client-logo-marquee" />
                                <img src={logo8} alt="Client Logo 8" className="client-logo-marquee" />
                                <img src={logo9} alt="Client Logo 9" className="client-logo-marquee" />
                                <img src={logo10} alt="Client Logo 10" className="client-logo-marquee" />

                                {/* Set 3 */}
                                <img src={logo6} alt="Client Logo 6" className="client-logo-marquee" />
                                <img src={logo7} alt="Client Logo 7" className="client-logo-marquee" />
                                <img src={logo8} alt="Client Logo 8" className="client-logo-marquee" />
                                <img src={logo9} alt="Client Logo 9" className="client-logo-marquee" />
                                <img src={logo10} alt="Client Logo 10" className="client-logo-marquee" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ClientsExperience;
