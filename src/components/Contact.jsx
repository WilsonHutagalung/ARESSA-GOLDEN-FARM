import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createCustomRFQWhatsAppLink, createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare, Send, Clock, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const { lang, t } = useLanguage();

  const [rfqForm, setRfqForm] = useState({
    product: 'Organic Granulated Palm Sugar',
    volume: '20ft FCL Container (~15 MT)',
    incoterm: 'FOB Samarinda Port',
    destination: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRfqForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRfqSubmit = (e) => {
    e.preventDefault();
    const link = createCustomRFQWhatsAppLink(rfqForm, lang);
    window.open(link, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F5EF]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#183c32] rounded-3xl text-[#F8F5EF] p-8 lg:p-16 relative overflow-hidden shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Direct Info & Response Promise (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#c4ebdc] uppercase tracking-wider">
                {t('contact.eyebrow')}
              </span>

              <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#F8F5EF]">
                {t('contact.title')}
              </h2>

              <p className="text-sm sm:text-base text-[#F8F5EF]/90 max-w-xl leading-relaxed">
                {t('contact.subtitle')}
              </p>

              {/* Operational details */}
              <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#F8F5EF]/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3b6754]/40 flex items-center justify-center shrink-0 text-[#bdedd5]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>{t('contact.responseTime')}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3b6754]/40 flex items-center justify-center shrink-0 text-[#bdedd5]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{t('contact.emailLabel')}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3b6754]/40 flex items-center justify-center shrink-0 text-[#bdedd5]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{t('contact.portsLabel')}</span>
                </div>
              </div>

              {/* Direct Quick Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-[#183c32] font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm transition duration-200 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#183c32]" />
                  <span>{t('contact.waBtn')}</span>
                </a>

                <a
                  href="mailto:export@aressagoldenfarm.com?subject=B2B%20Palm%20Sugar%20Export%20Inquiry"
                  className="flex items-center justify-center gap-3 bg-[#F8F5EF]/10 hover:bg-[#F8F5EF]/20 text-[#F8F5EF] border border-[#F8F5EF]/20 font-semibold py-3.5 px-6 rounded-xl text-xs sm:text-sm transition duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('contact.emailBtn')}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive B2B RFQ Generator Form (6 Cols) */}
            <div className="lg:col-span-6 bg-white text-[#00261d] p-6 sm:p-8 rounded-2xl border border-[#c1c8c4]/30 shadow-lg">
              <h3 className="font-headline text-xl font-semibold text-[#00261d] mb-1">
                {lang === 'id' ? 'Formulir Permintaan Penawaran (RFQ)' : 'Interactive B2B RFQ Generator'}
              </h3>
              <p className="text-xs text-[#414845] mb-6">
                {lang === 'id'
                  ? 'Isi spesifikasi pesanan Anda di bawah untuk membuat draf penawaran resmi via WhatsApp.'
                  : 'Select your target specs below to generate a pre-formatted WhatsApp RFQ to our export desk.'}
              </p>

              <form onSubmit={handleRfqSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#00261d] mb-1">
                    {lang === 'id' ? 'Varian Produk' : 'Product Grade'}
                  </label>
                  <select
                    name="product"
                    value={rfqForm.product}
                    onChange={handleInputChange}
                    className="w-full p-2.5 bg-[#f8faf5] border border-[#c1c8c4]/40 rounded-lg text-[#00261d] focus:outline-none focus:border-[#3b6754]"
                  >
                    <option value="Organic Granulated Palm Sugar (Gula Semut)">Organic Granulated Palm Sugar (Gula Semut 14-16 Mesh)</option>
                    <option value="Organic Finely Milled Palm Sugar Powder">Organic Finely Milled Palm Sugar Powder (40-60 Mesh)</option>
                    <option value="Traditional Palm Sugar Blocks (Gula Cetak)">Traditional Palm Sugar Blocks (Gula Cetak)</option>
                    <option value="Pure Liquid Palm Sugar Syrup (75-80° Brix)">Pure Liquid Palm Sugar Syrup (75-80° Brix)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#00261d] mb-1">
                      {lang === 'id' ? 'Estimasi Volume / Kuantitas' : 'Estimated Volume'}
                    </label>
                    <select
                      name="volume"
                      value={rfqForm.volume}
                      onChange={handleInputChange}
                      className="w-full p-2.5 bg-[#f8faf5] border border-[#c1c8c4]/40 rounded-lg text-[#00261d] focus:outline-none focus:border-[#3b6754]"
                    >
                      <option value="20ft FCL Container (~15 MT)">20ft FCL Container (~15 MT)</option>
                      <option value="40ft FCL Container (~25 MT)">40ft FCL Container (~25 MT)</option>
                      <option value="LCL Kargo (1 - 5 MT)">LCL Cargo (1 - 5 MT)</option>
                      <option value="Sampel Evaluasi (500g - 1kg)">Evaluation Sample (500g - 1kg)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#00261d] mb-1">
                      {lang === 'id' ? 'Syarat Pengiriman (Incoterms)' : 'Incoterms'}
                    </label>
                    <select
                      name="incoterm"
                      value={rfqForm.incoterm}
                      onChange={handleInputChange}
                      className="w-full p-2.5 bg-[#f8faf5] border border-[#c1c8c4]/40 rounded-lg text-[#00261d] focus:outline-none focus:border-[#3b6754]"
                    >
                      <option value="FOB Samarinda Port">
                        {lang === 'id' ? 'FOB Pelabuhan Samarinda' : 'FOB Samarinda Port'}
                      </option>
                      <option value="CIF Destination Port">CIF Destination Port</option>
                      <option value="CFR Destination Port">CFR Destination Port</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#00261d] mb-1">
                    {lang === 'id' ? 'Pelabuhan / Negara Tujuan' : 'Destination Port & Country'}
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={rfqForm.destination}
                    onChange={handleInputChange}
                    placeholder={lang === 'id' ? 'misal: Port of Rotterdam, Belanda / Singapura' : 'e.g. Port of Rotterdam, Netherlands / Singapore'}
                    className="w-full p-2.5 bg-[#f8faf5] border border-[#c1c8c4]/40 rounded-lg text-[#00261d] focus:outline-none focus:border-[#3b6754]"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#00261d] mb-1">
                    {lang === 'id' ? 'Catatan Kebutuhan Khusus (Opsional)' : 'Special Requirements (Optional)'}
                  </label>
                  <textarea
                    name="notes"
                    rows="2"
                    value={rfqForm.notes}
                    onChange={handleInputChange}
                    placeholder={lang === 'id' ? 'misal: Perlu sampel air mail express atau kemasan private label 500g' : 'e.g. Request 500g express sample or private label 1kg retail pouch'}
                    className="w-full p-2.5 bg-[#f8faf5] border border-[#c1c8c4]/40 rounded-lg text-[#00261d] focus:outline-none focus:border-[#3b6754]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#183c32] hover:bg-[#3b6754] text-[#F8F5EF] font-bold py-3 rounded-xl transition duration-200 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>{lang === 'id' ? 'Kirim RFQ via WhatsApp' : 'Submit RFQ via WhatsApp'}</span>
                </button>
              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
