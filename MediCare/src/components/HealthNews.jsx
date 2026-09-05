import React, { useState } from 'react';
import { FaArrowRight, FaCommentAlt, FaEye } from 'react-icons/fa';
import { SectionContainer } from './common/SectionTitle';
import { healthNewsTabs, healthNews } from '../data/content';

export default function HealthNews() {
  const [activeTab, setActiveTab] = useState('Health News');
  const currentNews = healthNews[activeTab] || healthNews['Health News'];

  return (
    <section className="mt-[64px]">
      <SectionContainer>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-[22px] font-bold leading-tight text-[#1A2250]">12. Health News &amp; Medical Research</h2>
            <p className="mt-2 text-[14px] text-[#64748B]">Stay updated with the latest health news, medical breakthroughs and research.</p>
          </div>
          <button type="button" className="flex shrink-0 items-center gap-2 rounded-[5px] border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-[#2563EB]">View All News <FaArrowRight /></button>
        </div>

        <div className="mt-[32px] flex gap-7 border-b border-slate-200">
          {healthNewsTabs.map((tab) => (
            <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`relative pb-3 text-[14px] font-medium ${activeTab === tab ? 'text-[#2563EB]' : 'text-slate-500'}`}>
              {tab}
              {activeTab === tab && <span className="absolute bottom-[-1px] left-0 right-0 h-[3px] rounded-t-full bg-[#2563EB]" />}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-4 gap-6 xl:grid-cols-2 md:grid-cols-1">
          {currentNews.map((item) => (
            <article key={item.title} className="rounded-[5px] border border-gray-100 bg-white p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <div className="relative">
                <img src={item.image} alt={item.title} className="h-[150px] w-full rounded-[5px] object-cover" />
                <span className={`absolute bottom-2 left-2 rounded-full px-2 py-1 text-[10px] font-semibold text-white ${item.badgeClass}`}>{item.badge}</span>
              </div>
              <div className="mt-2 flex justify-end text-[12px] text-slate-500">{item.time}</div>
              <h3 className="mt-2 min-h-[42px] text-[15px] font-semibold leading-snug text-[#1A2250]">{item.title}</h3>
              <p className="mt-2 min-h-[40px] text-[13px] leading-relaxed text-[#64748B]">{item.description}</p>
              <div className="mt-4 flex items-center gap-5 text-[12px] text-slate-500">
                <span className="flex items-center gap-1.5"><FaEye />{item.views} views</span>
                <span className="flex items-center gap-1.5"><FaCommentAlt />{item.comments} comments</span>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
