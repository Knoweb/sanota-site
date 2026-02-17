import { Helmet } from 'react-helmet-async';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './ClientsExperience.css';

function ClientsExperience() {
    const clients = [
        { name: 'Ceylon Electricity Board', industry: 'Energy & Power', logo: '⚡' },
        { name: 'National Water Supply & Drainage Board', industry: 'Water & Wastewater', logo: '💧' },
        { name: 'Brandix Lanka Limited', industry: 'Manufacturing', logo: '🏭' },
        { name: 'MAS Holdings', industry: 'Manufacturing', logo: '🏭' },
        { name: 'Hayleys PLC', industry: 'Conglomerate', logo: '🏢' },
        { name: 'Ceylon Cold Stores', industry: 'Food & Beverage', logo: '🍃' },
        { name: 'Nestlé Lanka', industry: 'Food & Beverage', logo: '🍃' },
        { name: 'Coca-Cola Beverages Sri Lanka', industry: 'Food & Beverage', logo: '🍃' },
        { name: 'Abans PLC', industry: 'Manufacturing', logo: '🏭' },
        { name: 'Diesel & Motor Engineering PLC', industry: 'Manufacturing', logo: '🏭' },
        { name: 'Kelani Valley Plantations', industry: 'Agriculture', logo: '🌾' },
        { name: 'Colombo Dockyard PLC', industry: 'Engineering', logo: '⚙️' },
        { name: 'Sri Lanka Ports Authority', industry: 'Infrastructure', logo: '🚢' },
        { name: 'Airport & Aviation Services', industry: 'Aviation', logo: '✈️' },
        { name: 'Ceylon Petroleum Corporation', industry: 'Energy & Power', logo: '⚡' },
        { name: 'Laugfs Gas PLC', industry: 'Energy & Power', logo: '⚡' }
    ];

    const timeline = [
        {
            year: '2008',
            title: 'Company Founded',
            description: 'Sanota established with a vision to deliver world-class automation solutions in Sri Lanka',
            milestone: true
        },
        {
            year: '2010',
            title: 'First Major SCADA Project',
            description: 'Deployed comprehensive SCADA system for water treatment facility',
            milestone: false
        },
        {
            year: '2012',
            title: 'Expanded to Manufacturing',
            description: 'Successfully completed first large-scale factory automation project',
            milestone: false
        },
        {
            year: '2014',
            title: '50+ Projects Milestone',
            description: 'Reached significant milestone of 50 completed projects across multiple industries',
            milestone: true
        },
        {
            year: '2016',
            title: 'Power Sector Entry',
            description: 'Entered power distribution sector with advanced automation solutions',
            milestone: false
        },
        {
            year: '2018',
            title: '10 Years of Excellence',
            description: 'Celebrated a decade of delivering automation excellence across Sri Lanka',
            milestone: true
        },
        {
            year: '2020',
            title: 'Industry 4.0 Solutions',
            description: 'Launched Industry 4.0 and IIoT solution offerings',
            milestone: false
        },
        {
            year: '2022',
            title: '150+ Projects Completed',
            description: 'Achieved major milestone with over 150 successful project completions',
            milestone: true
        },
        {
            year: '2024',
            title: 'Nationwide Coverage',
            description: 'Established presence across all provinces in Sri Lanka with 200+ projects',
            milestone: true
        }
    ];

    const provinces = [
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

    const stats = [
        { value: '15+', label: 'Years of Experience' },
        { value: '200+', label: 'Projects Completed' },
        { value: '50+', label: 'Active Clients' },
        { value: '9/9', label: 'Provinces Covered' }
    ];

    return (
        <div className="clients-experience-page">
            <Helmet>
                <title>Clients & Experience | Sanota Automation Engineering</title>
                <meta name="description" content="15+ years of automation excellence across Sri Lanka. Trusted by leading organizations with 200+ successful projects nationwide." />
                <meta name="keywords" content="automation clients, Sri Lanka automation, industrial projects, nationwide coverage, automation experience" />
            </Helmet>

            {/* Hero Section */}
            <section className="clients-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>Clients & Experience</h1>
                        <p className="hero-subtitle">
                            15+ years of delivering automation excellence across Sri Lanka
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="clients-section section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Trusted by Industry Leaders</h2>
                        <p className="section-intro">
                            Proud to serve leading organizations across diverse industries
                        </p>
                    </div>
                    <div className="clients-grid">
                        {clients.map((client, index) => (
                            <div key={index} className="client-card">
                                <div className="client-logo">{client.logo}</div>
                                <h3>{client.name}</h3>
                                <p className="client-industry">{client.industry}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Journey</h2>
                        <p className="section-intro">
                            A timeline of growth, innovation, and excellence
                        </p>
                    </div>
                    <div className="timeline">
                        {timeline.map((event, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${event.milestone ? 'milestone' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
                            >
                                <div className="timeline-content">
                                    <div className="timeline-year">{event.year}</div>
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                </div>
                                <div className="timeline-marker">
                                    {event.milestone && <span className="milestone-icon">⭐</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section section bg-gradient">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Nationwide Coverage</h2>
                        <p className="section-intro-light">
                            Serving clients across all nine provinces of Sri Lanka
                        </p>
                    </div>

                    <div className="map-container-full">
                        {/* Leaflet Interactive Map - Full Width */}
                        <div className="leaflet-map-wrapper">
                            <MapContainer
                                center={[7.8731, 80.7718]} // Center of Sri Lanka
                                zoom={7}
                                minZoom={7}
                                maxZoom={10}
                                scrollWheelZoom={false}
                                style={{ height: '600px', width: '100%', borderRadius: '16px' }}
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
                                        radius={province.projects / 5} // Size based on project count
                                        fillColor="#10b981"
                                        color="#fff"
                                        weight={2}
                                        opacity={1}
                                        fillOpacity={0.7}
                                        eventHandlers={{
                                            mouseover: (e) => {
                                                e.target.setStyle({
                                                    fillColor: '#ea580c',
                                                    fillOpacity: 0.9
                                                });
                                            },
                                            mouseout: (e) => {
                                                e.target.setStyle({
                                                    fillColor: '#10b981',
                                                    fillOpacity: 0.7
                                                });
                                            }
                                        }}
                                    >
                                        <Popup>
                                            <div className="map-popup">
                                                <h4>{province.name}</h4>
                                                <p className="popup-projects">
                                                    <strong>{province.projects} Projects</strong>
                                                </p>
                                                <p className="popup-cities">
                                                    {province.cities.join(' • ')}
                                                </p>
                                            </div>
                                        </Popup>
                                        <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
                                            <strong>{province.name}</strong><br />
                                            {province.projects} Projects
                                        </Tooltip>
                                    </CircleMarker>
                                ))}
                            </MapContainer>
                        </div>

                        {/* Provinces List - Below Map */}
                        <div className="provinces-grid">
                            {provinces.map((province, index) => (
                                <div key={index} className="province-item">
                                    <div className="province-header">
                                        <h4>{province.name}</h4>
                                        <span className="project-count">{province.projects} Projects</span>
                                    </div>
                                    <div className="province-cities">
                                        {province.cities.join(' • ')}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container text-center">
                    <h2>Join Our Growing List of Satisfied Clients</h2>
                    <p className="section-intro">
                        Experience the Sanota difference with proven expertise and nationwide support
                    </p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary btn-lg">Request Consultation</a>
                        <a href="/case-studies" className="btn btn-secondary btn-lg">View Success Stories</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ClientsExperience;
