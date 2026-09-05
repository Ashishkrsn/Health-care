import React from 'react';
import { SectionContainer } from './common/SectionTitle';
import { quickActions, toneStyles } from '../data/content';

export default function QuickActions() {
  return (
    <section className="mt-[32px] pb-0">
      <SectionContainer>
        <div className="overflow-hidden rounded-[16px] border border-[#D7DEE9] bg-white/78 shadow-[0_3px_14px_rgba(15,23,42,0.10)] backdrop-blur-xl">
          <div className="flex h-[58px] items-center border-b border-[#D7DEE9] px-[76px] md:px-8 sm:h-[54px] sm:px-5">
            <h2 className="text-[20px] font-bold leading-none tracking-[-0.02em] text-[#111B35]">Quick Actions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            {quickActions.map((item, index) => {
              const styles = toneStyles[item.tone];
              const isTopRow = index < 5;
              const isFirstColumn = index % 5 === 0;

              return (
                <button
                  key={item.title}
                  type="button"
                  className={`group flex min-h-[92px] items-center gap-[14px] border-slate-200 bg-white/12 px-[20px] py-[14px] text-left transition-colors duration-200 hover:bg-white/55 focus:outline-none focus-visible:bg-white/60 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB]/30 ${
                    !isFirstColumn ? 'border-l' : ''
                  } ${!isTopRow ? 'border-t' : ''} md:border-l-0 md:border-t md:first:border-t-0 lg:border-l-0 lg:border-t-0 sm:border-t sm:border-l-0 sm:first:border-t-0`}
                >
                  <span
                    className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full ${styles.iconBg} ${styles.iconText}`}
                    aria-hidden="true"
                  >
                    <item.icon className="text-[23px]" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[14px] font-bold leading-[1.2] text-[#111B35]">
                      {item.title}
                    </span>
                    <span className="mt-[5px] block max-w-[128px] text-[12px] font-medium leading-[1.35] text-[#71809A]">
                      {item.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
