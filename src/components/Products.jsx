import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { productsData } from '../data/productsData';
import { ProductModal } from './ProductModal';
import { createProductWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare, Eye, ChevronRight } from 'lucide-react';

export const Products = () => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', label: t('products.all') },
    { id: 'granulated', label: t('products.granulated') },
    { id: 'powder', label: t('products.powder') },
    { id: 'block', label: t('products.block') },
    { id: 'liquid', label: t('products.liquid') },
  ];

  const filteredProducts = activeCategory === 'all'
    ? productsData
    : productsData.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="concept-section concept-products py-20 lg:py-28 bg-[#F8F5EF]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-[#3b6754] tracking-wider uppercase">
            {t('products.eyebrow')}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#00261d] mt-2">
            {t('products.title')}
          </h2>
          <p className="text-base text-[#414845] mt-3 leading-relaxed">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#c1c8c4]/30">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#183c32] text-[#F8F5EF] shadow-xs'
                  : 'bg-white text-[#414845] hover:bg-[#E8DCC8]/50 border border-[#c1c8c4]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => {
            const productName = lang === 'id' ? product.nameId : product.nameEn;
            const productDesc = lang === 'id' ? product.shortDescId : product.shortDescEn;

            return (
              <div
                key={product.id}
                className="concept-product-card bg-white rounded-2xl p-7 flex flex-col justify-between border border-[#c1c8c4]/30 hover:-translate-y-1 transition duration-300 shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Photo Container */}
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#edeee9] mb-6 relative group">
                    <img
                      src={product.image}
                      alt={productName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#E8DCC8] text-[#00261d] px-3 py-1 rounded text-[11px] font-bold">
                      {lang === 'id' ? product.gradeId : product.gradeEn}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#414845] mb-2 font-medium">
                    <span>{t('products.hsCode')}: {product.hsCode}</span>
                    <span className="text-[#3b6754] font-semibold">Verified Export Spec</span>
                  </div>

                  <h3 className="font-headline text-xl sm:text-2xl font-semibold text-[#00261d] mb-2">
                    {productName}
                  </h3>

                  <p className="text-sm text-[#414845] leading-relaxed mb-6">
                    {productDesc}
                  </p>

                  {/* Tech Specs 2-col matrix */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-[#E8DCC8]/80 mb-6 text-xs">
                    <div>
                      <span className="text-[#414845] block">{t('products.mesh')}</span>
                      <span className="font-bold text-[#00261d]">
                        {lang === 'id' ? product.specs.meshId : product.specs.meshEn}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#414845] block">{t('products.moisture')}</span>
                      <span className="font-bold text-[#00261d]">
                        {lang === 'id' ? product.specs.moistureId : product.specs.moistureEn}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#414845] block">{t('products.purity')}</span>
                      <span className="font-bold text-[#00261d]">
                        {lang === 'id' ? product.specs.purityId : product.specs.purityEn}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#414845] block">{t('products.packaging')}</span>
                      <span className="font-bold text-[#00261d]">
                        {lang === 'id' ? product.specs.packagingId : product.specs.packagingEn}
                      </span>
                    </div>
                  </div>

                  {/* Application Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f8faf5] text-[#414845] px-2.5 py-1 rounded text-xs font-medium border border-[#c1c8c4]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E8DCC8]/60 hover:bg-[#E8DCC8] text-[#00261d] py-3 rounded-lg text-xs sm:text-sm font-semibold transition-colors border border-[#c1c8c4]/30"
                  >
                    <Eye className="w-4 h-4 text-[#3b6754]" />
                    <span>{t('products.viewSpecs')}</span>
                  </button>

                  <a
                    href={createProductWhatsAppLink(productName, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#183c32] hover:bg-[#3b6754] text-[#F8F5EF] py-3 rounded-lg text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>{t('products.discussWa')}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Specification Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
