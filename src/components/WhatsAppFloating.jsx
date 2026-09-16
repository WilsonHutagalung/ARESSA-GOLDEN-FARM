import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloating = () => {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={createWhatsAppLink(
          lang === 'id'
            ? 'Halo Export Specialist ARESSA GOLDEN FARM, saya sedang melihat katalog produk gula aren di website.'
            : 'Hello ARESSA GOLDEN FARM Export Desk, I am reviewing your palm sugar website catalog.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-white hover:bg-[#F8F5EF] text-[#00261d] border border-[#c1c8c4]/40 px-5 py-3 rounded-full shadow-xl transition-all duration-200 hover:-translate-y-1 group"
      >
        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-6 h-6 text-[#25D366] fill-[#25D366]/20" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-white animate-pulse"></span>
        </div>

        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-[#00261d] leading-tight group-hover:text-[#3b6754] transition-colors">
            {lang === 'id' ? 'Chat dengan Spesialis Ekspor' : 'Chat with Export Specialist'}
          </span>
          <span className="text-[10px] text-[#414845]">
            {lang === 'id' ? 'Online • Respon Cepat' : 'Online • Instant Reply'}
          </span>
        </div>
      </a>
    </div>
  );
};
