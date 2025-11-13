import React, { useState } from "react";
import CMS from '../../cms/content';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function GalleryFive() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (imageSrc, event) => {
        event.preventDefault();
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="sidebar-gallery-area space">
            <div className="container-fluid">
                <div className="slider-area">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        centeredSlides={true}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 3 },
                            1300: { slidesPerView: 4 },
                        }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="th-slider has-shadow"
                    >
                        {CMS.galleries.galleryFourCarousel.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="gallery-thumb style2 global-img">
                                    <img
                                        src={img}
                                        alt="Gallery"
                                        onClick={(e) => openModal(img, e)}
                                    />
                                    <Link to={img}
                                        className="gallery-btn popup-image"
                                        onClick={(e) => openModal(img, e)}
                                    >
                                        <i className="fab fa-instagram" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>
    );
}

export default GalleryFive;
