import React from 'react';
import { FaBell, FaChevronDown, FaHeart, FaPlus } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import doctorImg from '../assets/doctor.webp';

const glass = 'border border-white/80 bg-white/58 backdrop-blur-[18px] backdrop-saturate-150 shadow-[0_8px_28px_rgba(31,70,120,0.07)]';

export default function TopBar() {
  return (
    <header className="relative z-50 pt-[10px]">
      <div className="mx-auto flex h-[82px] w-[calc(100%-120px)] items-center justify-between md:w-[calc(100%-64px)] sm:h-[70px] sm:w-[calc(100%-40px)]">
        <div className="flex items-center gap-3">
          <div className="relative flex h-[48px] w-[48px] items-center justify-center text-[#2563EB] sm:h-[42px] sm:w-[42px]">
            <FaHeart className="absolute text-[47px] sm:text-[41px]" aria-hidden="true" />
            <FaPlus className="relative z-10 text-[21px] text-[#EC4899] sm:text-[18px]" aria-hidden="true" />
          </div>
          <div>
            <div className="text-[25px] font-extrabold leading-none tracking-[-0.7px] text-[#1A2250] sm:text-[20px]">
              MediCare<span className="text-[#EC4899]">+</span>
            </div>
            <div className="mt-1 text-[11px] font-medium text-[#64748B] sm:text-[9px]">Care. Connect. Better Health.</div>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-2">
          <button
            type="button"
            className={`${glass} hidden h-[48px] items-center gap-2 rounded-full px-5 text-[14px] font-semibold text-[#1A2250] md:flex`}
            aria-label="Change location"
          >
            <MdLocationOn className="text-[20px] text-[#2563EB]" />
            New Delhi, India
            <FaChevronDown className="text-[9px] text-[#334155]" />
          </button>

          <button
            type="button"
            className={`${glass} relative flex h-[48px] w-[48px] items-center justify-center rounded-full text-[#1A2250] sm:h-[42px] sm:w-[42px]`}
            aria-label="Notifications"
          >
            <FaBell className="text-[18px]" />
            <span className="absolute right-[-2px] top-[-3px] flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#EF4444] px-1 text-[10px] font-bold text-white">
              3
            </span>
          </button>

          <button type="button" className={`${glass} flex h-[48px] items-center gap-2 rounded-full pl-1.5 pr-4 sm:h-[42px] sm:pr-3`} aria-label="Open profile menu">
            <img src={doctorImg} alt="Tasreen profile" className="h-[40px] w-[40px] rounded-full border border-white object-cover object-top shadow-sm sm:h-[34px] sm:w-[34px]" />
            <span className="hidden text-[14px] font-bold text-[#1A2250] sm:inline">Tasreen</span>
            <FaChevronDown className="text-[9px] text-[#1A2250]" />
          </button>
        </div>
      </div>
    </header>
  );
}
