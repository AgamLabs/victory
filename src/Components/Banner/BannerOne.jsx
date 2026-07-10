import React from 'react';
import { Link } from 'react-router-dom';
import CMS from '../../cms/content';

function BannerOne() {
    const hero = CMS.banners.bannerOne.featured;

    return (
        <section className="victory-hero" aria-labelledby="victory-hero-title">
            <div
                className="victory-hero__media"
                role="img"
                aria-label={hero.imageAlt}
                style={{ backgroundImage: `url(${hero.image})` }}
            />
            <div className="victory-hero__overlay" />
            <div className="container victory-hero__container">
                <div className="victory-hero__content">
                    <p className="victory-hero__eyebrow">{hero.eyebrow}</p>
                    <h1 id="victory-hero-title">{hero.title}</h1>
                    <p className="victory-hero__summary">{hero.summary}</p>
                    <div className="victory-hero__actions">
                        <Link className="th-btn victory-hero__primary" to={hero.primaryAction.href}>
                            {hero.primaryAction.label}
                            <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                        </Link>
                        <Link className="victory-hero__secondary" to={hero.secondaryAction.href}>
                            {hero.secondaryAction.label}
                            <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerOne;
