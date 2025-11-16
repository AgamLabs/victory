import React from 'react'
import CMS from '../../cms/content'
import { Link, useParams } from 'react-router-dom';
import Posts from '../data/data-post.json';

function BlogDetailsOne() {
    const { id } = useParams();
    const blogPost = Posts.find(post => post.id === parseInt(id));

    if (!blogPost) {
        return <div>Post not found!</div>;
    }
    return (
        <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
            <div className="container shape-mockup-wrap">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="th-blog blog-single">
                            <div className="blog-img">
                                <img src={`/assets/img/blog/${blogPost.bannerImg}`} alt={blogPost.title} />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link className="author" to="/blog">
                                        <i className="fa-light fa-user" />
                                        by David Smith
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fa-regular fa-calendar" />
                                        05 May, 2025
                                    </Link>
                                    <Link to="#">
                                        <img src="/assets/img/icon/map.svg" alt="" />
                                        Sea Beach
                                    </Link>
                                </div>
                                <h2 className="blog-title">
                                    Find Pattaya: 10 Best Places to Go for All Types of Travellers.
                                </h2>
                                <p className="blog-text mb-30">
                                   You've heard of the nightlife in Pattaya, but trust me, there is much more to this city on Thailand's eastern seaboard. It is a place to experience a perfect blend of cultural richness, thrilling thrills, and relaxation. From serene temples and lively gardens to bustling markets and picture-perfect islands, Pattaya has something for everyone, whether you travel alone, with your family, or with a partner.
                                    Here's my own opinion on the best places to visit in Pattaya.

                                </p>
                                <p className="blog-text mb-30">
                                   1. The Sanctuary of Truth
                                    It is hands down mind-blowing. It's a giant wooden temple, constructed entirely without nails. Every inch of it is plastered with beautiful carvings depicting stories of Thai mythology and philosophy. It's a reflective and serene architectural wonder, plus the ocean in the background.
                                    Why it's cool: It's a work in progress, so each time you visit, it's slightly different. And the guided tours do an excellent job of telling you all about the symbolism, so you know what you're looking at.
                                    A little tip: Visit in the morning. It's less busy, and the sun won't be pounding down on you as heavily.

                                </p>
                                <blockquote>
                                    <p>
                                   
                                    </p>
                                    <cite>Michel Clarck</cite>
                                </blockquote>
                                <p className="blog-text mt-5 mb-4">
                                   2. Nong Nooch Tropical Botanical Garden
                                    I've never laid eyes on a garden so large and lovely. It's more than 500 acres of carefully planned landscapes, complete with themed areas such as a French garden and a cactus garden. They even have cultural performances, such as Thai dancing and elephant shows.
                                    You'll enjoy this if: You're a photographer. Seriously, there's a fantastic photo opportunity wherever you look.
                                    Insider tip: Spend a minimum of 3 to 4 hours here. It's ginormous, and you don't want to rush through it.
                                    {" "}
                                </p>
                                <p className="blog-text mt-5 mb-4">
                                    {" "}
                                    3. Pattaya Floating Market
                                    The market is an amazing, sensory indulgence. Picture vendors offering all manner of treats—from freshly cut tropical fruits and snacks to locally made crafts—off wooden boats. The market is divided into four areas, each representing one of Thailand's regions.
                                    What to do: Get on a boat tour of the market to absorb it all. And for goodness' sake, eat everything! The street food is not to be missed.
                                    Pro-tip: Head there early or towards the end of the afternoon to miss the heat and the most enormous crowds.
                                    {" "}
                                </p>
                                <p className="blog-text mb-30">
                                  4. Coral Island (Koh Larn)
                                    Get away to paradise with a mere 30-minute ride on the ferry. Koh Larn is a paradise island with cleaner and quieter beaches than the mainland. The most popular one is Tawaen Beach, but Samae or Nual Beach is ideal for escaping the crowd.
                                    Why it's a great day trip: The beach has crystal clear water and soft sand, and you can get some fresh seafood from a local eatery directly on the beach.
                                    Friendly reminder: Don't forget to bring cash to the beach vendors and sunscreen and water shoes too!


                                </p>
                                <h3 className="mt-4">
                                    The sustainable traveller These 6 hotels epitomise ethical luxury
                                </h3>
                                <p className="">
                                    ‍Whether you work from home or commute to a nearby office, the
                                    energy-efficient features of your home contribute to a productive
                                    and eco-conscious workday. Smart home systems allow you to monitor
                                    and control energy usage, ensuring that your environmental impact
                                    remains minimal.
                                </p>
                                <div className="row gy-4">
                                    <div className="col-12">
                                        <div className="blog-img">
                                            <img
                                                className="w-100"
                                                src={CMS.blog.details.heroImage}
                                                alt="Blog hero"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className=" mb-0">
                                    1.Neighborhood: Choosing the ideal neighborhood is an important
                                    choice that extends beyond a property's physical characteristics.
                                    We'll go over the things to take into account while selecting a
                                    neighborhood in this piece, including future growth plans, school
                                    districts, and amenities. To make sure that the community you
                                    choose fits both your present requirements and your long-term
                                    goals, learn how to balance your lifestyle choices and property
                                    prices.
                                </p>
                                <p>
                                    2.Buying a first home may be an exciting and daunting experience
                                    for those who have never done it before. This blog article serves
                                    as a thorough guide to help you through the process of buying your
                                    first house. We're here to provide you with useful advice and
                                    insights to help you navigate every step of the home-buying
                                    process, from comprehending the financial elements to luxury about
                                    its all realar properties nuances.
                                </p>
                                <div className="share-links clearfix ">
                                    <div className="row justify-content-between">
                                        <div className="col-md-auto">
                                            <span className="share-links-title">Tags:</span>
                                            <div className="tagcloud">
                                                <Link to="/blog">Apartment</Link>
                                                <Link to="/blog">Buyer</Link>
                                                <Link to="/blog">Modern</Link>
                                                <Link to="/blog">Luxury</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-auto text-xl-end">
                                            <div className="share-links_wrapp">
                                                <span className="share-links-title">Share:</span>
                                                <div className="social-links">
                                                    <Link to="https://www.facebook.com/">
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                    <Link to="https://www.twitter.com/">
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                    <Link to="https://www.instagram.com/">
                                                        <i className="fab fa-instagram" />
                                                    </Link>
                                                    <Link to="https://www.linkedin.com/">
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Share Links Area end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Comment form removed per requirements */}
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Categories</h3>
                                <ul>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            City Tour
                                        </Link>
                                        <span>(8)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Beach Tours
                                        </Link>
                                        <span>(6)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Wildlife Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            News &amp; Tips
                                        </Link>
                                        <span>(7)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Adventure Tours
                                        </Link>
                                        <span>(9)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Mountain Tours
                                        </Link>
                                        <span>(10)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget  ">
                                <h3 className="widget_title">Recent Posts</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="#">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-1.jpg"
                                                    alt="Exploring the green spaces of the island Maldives"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="#">
                                                    Exploring The Green Spaces Of the island maldives
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    22/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="#">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-2.jpg"
                                                    alt="Harmony with nature of Belgium tour and travel"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="#">
                                                    Harmony With Nature Of Belgium Tour and travle
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    25/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="#">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-3.jpg"
                                                    alt="Exploring the green spaces of Realar Residence"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="#">
                                                    Exploring The Green Spaces Of Realar Residence
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    27/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_tag_cloud  ">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <Link to="/blog">Tour</Link>
                                    <Link to="/blog">Adventure</Link>
                                    <Link to="/blog">Rent</Link>
                                    <Link to="/blog">Innovate</Link>
                                    <Link to="/blog">Hotel</Link>
                                    <Link to="/blog">Modern</Link>
                                    <Link to="/blog">Luxury</Link>
                                    <Link to="/blog">Travel</Link>
                                </div>
                            </div>
                            {/* Removed Need Help sidebar banner as requested */}
                        </aside>
                    </div>
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xxl-block"
                    style={{ bottom: "5%", right: "-8%" }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{ bottom: "1%", right: "-7%" }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xxl-block"
                    style={{ bottom: "2%", right: "0%" }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
            </div>
        </section>

    )
}

export default BlogDetailsOne
