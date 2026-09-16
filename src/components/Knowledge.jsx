import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { articlesData } from '../data/articlesData';
import { ArticleModal } from './ArticleModal';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

export const Knowledge = () => {
  const { lang } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="knowledge" className="py-20 lg:py-28 bg-[#F8F5EF]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold text-[#3b6754] tracking-wider uppercase">
            {lang === 'id' ? 'WAWASAN & PENDIDIKAN B2B' : 'KNOWLEDGE & INDUSTRY INSIGHTS'}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#00261d] mt-2">
            {lang === 'id' ? 'Artikel Edukasi Gula Aren Indonesia' : 'Technical & Trade Insights'}
          </h2>
          <p className="text-base text-[#414845] mt-3 leading-relaxed">
            {lang === 'id'
              ? 'Pahami karakteristik gula aren, standar pengemasan ekspor, dan jaminan mutu industri.'
              : 'Explore the characteristics of palm sugar, oceanic packaging standards, and industrial B2B compliance.'}
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesData.map((art) => {
            const title = lang === 'id' ? art.titleId : art.titleEn;
            const category = lang === 'id' ? art.categoryId : art.categoryEn;
            const summary = lang === 'id' ? art.summaryId : art.summaryEn;

            return (
              <div
                key={art.id}
                className="bg-white rounded-2xl p-7 border border-[#c1c8c4]/30 flex flex-col justify-between hover:border-[#3b6754]/50 transition-all duration-300 shadow-xs hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-[#E8DCC8] text-[#00261d] px-3 py-1 rounded text-[11px] font-bold uppercase">
                      {category}
                    </span>
                    <span className="text-xs text-[#414845] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#3b6754]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-headline text-xl font-semibold text-[#00261d] mb-3 leading-tight">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#414845] leading-relaxed mb-6">
                    {summary}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedArticle(art)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#00261d] hover:text-[#3b6754] transition-colors pt-4 border-t border-[#E8DCC8]/80 w-fit"
                >
                  <BookOpen className="w-4 h-4 text-[#3b6754]" />
                  <span>{lang === 'id' ? 'Baca Artikel Selengkapnya' : 'Read Full Article'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Article Modal Reader */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
};
