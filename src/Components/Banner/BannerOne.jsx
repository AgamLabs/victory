import React, { useEffect, useRef } from 'react'
import CMS from '../../cms/content'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, EffectFade, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
function BannerOne() {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Function to add animation classes
        const animationProperties = () => {
            document.querySelectorAll('[data-ani]').forEach((element) => {
                const animationName = element.getAttribute('data-ani');
                element.classList.add(animationName);
            });

            document.querySelectorAll('[data-ani-delay]').forEach((element) => {
                const delayTime = element.getAttribute('data-ani-delay');
                element.style.animationDelay = delayTime;
            });
        };

        animationProperties();
    }, []);

    // Event handler for custom navigation arrows
    const handleSliderNavigation = (direction) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            if (direction === "prev") {
                swiper.slidePrev();
            } else {
                swiper.slideNext();
            }
        }
    };

    return (
    <div className="th-hero-wrapper hero-1" id="hero" style={{ marginBottom: 0, height: '65vh', minHeight: '480px' }}>

            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]} // Initialize necessary modules
                effect="fade" // Use fade effect
                loop={true} // Enable loop
                speed={1000}
                autoplay={{
                    delay: 5000, // 5 seconds delay
                    disableOnInteraction: false, // Continue autoplay after user interaction
                }}
                pagination={{
                    el: ".swiper-pagination", // Custom pagination container
                    clickable: true, // Enable clickable pagination
                }}
                navigation={{
                    nextEl: ".slider-next", // Custom next button
                    prevEl: ".slider-prev", // Custom prev button
                }}
                className="th-slider hero-slider-1"
                id="heroSlide1"
            >
                <div className="swiper-wrapper">
                    {CMS.banners.bannerOne.slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="hero-inner">
                                <div
                                    className="th-hero-bg"
                                    style={{
                                        backgroundImage: `url(${slide.img})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: '65vh',
                                        minHeight: '480px',
                                        maxHeight: '800px',
                                    }}
                                />
                                <div className="container">
                                    <div className="hero-style1" style={{ transform: 'translateY(4%)', padding: '60px 0 80px 0' }}>
                                        <span
                                            className="sub-title style1"
                                            data-ani="slideinup"
                                            data-ani-delay="0.2s"
                                        >
                                            {slide.subtitle}
                                        </span>
                                        <h1
                                            className="hero-title"
                                            data-ani="slideinup"
                                            data-ani-delay="0.4s"
                                        >
                                            {slide.title}
                                        </h1>
                                        {/* Call-to-action buttons removed per request */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
                <div className="th-swiper-custom" style={{ transform: 'translateY(2%)' }}>
                    <button
                        className="slider-arrow slider-prev"
                        onClick={() => handleSliderNavigation("prev")}
                    >
                        <img src="/assets/img/icon/right-arrow.svg" alt="Prev" />
                    </button>
                    <div className="swiper-pagination" /> {/* Pagination container */}
                    <button
                        className="slider-arrow slider-next"
                        onClick={() => handleSliderNavigation("next")}
                    >
                        <img src="/assets/img/icon/left-arrow.svg" alt="Next" />
                    </button>
                </div>
            </Swiper>
        </div>

    )
}

export default BannerOne
