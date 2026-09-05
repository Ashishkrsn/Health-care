import React from 'react';
import { toneStyles } from '../../data/content';

export default function IconCircle({ icon: Icon, tone = 'blue', size = '56px', className = '' }) {
  const styles = toneStyles[tone] || toneStyles.blue;
  return (
    <div style={{ width: size, height: size }} className={`flex shrink-0 items-center justify-center rounded-full ${styles.iconBg} ${styles.iconText} ${className}`}>
      <Icon className="text-[26px]" aria-hidden="true" />
    </div>
  );
}
