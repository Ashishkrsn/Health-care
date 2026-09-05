import React from 'react';

export function SectionContainer({ children, className = '' }) {
  return (
    <div className={`site-section-container ${className}`}>
      {children}
    </div>
  );
}

export default function SectionTitle({ title, description }) {
  return (
    <div>
      <h2 className="text-[32px] font-bold leading-tight text-[#1A2250]">{title}</h2>
      {description && <p className="mt-2 text-[16px] leading-relaxed text-[#64748B]">{description}</p>}
    </div>
  );
}
