import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import BannerOne from '../Components/Banner/BannerOne'
import AboutOne from '../Components/About/AboutOne'
import DestinationOne from '../Components/Destination/DestinationOne'
import GalleryFive from '../Components/Gallery/GalleryFive'
import BlogOne from '../Components/Blog/BlogOne'
import FooterFour from '../Components/Footer/FooterFour'

function HomeOne() {
    return (
        <div>
            <HeaderOne />
            <BannerOne />
            <AboutOne />
            <DestinationOne />
            <GalleryFive />
            {/* <TourGuide /> */}
            {/* <TestimonialOne /> */}
            <BlogOne />
            <FooterFour />
            {/* <ScrollToTop /> */}
        </div>
    )
}

export default HomeOne
