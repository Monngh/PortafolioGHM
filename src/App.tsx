import React from 'react';
import { PortfolioHero } from './components/PortfolioHero';
import { AboutMe } from './components/AboutMe';
import { StickyNavbar } from './components/StickyNavbar';
import { PortfolioProjects } from './components/PortfolioProjects';
import { PortfolioSkills } from './components/PortfolioSkills';
import { PortfolioContact } from './components/PortfolioContact';
import { PortfolioFooter } from './components/PortfolioFooter';
import { TorchCursor } from './components/TorchCursor';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#05070a] text-foreground selection:bg-primary selection:text-primary-foreground">
        <TorchCursor />
        <StickyNavbar />
        <PortfolioHero />
        <AboutMe />
        <PortfolioProjects />
        <PortfolioSkills />
        <PortfolioContact />
        <PortfolioFooter />
      </div>
    </LanguageProvider>
  );
}

export default App;
