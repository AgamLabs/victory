import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderOne from '../Components/Header/HeaderOne';
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb';
import DestinationDetailsMain from '../Components/Destination/DestinationDetailsMain';
import FooterFour from '../Components/Footer/FooterFour';
import ScrollToTop from '../Components/ScrollToTop';
import { getDestination } from '../cms/destinations';

function DestinationDetails() {
    const { id } = useParams();
    const destination = getDestination(id);

    if (!destination) {
        return (
            <>
                <HeaderOne />
                <Breadcrumb title="Destination Not Found" />
                <main className="victory-destination-not-found">
                    <div className="container">
                        <p className="victory-section-eyebrow">Choose another route</p>
                        <h1>That destination is not in our current Thailand collection.</h1>
                        <p>Explore the full destination index or share your brief for a tailored recommendation.</p>
                        <Link className="th-btn" to="/destination">Explore Thailand</Link>
                    </div>
                </main>
                <FooterFour />
            </>
        );
    }

    return (
        <>
            <HeaderOne />
            <Breadcrumb title={destination.name} bgImage={destination.image} />
            <DestinationDetailsMain destination={destination} />
            <FooterFour />
            <ScrollToTop />
        </>
    );
}

export default DestinationDetails;
