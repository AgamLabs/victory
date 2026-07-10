import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import { Link } from 'react-router-dom'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'

function Error() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title="Page Not Found"
      />
      <section className="space bg-smoke">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-6">
              <div className="error-img">
                <img src="/assets/img/theme-img/error.svg" alt="404" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="error-content">
                <h2 className="error-title">This page isn't available</h2>
                <h4 className="error-subtitle">
                  Let's get your Thailand plans back on course.
                </h4>
                <p className="error-text">
                  The link may be outdated or the page may have moved. Return home,
                  explore our destinations, or contact our Bangkok team for help.
                </p>
                <Link to="/" className="th-btn style3">
                  <img src="/assets/img/icon/right-arrow2.svg" alt="" />
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterFour />
      <ScrollToTop />
    </>
  )
}

export default Error
