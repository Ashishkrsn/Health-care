import React from 'react';
import { trustItems } from '../data/content';

export default function TrustBar() {
  return (
    <section className="trust-section" aria-label="Why MediCare+ can be trusted">
      <div className="trust-panel">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className={`trust-item ${index < trustItems.length - 1 ? 'trust-item-divider' : ''}`} key={item.title}>
              <div className={`trust-icon ${item.iconBg} ${item.iconText}`}>
                <Icon />
              </div>
              <div className="trust-copy">
                <div className="trust-title">{item.title}</div>
                <div className="trust-subtitle">{item.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
