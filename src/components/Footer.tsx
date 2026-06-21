/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Instagram, Facebook, ArrowRight, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import logoBlack from '../assets/brand/3dimension-logo-black.svg';

interface FooterProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onContactClick, onNavigate }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinksLeft = [
    { name: 'ABOUT', id: 'about' },
    { name: 'PEOPLE', id: 'about' }, // Both link to about segment
    { name: 'CAREER', id: 'about' },
    { name: 'OUR PROCESS', id: 'process' },
  ];

  const footerLinksRight = [
    { name: 'SERVICES', id: 'services' },
    { name: 'PORTFOLIO', id: 'portfolio' },
    { name: 'REVIEWS', id: 'home' },
    { name: 'MEDIA & AWARDS', id: 'media' },
  ];

  return (
    <footer className="w-full bg-[#faf9f8] text-stone-900 border-t border-stone-200">
      
      {/* Upper Footer Segment */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Left Area: Contacts */}
        <div className="md:col-span-4 space-y-8">
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-widest font-mono text-stone-400 uppercase">INQUIRIES</h4>
            <div className="space-y-1">
              <a
                href="mailto:hello@3dimension.com"
                className="block font-display text-lg sm:text-xl font-medium text-stone-800 hover:text-stone-950 hover:underline transition-all"
              >
                hello@3dimension.com
              </a>
              <a
                href="tel:+233244055010"
                className="block font-sans text-sm text-stone-500 hover:text-stone-900"
              >
                +233 24 405 5010
              </a>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h4 className="text-[10px] tracking-widest font-mono text-stone-400 uppercase">STUDIO HEADQUARTERS</h4>
            <p className="font-sans text-sm text-stone-500 leading-relaxed max-w-[250px]">
              ACCRA,<br />
              GREATER ACCRA REGION,<br />
              GHANA
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1c1a19] border-b border-[#1c1a19] pb-1 hover:gap-3 transition-all cursor-pointer"
              id="footer-contact-link"
            >
              Contact us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Logo Area */}
        <div className="md:col-span-4 flex flex-col items-center justify-center space-y-4 border-t border-b border-stone-200 md:border-none py-8 md:py-0 select-none">
          <img
            src={logoBlack}
            alt="3DIMENSION Architecture"
            className="h-auto w-[230px] max-w-full"
          />
        </div>

        {/* Right Area: Detailed Sitemap */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8 h-full items-start">
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-widest font-mono text-stone-400 uppercase">PLATFORM</h4>
            <ul className="space-y-2.5">
              {footerLinksLeft.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-xs text-stone-500 hover:text-stone-950 font-sans tracking-wide uppercase block text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.25em] font-mono text-stone-400 uppercase">SOLUTIONS</h4>
            <ul className="space-y-2.5">
              {footerLinksRight.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-xs text-stone-500 hover:text-stone-950 font-sans tracking-wide uppercase block text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Sub-Footer Base Banner */}
      <div className="border-t border-stone-250 bg-stone-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-stone-400">
          
          {/* Copyright claims */}
          <div className="flex items-center gap-4">
            <span>© MANNYGIT 2026.</span>
            <span className="hidden sm:inline text-stone-300">|</span>
            <span className="hover:text-stone-700 cursor-pointer">TERMS & STANDARDS</span>
          </div>

          {/* Socials & Return To Top link */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="hover:text-stone-800 transition-colors" aria-label="Aesthetic design feed Instagram">
                <Instagram className="w-4 h-4 text-stone-500" />
              </a>
              <a href="#" className="hover:text-stone-800 transition-colors" aria-label="Corporate updates Facebook">
                <Facebook className="w-4 h-4 text-stone-500" />
              </a>
              <a href="#" className="hover:text-stone-800 transition-colors" aria-label="Behance drafts">
                <span className="font-sans font-extrabold tracking-tighter text-stone-500 hover:text-stone-800">Be</span>
              </a>
              <a href="#" className="hover:text-stone-800 transition-colors" aria-label="Pinterest inspirationboards">
                <span className="font-sans font-extrabold tracking-tighter text-stone-500 hover:text-stone-800 font-serif">P</span>
              </a>
            </div>

            <button
              onClick={handleScrollToTop}
              className="w-8 h-8 rounded-full border border-stone-200 hover:border-stone-900 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-all cursor-pointer"
              aria-label="Back to page top"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
