import React from 'react';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdVolunteerActivism } from 'react-icons/md';
import { SectionContainer } from './common/SectionTitle';
import { volunteerOpportunities, volunteerCta, toneStyles } from '../data/content';

function AvatarGroup({ avatars, count }) {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <img key={`${avatar}-${index}`} src={avatar} alt="Volunteer" className="h-6 w-6 rounded-full border-2 border-white object-cover" />
        ))}
      </div>
      <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">+{count}</span>
    </div>
  );
}

export default function VolunteerOpportunities() {
  return (
    <section className="mt-[64px]">
      <SectionContainer>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-[22px] font-bold leading-tight text-[#1A2250]">10. Volunteer Opportunities</h2>
            <p className="mt-2 text-[14px] text-[#64748B]">Join hands to make a difference in someone&apos;s life.</p>
          </div>
          <button type="button" className="flex shrink-0 items-center gap-2 rounded-[5px] border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-[#2563EB]">
            View All Opportunities <FaArrowRight />
          </button>
        </div>

        <div className="mt-[40px] grid grid-cols-5 gap-6 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {volunteerOpportunities.map((item) => {
            const styles = toneStyles[item.tone];
            return (
              <article key={item.title} className="flex min-h-[328px] flex-col rounded-[5px] border border-gray-100 bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                <div className="flex gap-3">
                  <img src={item.image} alt={item.title} className="h-[110px] w-[88px] shrink-0 rounded-[5px] object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold leading-snug text-[#1A2250]">{item.title}</h3>
                    <div className="mt-3 space-y-2 text-[12px] text-[#64748B]">
                      <div className="flex items-center gap-2"><FaMapMarkerAlt className="shrink-0" />{item.distance}</div>
                      <div className="flex items-center gap-2"><FaCalendarAlt className="shrink-0" />{item.date}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3"><AvatarGroup avatars={item.avatars} count={item.count} /></div>
                <p className="mt-3 min-h-[42px] text-[13px] leading-relaxed text-[#64748B]">{item.description}</p>
                <span className={`mt-3 w-fit rounded-full px-2.5 py-1 text-[12px] font-medium ${styles.iconBg} ${styles.iconText}`}>{item.category}</span>
                <button type="button" className="mt-auto pt-4 flex h-[36px] w-full items-center justify-center rounded-[5px] border border-slate-200 bg-white text-[13px] font-semibold text-[#2563EB]">
                  View Details
                </button>
              </article>
            );
          })}

          <article className="flex min-h-[328px] flex-col items-center rounded-[5px] border border-green-100 bg-[#F0FDF4] p-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#16A34A] shadow-sm"><MdVolunteerActivism className="text-[32px]" /></div>
            <h3 className="mt-5 text-[16px] font-bold text-[#1A2250]">{volunteerCta.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[#64748B]">{volunteerCta.description}</p>
            <button type="button" className="mt-5 flex w-full items-center justify-center gap-2 rounded-[5px] bg-[#16A34A] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm">
              {volunteerCta.button} <FaArrowRight />
            </button>
            <p className="mt-4 text-[12px] text-[#64748B]">Already a volunteer?</p>
            <button type="button" className="mt-1 flex items-center gap-2 text-[13px] font-semibold text-[#16A34A]">View My Activities <FaArrowRight /></button>
          </article>
        </div>
      </SectionContainer>
    </section>
  );
}
