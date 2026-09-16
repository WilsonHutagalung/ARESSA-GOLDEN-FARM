import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createProductWhatsAppLink } from '../utils/whatsapp';
import { X, CheckCircle2, Package, ShieldCheck, MessageSquare, FileText } from 'lucide-react';

export const ProductModal = ({ product, onClose }) => {
  const { lang, t } = useLanguage();

  if (!product) return null;

  const productName = lang === 'id' ? product.nameId : product.nameEn;
  const productDesc = lang === 'id' ? product.shortDescId : product.shortDescEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#F8F5EF] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#c1c8c4]/40 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#F8F5EF]/95 backdrop-blur-md px-6 py-4 border-b border-[#c1c8c4]/30 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="bg-[#E8DCC8] text-[#00261d] px-3 py-1 rounded-md text-xs font-bold">
              {lang === 'id' ? product.gradeId : product.gradeEn}
            </span>
            <span className="text-xs font-semibold text-[#414845]">
              HS Code: {product.hsCode}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#414845] hover:bg-[#E8DCC8]/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Image & Title */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-[#edeee9] border border-[#c1c8c4]/30">
              <img
                src={product.image}
                alt={productName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-2">
              <h3 className="font-headline text-2xl font-semibold text-[#00261d]">
                {productName}
              </h3>
              <p className="text-sm text-[#414845] leading-relaxed">
                {productDesc}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {product.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-[#414845] border border-[#c1c8c4]/30 px-2.5 py-1 rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Complete Technical Specifications Matrix */}
          <div className="bg-white p-5 rounded-xl border border-[#c1c8c4]/30 space-y-3">
            <h4 className="font-headline font-semibold text-base text-[#00261d] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#3b6754]" />
              <span>{lang === 'id' ? 'Spesifikasi Teknis & Kualitas' : 'Technical Specifications & Standards'}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-2.5 bg-[#f8faf5] rounded-lg border border-[#c1c8c4]/20">
                <span className="text-[#414845] block">{t('products.mesh')}</span>
                <span className="font-bold text-[#00261d]">
                  {lang === 'id' ? product.specs.meshId : product.specs.meshEn}
                </span>
              </div>

              <div className="p-2.5 bg-[#f8faf5] rounded-lg border border-[#c1c8c4]/20">
                <span className="text-[#414845] block">{t('products.moisture')}</span>
                <span className="font-bold text-[#00261d]">
                  {lang === 'id' ? product.specs.moistureId : product.specs.moistureEn}
                </span>
              </div>

              <div className="p-2.5 bg-[#f8faf5] rounded-lg border border-[#c1c8c4]/20">
                <span className="text-[#414845] block">{t('products.purity')}</span>
                <span className="font-bold text-[#00261d]">
                  {lang === 'id' ? product.specs.purityId : product.specs.purityEn}
                </span>
              </div>

              <div className="p-2.5 bg-[#f8faf5] rounded-lg border border-[#c1c8c4]/20">
                <span className="text-[#414845] block">{t('products.packaging')}</span>
                <span className="font-bold text-[#00261d]">
                  {lang === 'id' ? product.specs.packagingId : product.specs.packagingEn}
                </span>
              </div>

              <div className="p-2.5 bg-[#f8faf5] rounded-lg border border-[#c1c8c4]/20">
                <span className="text-[#414845] block">{lang === 'id' ? 'Masa Simpan (Shelf Life)' : 'Shelf Life'}</span>
                <span className="font-bold text-[#00261d]">
                  {lang === 'id' ? product.specs.shelfLifeId : product.specs.shelfLifeEn}
                </span>
              </div>

              <div className="p-2.5 bg-[#f8faf5] rounded-lg border border-[#c1c8c4]/20">
                <span className="text-[#414845] block">{lang === 'id' ? 'Konsentrasi Brix / Bentuk' : 'Brix / Form Concentration'}</span>
                <span className="font-bold text-[#00261d]">
                  {lang === 'id' ? product.specs.brixId : product.specs.brixEn}
                </span>
              </div>
            </div>
          </div>

          {/* Standard Certification Support */}
          <div className="bg-[#E8DCC8]/40 p-4 rounded-xl border border-[#c1c8c4]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#00261d] font-semibold">
              <ShieldCheck className="w-5 h-5 text-[#3b6754]" />
              <span>{lang === 'id' ? 'Sertifikat Analisis (COA) Dilampirkan di Setiap Pengiriman' : 'Certificate of Analysis (COA) Included Per Batch'}</span>
            </div>
            <div className="text-[#414845]">
              BPJPH Halal • HACCP Standard • Phytosanitary
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-[#F8F5EF] px-6 py-4 border-t border-[#c1c8c4]/30 flex flex-col sm:flex-row gap-3">
          <a
            href={createProductWhatsAppLink(productName, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#183c32] hover:bg-[#3b6754] text-[#F8F5EF] py-3 rounded-lg font-semibold text-sm transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>{t('products.discussWa')}</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-3 border border-[#3b6754] text-[#00261d] hover:bg-[#E8DCC8]/50 rounded-lg font-semibold text-sm transition-colors"
          >
            {lang === 'id' ? 'Tutup' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
