import React, { useState } from 'react';
import CMS from '../../cms/content';
import Modal from './Modal';
import { Link } from 'react-router-dom';

function GalleryTwo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    // Function to open the modal with the selected image
    const openModal = (imageSrc, event) => {
        event.preventDefault(); // Prevent default link behavior
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div
            className="gallery-area2 bg-top-center space"
            style={{
                backgroundImage: `url('${CMS.galleries.galleryTwo.bg}')`,
                backgroundRepeat: "no-repeat",
            }}
            data-bg-src=""
        >
            <div className="container">
                    <div className="col-lg-7">
                        <div className="title-area text-center text-lg-start mb-20 pe-xl-5 me-xl-5">
                            <span className="sub-title">Best Memorable Places</span>
                            <h2 className="sec-title">
                                Explore the most beautiful place in the world
                            </h2>
                        </div>
                        <p className="sec-text style2 text-title mb-50">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
                            tempor incididunt labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.
                        </p>
                    </div>
                    <div className="col-auto">
                        <div className="sec-btn">
                            <Link to="/gallery" className="th-btn style3 th-icon">
                                Enter Gallery
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container th-container2 shape-mockup-wrap">
                <div className="row gy-24 gx-24 justify-content-center">
                    <div className="col-lg-3 gallery-box_wrapp">
                        <div className="gallery-box">
                            <div className="gallery-img global-img">
                                <Link
                                    to={CMS.galleries.galleryTwo.items[0]}
                                    className="popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryTwo.items[0], e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                    <img
                                        src={CMS.galleries.galleryTwo.items[0]}
                                        alt="gallery"
                                        onClick={(e) => openModal(CMS.galleries.galleryTwo.items[0], e)}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 gallery-box_wrapp">
                        <div className="gallery-box">
                            <div className="gallery-img global-img">
                                <Link
                                    to={CMS.galleries.galleryTwo.items[1]}
                                    className="popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryTwo.items[1], e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                    <img
                                        src={CMS.galleries.galleryTwo.items[1]}
                                        alt="gallery"
                                        onClick={(e) => openModal(CMS.galleries.galleryTwo.items[1], e)}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="gallery-box">
                            <div className="gallery-img global-img">
                                <Link
                                    to={CMS.galleries.galleryTwo.items[2]}
                                    className="popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryTwo.items[2], e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                    <img
                                        src={CMS.galleries.galleryTwo.items[2]}
                                        alt="gallery"
                                        onClick={(e) => openModal(CMS.galleries.galleryTwo.items[2], e)}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 gallery-box_wrapp">
                        <div className="gallery-box">
                            <div className="gallery-img global-img">
                                <Link
                                    to={CMS.galleries.galleryTwo.items[3]}
                                    className="popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryTwo.items[3], e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                    <img
                                        src={CMS.galleries.galleryTwo.items[3]}
                                        alt="gallery"
                                        onClick={(e) => openModal(CMS.galleries.galleryTwo.items[3], e)}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="gallery-box">
                            <div className="gallery-img global-img">
                                <Link
                                    to={CMS.galleries.galleryTwo.items[4]}
                                    className="popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryTwo.items[4], e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                    <img
                                        src={CMS.galleries.galleryTwo.items[4]}
                                        alt="gallery"
                                        onClick={(e) => openModal(CMS.galleries.galleryTwo.items[4], e)}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 gallery-box_wrapp">
                        <div className="gallery-box">
                            <div className="gallery-img global-img">
                                <Link
                                    to={CMS.galleries.galleryTwo.items[5]}
                                    className="popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryTwo.items[5], e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                    <img
                                        src={CMS.galleries.galleryTwo.items[5]}
                                        alt="gallery"
                                        onClick={(e) => openModal(CMS.galleries.galleryTwo.items[5], e)}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="shape-mockup movingX d-none d-xl-block"
                    style={{
                        bottom: "35%",
                        right: "-4%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup movingX d-none d-xl-block"
                    style={{
                        bottom: "8%",
                        left: "-10%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>

    )
}

export default GalleryTwo
