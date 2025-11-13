import React, { useState, useEffect } from "react";
import CMS from '../../cms/content';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const destinations = CMS.destination.lists.popularList;

const sliderOptions = {
  modules: [EffectCoverflow, Autoplay, Navigation],
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 5,
  initialSlide: 0,
  grabCursor: true,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".destination-next",
    prevEl: ".destination-prev",
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 95,
    depth: 212,
    modifier: 1,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 3 },
  },
};
  

function DestinationOne() {
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    // Add event listeners for hover effect
    const sliderWrap = document.querySelector(".slider-drag-wrap");
    const sliderLink = document.querySelectorAll(".slider-drag-wrap a");

    const handleMouseEnter = () => setCursorActive(true);
    const handleMouseLeave = () => setCursorActive(false);

    const handleLinkEnter = () => setCursorActive(false);
    const handleLinkLeave = () => setCursorActive(true);

    if (sliderWrap) {
      sliderWrap.addEventListener("mouseenter", handleMouseEnter);
      sliderWrap.addEventListener("mouseleave", handleMouseLeave);
    }

    sliderLink.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkEnter);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    // Clean up event listeners on component unmount
    return () => {
      if (sliderWrap) {
        sliderWrap.removeEventListener("mouseenter", handleMouseEnter);
        sliderWrap.removeEventListener("mouseleave", handleMouseLeave);
      }

      sliderLink.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkEnter);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Thailand Destinations</span>
          <h2 className="sec-title">Discover Thailand's Most Popular Destinations</h2>
        </div>

        <div className={`slider-drag-wrap ${cursorActive ? 'active' : ''}`}>
          <Swiper {...sliderOptions} className="destination-slider">
            {destinations.map((dest) => (
              <SwiperSlide key={dest.id}>
                <div className="destination-box gsap-cursor">
                  <div className="destination-img">
                    <img src={dest.image} alt={dest.name} />
                    <div className="destination-content">
                      <div className="media-left">
                        <h4 className="box-title">
                          <Link to="/destination/1">{dest.name}</Link>
                        </h4>
                        <span className="destination-subtitle">{dest.listings} Listing</span>
                      </div>
                      <div>
                        <Link to="/destination" className="th-btn style2 th-icon">
                          View All
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <button
              className="destination-prev swiper-button-prev"
              aria-label="Previous"
              style={{ opacity: 0, pointerEvents: 'none', width: 0, height: 0, border: 'none', background: 'transparent' }}
            />
            <button
              className="destination-next swiper-button-next"
              aria-label="Next"
              style={{ opacity: 0, pointerEvents: 'none', width: 0, height: 0, border: 'none', background: 'transparent' }}
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default DestinationOne;
