import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { Menu, X, MessageSquare, Globe } from 'lucide-react';

export const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#company', label: t('nav.company') },
    { href: '#products', label: t('nav.products') },
    { href: '#quality', label: t('nav.quality') },
    { href: '#export', label: t('nav.globalBusiness') },
    { href: '#applications', label: t('nav.applications') },
    { href: '#knowledge', label: t('nav.knowledge') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className={`concept-nav sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-sm border-b border-[#c1c8c4]/30 py-3'
        : 'bg-[#F8F5EF] border-b border-[#c1c8c4]/20 py-4'
    }`}>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-200">
            <img
              src="/aressa-logo.png"
              alt="ARESSA GOLDEN FARM"
              className="w-full h-full object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-semibold text-lg lg:text-xl text-[#C39225] leading-tight tracking-tight">
              ARESSA GOLDEN FARM
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm font-semibold text-[#414845]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#3b6754] transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Controls (Language & WhatsApp CTA) */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#00261d] bg-[#E8DCC8]/50 hover:bg-[#E8DCC8] px-3 py-1.5 rounded-md transition-colors border border-[#c1c8c4]/30"
            title="Switch Language (EN / ID)"
          >
            <Globe className="w-3.5 h-3.5 text-[#3b6754]" />
            <span className={lang === 'en' ? 'font-bold text-[#00261d]' : 'text-[#414845]'}>EN</span>
            <span className="text-[#717975]">|</span>
            <span className={lang === 'id' ? 'font-bold text-[#00261d]' : 'text-[#414845]'}>ID</span>
          </button>

          {/* Primary WhatsApp Action */}
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#183c32] hover:bg-[#3b6754] text-[#F8F5EF] px-4 py-2 rounded-md font-semibold text-xs transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>{t('nav.talkToUs')}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={toggleLanguage}
            className="sm:hidden flex items-center gap-1 text-xs font-bold text-[#00261d] bg-[#E8DCC8]/60 px-2.5 py-1.5 rounded-md"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#00261d] hover:bg-[#E8DCC8]/40 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F8F5EF] border-b border-[#c1c8c4]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-base text-[#00261d]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#3b6754] py-1 border-b border-[#E8DCC8]/40"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#183c32] text-[#F8F5EF] py-3 rounded-md font-semibold text-sm"
            >
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
              <span>{t('nav.whatsappUs')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
