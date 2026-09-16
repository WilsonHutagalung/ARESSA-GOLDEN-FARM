import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle } from 'lucide-react';

export const Quality = () => {
  const { t } = useLanguage();

  const steps = t('quality.steps');

  return (
    <section id="quality" className="py-20 lg:py-28 bg-[#f8faf5]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#3b6754] tracking-wider uppercase">
            {t('quality.eyebrow')}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#00261d] mt-2">
            {t('quality.title')}
          </h2>
          <p className="text-base text-[#414845] mt-4 leading-relaxed">
            {t('quality.subtitle')}
          </p>
        </div>

        {/* 6-Step Quality Workflow Chain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-16">
          {Array.isArray(steps) && steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-[#c1c8c4]/30 flex flex-col justify-between hover:border-[#3b6754]/60 transition-colors shadow-xs"
            >
              <div>
                <span className="font-headline text-xl font-bold text-[#3b6754] block">
                  {step.num}
                </span>
                <h3 className="font-headline font-semibold text-sm text-[#00261d] mt-2 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-[#414845] leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8DCC8] text-[11px] font-bold text-[#3b6754]">
                {step.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Certification & Compliance Banner */}
        <div className="bg-[#E8DCC8]/40 rounded-2xl p-8 border border-[#c1c8c4]/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-headline text-xl font-semibold text-[#00261d]">
                {t('quality.complianceTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-[#414845] mt-1">
                {t('quality.complianceSubtitle')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#414845]">
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-[#c1c8c4]/30 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#3b6754]" />
                <span>Halal Certified (BPJPH Indonesia)</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-[#c1c8c4]/30 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#3b6754]" />
                <span>HACCP Process Standard</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-[#c1c8c4]/30 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#3b6754]" />
                <span>Indonesian Phytosanitary</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-[#c1c8c4]/30 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#3b6754]" />
                <span>Non-GMO & Chemical Free</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
