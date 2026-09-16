import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronUp } from 'lucide-react';

export const Footer = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#00261d] text-[#F8F5EF] border-t border-[#183c32]">
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1320px] mx-auto py-16 lg:py-24 flex flex-col justify-between">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#183c32]">
          
          {/* Brand & Legal Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-11 h-11 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="/aressa-logo.png"
                  alt="PT ARESSA GOLDEN FARM"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-headline font-semibold text-lg text-[#C39225] leading-tight">
                  ARESSA GOLDEN FARM
                </div>
                <div className="text-[10px] font-bold text-[#E3B94D] tracking-wider uppercase">
                  PT ARESSA GOLDEN FARM
                </div>
              </div>
            </div>

            <p className="text-xs text-[#F8F5EF]/80 leading-relaxed">
              {t('footer.companyDesc')}
            </p>

            <div className="text-[11px] text-[#F8F5EF]/60 pt-2 border-t border-[#183c32]">
              {t('footer.reg')}
            </div>
          </div>

          {/* Product Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3 text-xs">
            <div className="font-bold text-[#F8F5EF] tracking-wider uppercase">
              {lang === 'id' ? 'PRODUK EKSPOR' : 'EXPORT PRODUCTS'}
            </div>
            <ul className="space-y-2 text-[#F8F5EF]/80">
              <li><a href="#products" className="hover:text-[#bdedd5] transition-colors">Granulated Palm Sugar (Gula Semut)</a></li>
              <li><a href="#products" className="hover:text-[#bdedd5] transition-colors">Finely Milled Palm Sugar Powder</a></li>
              <li><a href="#products" className="hover:text-[#bdedd5] transition-colors">Traditional Palm Sugar Blocks (Gula Cetak)</a></li>
              <li><a href="#products" className="hover:text-[#bdedd5] transition-colors">Liquid Palm Sugar Syrup (75-80° Brix)</a></li>
            </ul>
          </div>

          {/* Trade & Quality Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3 text-xs">
            <div className="font-bold text-[#F8F5EF] tracking-wider uppercase">
              {lang === 'id' ? 'PERDAGANGAN & KUALITAS' : 'TRADE & QUALITY'}
            </div>
            <ul className="space-y-2 text-[#F8F5EF]/80">
              <li><a href="#quality" className="hover:text-[#bdedd5] transition-colors">{t('nav.quality')}</a></li>
              <li><a href="#company" className="hover:text-[#bdedd5] transition-colors">{t('company.originLabel')}</a></li>
              <li><a href="#contact" className="hover:text-[#bdedd5] transition-colors">{lang === 'id' ? 'Permintaan Sampel Evaluasi' : 'Request Evaluation Samples'}</a></li>
              <li><a href="#export" className="hover:text-[#bdedd5] transition-colors">{t('nav.globalBusiness')}</a></li>
              <li><a href="#faq" className="hover:text-[#bdedd5] transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          {/* Operational Hubs (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-3 text-xs">
            <div className="font-bold text-[#F8F5EF] tracking-wider uppercase">
              {lang === 'id' ? 'OPERASIONAL' : 'OPERATIONS'}
            </div>
            <div className="text-[#F8F5EF]/80 space-y-2">
              <div>
                <span className="text-[#F8F5EF] font-semibold block">{lang === 'id' ? 'Pusat Asal:' : 'Origin Hubs:'}</span>
                {lang === 'id' ? 'Samarinda, Kalimantan Timur' : 'Samarinda, East Kalimantan'}
              </div>
              <div>
                <span className="text-[#F8F5EF] font-semibold block">{lang === 'id' ? 'Pelabuhan Muat:' : 'Seaports:'}</span>
                {lang === 'id' ? 'Pelabuhan Samarinda' : 'Samarinda Port'}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F8F5EF]/60 gap-4">
          <div>{t('footer.rights')}</div>
          <div className="flex items-center gap-6">
            <a href="#company" className="hover:text-[#F8F5EF] transition-colors flex items-center gap-1">
              <span>{t('footer.backToTop')}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
