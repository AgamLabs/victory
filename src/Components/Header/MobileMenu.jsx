import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const menuItems = [
    { label: 'Home', to: '/', end: true },
    { label: 'About', to: '/about' },
    { label: 'Destinations', to: '/destination' },
    { label: 'Insights', to: '/blog' },
    { label: 'Contact', to: '/contact' },
];

function MobileMenu({ isOpen, onClose }) {
    return (
        <div
            className={`th-menu-wrapper onepage-nav ${isOpen ? 'th-body-visible' : ''}`}
            style={{ visibility: isOpen ? 'visible' : 'hidden' }}
            aria-hidden={!isOpen}
        >
            <div className="th-menu-area">
                <button className="th-menu-toggle" onClick={onClose} aria-label="Close navigation">
                    <i className="fal fa-times" aria-hidden="true" />
                </button>

                <div className="mobile-logo">
                    <Link to="/" onClick={onClose} aria-label="Victory International home">
                        <img src="/assets/img/logo_1.png" alt="Victory International" />
                    </Link>
                </div>

                <nav className="th-mobile-menu" aria-label="Mobile navigation">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    end={item.end}
                                    onClick={onClose}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                        <li className="mobile-menu-cta">
                            <Link to="/contact" onClick={onClose}>
                                Plan your trip
                                <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MobileMenu;
