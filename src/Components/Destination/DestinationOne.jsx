import React from 'react';
import { Link } from 'react-router-dom';
import { getDestination } from '../../cms/destinations';

const homepageDestinationSlugs = [
    'bangkok',
    'chiang-mai-north',
    'krabi-railay',
    'phuket-phi-phi',
    'samui-gulf-islands',
];

const homepageDestinations = homepageDestinationSlugs.map(getDestination).filter(Boolean);

function DestinationTile({ destination, featured = false }) {
    return (
        <article className={`victory-home-destination ${featured ? 'victory-home-destination--featured' : ''}`}>
            <Link to={`/destination/${destination.slug}`} aria-label={`Explore ${destination.name}`}>
                <img
                    src={destination.image}
                    alt={destination.imageAlt}
                    width="900"
                    height="700"
                    loading={featured ? 'eager' : 'lazy'}
                />
                <div className="victory-home-destination__content">
                    <p>{destination.region}</p>
                    <h3>{destination.name}</h3>
                    <span>
                        Explore
                        <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                    </span>
                </div>
            </Link>
        </article>
    );
}

function DestinationOne() {
    const [featuredDestination, ...secondaryDestinations] = homepageDestinations;

    return (
        <section className="victory-home-destinations" aria-labelledby="home-destinations-title">
            <div className="container">
                <div className="victory-home-destinations__heading">
                    <div>
                        <p className="victory-section-eyebrow">Thailand destinations</p>
                        <h2 id="home-destinations-title">Start with the place that fits the brief</h2>
                    </div>
                    <div>
                        <p>City energy, northern culture, Andaman landscapes, or a quieter Gulf-island rhythm.</p>
                        <Link className="victory-text-link" to="/destination">
                            Explore all destinations
                            <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                </div>

                <div className="victory-home-destinations__layout">
                    <DestinationTile destination={featuredDestination} featured />
                    <div className="victory-home-destinations__secondary">
                        {secondaryDestinations.map((destination) => (
                            <DestinationTile destination={destination} key={destination.slug} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DestinationOne;
