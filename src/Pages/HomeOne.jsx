import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import BannerOne from '../Components/Banner/BannerOne'
import AboutOne from '../Components/About/AboutOne'
import DestinationOne from '../Components/Destination/DestinationOne'
import GalleryOne from '../Components/Gallery/GalleryOne'
import TourGuide from '../Components/Guide/TourGuide'
import TestimonialOne from '../Components/Testimonials/TestimonialOne'
import BlogOne from '../Components/Blog/BlogOne'
import FooterOne from '../Components/Footer/FooterOne'
import FloatingSocial from '../Components/FloatingSocial/FloatingSocial'

function HomeOne() {
    return (
        <div>
            <HeaderOne />
            <BannerOne />
            <AboutOne />
            <DestinationOne />
            <GalleryOne />
            <TourGuide />
            <TestimonialOne />
            <BlogOne />
            <FooterOne />
            {/* <ScrollToTop /> */}
            <FloatingSocial />
        </div>
    )
}

export default HomeOne
