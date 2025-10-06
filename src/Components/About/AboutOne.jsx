import React from 'react'
import { Link } from 'react-router-dom'

function AboutOne() {
    return (
        <div
            className="about-area position-relative overflow-hidden"
            id="about-sec"
            style={{ paddingTop: '40px' }}
        >
            <div className="container shape-mockup-wrap">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-box1">
                            <div className="img1">
                                <img src="/assets/img/normal/about_1_1.jpg" alt="About" />
                            </div>
                            {/* <div className="img2">
                                <img src="/assets/img/normal/about_1_2.jpg" alt="About" />
                            </div>
                            <div className="img3">
                                <img src="/assets/img/normal/about_1_3.jpg" alt="About" />
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="ps-xl-4 ms-xl-2">
                            <div className="title-area mb-20 pe-xl-5 me-xl-5">
                                <span className="sub-title style1 ">Welcome to Victory DMC</span>
                                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                                    Your Partner for Incredible Thailand Experiences
                                </h2>
                                <p className="sec-text mb-30">
                                    We're proud to call Thailand home, and our passion is creating group tours, fun activities, and hassle-free corporate trips that you'll remember for years to come. As one of the country's specialised tour operators, we leverage our extensive local knowledge and connections to provide international travel agencies and corporations with innovative and reliable travel solutions in Thailand.
                                </p>
                            </div>
                            <div className="about-item-wrap">
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/assets/img/icon/map3.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">Tailored Experiences</h5>
                                        <p className="about-item_text">
                                            We design travel experiences that truly stand out, tailoring every itinerary to bring authenticity, excitement, and flawless execution to your trip.
                                        </p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/assets/img/icon/guide.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">Local Expertise</h5>
                                        <p className="about-item_text">
                                            With our team's experience and on-the-ground knowledge, you can relax knowing your plans are in good hands while you focus on what's important.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-35">
                                <Link to="/about" className="th-btn style3 th-icon">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xl-block"
                    style={{
                        top: "12%",
                        left: "-16%",
                    }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{
                        top: "20%",
                        left: "-16%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xl-block"
                    style={{
                        top: "14%",
                        left: "-10%",
                    }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-shape movingX d-none d-xxl-block"
                    style={{
                        bottom: "0%",
                        right: "-11%",
                    }}
                >
                    <img src="/assets/img/normal/about-slide-img.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-rating d-none d-xxl-block"
                    style={{
                        bottom: "50%",
                        right: "-20%",
                    }}
                >
                    <i className="fa-sharp fa-solid fa-star" />
                    <span>4.9k</span>
                </div>
                <div
                    className="shape-mockup about-emoji d-none d-xxl-block"
                    style={{
                        bottom: "25%",
                        right: "5%",
                    }}
                >
                    <img src="/assets/img/icon/emoji.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default AboutOne
