import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NiceSelect from './NiceSelect';
import MobileMenu from './MobileMenu';
import LoginForm from './LoginForm';

function HeaderOne() {
    const languageOptions = [
        { value: "language", label: "Language" },
        { value: "CNY", label: "CNY" },
        { value: "EUR", label: "EUR" },
        { value: "AUD", label: "AUD" },
    ];
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

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

    // Auto-hide header after 3 seconds on initial load
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsHeaderVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/*============================== Header Area ==============================*/}
            {/* Hover trigger area at top */}
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "10px",
                zIndex: 20,
                backgroundColor: "transparent"
            }}
            onMouseEnter={() => setIsHeaderVisible(true)}></div>
            <header className="th-header header-layout1" style={{
                marginTop: isHeaderVisible ? "0px" : "-60px",
                transition: "margin-top 0.3s ease-in-out",
                position: "relative",
                zIndex: 10
            }}
            onMouseEnter={() => setIsHeaderVisible(true)}
            onMouseLeave={() => setIsHeaderVisible(false)}>
                <div className="header-top">
                    <div className="container th-container">
                        <div className="row justify-content-center justify-content-xl-between align-items-center">
                            <div className="col-auto d-none d-md-block">
                                <div className="header-links">
                                    <ul>
                                        <li className="d-none d-xl-inline-block">
                                            <i className="fa-sharp fa-regular  fa-location-dot" />
                                            <span>45 New Eskaton Road, Austria</span>
                                        </li>
                                        <li className="d-none d-xl-inline-block">
                                            <i className="fa-regular fa-clock" />
                                            <span>Sun to Friday: 8.00 am - 7.00 pm</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="header-right">
                                    <div className="currency-menu">
                                        <NiceSelect options={languageOptions} defaultValue="Language" />
                                    </div>

                                    <div className="header-links">
                                        <ul>
                                            <li className="d-none d-md-inline-block">
                                                <Link to="/faq">FAQ</Link>
                                            </li>
                                            <li className="d-none d-md-inline-block">
                                                <Link to="/contact">Support</Link>
                                            </li>
                                            <li>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsLoginFormOpen(true)}
                                                >
                                                    Sign In / Register
                                                    <i className="fa-regular fa-user" />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
                    {/* Main Menu Area */}
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
                                    <nav className="main-menu d-none d-xl-inline-block">
                                        <ul>
                                            <li>
                                                <Link className="active" to="/">
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/destination">Destinations</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/destination/1">
                                                            Phuket
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/destination/2">
                                                            Krabi
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/destination/3">
                                                            Koh Samui
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/service">DMC Services</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/service/1">Airport Transfer Service</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service/2">Hotel Booking Service</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service/3">Car Rental Service</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service/4">Tour Booking Service</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service/5">Event Management Service</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service/6">Travel Consultancy Service</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service/7">Travel Insurance Service</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service/8">Travel Visa Service</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/gallery">Gallery</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="#">Our Network</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/tour-guide">Local Representatives</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/tour-guide/1">
                                                            Representative Details
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/faq">FAQ</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/blog">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/blog/1">Blog Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <button
                                        type="button"
                                        className="th-menu-toggle d-block d-xl-none"
                                        onClick={() => setIsMobileMenuOpen(true)}
                                    >
                                        <i className="far fa-bars" />
                                    </button>
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
            <LoginForm isOpen={isLoginFormOpen} onClose={() => setIsLoginFormOpen(false)} />
        </>

    )
}

export default HeaderOne
