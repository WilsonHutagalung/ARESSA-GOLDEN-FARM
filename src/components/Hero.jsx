import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare, Package, ShieldCheck, Globe, Leaf, Award, Sprout, HeartPulse, Ship } from 'lucide-react';


export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="concept-hero relative bg-[#F8F5EF] overflow-hidden pt-8 lg:pt-16 pb-16 lg:pb-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Hero Copy & Actions (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="concept-kicker inline-flex items-center gap-2 w-fit bg-[#E8DCC8]/70 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#00261d]">
            <span className="w-2 h-2 rounded-full bg-[#3b6754] animate-pulse"></span>
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="concept-hero-title font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00261d] tracking-tight leading-[1.18]">
            {t('hero.title')}
          </h1>

          <p className="text-base sm:text-lg text-[#414845] leading-relaxed max-w-2xl">
            {t('hero.subtitle')}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-3 bg-[#183c32] hover:bg-[#3b6754] text-[#F8F5EF] h-13 px-7 rounded-md font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
              <span>{t('hero.ctaPrimary')}</span>
            </a>

            <a
              href="#products"
              className="inline-flex justify-center items-center gap-2 border-[1.5px] border-[#3b6754] text-[#00261d] hover:bg-[#3b6754]/10 h-13 px-7 rounded-md font-semibold text-sm transition-colors duration-200"
            >
              <span>{t('hero.ctaSecondary')}</span>
            </a>
          </div>

          {/* Micro Trust Strip */}
          <div className="concept-trust-strip pt-4 flex flex-wrap items-center gap-6 text-xs font-semibold text-[#414845]">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#3b6754]">verified</span>
              <span>HACCP & Halal Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[#3b6754]">public</span>
              <span>Worldwide Container Logistics</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[#3b6754]">eco</span>
              <span>Sustainable Forest Sourcing</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Editorial Photography & Floating Spec Badge (5 Cols) */}
        <div className="lg:col-span-5 relative">
          <div className="concept-hero-media relative bg-[#E8DCC8]/40 p-3 rounded-2xl border border-[#c1c8c4]/30">
            <div className="overflow-hidden rounded-xl aspect-[4/5] bg-[#edeee9]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbuGrirAVSKi7y-6BBOXWCkU-7OL5KvmU61hTjyG94IGAsfcEcQ73EM8nS-a51M3-blI95S7l43xCSJZiL6YAhYHXQFcnRcs_QLdg9fBb0w2w_t2LC1if4KnMIDY_l7ANA9NUthT4SnTwDS2k7BDJDhElnEUlywinfMM1rGlC4HKA8HJWnqcGwZGJnsYFcM6GWwL_3Iq95RDNgF3BPkIfJcOIKkyMHcQZL6kW3jOZPyhnrrMoNnk7J"
                alt="Pure Indonesian Palm Sugar Crystals"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-700"
              />
            </div>

            {/* Floating Specification Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl border border-[#c1c8c4]/30 shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="material-symbols-outlined text-[#3b6754]">workspace_premium</span>
                <span className="font-semibold text-sm text-[#00261d]">{t('hero.guarantee')}</span>
              </div>
              <p className="text-xs text-[#414845] leading-relaxed">
                {t('hero.guaranteeDesc')}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Trust Stats Bar (4 Columns) */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 mt-16 lg:mt-20">
        <div className="concept-stat-grid bg-white rounded-xl p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border border-[#c1c8c4]/30 shadow-xs">
          
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#E8DCC8]/50 text-[#00261d] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">potted_plant</span>
            </div>
            <div>
              <div className="font-semibold text-sm text-[#00261d]">{t('hero.stats.pure')}</div>
              <div className="text-xs text-[#414845] mt-0.5">{t('hero.stats.pureSub')}</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#E8DCC8]/50 text-[#00261d] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">monitor_heart</span>
            </div>
            <div>
              <div className="font-semibold text-sm text-[#00261d]">{t('hero.stats.gi')}</div>
              <div className="text-xs text-[#414845] mt-0.5">{t('hero.stats.giSub')}</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#E8DCC8]/50 text-[#00261d] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">package_2</span>
            </div>
            <div>
              <div className="font-semibold text-sm text-[#00261d]">{t('hero.stats.packaging')}</div>
              <div className="text-xs text-[#414845] mt-0.5">{t('hero.stats.packagingSub')}</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#E8DCC8]/50 text-[#00261d] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">directions_boat</span>
            </div>
            <div>
              <div className="font-semibold text-sm text-[#00261d]">{t('hero.stats.logistics')}</div>
              <div className="text-xs text-[#414845] mt-0.5">{t('hero.stats.logisticsSub')}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
