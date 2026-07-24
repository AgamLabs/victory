import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import CMS from '../../cms/content';

function BannerOne() {
    const hero = CMS.banners.bannerOne.featured;
    const slides = [
        {
            image: '/assets/img/gallery/gallery_4_5.jpg',
            imageAlt: 'Long-tail boats beneath dramatic limestone cliffs in Krabi',
            eyebrow: 'Thailand, beautifully orchestrated',
            title: 'Extraordinary places. Seamless journeys.',
        },
        {
            image: '/assets/img/hero/hero_bg3.avif',
            imageAlt: 'Thai temple reflected in a calm lake',
            eyebrow: 'Local expertise across Thailand',
            title: 'Culture, character, and confident planning.',
        },
        {
            image: '/assets/img/destination/destination_1_3.jpg',
            imageAlt: 'Long-tail boats among the limestone cliffs of the Phi Phi islands',
            eyebrow: 'Island journeys made effortless',
            title: 'Thailand’s natural beauty, thoughtfully connected.',
        },
    ];

    return (
        <section className="victory-hero" aria-labelledby="victory-hero-title">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                loop
                speed={900}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{ clickable: true }}
                className="victory-hero__slider"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={`${slide.image}-${index}`}>
                        <div
                            className="victory-hero__media"
                            role="img"
                            aria-label={slide.imageAlt}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                        <div className="victory-hero__overlay" />
                        <div className="container victory-hero__container">
                            <div className="victory-hero__content">
                                <p className="victory-hero__eyebrow">{slide.eyebrow}</p>
                                <h1 id={index === 0 ? 'victory-hero-title' : undefined}>{slide.title}</h1>
                                <div className="victory-hero__actions">
                                    <Link className="th-btn victory-hero__primary" to={hero.primaryAction.href}>
                                        {hero.primaryAction.label}
                                        <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                    <Link className="victory-hero__secondary" to="/about">
                                        Why Victory
                                        <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default BannerOne;
