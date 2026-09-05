import React from 'react';
import { FaTint } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const tone = {
  red: {
    text: 'text-[#EF4444]',
    bg: 'bg-[#FFF1F2]',
  },
};

export default function BloodSupport() {
  return (
    <section id="blood-support" className="w-full px-[60px] lg:px-[60px] md:px-[32px] sm:px-[20px] mt-[64px]">
      <div className="relative mx-auto max-w-none overflow-hidden rounded-[18px] border border-[#F9A8B4] bg-[rgba(255,248,250,0.72)] px-[56px] py-[42px] shadow-[0_8px_30px_rgba(30,64,175,0.08)] backdrop-blur-[18px]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.50),rgba(238,242,255,0.20)_55%,rgba(255,255,255,0.32))]" />

        <div className="relative grid grid-cols-[minmax(0,1fr)_472px] items-center gap-[54px]">
          <div>
            <p className="mb-[10px] text-[13px] font-extrabold tracking-[1.6px] text-[#FF3D61]">
              BLOOD SUPPORT
            </p>

            <h2 className="text-[34px] font-extrabold leading-[1.15] tracking-[-0.8px] text-[#101A38]">
              Need blood or want to help someone?
            </h2>

            <p className="mt-[14px] max-w-[780px] text-[18px] leading-[1.5] text-[#64748B]">
              Find verified blood resources nearby or register as a donor and help when you can.
            </p>

            <div className="mt-[30px] flex items-center gap-[16px]">
              <button
                type="button"
                className="inline-flex h-[50px] items-center gap-[12px] rounded-[16px] bg-[#FF3D61] px-[27px] text-[16px] font-extrabold text-white shadow-[0_8px_18px_rgba(255,61,97,0.18)] transition hover:-translate-y-[1px] hover:bg-[#F52F55]"
              >
                Find Blood
                <MdArrowForward className="text-[24px]" />
              </button>

              <button
                type="button"
                className="inline-flex h-[50px] items-center rounded-[16px] border border-[#E2E8F0] bg-white/90 px-[28px] text-[16px] font-extrabold text-[#17213F] shadow-[0_4px_14px_rgba(15,23,42,0.07)] backdrop-blur-[10px] transition hover:-translate-y-[1px] hover:border-[#CBD5E1]"
              >
                Become a Donor
              </button>
            </div>
          </div>

          <div className="rounded-[18px] border border-[#FF5B72] bg-white/90 p-[28px] shadow-[0_6px_18px_rgba(15,23,42,0.05)] backdrop-blur-[12px]">
            <div className="flex items-center gap-[18px]">
              <div className={`flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[18px] ${tone.red.bg}`}>
                <FaTint className={`text-[27px] ${tone.red.text}`} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-bold uppercase tracking-[1px] text-[#94A3B8]">
                  NEARBY REQUEST
                </p>
                <h3 className="mt-[3px] text-[18px] font-extrabold leading-[1.2] text-[#14203F]">
                  O+ Blood Request
                </h3>
                <p className="mt-[4px] text-[14px] text-[#94A3B8]">
                  Max Healthcare · 4.2 km away
                </p>
              </div>

              <button
                type="button"
                className="shrink-0 rounded-[14px] border border-[#E2E8F0] bg-white px-[19px] py-[8px] text-[14px] font-bold text-[#2563EB] shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition hover:border-[#BFDBFE] hover:bg-[#EFF6FF]"
              >
                View
              </button>
            </div>

            <div className="mt-[14px] pl-[82px]">
              <span className="inline-flex rounded-[7px] bg-[#FFE4E8] px-[11px] py-[4px] text-[12px] font-extrabold text-[#FF3D61]">
                Urgent
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
