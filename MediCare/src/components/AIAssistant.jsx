import React, { useState } from 'react';
import { MdAutoAwesome, MdArrowForward } from 'react-icons/md';
import { SectionContainer } from './common/SectionTitle';
import aiRobot from '../assets/ai-robot.webp';

const prompts = [
  'What doctor should I see?',
  'Explain this symptom',
  'Find care near me',
];

export default function AIAssistant() {
  const [query, setQuery] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const handlePrompt = (prompt) => {
    setSelectedPrompt(prompt);
    setQuery(prompt);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) return;
    setSelectedPrompt('');
  };

  return (
    <section className="mt-[80px]" aria-labelledby="ai-health-assistant-title">
      <SectionContainer>
        <div className="ai-assistant relative overflow-hidden rounded-[14px] border border-white/85 bg-white/42 shadow-[0_14px_40px_rgba(39,73,137,0.12)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/62 via-white/30 to-[#e8edff]/45" aria-hidden="true" />
          <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-[#c9e4ff]/25 blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#d9d0ff]/20 blur-3xl" aria-hidden="true" />

          <div className="relative grid min-h-[520px] grid-cols-[430px_1fr] items-center gap-[72px] px-[76px] py-[42px] xl:grid-cols-[390px_1fr] xl:gap-[60px] xl:px-[58px] lg:grid-cols-[330px_1fr] lg:gap-[44px] lg:px-[42px] md:grid-cols-1 md:gap-8 md:px-8 sm:px-5 sm:py-7">
            <div className="flex h-full items-center justify-center">
              <div className="ai-robot-frame relative flex h-[440px] w-[330px] items-end justify-center overflow-hidden rounded-t-[160px] border-[4px] border-white/90 bg-gradient-to-b from-[#e8f4ff]/58 via-[#dcecff]/50 to-[#c9defb]/72] shadow-[0_8px_26px_rgba(67,111,181,0.10)] backdrop-blur-md xl:h-[410px] xl:w-[310px] lg:h-[370px] lg:w-[280px] md:h-[330px] md:w-[250px]">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#b7d4f8]/30 to-transparent" aria-hidden="true" />
                <img
                  src={aiRobot}
                  alt="AI health assistant"
                  className="relative z-10 mb-2 h-[360px] w-auto max-w-[90%] object-contain drop-shadow-[0_12px_14px_rgba(42,77,130,0.12)] xl:h-[340px] lg:h-[305px] md:h-[270px]"
                />
                <div className="absolute bottom-7 h-6 w-[190px] rounded-full bg-[#7bb3f7]/20 blur-md" aria-hidden="true" />
              </div>
            </div>

            <div className="max-w-[900px] pb-2">
              <p className="text-[20px] font-bold uppercase tracking-[0.14em] text-[#6D28D9] lg:text-[18px]">AI Health Assistant</p>
              <h2 id="ai-health-assistant-title" className="mt-5 text-[56px] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#111B35] xl:text-[50px] lg:text-[44px] md:text-[38px] sm:text-[32px]">
                How can we help today?
              </h2>
              <p className="mt-6 max-w-[850px] text-[21px] leading-[1.55] text-[#6C7D98] xl:text-[19px] lg:text-[17px] md:text-[16px]">
                Ask a health question, understand a symptom, or find the right healthcare service.
              </p>
              <p className="mt-2 text-[20px] leading-[1.5] text-[#6C7D98] xl:text-[18px] lg:text-[16px] md:text-[15px]">
                AI provides general guidance — not a diagnosis.
              </p>

              <form onSubmit={handleSubmit} className="mt-10">
                <div className="flex h-[70px] items-center rounded-full border border-white/90 bg-white/72 p-1.5 pl-7 shadow-[0_5px_18px_rgba(80,91,148,0.16)] backdrop-blur-lg focus-within:ring-2 focus-within:ring-[#7C3AED]/20 lg:h-[64px] lg:pl-6">
                  <MdAutoAwesome className="mr-4 shrink-0 text-[23px] text-[#7C3AED]" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    aria-label="Describe your health concern"
                    placeholder="Describe your health concern..."
                    className="min-w-0 flex-1 bg-transparent text-[19px] text-[#1F2D46] outline-none placeholder:text-[#93A5BF] lg:text-[17px]"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-[58px] shrink-0 items-center justify-center rounded-full bg-[#6D28D9] px-9 text-[18px] font-bold text-white shadow-[0_5px_14px_rgba(109,40,217,0.22)] transition hover:bg-[#5B21B6] focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/30 lg:h-[52px] lg:px-7 lg:text-[16px]"
                  >
                    Ask AI
                  </button>
                </div>
              </form>

              <div className="mt-8 flex flex-wrap gap-4 lg:gap-3">
                {prompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handlePrompt(prompt)}
                    aria-pressed={selectedPrompt === prompt}
                    className={`inline-flex min-h-[50px] items-center rounded-full border px-6 text-[17px] font-medium transition focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 lg:min-h-[46px] lg:px-5 lg:text-[15px] ${selectedPrompt === prompt ? 'border-[#7C3AED]/40 bg-[#F5F3FF] text-[#6D28D9]' : 'border-white/90 bg-white/68 text-[#52627B] shadow-[0_4px_12px_rgba(57,75,116,0.10)] backdrop-blur-md hover:bg-white/82'}`}
                  >
                    {prompt}
                    {selectedPrompt === prompt && <MdArrowForward className="ml-2 text-[17px]" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
