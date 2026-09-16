import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, ShieldCheck, Cpu, MessageCircle, RefreshCw } from 'lucide-react';

export const Company = () => {
  const { t } = useLanguage();

  return (
    <section id="company" className="py-20 lg:py-28 bg-[#f8faf5]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Origin Photography & Location Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl bg-[#E8DCC8]/40 p-2.5 border border-[#c1c8c4]/30">
              <div className="rounded-xl overflow-hidden aspect-[4/5] bg-[#edeee9]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs0PGBQtVhJPW_DZj8mBdflo0q6Zgtww4eJQeDy9XHlFW6qRqnogvUFKMwVDLxDL8jpU0LqmnaFh9e553SJfrNDsJh30DPbFyWg6RNKBWMU_FxlMQ43GBRxXe8tsLjW8rzQBl7RDI0SMAHceYAqVOHTRZ8S3KBVsMlIqlMAvKpMYDKA_muew_aVNai3oUdWVskeAprM38TZpB3s00oBQiT292QQQl2cIEYnDelH749nLpnefK9ehe8"
                  alt="Authentic Indonesian Palm Sugar Producer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Origin Location Pill */}
            <div className="mt-4 p-4 bg-white rounded-xl border border-[#c1c8c4]/30 flex items-center justify-between shadow-xs">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-[#3b6754] uppercase">{t('company.originLabel')}</span>
                <p className="text-sm font-semibold text-[#00261d] mt-0.5">{t('company.originValue')}</p>
              </div>
              <MapPin className="w-6 h-6 text-[#3b6754] shrink-0" />
            </div>
          </div>

          {/* Right Column: Company Story & 4 Pillars (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#3b6754] tracking-wider uppercase">
              <span className="material-symbols-outlined text-[#3b6754]">handshake</span>
              <span>{t('company.eyebrow')}</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#00261d]">
              {t('company.title')}
            </h2>

            <p className="text-base text-[#414845] leading-relaxed text-justify">
              {t('company.p1')}
            </p>

            <p className="text-base text-[#414845] leading-relaxed text-justify">
              {t('company.p2')}
            </p>

            {/* 4 Pillars Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-xl border border-[#c1c8c4]/30 hover:border-[#3b6754]/50 transition-colors shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#E8DCC8]/50 flex items-center justify-center mb-3 text-[#00261d]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-headline font-semibold text-base text-[#00261d] mb-1">
                  {t('company.pillars.p1Title')}
                </h3>
                <p className="text-xs text-[#414845] leading-relaxed">
                  {t('company.pillars.p1Desc')}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#c1c8c4]/30 hover:border-[#3b6754]/50 transition-colors shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#E8DCC8]/50 flex items-center justify-center mb-3 text-[#00261d]">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-headline font-semibold text-base text-[#00261d] mb-1">
                  {t('company.pillars.p2Title')}
                </h3>
                <p className="text-xs text-[#414845] leading-relaxed">
                  {t('company.pillars.p2Desc')}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#c1c8c4]/30 hover:border-[#3b6754]/50 transition-colors shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#E8DCC8]/50 flex items-center justify-center mb-3 text-[#00261d]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-headline font-semibold text-base text-[#00261d] mb-1">
                  {t('company.pillars.p3Title')}
                </h3>
                <p className="text-xs text-[#414845] leading-relaxed">
                  {t('company.pillars.p3Desc')}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#c1c8c4]/30 hover:border-[#3b6754]/50 transition-colors shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#E8DCC8]/50 flex items-center justify-center mb-3 text-[#00261d]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-headline font-semibold text-base text-[#00261d] mb-1">
                  {t('company.pillars.p4Title')}
                </h3>
                <p className="text-xs text-[#414845] leading-relaxed">
                  {t('company.pillars.p4Desc')}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
