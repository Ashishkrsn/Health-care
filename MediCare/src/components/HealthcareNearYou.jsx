import React, { useMemo, useState } from 'react';
import { FaList, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { MdArrowForward, MdLocationOn } from 'react-icons/md';
import { SectionContainer } from './common/SectionTitle';
import { nearbyCategories, nearbyMapMarkers, nearbyProviders } from '../data/content';
import mapReference from '../assets/map-reference.webp';

const toneMap = {
  blue: { marker: 'bg-[#EFF6FF] text-[#2563EB]', dot: 'bg-[#2563EB]' },
  green: { marker: 'bg-[#ECFDF5] text-[#16A34A]', dot: 'bg-[#16A34A]' },
  orange: { marker: 'bg-[#FFF7ED] text-[#F97316]', dot: 'bg-[#F97316]' },
  red: { marker: 'bg-[#FFF1F2] text-[#EF4444]', dot: 'bg-[#EF4444]' },
  purple: { marker: 'bg-[#F5F3FF] text-[#7C3AED]', dot: 'bg-[#7C3AED]' },
};

export default function HealthcareNearYou() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Doctors');
  const [listView, setListView] = useState(false);

  const providers = useMemo(() => {
    const search = query.trim().toLowerCase();
    return nearbyProviders.filter((provider) => {
      const matchesCategory = provider.category === category;
      const matchesSearch = !search || [provider.name, provider.specialty, provider.distance, provider.availability]
        .join(' ')
        .toLowerCase()
        .includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  const scrollToMap = () => document.getElementById('healthcare-near-you-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <section className="mt-[80px]" aria-labelledby="healthcare-near-you-title">
      <SectionContainer>
        <div className="relative overflow-hidden rounded-[5px] bg-transparent">
          <div className="absolute -right-10 -top-20 h-44 w-44 rounded-full bg-[#DDEBFF]/55 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-20 left-0 h-40 w-52 rounded-full bg-[#EAF5FF]/70 blur-3xl" aria-hidden="true" />

          <div className="relative flex items-start justify-between gap-6 px-[4px]">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#2563EB]">Location-based care</p>
              <h2 id="healthcare-near-you-title" className="mt-[5px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.6px] text-[#111B35]">
                Healthcare near you
              </h2>
              <p className="mt-[6px] text-[14px] leading-[1.45] text-[#64748B]">
                Find care that is nearby, open, and available when you need it.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToMap}
              className="mt-[8px] inline-flex h-[40px] shrink-0 items-center gap-2 rounded-[10px] border border-[#D9E2F0] bg-white/76 px-[17px] text-[13px] font-bold text-[#2563EB] shadow-[0_4px_12px_rgba(31,61,114,0.10)] backdrop-blur-[12px] transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25"
            >
              View Map <MdArrowForward className="text-[17px]" />
            </button>
          </div>

          <div id="healthcare-near-you-map" className="relative mt-[38px] overflow-hidden rounded-[18px] border border-white/90 bg-white/68 shadow-[0_7px_22px_rgba(31,61,114,0.15)] backdrop-blur-xl">
            <div className="grid min-h-[518px] grid-cols-[1.04fr_0.96fr] lg:grid-cols-[1fr_1fr] md:grid-cols-1">
              <div className={`${listView ? 'hidden md:block' : ''} relative min-h-[460px] overflow-hidden bg-[#EFFAF8]`}>
                <div className="absolute inset-0 bg-[#EEF9F7]" />
                <img src={mapReference} alt="Nearby healthcare map" className="absolute inset-0 h-full w-full object-cover opacity-[0.26] mix-blend-multiply" />
                <div className="absolute -left-[12%] top-[24%] h-[3px] w-[88%] rotate-[27deg] rounded-full bg-white shadow-[0_1px_1px_rgba(148,163,184,0.35)]" />
                <div className="absolute -left-[8%] top-[57%] h-[3px] w-[105%] rotate-[24deg] rounded-full bg-white shadow-[0_1px_1px_rgba(148,163,184,0.35)]" />
                <div className="absolute left-[45%] -top-[8%] h-[120%] w-[3px] rotate-[-29deg] rounded-full bg-white shadow-[0_1px_1px_rgba(148,163,184,0.35)]" />
                <div className="absolute left-[51%] top-[42%] flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#DCEAFF]/65 shadow-[0_0_0_12px_rgba(219,234,254,0.34)]">
                  <div className="h-[18px] w-[18px] rounded-full border-[4px] border-white bg-[#2563EB] shadow-[0_3px_8px_rgba(37,99,235,0.25)]" />
                </div>

                {nearbyMapMarkers.map((marker) => {
                  const styles = toneMap[marker.tone];
                  const Icon = marker.icon;
                  return (
                    <div key={marker.id} className={`absolute flex h-[38px] w-[38px] items-center justify-center rounded-full ${styles.marker} border border-white/90 shadow-[0_5px_12px_rgba(31,61,114,0.10)]`} style={{ left: marker.x, top: marker.y }}>
                      <Icon className="text-[15px]" />
                    </div>
                  );
                })}

                <div className="absolute left-[50%] top-[47%] flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/90 bg-white/88 px-[11px] py-[7px] text-[11px] font-bold text-[#334155] shadow-[0_5px_12px_rgba(31,61,114,0.12)] backdrop-blur-md">
                  <MdLocationOn className="text-[15px] text-[#2563EB]" /> You
                </div>
              </div>

              <div className={`${listView ? 'md:col-span-1' : ''} min-w-0 bg-white/72 p-[30px] backdrop-blur-xl md:p-6 sm:p-5`}>
                <div className="flex h-[44px] items-center rounded-[10px] border border-[#D8E1ED] bg-white/72 px-[14px] shadow-[0_2px_8px_rgba(31,61,114,0.06)] backdrop-blur-md focus-within:ring-2 focus-within:ring-[#2563EB]/15">
                  <FaSearch className="mr-3 shrink-0 text-[14px] text-[#64748B]" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    aria-label="Search nearby healthcare providers"
                    placeholder="Search doctors, hospitals, pharmacies, blood banks..."
                    className="min-w-0 flex-1 bg-transparent text-[12px] text-[#1F2D46] outline-none placeholder:text-[#94A3B8]"
                  />
                </div>

                <div className="mt-[16px] flex items-center gap-[26px] border-b border-[#E8EDF4]">
                  {nearbyCategories.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setCategory(item.label)}
                      className={`relative pb-[11px] text-[12px] font-semibold transition ${category === item.label ? 'text-[#2563EB]' : 'text-[#64748B] hover:text-[#334155]'}`}
                    >
                      {item.label}
                      {category === item.label && <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] rounded-full bg-[#2563EB]" />}
                    </button>
                  ))}
                </div>

                <div className="mt-[8px]">
                  {providers.length > 0 ? providers.slice(0, 3).map((provider, index) => {
                    const styles = toneMap[provider.tone];
                    return (
                      <article key={provider.id} className={`flex items-center gap-3 border-b border-[#EDF1F6] py-[14px] ${index === 0 ? 'pt-[12px]' : ''}`}>
                        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#F0EAFF] text-[13px] font-bold text-[#6D28D9]">
                          {provider.initial}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1">
                            <h3 className="truncate text-[14px] font-bold text-[#17213A]">{provider.name}</h3>
                            <span className="inline-flex h-[13px] w-[13px] items-center justify-center rounded-full bg-[#2563EB] text-[8px] font-black text-white">✓</span>
                          </div>
                          <p className="mt-[3px] text-[11px] text-[#64748B]">
                            {provider.specialty} <span className="text-[#F59E0B]">• ★ {provider.rating}</span>
                          </p>
                          <p className="mt-[3px] text-[11px] text-[#64748B]">
                            <FaMapMarkerAlt className="mr-1 inline text-[9px]" />{provider.distance}
                            <span className="mx-1 text-[#CBD5E1]">•</span>
                            <span className="font-semibold text-[#16A34A]">{provider.availability}</span>
                          </p>
                        </div>
                        <button type="button" className="shrink-0 rounded-[9px] border border-[#DDE5F0] bg-white/80 px-[14px] py-[7px] text-[11px] font-semibold text-[#2563EB] shadow-[0_2px_6px_rgba(31,61,114,0.04)] hover:bg-white">
                          View
                        </button>
                      </article>
                    );
                  }) : (
                    <div className="flex min-h-[250px] items-center justify-center text-center text-[13px] text-[#64748B]">
                      No nearby care matches your search.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex min-h-[54px] items-center justify-between gap-4 border-t border-[#E2E8F0] bg-white/56 px-[22px] py-[9px] backdrop-blur-md md:flex-wrap">
              <div className="flex flex-wrap items-center gap-x-[22px] gap-y-2 text-[10px] font-medium text-[#334155]">
                <span className="inline-flex items-center gap-2"><span className="text-[#2563EB]">⌖</span> Doctors</span>
                <span className="inline-flex items-center gap-2"><span className="text-[#16A34A]">▥</span> Hospitals</span>
                <span className="inline-flex items-center gap-2"><span className="text-[#F97316]">⌕</span> Pharmacies</span>
                <span className="inline-flex items-center gap-2"><span className="text-[#EF4444]">♢</span> Blood Resources</span>
              </div>
              <button
                type="button"
                onClick={() => setListView((value) => !value)}
                className="inline-flex h-[34px] shrink-0 items-center gap-2 rounded-[10px] border border-[#DCE4EF] bg-white/80 px-[12px] text-[11px] font-semibold text-[#2563EB] shadow-[0_2px_7px_rgba(31,61,114,0.06)] backdrop-blur-md"
              >
                <FaList className="text-[11px]" /> {listView ? 'Map View' : 'List View'}
              </button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
