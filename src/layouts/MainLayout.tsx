import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { FloatingWhatsApp } from '../components/common/FloatingWhatsApp';
import { ThemeSwitcher } from '../components/common/ThemeSwitcher';
import { ScrollProgressBar } from '../components/common/ScrollProgressBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F4EF] text-[#101C32] transition-colors duration-300">
      <ScrollProgressBar />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-28 sm:pt-32">
        {children}
      </main>
      <Footer />
      {/* Floating Global Utility Controls */}
      <ThemeSwitcher variant="floating" />
      <FloatingWhatsApp />
    </div>
  );
};
