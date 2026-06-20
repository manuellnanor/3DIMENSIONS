/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PROJECTS, IMAGES } from './data';
import { Project } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import OurServices from './components/OurServices';
import Portfolio from './components/Portfolio';
import OurProcess from './components/OurProcess';
import StatsPanel from './components/StatsPanel';
import AwardsPanel from './components/AwardsPanel';
import TeamQuote from './components/TeamQuote';
import MediaPress from './components/MediaPress';
import Footer from './components/Footer';
import ProjectDetailOverlay from './components/ProjectDetailOverlay';
import FreeConsultationModal from './components/FreeConsultationModal';

import { Sparkles, Calendar, Award, ArrowUpRight, Compass, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledStyleName, setPrefilledStyleName] = useState<string>('');

  // Auto-track scroll positioning to anchor the Nav link states actively
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const sections = ['home', 'about', 'portfolio', 'services', 'process', 'awards', 'team', 'media'];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (stylePrefill = '') => {
    setPrefilledStyleName(stylePrefill);
    setIsConsultationOpen(true);
  };

  const handleViewProject = (proj: Project) => {
    setSelectedProject(proj);
  };

  const handleInquireProject = (projectName: string) => {
    setSelectedProject(null);
    handleOpenConsultation(`Inspired by ${projectName}`);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans select-none antialiased text-stone-900 transition-colors selection:bg-stone-900 selection:text-white">
      
      {/* Prime Double-Deck responsive Header */}
      <Header
        onContactClick={() => handleOpenConsultation('')}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Hero Carousel Frame Showcase */}
      <Hero
        projects={PROJECTS}
        onViewProject={handleViewProject}
      />

      {/* Main Container Stack */}
      <main className="flex-1">
        
        {/* Editorial introductory bio segment */}
        <WhoWeAre />

        {/* 3-Column structural Services grid with line-art sketching */}
        <OurServices />

        {/* Portfolios dynamic selection */}
        <Portfolio
          onInquireProject={handleInquireProject}
          onViewProject={handleViewProject}
        />

        {/* Interactive Builders workflow accordion-schematic blueprint */}
        <OurProcess
          onLearnMoreProcess={() => handleOpenConsultation('Complete General Contract Partnership')}
        />

        {/* Dynamic Mid-section banner overlay: "The best builds start before the build" */}
        <section className="relative w-full h-[320px] md:h-[400px] bg-stone-900 text-white overflow-hidden flex items-end select-none">
          {/* Panoramic render overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={IMAGES.bestBuildsBanner}
            alt="Minimalist design interior showcase"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.25em] text-amber-300 font-mono uppercase bg-neutral-900/40 px-2.5 py-1 border border-neutral-800/40">
                AESTHETIC SOLIDITY
              </span>
              <h3 className="font-display font-light text-2xl sm:text-4xl text-stone-100 max-w-lg leading-tight tracking-tight">
                The best builds start before the build
              </h3>
            </div>

            <button
              onClick={() => handleOpenConsultation('Comprehensive Pre-construction Drafting')}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent bg-white hover:bg-neutral-100 text-stone-950 font-sans text-xs uppercase tracking-widest font-semibold transition-colors shadow-md rounded-none cursor-pointer"
              id="mid-banner-cta-btn"
            >
              Free Consultation
            </button>
          </div>
        </section>

        {/* Counts statistics block */}
        <StatsPanel />

        {/* Chronological Awards timelines */}
        <AwardsPanel />

        {/* Mid Practice quote block with Kofi Tibori biography overlay */}
        <TeamQuote />

        {/* Media cards layout list */}
        <MediaPress />

        {/* Bottom footer block invite banner: "Let's work together" */}
        <section className="relative bg-stone-900 text-stone-50 py-16 sm:py-24 overflow-hidden flex items-center select-none border-b border-neutral-850">
          <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
          
          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-6">
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
              A Unique Vision with Unlimited Possibilities
            </p>
            <h2 className="font-display font-light text-4xl sm:text-6xl text-stone-50 tracking-tight leading-none">
              Let's work together
            </h2>
            <div className="pt-4">
              <button
                onClick={() => handleOpenConsultation('Initial General Workspace Partnership')}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-stone-50 text-stone-950 text-xs font-sans tracking-widest font-semibold uppercase shadow-xl transition-all rounded-none cursor-pointer"
                id="bottom-invite-cta-btn"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Sticky Double-deck Footer containing detailed sitemaps */}
      <Footer
        onContactClick={() => handleOpenConsultation('')}
        onNavigate={handleNavigate}
      />

      {/* Floating full-height Drawer detailing precise project items */}
      <ProjectDetailOverlay
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireProject}
      />

      {/* Multi-step generative Consultation booking wizard modal */}
      <FreeConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledProjectStyle={prefilledStyleName}
      />

    </div>
  );
}
