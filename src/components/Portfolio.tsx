/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { ArrowRight, MapPin, Calendar, Award, CheckCircle, Scale, Shield, Landmark, X } from 'lucide-react';

interface PortfolioProps {
  onInquireProject: (projectName: string) => void;
  onViewProject: (project: Project) => void;
}

export default function Portfolio({ onInquireProject, onViewProject }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<'Selected' | 'All' | 'Residential' | 'Commercial/Cultural'>('Selected');
  const [expandedDotsState, setExpandedDotsState] = useState(0);

  const filterTabs: ('Selected' | 'All' | 'Residential' | 'Commercial/Cultural')[] = [
    'Selected', 'All', 'Residential', 'Commercial/Cultural'
  ];

  // Filtering logic
  const displayedProjects = PROJECTS.filter((proj) => {
    if (activeTab === 'Selected') {
      return ['kaave-academy', 'bawly-house', 'hollis-house'].includes(proj.id);
    }
    if (activeTab === 'All') return true;
    if (activeTab === 'Residential') return proj.category === 'Residential';
    if (activeTab === 'Commercial/Cultural') return proj.category.includes('Commercial') || proj.category.includes('Cultural') || proj.category.includes('Institutional');
    return true;
  });

  return (
    <section id="portfolio" className="w-full bg-white py-16 sm:py-24 border-b border-stone-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <p className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-stone-400 uppercase">
              Portfolio
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-stone-900 mt-2">
              Selected Work
            </h2>
          </div>

          {/* Filtering navigation / Full portfolio togglers */}
          <div className="flex flex-wrap gap-3 text-xs font-mono tracking-wider uppercase">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-1.5 px-3 rounded-none transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? 'border-b-2 border-stone-900 text-stone-900 font-bold'
                    : 'text-stone-400 hover:text-stone-700'
                }`}
                id={`portfolio-tab-${tab.replace('/', '-')}`}
              >
                {tab === 'Selected' ? 'Selected Work' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Card Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          id="portfolio-projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col justify-between cursor-pointer"
                onClick={() => onViewProject(proj)}
                id={`project-card-${proj.id}`}
              >
                {/* Image Wrap */}
                <div className="overflow-hidden aspect-4/3 relative bg-stone-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/15 duration-300 transition-colors" />
                  
                  {/* Subtle hover icon overlay */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 text-[11px] font-sans font-bold tracking-widest text-stone-950 uppercase border border-stone-200">
                    SIGHT DETAILS <ArrowRight className="w-3 h-3 text-stone-900" />
                  </div>
                </div>

                {/* Typography metadata */}
                <div className="mt-4 flex flex-col pt-2 select-none border-b border-transparent group-hover:border-stone-100 pb-3 transition-colors">
                  <h3 className="font-display font-medium text-lg sm:text-xl text-stone-900">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] tracking-widest text-stone-400 font-mono mt-1 uppercase">
                    <span>{proj.location}</span>
                    <span>•</span>
                    <span className="text-stone-500 font-semibold">{proj.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Carousel indicators aligned precisely like the screenshot */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {PROJECTS.slice(0, 3).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                setExpandedDotsState(dotIdx);
                setActiveTab(dotIdx === 0 ? 'Selected' : 'All');
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                expandedDotsState === dotIdx ? 'w-6 bg-stone-800' : 'w-1.5 bg-stone-300'
              }`}
              aria-label={`Slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
