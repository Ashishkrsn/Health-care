import React, { useState } from 'react';
import { MdGroups, MdSearch, MdArrowForward } from 'react-icons/md';
import { SectionContainer } from './common/SectionTitle';
import PillBadge from './common/PillBadge';
import { popularSearches } from '../data/content';
import doctorImg from '../assets/hero-doctor.png';

const glassSurface =
  'border border-white/80 bg-white/58 backdrop-blur-[18px] backdrop-saturate-150 shadow-[0_10px_30px_rgba(37,99,235,0.08)]';

export default function Hero() {
  const [query, setQuery] = useState('');

  return (
    <section className="hero-section relative isolate h-[540px] overflow-visible bg-transparent">
      <SectionContainer className="relative h-full">
        <div className="hero-inner relative h-full overflow-visible">
          <div className="hero-copy relative z-20 flex h-full w-[50%] min-w-0 flex-col items-start justify-start pt-[88px] pb-[22px] text-left md:h-auto md:w-full md:pt-[60px] md:pb-0 sm:pt-[34px]">
            <div className={`hero-trust mb-[36px] inline-flex items-center gap-3 self-start rounded-full px-[14px] py-[9px] text-[14px] font-semibold text-[#334155] ${glassSurface}`}>
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-white/90 bg-[#E9F5FF]/80 text-[#1591D8] shadow-[0_5px_16px_rgba(37,99,235,0.08)]">
                <MdGroups className="text-[22px]" aria-hidden="true" />
              </span>
              <span className="leading-[1.25] text-left">
                Trusted healthcare support<br />
                <span className="font-medium text-[#7185A2]">for a healthier tomorrow</span>
              </span>
            </div>

            <h1 className="hero-title max-w-[700px] text-left text-[68px] font-extrabold leading-[1.02] tracking-[-2.8px] text-[#0F172A] lg:text-[60px] md:text-[54px] sm:text-[42px] sm:tracking-[-1.5px]">
              Your Health,
              <br />
              <span className="bg-gradient-to-r from-[#F43F5E] via-[#F23D78] to-[#C92C91] bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>

            <p className="hero-description mt-[26px] max-w-[620px] text-left text-[19px] leading-[1.5] text-[#5D7595] lg:text-[17px] md:max-w-[640px] sm:mt-[18px] sm:text-[14px]">
              Find trusted healthcare, get guidance, book appointments<br className="hidden md:block" />
              and access support all in one place.
            </p>

            <div className={`hero-search relative mt-[38px] flex h-[64px] w-full max-w-[640px] items-center rounded-full p-[5px] pl-[28px] ${glassSurface} shadow-[0_12px_28px_rgba(37,99,235,0.10)] lg:mt-[30px] md:h-[62px] sm:mt-[24px] sm:h-[54px] sm:pl-[17px]`}>
              <MdSearch className="mr-[17px] shrink-0 text-[29px] text-[#8AA0BC] sm:mr-[8px] sm:text-[23px]" aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="min-w-0 flex-1 bg-transparent px-1 text-[16px] font-medium text-[#1A2250] outline-none placeholder:text-[#9AAEC5] sm:text-[12px]"
                placeholder="Search doctors, symptoms, medicines, hospitals..."
                aria-label="Search healthcare"
              />
              <button type="button" className="flex h-[54px] w-[70px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#3D6EF5] to-[#4968EA] text-white shadow-[0_7px_16px_rgba(37,99,235,0.20)] transition-transform hover:scale-[1.02] sm:h-[44px] sm:w-[54px]" aria-label="Search">
                <MdArrowForward className="text-[31px] sm:text-[24px]" aria-hidden="true" />
              </button>
            </div>

            <div className="hero-popular mt-[24px] flex flex-wrap items-center gap-[10px] self-start text-left sm:gap-[7px]">
              <span className="mr-[4px] text-[14px] font-bold text-[#1A2250] sm:text-[12px]">🔥 Popular searches:</span>
              {popularSearches.map((item) => (
                <PillBadge key={item} className="border-[#9DB2CC] bg-white/35 px-[15px] py-[7px] text-[13px] font-medium text-[#425A78] backdrop-blur-[10px] shadow-none sm:px-[11px] sm:py-[5px] sm:text-[11px]">
                  {item}
                </PillBadge>
              ))}
            </div>
          </div>

          <div className="hero-doctor-wrap pointer-events-none absolute inset-0 z-10 overflow-visible">
            <img
              src={doctorImg}
              alt="Healthcare professional"
              className="hero-doctor absolute top-[42px] right-[0] h-[468px] w-[560px] max-w-[50%] rounded-[14px] object-cover object-center shadow-[0_14px_34px_rgba(37,99,235,0.10)] lg:h-[438px] lg:w-[525px] md:top-[36px] md:right-[-4px] md:h-[390px] md:w-[470px] md:max-w-[48%] sm:top-[24px] sm:right-[-12px] sm:h-[300px] sm:w-[360px] sm:max-w-[52%]"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
