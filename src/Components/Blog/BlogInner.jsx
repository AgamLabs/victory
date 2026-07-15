import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../cms/articles';

const articleHref = (article) => `/blog/${article.slug}`;

function BlogInner() {
    const [featuredArticle, ...moreArticles] = articles;

    return (
        <main className="victory-insights-index">
            <section className="victory-insights-index__intro" aria-labelledby="insights-index-title">
                <div className="container victory-insights-index__heading">
                    <div>
                        <p className="victory-section-eyebrow">Victory field notes</p>
                        <h2 id="insights-index-title">Practical Thailand planning, from the ground up</h2>
                    </div>
                    <div>
                        <p>
                            Destination context, itinerary judgement, and operating considerations
                            for travel partners, planners, and curious travellers.
                        </p>
                        <Link to="/destination" className="victory-text-link">
                            Explore Thailand
                            <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="victory-insights-index__featured" aria-label="Featured travel insight">
                <div className="container">
                    <article className="victory-insights-feature">
                        <Link className="victory-insights-feature__media" to={articleHref(featuredArticle)}>
                            <img src={featuredArticle.image} alt={featuredArticle.imageAlt} />
                        </Link>
                        <div className="victory-insights-feature__content">
                            <div className="victory-insights-meta">
                                <span>{featuredArticle.category}</span>
                                <span>{featuredArticle.readTime}</span>
                            </div>
                            <h3>
                                <Link to={articleHref(featuredArticle)}>{featuredArticle.title}</Link>
                            </h3>
                            <p>{featuredArticle.excerpt}</p>
                            <Link className="victory-text-link" to={articleHref(featuredArticle)}>
                                Read the field note
                                <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <section className="victory-insights-index__latest" aria-labelledby="insights-latest-title">
                <div className="container">
                    <div className="victory-insights-index__section-heading">
                        <p className="victory-section-eyebrow">More from Thailand</p>
                        <h2 id="insights-latest-title">Plan the route with better context</h2>
                    </div>

                    <div className="victory-insights-list">
                        {moreArticles.map((article) => (
                            <article key={article.slug} className="victory-insights-list__item">
                                <Link className="victory-insights-list__media" to={articleHref(article)}>
                                    <img src={article.image} alt={article.imageAlt} loading="lazy" />
                                </Link>
                                <div className="victory-insights-list__content">
                                    <div className="victory-insights-meta">
                                        <span>{article.category}</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3>
                                        <Link to={articleHref(article)}>{article.title}</Link>
                                    </h3>
                                    <p>{article.excerpt}</p>
                                </div>
                                <Link className="victory-insights-list__action" to={articleHref(article)} aria-label={`Read ${article.title}`}>
                                    <span>Read</span>
                                    <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default BlogInner;
