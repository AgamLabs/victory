import React from 'react';
import { Link } from 'react-router-dom';
import destinations from '../../cms/destinations';

function DestinationDetailsMain({ destination }) {
    const relatedDestinations = destinations
        .filter((item) => item.slug !== destination.slug)
        .sort((a, b) => Number(b.regionKey === destination.regionKey) - Number(a.regionKey === destination.regionKey))
        .slice(0, 3);

    return (
        <main className="victory-destination-detail">
            <section className="victory-destination-detail__intro" aria-labelledby="destination-overview-title">
                <div className="container">
                    <div className="victory-destination-detail__lead">
                        <div>
                            <p className="victory-section-eyebrow">{destination.region}</p>
                            <h2 id="destination-overview-title">A considered way to experience {destination.name}</h2>
                        </div>
                        <div>
                            <p>{destination.intro[0]}</p>
                            <p>{destination.intro[1]}</p>
                        </div>
                    </div>

                    <ul className="victory-destination-detail__best-for" aria-label="Best suited to">
                        {destination.bestFor.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </section>

            <section className="victory-destination-facts" aria-label={`${destination.name} planning facts`}>
                <div className="container">
                    <dl>
                        <div>
                            <dt>Best planning window</dt>
                            <dd>{destination.facts.bestTime}</dd>
                        </div>
                        <div>
                            <dt>Suggested stay</dt>
                            <dd>{destination.facts.idealStay}</dd>
                        </div>
                        <div>
                            <dt>Primary access</dt>
                            <dd>{destination.facts.access}</dd>
                        </div>
                    </dl>
                </div>
            </section>

            <section className="victory-destination-experiences" aria-labelledby="destination-experiences-title">
                <div className="container victory-destination-experiences__layout">
                    <div className="victory-destination-experiences__image">
                        <img
                            src={destination.gallery[1] || destination.image}
                            alt={destination.imageAlt}
                            width="900"
                            height="720"
                            loading="eager"
                        />
                    </div>
                    <div className="victory-destination-experiences__content">
                        <p className="victory-section-eyebrow">Program possibilities</p>
                        <h2 id="destination-experiences-title">Experiences that earn their place in the itinerary</h2>
                        <p>
                            We select timing, suppliers, transport, and pacing around the group,
                            then connect the details into one workable ground plan.
                        </p>
                        <ul>
                            {destination.experiences.map((experience) => (
                                <li key={experience}>
                                    <i className="fa-regular fa-check" aria-hidden="true" />
                                    <span>{experience}</span>
                                </li>
                            ))}
                        </ul>
                        <Link className="th-btn" to={`/contact?destination=${encodeURIComponent(destination.name)}`}>
                            Plan {destination.name}
                            <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="victory-destination-gallery" aria-labelledby="destination-gallery-title">
                <div className="container">
                    <div className="victory-destination-gallery__heading">
                        <div>
                            <p className="victory-section-eyebrow">A sense of place</p>
                            <h2 id="destination-gallery-title">{destination.name}, at a glance</h2>
                        </div>
                        <p>Final venues, routes, and activities are matched to season, group profile, and availability.</p>
                    </div>
                    <div className="victory-destination-gallery__grid">
                        {destination.gallery.map((image, index) => (
                            <img
                                key={image}
                                src={image}
                                alt={`${destination.name} travel view ${index + 1}`}
                                width="800"
                                height="600"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="victory-related-destinations" aria-labelledby="related-destinations-title">
                <div className="container">
                    <div className="victory-related-destinations__heading">
                        <div>
                            <p className="victory-section-eyebrow">Build the wider route</p>
                            <h2 id="related-destinations-title">Pair {destination.name} with</h2>
                        </div>
                        <Link className="victory-text-link" to="/destination">
                            View all destinations
                            <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="victory-related-destinations__grid">
                        {relatedDestinations.map((item) => (
                            <article key={item.slug}>
                                <Link to={`/destination/${item.slug}`}>
                                    <img src={item.image} alt={item.imageAlt} width="640" height="420" loading="lazy" />
                                </Link>
                                <p>{item.region}</p>
                                <h3><Link to={`/destination/${item.slug}`}>{item.name}</Link></h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="victory-detail-cta" aria-labelledby="detail-cta-title">
                <div className="container victory-detail-cta__inner">
                    <div>
                        <p className="victory-section-eyebrow">Ready for the working version?</p>
                        <h2 id="detail-cta-title">Turn {destination.name} into a route your group can actually run.</h2>
                    </div>
                    <Link className="th-btn" to={`/contact?destination=${encodeURIComponent(destination.name)}`}>
                        Start a proposal
                        <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default DestinationDetailsMain;
