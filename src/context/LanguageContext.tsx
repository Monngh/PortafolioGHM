import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_contact: 'Contact',
    hero_title: 'Creative Developer',
    hero_subtitle: '& Multimedia Engineer',
    hero_tag: 'PORTFOLIO',
    hero_desc: 'Crafting immersive digital experiences through advanced web technologies, interactive elements, and cinematic design.',
    hero_explore: 'Explore Work',
    hero_resume: 'View Resume',
    contact_tag: 'Get in Touch',
    contact_title_1: "Let's create something",
    contact_title_2: 'epic.',
    contact_desc: "Whether you have a wild idea, a concrete project, or just want to chat about creative development, I'm always open to new adventures.",
    contact_form_title: 'Send a message',
    contact_form_name: 'Your Name',
    contact_form_email: 'Your Email',
    contact_form_msg: 'Tell me about your project...',
    contact_form_btn: 'Send Message',
    gallery_title: 'Visual Fragments',
    gallery_desc: 'A trail of creativity in every move.',
    gallery_instruction: 'Hover to Reveal'
  },
  es: {
    nav_about: 'Sobre mí',
    nav_projects: 'Proyectos',
    nav_skills: 'Habilidades',
    nav_contact: 'Contacto',
    hero_title: 'Desarrollador Creativo',
    hero_subtitle: 'y Especialista Multimedia',
    hero_tag: 'PORTAFOLIO',
    hero_desc: 'Creando experiencias digitales inmersivas mediante tecnologías web avanzadas, elementos interactivos y diseño cinemático.',
    hero_explore: 'Ver Proyectos',
    hero_resume: 'Ver CV',
    contact_tag: 'Contacto',
    contact_title_1: 'Creemos algo',
    contact_title_2: 'épico.',
    contact_desc: 'Ya sea que tengas una idea loca, un proyecto concreto o simplemente quieras charlar sobre desarrollo creativo, siempre estoy abierto a nuevas aventuras.',
    contact_form_title: 'Enviar un mensaje',
    contact_form_name: 'Tu nombre',
    contact_form_email: 'Tu correo',
    contact_form_msg: 'Cuéntame sobre tu proyecto...',
    contact_form_btn: 'Enviar mensaje',
    gallery_title: 'Fragmentos Visuales',
    gallery_desc: 'Un rastro de creatividad en cada movimiento.',
    gallery_instruction: 'Pasa el ratón para revelar'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
