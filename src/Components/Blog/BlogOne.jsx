import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../cms/articles';

function BlogOne() {
  return (
    <section className="victory-home-insights" id="blog-sec" aria-labelledby="home-insights-title">
      <div className="container">
        <div className="victory-home-insights__heading">
          <div>
            <p className="victory-section-eyebrow">Thailand travel insights</p>
            <h2 id="home-insights-title">Field notes for better-planned journeys</h2>
          </div>
          <div>
            <p>Practical destination context from Victory's Bangkok team.</p>
            <Link to="/blog" className="victory-text-link">
              View all insights
              <i className="fa-regular fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="victory-home-insights__grid">
          {articles.slice(0, 3).map((article) => (
            <article key={article.slug} className="victory-home-insight">
              <Link className="victory-home-insight__media" to={`/blog/${article.legacyId}`}>
                <img src={article.image} alt={article.imageAlt} loading="lazy" />
              </Link>
              <div className="victory-insights-meta">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h3>
                <Link to={`/blog/${article.legacyId}`}>{article.title}</Link>
              </h3>
              <Link className="victory-text-link" to={`/blog/${article.legacyId}`}>
                Read insight
                <i className="fa-regular fa-arrow-right" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogOne;
