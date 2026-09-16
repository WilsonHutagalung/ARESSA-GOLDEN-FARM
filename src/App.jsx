import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Company } from './components/Company';
import { Products } from './components/Products';
import { Quality } from './components/Quality';
import { GlobalBusiness } from './components/GlobalBusiness';
import { Applications } from './components/Applications';
import { Knowledge } from './components/Knowledge';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { Footer } from './components/Footer';

export function App() {
  return (
    <LanguageProvider>
      <div className="concept-shell min-h-screen bg-[#F8F5EF] text-[#191c19] flex flex-col font-sans selection:bg-[#E8DCC8] selection:text-[#00261d]">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Company />
          <Products />
          <Quality />
          <GlobalBusiness />
          <Applications />
          <Knowledge />
          <FAQ />
          <Contact />
        </main>
        <WhatsAppFloating />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
