import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { CheckCircle2, ArrowRight, Ship, Globe2, PackageCheck } from 'lucide-react';

export const GlobalBusiness = () => {
  const { lang, t } = useLanguage();

  const steps = t('export.steps');
  const logisticsItems = t('export.logisticsItems');

  return (
    <section id="export" className="concept-section concept-export py-20 lg:py-28 bg-[#F8F5EF]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: 5-Step Export Process (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-xs font-bold text-[#3b6754] tracking-wider uppercase">
              {t('export.eyebrow')}
            </span>

            <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#00261d]">
              {t('export.title')}
            </h2>

            <p className="text-base text-[#414845] leading-relaxed">
              {t('export.subtitle')}
            </p>

            {/* 5-Step List Cards */}
            <div className="space-y-3.5 pt-2">
              {Array.isArray(steps) && steps.map((st, idx) => (
                <div
                  key={idx}
                  className="concept-step p-4 bg-white rounded-xl border border-[#c1c8c4]/30 flex gap-4 items-start shadow-2xs hover:border-[#3b6754]/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E8DCC8] text-[#00261d] font-bold text-sm flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-headline font-semibold text-base text-[#00261d]">
                      {st.title}
                    </h3>
                    <p className="text-xs text-[#414845] leading-relaxed mt-0.5">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Export Destinations & Container Capacity (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Markets Matrix */}
            <div className="concept-market-panel bg-white p-6 lg:p-8 rounded-2xl border border-[#c1c8c4]/30 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Globe2 className="w-5 h-5 text-[#3b6754]" />
                <h3 className="font-headline text-xl font-semibold text-[#00261d]">
                  {t('export.destinationsTitle')}
                </h3>
              </div>
              
              <p className="text-xs text-[#414845] mb-5">
                {t('export.destinationsSubtitle')}
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-[#E8DCC8]/80">
                  <span className="font-bold text-[#00261d]">Asia-Pacific</span>
                  <span className="text-[#414845]">Japan, South Korea, Singapore, Taiwan, Malaysia</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#E8DCC8]/80">
                  <span className="font-bold text-[#00261d]">Europe</span>
                  <span className="text-[#414845]">Netherlands, Germany, UK, France</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#E8DCC8]/80">
                  <span className="font-bold text-[#00261d]">Middle East</span>
                  <span className="text-[#414845]">UAE, Saudi Arabia, Qatar</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#E8DCC8]/80">
                  <span className="font-bold text-[#00261d]">North America</span>
                  <span className="text-[#414845]">United States, Canada</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-bold text-[#00261d]">Oceania</span>
                  <span className="text-[#414845]">Australia, New Zealand</span>
                </div>
              </div>
            </div>

            {/* Container Capacities Card */}
            <div className="concept-logistics-panel bg-[#183c32] text-[#F8F5EF] p-6 lg:p-8 rounded-2xl shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Ship className="w-5 h-5 text-[#bdedd5]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#c4ebdc]">
                  LOGISTICS CAPACITY
                </span>
              </div>

              <h4 className="font-headline text-xl font-semibold text-[#F8F5EF] mb-4">
                {t('export.logisticsTitle')}
              </h4>

              <ul className="space-y-3 text-xs text-[#F8F5EF]/90">
                {Array.isArray(logisticsItems) && logisticsItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#bdedd5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-[#183c32]/60">
                <a
                  href={createWhatsAppLink(
                    lang === 'id'
                      ? 'Halo ARESSA GOLDEN FARM, saya ingin konsultasi estimasi ongkos kirim kontainer (FOB/CIF) untuk gula aren.'
                      : 'Hello ARESSA GOLDEN FARM, I would like to consult port-to-port ocean freight rates (FOB/CIF) for bulk palm sugar.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#F8F5EF] hover:text-[#bdedd5] transition-colors"
                >
                  <span>{t('export.calculateBtn')}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
