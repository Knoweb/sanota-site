import React from 'react';
import './SanotaLogo.css';

const SanotaLogo = ({ className = '' }) => {
    return (
        <div className={`sanota-logo ${className}`}>
            <span className="sanota-text sanota-san">SAN</span>
            <span className="sanota-o-container">
                <svg
                    viewBox="0 0 100 100"
                    className="sanota-o-svg"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Outer circle with gap on the right */}
                    <path
                        d="M 78 30 A 40 40 0 1 0 78 70"
                        className="circuit-bg-circle"
                        fill="none"
                        strokeWidth="3.5"
                    />
                    <path
                        d="M 78 30 A 40 40 0 1 0 78 70"
                        className="circuit-glow-circle"
                        fill="none"
                        strokeWidth="3.5"
                    />

                    {/* Core circuit trace 1 (Top) */}
                    <path
                        d="M 25 35 L 42 35 L 52 25 L 75 25"
                        className="circuit-line-bg"
                        fill="none"
                        strokeWidth="3"
                    />
                    <path
                        d="M 25 35 L 42 35 L 52 25 L 75 25"
                        className="circuit-line-glow line-top"
                        fill="none"
                        strokeWidth="3"
                    />
                    <circle cx="81" cy="25" r="4" className="circuit-node node-top" />

                    {/* Core circuit trace 2 (Upper Middle) */}
                    <path
                        d="M 20 48 L 40 48 L 50 38 L 86 38"
                        className="circuit-line-bg"
                        fill="none"
                        strokeWidth="3"
                    />
                    <path
                        d="M 20 48 L 40 48 L 50 38 L 86 38"
                        className="circuit-line-glow line-mid-top"
                        fill="none"
                        strokeWidth="3"
                    />
                    <circle cx="92" cy="38" r="4.5" className="circuit-node node-mid-top" />

                    {/* Core circuit trace 3 (Lower Middle) */}
                    <path
                        d="M 22 58 L 38 58 L 48 48 L 78 48"
                        className="circuit-line-bg"
                        fill="none"
                        strokeWidth="3"
                    />
                    <path
                        d="M 22 58 L 38 58 L 48 48 L 78 48"
                        className="circuit-line-glow line-mid-bot"
                        fill="none"
                        strokeWidth="3"
                    />
                    <circle cx="84" cy="48" r="4" className="circuit-node node-mid-bot" />

                    {/* Core circuit trace 4 (Bottom) */}
                    <path
                        d="M 25 65 L 45 65 L 55 75 L 75 75"
                        className="circuit-line-bg"
                        fill="none"
                        strokeWidth="3"
                    />
                    <path
                        d="M 25 65 L 45 65 L 55 75 L 75 75"
                        className="circuit-line-glow line-bot"
                        fill="none"
                        strokeWidth="3"
                    />
                    <circle cx="81" cy="75" r="4" className="circuit-node node-bot" />
                    
                    {/* Decorative Branch node inside */}
                    <circle cx="33" cy="50" r="2.5" className="circuit-node-small" />
                </svg>
            </span>
            <span className="sanota-text sanota-ta">TA</span>
        </div>
    );
};

export default SanotaLogo;