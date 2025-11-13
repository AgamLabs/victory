import React, { useState } from 'react'
import CMS from '../../cms/content'
import Modal from './Modal';
import { Link } from 'react-router-dom';

function GalleryThree() {
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
        <div className="overflow-hidden space-bottom">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Make Your Tour More Pleasure</span>
                    <h2 className="sec-title">Recent Gallery</h2>
                </div>
                <div className="row gy-24 gx-24 justify-content-center">
                    <div className="col-lg-3">
                        <div className="gallery-box style2">
                            <div className="gallery-img global-img">
                                <Link
                                    to={CMS.galleries.galleryThree[0]}
                                    className="popup-image"
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                    <img
                                        src={CMS.galleries.galleryThree[0]}
                                        alt="gallery"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="gallery-box style2">
                            <div className="gallery-img global-img">
                                <Link
                                    to={CMS.galleries.galleryThree[1]}
                                    className="popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryThree[1], e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                    <img
                                        src={CMS.galleries.galleryThree[1]}
                                        alt="gallery"
                                        onClick={(e) => openModal(CMS.galleries.galleryThree[1], e)}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="gallery-box style2">
                            <div className="gallery-img global-img">
                                <Link
                                    to={CMS.galleries.galleryThree[3]}
                                    className="popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryThree[3], e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                    <img
                                        src={CMS.galleries.galleryThree[3]}
                                        alt="gallery"
                                        onClick={(e) => openModal(CMS.galleries.galleryThree[3], e)}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="gallery-box style2">
                            <div className="gallery-img global-img">
                                <Link
                                    to={CMS.galleries.galleryThree[2]}
                                    className="popup-image"
                                    onClick={(e) => openModal(CMS.galleries.galleryThree[2], e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                    <img
                                        src={CMS.galleries.galleryThree[2]}
                                        alt="gallery"
                                        onClick={(e) => openModal(CMS.galleries.galleryThree[2], e)}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="gallery-box-wrapp">
                            <div className="gallery-box style2">
                                <div className="gallery-img global-img">
                                    <Link
                                        to={CMS.galleries.galleryThree[4]}
                                        className="popup-image"
                                        onClick={(e) => openModal(CMS.galleries.galleryThree[4], e)}
                                    >
                                        <div className="icon-btn">
                                            <i className="fal fa-magnifying-glass-plus" />
                                        </div>
                                        <img
                                            src={CMS.galleries.galleryThree[4]}
                                            alt="gallery"
                                            onClick={(e) => openModal(CMS.galleries.galleryThree[4], e)}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="gallery-box style2">
                                <div className="gallery-img global-img">
                                    <Link
                                        to={CMS.galleries.galleryThree[5]}
                                        className="popup-image"
                                        onClick={(e) => openModal(CMS.galleries.galleryThree[5], e)}
                                    >
                                        <div className="icon-btn">
                                            <i className="fal fa-magnifying-glass-plus" />
                                        </div>
                                        <img
                                            src={CMS.galleries.galleryThree[5]}
                                            alt="gallery"
                                            onClick={(e) => openModal(CMS.galleries.galleryThree[5], e)}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>

    )
}

export default GalleryThree
