import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../cms/articles';

function BlogDetailsOne({ article }) {
    if (!article) {
        return (
            <main className="victory-article-not-found">
                <div className="container">
                    <p className="victory-section-eyebrow">Thailand travel insights</p>
                    <h2>We could not find that field note</h2>
                    <p>The link may be out of date. The full Insights library is still available.</p>
                    <Link to="/blog" className="th-btn">
                        Browse all insights
                        <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                    </Link>
                </div>
            </main>
        );
    }

    const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
    const contactHref = `/contact?destination=${encodeURIComponent(article.destinationName)}`;

    return (
        <main className="victory-article">
            <article>
                <header className="victory-article__header">
                    <div className="container victory-article__header-inner">
                        <div className="victory-insights-meta">
                            <span>{article.category}</span>
                            <span>{article.readTime}</span>
                        </div>
                        <h2>{article.title}</h2>
                        <p>{article.excerpt}</p>
                    </div>
                </header>

                <div className="container victory-article__hero">
                    <img src={article.image} alt={article.imageAlt} />
                </div>

                <div className="container victory-article__layout">
                    <div className="victory-article__body">
                        <p className="victory-article__lead">{article.intro}</p>

                        <div className="victory-article__planning-note">
                            <span>Planning note</span>
                            <p>{article.planningNote}</p>
                        </div>

                        {article.sections.map((section) => (
                            <section key={section.heading}>
                                <h3>{section.heading}</h3>
                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </section>
                        ))}
                    </div>

                    <aside className="victory-article__aside" aria-labelledby="article-context-title">
                        <div className="victory-article__facts">
                            <p className="victory-section-eyebrow">At a glance</p>
                            <h3 id="article-context-title">Field note context</h3>
                            <dl>
                                <div>
                                    <dt>Region</dt>
                                    <dd>{article.category}</dd>
                                </div>
                                <div>
                                    <dt>Reading time</dt>
                                    <dd>{article.readTime}</dd>
                                </div>
                                <div>
                                    <dt>Related area</dt>
                                    <dd>{article.destinationName}</dd>
                                </div>
                            </dl>
                            <Link className="victory-text-link" to={`/destination/${article.destinationSlug}`}>
                                Explore the destination
                                <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                            </Link>
                        </div>

                        <div className="victory-article__proposal">
                            <p className="victory-section-eyebrow">Planning this route?</p>
                            <h3>Put the local operating details in one brief</h3>
                            <p>Share dates, group profile, and priorities with Victory's Bangkok team.</p>
                            <Link to={contactHref} className="th-btn">
                                Start a proposal
                                <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </article>

            <section className="victory-article-related" aria-labelledby="related-insights-title">
                <div className="container">
                    <div className="victory-article-related__heading">
                        <div>
                            <p className="victory-section-eyebrow">Continue exploring</p>
                            <h2 id="related-insights-title">More Thailand field notes</h2>
                        </div>
                        <Link to="/blog" className="victory-text-link">
                            All insights
                            <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>

                    <div className="victory-article-related__grid">
                        {relatedArticles.map((relatedArticle) => (
                            <article key={relatedArticle.slug}>
                                <Link className="victory-article-related__media" to={`/blog/${relatedArticle.slug}`}>
                                    <img src={relatedArticle.image} alt={relatedArticle.imageAlt} loading="lazy" />
                                </Link>
                                <div className="victory-insights-meta">
                                    <span>{relatedArticle.category}</span>
                                    <span>{relatedArticle.readTime}</span>
                                </div>
                                <h3>
                                    <Link to={`/blog/${relatedArticle.slug}`}>{relatedArticle.title}</Link>
                                </h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default BlogDetailsOne;
