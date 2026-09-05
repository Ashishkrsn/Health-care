import React, { useMemo, useState } from 'react';
import { FaArrowRight, FaClock, FaEye, FaSearch, FaRegCommentDots } from 'react-icons/fa';
import { healthTopics, healthFilters, healthInfoCta } from '../data/content';

export default function HealthInformation() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Diseases');

  const filteredTopics = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return healthTopics;
    return healthTopics.filter((item) =>
      `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <section className="health-info-section">
      <div className="health-info-container">
        <div className="health-info-header">
          <div>
            <div className="health-info-eyebrow">HEALTH KNOWLEDGE</div>
            <h2 className="health-info-title">Health information &amp; discovery</h2>
            <p className="health-info-subtitle">
              Explore understandable, trusted health information for everyday decisions.
            </p>
          </div>
          <button type="button" className="health-info-explore">
            Explore All Topics <FaArrowRight />
          </button>
        </div>

        <div className="health-info-controls">
          <div className="health-info-search">
            <FaSearch />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search diseases, symptoms, treatments, articles..."
              aria-label="Search health information"
            />
          </div>

          <div className="health-info-filters">
            {healthFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? 'is-active' : ''}
              >
                {filter}{filter === 'More' ? ' ▾' : ''}
              </button>
            ))}
          </div>
        </div>

        <h3 className="health-info-popular">Popular health topics</h3>

        <div className="health-info-grid">
          {filteredTopics.map((item) => (
            <article key={item.title} className="health-info-card">
              <div className="health-info-card-image-wrap">
                <img src={item.image} alt={item.title} className="health-info-card-image" />
              </div>
              <div className="health-info-card-body">
                <span className={`health-info-badge ${item.badgeClass}`}>{item.category}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <div className="health-info-card-meta">
                <span><FaEye /> {item.views} views</span>
                <span><FaClock /> {item.readTime}</span>
              </div>
            </article>
          ))}

          {filteredTopics.length === healthTopics.length && (
            <article className="health-info-cta">
              <FaRegCommentDots className="health-info-cta-icon" />
              <h3>{healthInfoCta.title}</h3>
              <p>Ask our community and get<br className="health-info-cta-break" /> reliable answers from real people.</p>
              <button type="button">
                {healthInfoCta.button} <FaArrowRight />
              </button>
              <div className="health-info-join">
                <div className="health-info-avatars">
                  <span>A</span><span>R</span><span>S</span>
                </div>
                <span>Join the conversation</span>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
