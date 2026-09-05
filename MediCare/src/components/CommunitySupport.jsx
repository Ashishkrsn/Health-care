import React, { useMemo, useState } from 'react';
import { FaArrowRight, FaComments, FaHeart, FaSearch, FaSlidersH, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { communityTopics, communityDiscussions } from '../data/content';
import { SectionContainer } from './common/SectionTitle';

const topicTone = {
  All: 'bg-blue-100 text-[#2563EB]',
  Diabetes: 'bg-white text-slate-600',
  'General Health': 'bg-white text-slate-600',
  "Women's Health": 'bg-white text-slate-600',
  'Mental Health': 'bg-white text-slate-600',
  Nutrition: 'bg-white text-slate-600',
  Lifestyle: 'bg-white text-slate-600',
};

export default function CommunitySupport() {
  const [query, setQuery] = useState('');
  const [activeTopic, setActiveTopic] = useState('All');

  const discussions = useMemo(() => {
    const q = query.trim().toLowerCase();
    return communityDiscussions.filter((item) => {
      const matchesTopic = activeTopic === 'All' || item.topic === activeTopic;
      const matchesQuery = !q || `${item.topic} ${item.title}`.toLowerCase().includes(q);
      return matchesTopic && matchesQuery;
    });
  }, [query, activeTopic]);

  return (
    <section className="mt-[64px] overflow-hidden bg-transparent">
      <SectionContainer>
        <div className="relative">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#2563EB]">Community &amp; Human Support</p>
              <h2 className="mt-1 text-[32px] font-extrabold leading-tight text-[#0F172A]">Ask, share, and learn together</h2>
              <p className="mt-2 text-[16px] leading-relaxed text-[#64748B]">A moderated healthcare community for questions, experiences, and peer support.</p>
            </div>
            <button type="button" className="flex shrink-0 items-center gap-3 rounded-[16px] border border-white/80 bg-white/85 px-5 py-3 text-[14px] font-semibold text-[#2563EB] shadow-[0_4px_16px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              Explore Community <FaArrowRight />
            </button>
          </div>

          <div className="mt-[40px] grid grid-cols-1 gap-8">
            <div>
              <div className="rounded-[20px] border border-white/80 bg-white/72 p-4 shadow-[0_5px_20px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                <div className="flex h-[48px] items-center overflow-hidden rounded-[14px] border border-slate-200 bg-white/80">
                  <FaSearch className="ml-4 shrink-0 text-[15px] text-slate-400" />
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search questions, topics, or communities..." className="h-full min-w-0 flex-1 bg-transparent px-3 text-[15px] text-[#1A2250] outline-none placeholder:text-slate-400" />
                  <button type="button" className="mr-1.5 flex h-[42px] w-[126px] items-center justify-center gap-2 rounded-[12px] border border-slate-200 bg-white px-3 text-[13px] font-semibold text-slate-600">
                    <FaSlidersH className="text-[#2563EB]" /> All Topics <span className="text-slate-400">⌄</span>
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {communityTopics.map((topic) => (
                    <button key={topic} type="button" onClick={() => setActiveTopic(topic)} className={`rounded-full border border-slate-200 px-4 py-2 text-[13px] font-medium transition ${activeTopic === topic ? topicTone[topic] : 'bg-white/80 text-slate-600 hover:border-blue-200 hover:text-[#2563EB]'}`}>
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 space-y-5">
                {discussions.map((item) => (
                  <article key={item.id} className="flex min-h-[174px] items-center gap-5 rounded-[20px] border border-white/85 bg-white/72 p-2 shadow-[0_5px_18px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                    <div className="flex h-[158px] w-[158px] shrink-0 items-center justify-center rounded-[18px] border border-blue-100 bg-[#EAF6FF]">
                      <div className="relative h-14 w-12">
                        <div className="absolute left-3 top-0 h-10 w-7 rounded-[7px] bg-[#2563EB] shadow-sm">
                          <div className="absolute left-2 top-2 h-1.5 w-3 rounded-full bg-white/90" />
                          <div className="absolute left-2 top-5 h-1.5 w-3 rounded-full bg-white/70" />
                        </div>
                        <div className="absolute bottom-1 left-0 h-3 w-12 -rotate-[12deg] rounded-full bg-[#F5C78A]" />
                        <div className="absolute bottom-0 right-1 h-4 w-2 rounded-full bg-[#EF4444]" />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 py-2 pr-3">
                      <div className="flex items-start justify-between gap-4">
                        <span className="rounded-[7px] border border-blue-100 bg-blue-50 px-3 py-1 text-[12px] font-semibold text-[#2563EB]">{item.topic}</span>
                        <button type="button" className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-[12px] font-semibold text-[#2563EB]">View Discussion <FaArrowRight /></button>
                      </div>
                      <h3 className="mt-3 text-[20px] font-bold leading-snug text-[#0F172A]">{item.title}</h3>
                      <div className="mt-4 flex flex-wrap items-center gap-5 text-[13px] text-[#64748B]">
                        <span className="flex items-center gap-1.5"><FaComments /> {item.replies} replies</span>
                        <span className="flex items-center gap-1.5"><FaHeart /> {item.helpful} helpful</span>
                        <span>{item.time}</span>
                      </div>
                      <div className="mt-3 flex items-center">
                        <div className="flex -space-x-2">
                          {item.avatars.map((avatar, index) => <span key={`${item.id}-${index}`} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[11px] font-bold text-[#2563EB]">{avatar}</span>)}
                        </div>
                        <span className="ml-3 text-[13px] text-[#64748B]">+{item.discussing} people discussing</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>


          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
