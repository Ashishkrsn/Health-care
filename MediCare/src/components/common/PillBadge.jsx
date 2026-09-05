import React from 'react';

export default function PillBadge({ children, className = '' }) {
  return <span className={`inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[13px] font-medium text-slate-600 ${className}`}>{children}</span>;
}
