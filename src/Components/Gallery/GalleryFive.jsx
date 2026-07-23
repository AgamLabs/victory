import React, { useState } from 'react';
import CMS from '../../cms/content';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from './Modal';
import 'swiper/css';

function GalleryFive() {
    const [modalIndex, setModalIndex] = useState(null);
    const galleryImages = CMS.site?.galleries?.galleryFourCarousel || [];
    const galleryItems = [...galleryImages, ...galleryImages];
    const modalImage = modalIndex === null ? '' : galleryImages[modalIndex];

    const moveModal = (direction) => {
        setModalIndex((index) => (index + direction + galleryImages.length) % galleryImages.length);
    };

    return (
        <section className="victory-gallery-carousel" aria-label="Thailand travel gallery">
            <div className="container-fluid">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    loop={galleryItems.length > 4}
                    loopAdditionalSlides={4}
                    breakpoints={{
                        0: { slidesPerView: 1.12, spaceBetween: 12 },
                        576: { slidesPerView: 2.1 },
                        768: { slidesPerView: 2.6 },
                        992: { slidesPerView: 3.25 },
                        1300: { slidesPerView: 4 },
                    }}
                    autoplay={{ delay: 3400, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    className="victory-gallery-carousel__track"
                >
                    {galleryItems.map((image, index) => (
                        <SwiperSlide key={`${image}-${index}`}>
                            <button
                                type="button"
                                className="victory-gallery-carousel__item"
                                onClick={() => setModalIndex(index % galleryImages.length)}
                                aria-label={`View Thailand travel image ${(index % galleryImages.length) + 1}`}
                            >
                                <img
                                    src={image}
                                    alt=""
                                    loading={index > 4 ? 'lazy' : 'eager'}
                                />
                                <span aria-hidden="true">
                                    <i className="fa-regular fa-magnifying-glass-plus" />
                                </span>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Modal
                isOpen={modalIndex !== null}
                closeModal={() => setModalIndex(null)}
                imageSrc={modalImage}
                imageAlt={modalIndex === null ? '' : `Thailand travel gallery image ${modalIndex + 1}`}
                onPrevious={galleryImages.length > 1 ? () => moveModal(-1) : undefined}
                onNext={galleryImages.length > 1 ? () => moveModal(1) : undefined}
                positionLabel={modalIndex === null ? '' : `${modalIndex + 1} / ${galleryImages.length}`}
            />
        </section>
    );
}

export default GalleryFive;
