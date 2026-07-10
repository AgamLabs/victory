import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import AboutFour from '../Components/About/AboutFour'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'

function About() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="About Victory International"
            />
            <AboutFour />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default About
