import React, { useState } from 'react';
import CMS from '../../cms/content';
import Modal from './Modal';
import { Link } from 'react-router-dom'

function GalleryInner() {
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
        <div className="overflow-hidden space" id="gallery-sec">
            <div className="container-fuild">
                <div className="title-area mb-30 text-center">
                    <span className="sub-title">Explore Us</span>
                    <h2 className="sec-title">A truly exceptional experience</h2>
                </div>
                <div className="row gy-4 gallery-row4">
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src={CMS.galleries.galleryEight[0]} alt="gallery" />
                                <Link
                                    to={CMS.galleries.galleryEight[0]}
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryEight[0], e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src={CMS.galleries.galleryEight[1]} alt="gallery" />
                                <Link
                                    to={CMS.galleries.galleryEight[1]}
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryEight[1], e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src={CMS.galleries.galleryEight[2]} alt="gallery" />
                                <Link
                                    to={CMS.galleries.galleryEight[2]}
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryEight[2], e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src={CMS.galleries.galleryEight[3]} alt="gallery" />
                                <Link
                                    to={CMS.galleries.galleryEight[3]}
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryEight[3], e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src={CMS.galleries.galleryEight[4]} alt="gallery" />
                                <Link
                                    to={CMS.galleries.galleryEight[4]}
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryEight[4], e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src={CMS.galleries.galleryEight[5]} alt="gallery" />
                                <Link
                                    to={CMS.galleries.galleryEight[5]}
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryEight[5], e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src={CMS.galleries.galleryEight[6]} alt="gallery" />
                                <Link
                                    to={CMS.galleries.galleryEight[6]}
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryEight[6], e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src={CMS.galleries.galleryEight[7]} alt="gallery" />
                                <Link
                                    to={CMS.galleries.galleryEight[7]}
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryEight[7], e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>

    )
}

export default GalleryInner
