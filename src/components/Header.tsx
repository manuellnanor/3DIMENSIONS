/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoBlack from '../assets/brand/3dimensional-logo-black.svg';
import logoWhite from '../assets/brand/3dimensional-logo-white.svg';

interface HeaderProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onContactClick, onNavigate, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Team', id: 'team' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((current) => (
        current ? window.scrollY > 18 : window.scrollY > 48
      ));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled ? 'rgb(255,255,255)' : 'rgba(255,255,255,0)',
        borderColor: isScrolled ? 'rgba(231,229,228,0.65)' : 'rgba(231,229,228,0)',
        boxShadow: isScrolled
          ? '0 10px 30px rgba(28,25,23,0.07)'
          : '0 10px 30px rgba(28,25,23,0)'
      }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 top-0 z-50 w-full border-b font-display transition-[padding] duration-500 ease-out ${
        isScrolled ? 'py-3.5 md:py-4' : 'py-6 md:py-8'
      }`}
      id="main-app-header"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Responsive brand logo */}
        <div 
          onClick={() => handleLinkClick('home')}
          className="group flex cursor-pointer items-center"
          id="brand-logo-container"
        >
          <div className="relative w-[145px] sm:w-[170px]">
            <img
              src={logoWhite}
              alt="3DIMENSIONAL Architecture"
              className={`h-auto w-full transition-all duration-500 ease-out group-hover:scale-[1.02] ${
                isScrolled ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <img
              src={logoBlack}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-auto w-full transition-all duration-500 ease-out group-hover:scale-[1.02] ${
                isScrolled ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>

        {/* Desktop Navigation Links - Exact Spacing & Hygge Sans typography style */}
        <nav className="hidden lg:flex items-center gap-10 text-xs font-display font-medium tracking-widest uppercase">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 cursor-pointer transition-colors duration-300 uppercase ${
                  isActive
                    ? isScrolled ? 'text-stone-950 font-bold' : 'text-white font-bold'
                    : isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-stone-300 hover:text-white'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] ${
                      isScrolled ? 'bg-stone-950' : 'bg-white'
                    }`}
                    transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side contact CTA & mobile trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-white text-stone-950 shadow-md font-sans font-semibold text-xs uppercase tracking-widest cursor-pointer hover:bg-stone-50/90 duration-300 border border-stone-200/50"
            id="header-contact-btn"
          >
            <span className="border-b border-stone-950 pb-0.5">Contact us</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-sm cursor-pointer transition-colors ${
              isScrolled
                ? 'text-stone-800 hover:bg-stone-100'
                : 'text-white hover:bg-white/10'
            }`}
            id="mobile-menu-toggle-btn"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-white border-b border-stone-200 shadow-lg overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-stretch">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full text-left py-2 px-3 font-display text-base tracking-wide border-b border-stone-50 cursor-pointer ${
                      isActive
                        ? 'text-stone-950 font-bold border-l-2 border-stone-950 pl-4'
                        : 'text-stone-600 hover:text-stone-950'
                    }`}
                    id={`mobile-nav-link-${link.id}`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full text-center py-3.5 bg-stone-950 hover:bg-stone-900 text-white font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
                  id="mobile-contact-nav-btn"
                >
                  Contact us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
