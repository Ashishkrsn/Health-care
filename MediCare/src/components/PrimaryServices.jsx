import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { SectionContainer } from './common/SectionTitle';
import { primaryServices, toneStyles } from '../data/content';

export default function PrimaryServices() {
  return (
    <section className="primary-services-section" aria-labelledby="primary-healthcare-services-title">
      <SectionContainer>
        <div className="primary-services-header">
          <div>
            <h2 id="primary-healthcare-services-title" className="primary-services-title">
              Primary Healthcare Services
            </h2>
            <p className="primary-services-subtitle">
              Access essential healthcare services quickly and easily.
            </p>
          </div>

          <button type="button" className="primary-services-view-all">
            View all services
            <MdArrowForward />
          </button>
        </div>

        <div className="primary-services-grid">
          {primaryServices.map((item) => {
            const iconStyles = toneStyles[item.iconTone || item.tone];
            const ctaStyles = toneStyles[item.ctaTone || item.tone];

            return (
              <article key={item.title} className="primary-service-card group">
                <button
                  type="button"
                  className="primary-service-button"
                  aria-label={item.cta}
                >
                  <div className="primary-service-image-wrap">
                    <img src={item.image} alt="" className="primary-service-image" />
                    <div className={`primary-service-icon ${iconStyles.iconBg} ${iconStyles.iconText}`}>
                      <item.icon />
                    </div>
                  </div>

                  <div className="primary-service-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className={`primary-service-cta ${ctaStyles.iconText}`}>
                      {item.cta}
                      <MdArrowForward />
                    </span>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
