import React, { useEffect, useState, useRef } from 'react';
import './AnimatedStats.css';

export const CountUp = ({ end, duration, prefix = '', suffix = '' }) => {
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || !countRef.current) return;

        let startTime = null;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // easeOutQuart for extremely smooth deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeProgress * end);

            // Direct DOM manipulation - totally smooth, 60fps+, zero React re-renders overhead
            if (countRef.current) {
                if (progress === 1) {
                    countRef.current.textContent = `${prefix}${end}${suffix}`;
                } else {
                    countRef.current.textContent = `${prefix}${currentCount}${suffix}`;
                    animationFrame = requestAnimationFrame(animate);
                }
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration, prefix, suffix]);

    return (
        <span ref={countRef}>
            {prefix}0{suffix}
        </span>
    );
};

const AnimatedStats = ({ stats }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Do not disconnect, or if you only want it to run once, disconnect
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const defaultStats = [
        { value: '15', suffix: '+', label: 'Years Experience' },
        { value: '100', suffix: '+', label: 'Projects Done' },
        { value: '50', suffix: '+', label: 'Clients Served' },
        { value: '24', suffix: '/7', label: 'Support' },
    ];

    const displayStats = stats && stats.length > 0 ? stats : defaultStats;

    return (
        <section className="animated-stats-section" ref={sectionRef}>
            <div className="container">
                <div className="animated-stats-grid">
                    {displayStats.map((stat, index) => {
                        const numericValue = parseInt(stat.value);

                        return (
                            <div
                                key={index}
                                className={`animated-stat-card ${isVisible ? 'fade-in-up' : ''}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="stat-number">
                                    {isVisible && !isNaN(numericValue) ? (
                                        <CountUp
                                            end={numericValue}
                                            duration={3000}
                                            suffix={stat.suffix || ''}
                                            prefix={stat.prefix || ''}
                                        />
                                    ) : (
                                        <span>
                                            {stat.prefix || ''}
                                            {/* fallback to 0 before visible to prevent layout shift */}
                                            {isVisible ? stat.value : '0'}
                                            {stat.suffix || ''}
                                        </span>
                                    )}
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AnimatedStats;
