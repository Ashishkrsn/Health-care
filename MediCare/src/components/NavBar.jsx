import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { navLinks } from '../data/content';

const glass = 'border border-white/80 bg-white/60 backdrop-blur-[18px] backdrop-saturate-150 shadow-[0_10px_30px_rgba(31,70,120,0.08)]';

export default function NavBar() {
  const [active, setActive] = useState('Home');

  return (
    <nav className="relative z-40 px-0">
      <div className={`${glass} mx-auto flex min-h-[70px] w-[calc(100%-120px)] max-w-none md:w-[calc(100%-64px)] sm:w-[calc(100%-40px)] items-center gap-4 rounded-[28px] p-2.5 sm:min-h-[58px] sm:rounded-[22px] sm:p-2`}>
        <div className="flex min-w-0 flex-1 items-center justify-between gap-1 overflow-x-auto scrollbar-none">
          {navLinks.map(({ label, icon: Icon }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActive(label)}
                className={`relative flex h-[50px] shrink-0 items-center justify-center gap-2 rounded-full px-4 text-[15px] font-semibold transition-all duration-200 sm:h-[42px] sm:px-3 sm:text-[12px] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2D8CFF] to-[#6B5CF6] text-white shadow-[0_8px_18px_rgba(37,99,235,0.20)]'
                    : 'text-[#334155] hover:bg-white/65 hover:text-[#2563EB]'
                }`}
              >
                <Icon className="text-[17px] sm:text-[14px]" aria-hidden="true" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="flex h-[50px] shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#F43F5E] to-[#E11D48] px-6 text-[14px] font-extrabold text-white shadow-[0_10px_24px_rgba(225,29,72,0.22)] transition hover:brightness-95 sm:h-[42px] sm:px-4 sm:text-[11px]"
          aria-label="Emergency SOS"
        >
          <FaPhoneAlt className="text-[13px] sm:text-[11px]" aria-hidden="true" />
          <span>Emergency SOS</span>
        </button>
      </div>
    </nav>
  );
}
