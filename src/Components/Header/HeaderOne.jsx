import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MobileMenu from './MobileMenu';

function HeaderOne() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className="th-header header-layout1">
                <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
                    <div className="menu-area">
                        <div className="container th-container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <Link to="/">
                                            <img src="/assets/img/logo_1.png" alt="Victory International" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto me-xl-auto">
                                    <nav className="main-menu d-none d-xl-inline-block" aria-label="Primary navigation">
                                        <ul>
                                            <li>
                                                <NavLink className={({ isActive }) => isActive ? 'active' : ''} end to="/">
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/about">About</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/destination">Destinations</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/blog">Insights</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                    <button
                                        type="button"
                                        className="th-menu-toggle d-block d-xl-none"
                                        onClick={() => setIsMobileMenuOpen(true)}
                                        aria-label="Open navigation"
                                    >
                                        <i className="far fa-bars" />
                                    </button>
                                </div>
                                <div className="col-auto d-none d-xl-block">
                                    <Link className="th-btn header-plan-cta" to="/contact">
                                        Plan your trip
                                        <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="logo-bg bg-mask"
                            style={{
                                WebkitMaskImage: "url(/assets/img/logo_bg_mask.png)",
                                maskImage: "url(/assets/img/logo_bg_mask.png)"
                            }} />
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>

    )
}

export default HeaderOne
