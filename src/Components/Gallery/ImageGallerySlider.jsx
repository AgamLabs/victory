import React, { useMemo, useState } from 'react';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from './Modal';
import 'swiper/css';
import 'swiper/css/pagination';

function ImageGallerySlider({
    images,
    ariaLabel,
    variant = 'landscape',
    className = '',
    priorityFirst = false,
}) {
    const items = useMemo(() => images.map((image, index) => (
        typeof image === 'string'
            ? { src: image, alt: `${ariaLabel} ${index + 1}` }
            : image
    )), [ariaLabel, images]);
    const [slider, setSlider] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalIndex, setModalIndex] = useState(null);
    const multipleImages = items.length > 1;
    const selectedItem = modalIndex === null ? null : items[modalIndex];
    const sliderBreakpoints = variant === 'portrait'
        ? { 0: { slidesPerView: 1 }, 768: { slidesPerView: 1 } }
        : {
            0: { slidesPerView: 1.08, spaceBetween: 14 },
            576: { slidesPerView: 1.55, spaceBetween: 18 },
            992: { slidesPerView: 2.15, spaceBetween: 20 },
        };

    const moveModal = (direction) => {
        setModalIndex((index) => (index + direction + items.length) % items.length);
    };

    return (
        <div className={`victory-image-slider victory-image-slider--${variant} ${className}`.trim()}>
            <Swiper
                modules={[A11y, Keyboard, Pagination]}
                breakpoints={sliderBreakpoints}
                keyboard={{ enabled: true }}
                pagination={multipleImages ? { clickable: true } : false}
                rewind={multipleImages}
                preventClicks={false}
                preventClicksPropagation={false}
                watchOverflow
                onSwiper={setSlider}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                className="victory-image-slider__track"
                aria-label={ariaLabel}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={`${item.src}-${index}`}>
                        <button
                            type="button"
                            className="victory-image-slider__media"
                            onClick={() => setModalIndex(index)}
                            aria-label={`Open image ${index + 1} of ${items.length}`}
                            title="Open image viewer"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                width="1000"
                                height="760"
                                loading={priorityFirst && index === 0 ? 'eager' : 'lazy'}
                            />
                            <span aria-hidden="true">
                                <i className="fa-regular fa-magnifying-glass-plus" />
                            </span>
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>

            {multipleImages && (
                <div className="victory-image-slider__toolbar">
                    <p aria-live="polite">
                        <span>{String(currentIndex + 1).padStart(2, '0')}</span>
                        <span aria-hidden="true"> / </span>
                        <span>{String(items.length).padStart(2, '0')}</span>
                    </p>
                    <div>
                        <button type="button" onClick={() => slider?.slidePrev()} aria-label="Show previous image">
                            <i className="fa-regular fa-arrow-left" aria-hidden="true" />
                        </button>
                        <button type="button" onClick={() => slider?.slideNext()} aria-label="Show next image">
                            <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            )}

            <Modal
                isOpen={modalIndex !== null}
                closeModal={() => setModalIndex(null)}
                imageSrc={selectedItem?.src || ''}
                imageAlt={selectedItem?.alt || ''}
                onPrevious={multipleImages ? () => moveModal(-1) : undefined}
                onNext={multipleImages ? () => moveModal(1) : undefined}
                positionLabel={modalIndex === null ? '' : `${modalIndex + 1} / ${items.length}`}
            />
        </div>
    );
}

export default ImageGallerySlider;
