import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Coffee, Utensils, Wheat, ChefHat } from 'lucide-react';

export const Applications = () => {
  const { lang, t } = useLanguage();

  const appItems = [
    {
      icon: Coffee,
      titleEn: "Specialty Coffee & Syrups",
      titleId: "Kedai Kopi Spesialis & Sirup",
      descEn: "The authentic choice for Indonesian Kopi Susu Gula Aren, artisanal cold brews, flavored latte syrups, and commercial tea concentrates.",
      descId: "Pilihan utama Kopi Susu Gula Aren khas Indonesia, cold brew artisanal, sirup perisa latte, dan konsentrat teh commercial.",
      recommendEn: "Recommended: Granulated 16 Mesh / Nectar 75° Brix",
      recommendId: "Rekomendasi: Gula Semut 16 Mesh / Nira Cair 75° Brix"
    },
    {
      icon: Wheat,
      titleEn: "Artisan Bakery & Chocolate",
      titleId: "Industri Roti & Olahan Cokelat",
      descEn: "Provides subtle butterscotch complexity to sourdough loaves, artisan cookies, dark chocolate bars, and traditional European pastry crusts.",
      descId: "Memberikan kelezatan butterscotch alami pada kue kering, roti sourdough, cokelat hitam cair, dan kulit pastry berkelas.",
      recommendEn: "Recommended: Finely Milled Powder / Granulated",
      recommendId: "Rekomendasi: Bubuk Mikro Halus / Gula Semut"
    },
    {
      icon: Utensils,
      titleEn: "Healthy Snacks & Granola",
      titleId: "Cemilan Sehat & Sereal Granola",
      descEn: "Low GI alternative to cane sugar. Creates crisp, natural caramel glazes on roasted nuts, protein bars, energy clusters, and dried fruit mixes.",
      descId: "Alternatif pemanis alami berindeks glikemik rendah. Membentuk lapisan karamel renyah pada kacang panggang, protein bar, dan sereal.",
      recommendEn: "Recommended: Granulated 14 Mesh",
      recommendId: "Rekomendasi: Gula Semut 14 Mesh"
    },
    {
      icon: ChefHat,
      titleEn: "Savory Glazes & Marinades",
      titleId: "Bumbu Marinasi & Saus Gurih",
      descEn: "The essential base for authentic Southeast Asian sweet soy sauce (Kecap Manis), satay marinades, BBQ glazes, and ready-to-eat seasoning packs.",
      descId: "Bahan utama pembuatan kecap manis manis-gurih khas Asia, bumbu sate, saus BBQ panggang, dan kemasan bumbu siap pakai.",
      recommendEn: "Recommended: Palm Sugar Blocks / Liquid Nectar",
      recommendId: "Rekomendasi: Gula Aren Cetak / Nira Cair"
    }
  ];

  return (
    <section id="applications" className="py-20 lg:py-28 bg-[#f8faf5]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold text-[#3b6754] tracking-wider uppercase">
            {t('applications.eyebrow')}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#00261d] mt-2">
            {t('applications.title')}
          </h2>
          <p className="text-base text-[#414845] mt-3 leading-relaxed">
            {t('applications.subtitle')}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#c1c8c4]/30 flex flex-col justify-between hover:border-[#3b6754]/50 transition-all duration-300 shadow-xs hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E8DCC8]/50 text-[#00261d] flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 text-[#3b6754]" />
                  </div>
                  <h3 className="font-headline font-semibold text-lg text-[#00261d] mb-2">
                    {lang === 'id' ? item.titleId : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#414845] leading-relaxed">
                    {lang === 'id' ? item.descId : item.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DCC8] text-xs font-bold text-[#3b6754]">
                  {lang === 'id' ? item.recommendId : item.recommendEn}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
