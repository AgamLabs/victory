import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import destinations, { destinationRegions } from '../../cms/destinations';

function DestinationInner() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const region = searchParams.get('region') || 'all';

    const filteredDestinations = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return destinations.filter((destination) => {
            const matchesRegion = region === 'all' || destination.regionKey === region;
            const searchableText = [
                destination.name,
                destination.region,
                destination.summary,
                ...destination.bestFor,
            ].join(' ').toLowerCase();

            return matchesRegion && (!normalizedQuery || searchableText.includes(normalizedQuery));
        });
    }, [query, region]);

    const updateParams = (updates) => {
        const nextParams = new URLSearchParams(searchParams);

        Object.entries(updates).forEach(([key, value]) => {
            if (!value || value === 'all') {
                nextParams.delete(key);
            } else {
                nextParams.set(key, value);
            }
        });

        setSearchParams(nextParams, { replace: true });
    };

    const clearFilters = () => setSearchParams({}, { replace: true });

    return (
        <main className="victory-destinations">
            <section className="victory-destinations__intro" aria-labelledby="destination-index-title">
                <div className="container">
                    <div className="victory-destinations__heading">
                        <div>
                            <p className="victory-section-eyebrow">One country, many program styles</p>
                            <h1 id="destination-index-title">Find the right Thailand for your brief</h1>
                        </div>
                        <p>
                            Compare city, heritage, coast, and island options. Every route can be
                            shaped around group profile, timing, pace, and operational needs.
                        </p>
                    </div>

                    <div className="victory-destination-tools">
                        <div className="victory-destination-search">
                            <label htmlFor="destination-search">Search destinations</label>
                            <div className="victory-destination-search__control">
                                <i className="fa-regular fa-magnifying-glass" aria-hidden="true" />
                                <input
                                    id="destination-search"
                                    type="search"
                                    value={query}
                                    placeholder="Try Bangkok, islands, or MICE"
                                    onChange={(event) => updateParams({ q: event.target.value })}
                                />
                            </div>
                        </div>

                        <div className="victory-region-filter" aria-label="Filter by region">
                            <span>Region</span>
                            <div className="victory-region-filter__options">
                                {destinationRegions.map((option) => (
                                    <button
                                        key={option.key}
                                        type="button"
                                        aria-pressed={region === option.key}
                                        onClick={() => updateParams({ region: option.key })}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="victory-destination-count" aria-live="polite">
                        {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destination' : 'destinations'}
                    </p>
                </div>
            </section>

            <section className="victory-destinations__results" aria-label="Thailand destinations">
                <div className="container">
                    {filteredDestinations.length > 0 ? (
                        <div className="victory-destination-grid">
                            {filteredDestinations.map((destination, index) => (
                                <article className="victory-destination-card" key={destination.slug}>
                                    <Link className="victory-destination-card__image" to={`/destination/${destination.slug}`}>
                                        <img
                                            src={destination.image}
                                            alt={destination.imageAlt}
                                            width="720"
                                            height="540"
                                            loading={index < 2 ? 'eager' : 'lazy'}
                                        />
                                    </Link>
                                    <div className="victory-destination-card__body">
                                        <p className="victory-destination-card__region">{destination.region}</p>
                                        <h2><Link to={`/destination/${destination.slug}`}>{destination.name}</Link></h2>
                                        <p>{destination.summary}</p>
                                        <ul aria-label={`Best for ${destination.name}`}>
                                            {destination.bestFor.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
                                        </ul>
                                        <Link className="victory-text-link" to={`/destination/${destination.slug}`}>
                                            Explore destination
                                            <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="victory-destination-empty">
                            <h2>No destinations match those filters</h2>
                            <p>Clear the filters or share the brief and we will recommend the right route.</p>
                            <button type="button" className="th-btn" onClick={clearFilters}>Clear filters</button>
                        </div>
                    )}
                </div>
            </section>

            <section className="victory-destination-cta" aria-labelledby="destination-cta-title">
                <div className="container victory-destination-cta__inner">
                    <div>
                        <p className="victory-section-eyebrow">Multi-region journeys</p>
                        <h2 id="destination-cta-title">Need a route that connects several parts of Thailand?</h2>
                    </div>
                    <Link className="th-btn" to="/contact">
                        Share your brief
                        <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default DestinationInner;
