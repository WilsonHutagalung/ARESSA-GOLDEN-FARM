import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { faqData } from '../data/faqData';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

export const FAQ = () => {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqData.filter((item) => {
    const q = lang === 'id' ? item.qId : item.qEn;
    const a = lang === 'id' ? item.aId : item.aEn;
    const search = searchQuery.toLowerCase();
    return q.toLowerCase().includes(search) || a.toLowerCase().includes(search);
  });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f8faf5]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#3b6754] tracking-wider uppercase">
            {t('faq.eyebrow')}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#00261d] mt-2">
            {t('faq.title')}
          </h2>
          <p className="text-base text-[#414845] mt-3 leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#717975]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'id' ? 'Cari pertanyaan (misal: MOQ, Sampel, Sertifikat, Pelabuhan)...' : 'Search questions (e.g. MOQ, Samples, Certificates, Payment)...'}
            className="w-full pl-10 pr-4 py-3 bg-white border border-[#c1c8c4]/40 rounded-xl text-xs sm:text-sm text-[#00261d] focus:outline-none focus:border-[#3b6754] transition-colors shadow-2xs"
          />
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const question = lang === 'id' ? faq.qId : faq.qEn;
              const answer = lang === 'id' ? faq.aId : faq.aEn;

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-[#c1c8c4]/30 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-headline font-semibold text-[#00261d] text-base sm:text-lg">
                      {question}
                    </span>
                    <span className="p-1 rounded-full bg-[#E8DCC8]/40 text-[#3b6754] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#414845] leading-relaxed border-t border-[#E8DCC8]/60 pt-4">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-xs text-[#717975]">
              {lang === 'id' ? 'Tidak ada pertanyaan yang sesuai pencarian.' : 'No matching questions found.'}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
