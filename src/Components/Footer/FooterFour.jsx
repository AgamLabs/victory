import React from 'react';
import { Link } from 'react-router-dom';
import CMS from '../../cms/content';

function FooterFour() {
    const { contact, logo } = CMS.site;

    return (
        <footer className="footer-wrapper bg-title footer-layout2 victory-footer">
            <div className="widget-area">
                <div className="container">
                    <div className="row gy-5 justify-content-between">
                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                        <Link to="/" aria-label="Victory International home">
                                            <img src={logo.primary} alt="Victory International Group Co., Ltd." />
                                        </Link>
                                    </div>
                                    <p className="about-text">
                                        Bangkok-based destination management for tailor-made tours,
                                        ground handling, groups, events, and incentive travel across Thailand.
                                    </p>
                                    <div className="th-social" aria-label="Direct contact links">
                                        <a
                                            href={contact.whatsappHref}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Message Victory International on WhatsApp"
                                        >
                                            <i className="fab fa-whatsapp" aria-hidden="true" />
                                        </a>
                                        <a href={contact.emailHref} aria-label="Email Victory International">
                                            <i className="fa-regular fa-envelope" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-xl-2">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Explore</h3>
                                <ul className="menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/destination">Destinations</Link></li>
                                    <li><Link to="/blog">Travel Insights</Link></li>
                                    <li><Link to="/contact">Plan Your Trip</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Bangkok Office</h3>
                                <div className="th-widget-contact victory-footer__contact">
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/phone.svg" alt="" />
                                        </div>
                                        <div className="details">
                                            <p><a href={contact.landlineHref}>{contact.landline}</a></p>
                                            <p><a href={contact.mobileHref}>{contact.mobile}</a></p>
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/envelope.svg" alt="" />
                                        </div>
                                        <div className="details">
                                            <p><a href={contact.emailHref}>{contact.email}</a></p>
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/location-dot.svg" alt="" />
                                        </div>
                                        <address>{contact.address}</address>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget victory-footer__planning">
                                <p className="victory-footer__eyebrow">Have a Thailand brief?</p>
                                <h3 className="widget_title">Let's plan it properly.</h3>
                                <p>
                                    Share your dates, group size, and priorities. Our Bangkok team
                                    will shape the right next step.
                                </p>
                                <Link className="th-btn victory-footer__cta" to="/contact">
                                    Start a proposal
                                    <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-wrap">
                <div className="container">
                    <p className="copyright-text">
                        {CMS.footer.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default FooterFour;
