import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { getDestination } from '../../cms/destinations';

const homepageDestinationSlugs = [
    'bangkok',
    'chiang-mai-north',
    'krabi-railay',
    'phuket-phi-phi',
    'samui-gulf-islands',
];

const homepageDestinations = homepageDestinationSlugs.map(getDestination).filter(Boolean);

function DestinationTile({ destination, priority = false }) {
    return (
        <article className="victory-home-destination">
            <Link to={`/destination/${destination.slug}`} aria-label={`Explore ${destination.name}`}>
                <img
                    src={destination.image}
                    alt={destination.imageAlt}
                    width="900"
                    height="700"
                    loading={priority ? 'eager' : 'lazy'}
                />
                <div className="victory-home-destination__content">
                    <p>{destination.region}</p>
                    <h3>{destination.name}</h3>
                    <span>
                        Explore destination
                        <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                    </span>
                </div>
            </Link>
        </article>
    );
}

function DestinationOne() {
    const [slider, setSlider] = useState(null);

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

                <div className="victory-home-destinations__slider-wrap">
                    <Swiper
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                        effect="coverflow"
                        centeredSlides
                        loop
                        grabCursor
                        preventClicks={false}
                        preventClicksPropagation={false}
                        speed={900}
                        autoplay={{
                            delay: 3600,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 180,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1.08, spaceBetween: 14 },
                            576: { slidesPerView: 1.75, spaceBetween: 20 },
                            992: { slidesPerView: 2.4, spaceBetween: 28 },
                            1200: { slidesPerView: 3, spaceBetween: 32 },
                        }}
                        className="victory-destination-slider"
                        onSwiper={setSlider}
                    >
                        {homepageDestinations.map((destination, index) => (
                            <SwiperSlide key={destination.slug}>
                                <DestinationTile destination={destination} priority={index === 0} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="victory-home-destinations__controls">
                        <button
                            type="button"
                            className="victory-slider-control"
                            aria-label="Show previous destination"
                            onClick={() => slider?.slidePrev()}
                        >
                            <i className="fa-regular fa-arrow-left" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            className="victory-slider-control"
                            aria-label="Show next destination"
                            onClick={() => slider?.slideNext()}
                        >
                            <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DestinationOne;
