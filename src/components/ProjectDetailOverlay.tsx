/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, MapPin, Calendar, Award, CheckCircle, Scale, ArrowRight } from 'lucide-react';

interface ProjectDetailOverlayProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export default function ProjectDetailOverlay({ project, onClose, onInquire }: ProjectDetailOverlayProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end" id="project-detail-overlay-container">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col z-10 text-stone-900"
          >
            {/* Close trigger button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 sm:left-auto sm:right-4 bg-white/90 backdrop-blur-md hover:bg-stone-100 p-2 text-stone-700 hover:text-black rounded-full cursor-pointer z-20 border border-stone-200"
              aria-label="Close project slideover"
              id="close-overlay-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner block image cover */}
            <div className="relative aspect-16/10 bg-stone-100 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-90" />
              
              {/* Bottom tag metadata */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[10px] tracking-[0.3em] font-mono text-stone-200 uppercase">{project.category}</p>
                <h3 className="font-display font-medium text-3xl sm:text-4xl text-stone-50 mt-1">{project.title}</h3>
              </div>
            </div>

            {/* Content Details (scrolling) */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1">
              
              {/* Top Meta Specifications */}
              <div className="grid grid-cols-3 gap-4 border-b border-stone-100 pb-6 text-xs font-mono text-stone-500 uppercase tracking-wide">
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-400 block font-normal">LOCATION</span>
                  <span className="font-semibold text-stone-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" /> {project.location.split(',')[0]}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-400 block font-normal">COMPLETED</span>
                  <span className="font-semibold text-stone-800 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" /> {project.year}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-400 block font-normal">SCALE MODEL</span>
                  <span className="font-semibold text-stone-800 flex items-center gap-1">
                    <Scale className="w-3.5 h-3.5 text-stone-400" /> High-End
                  </span>
                </div>
              </div>

              {/* Core description block */}
              <div className="space-y-4">
                <h4 className="text-[10px] tracking-widest font-mono text-stone-400 uppercase">ARCHITECTURAL DIRECTION</h4>
                <p className="text-stone-700 text-sm leading-relaxed font-light first-letter:text-2xl first-letter:font-bold first-letter:text-stone-900">
                  {project.details}
                </p>
              </div>

              {/* High-fidelity Statistics grid */}
              {project.stats && (
                <div className="space-y-4">
                  <h4 className="text-[10px] tracking-widest font-mono text-stone-400 uppercase">ENGINEERING METRICS</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.stats.map((st, sIdx) => (
                      <div key={sIdx} className="bg-stone-50/70 border border-stone-200/50 p-4 rounded-none text-center">
                        <span className="text-[10px] tracking-wider text-stone-400 font-mono block uppercase">{st.label}</span>
                        <span className="font-display font-medium text-base text-stone-800 mt-1 block">{st.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlight laurels and awards badges */}
              {project.awards && project.awards.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-[10px] tracking-widest font-mono text-stone-400 uppercase">AWARDS & CITATIONS</h4>
                  <div className="space-y-2">
                    {project.awards.map((aw, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-100 px-3.5 py-2.5 rounded-none" id={`overlay-award-badge-${aIdx}`}>
                        <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium tracking-wide">{aw}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Bottom sticky conversion bar */}
            <div className="bg-stone-50 p-4 border-t border-stone-200/50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-stone-400 text-center sm:text-left font-sans">
                Curious about implementing a similar sustainable layout?
              </span>
              <button
                onClick={() => onInquire(project.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-neutral-800 text-stone-100 text-xs font-sans tracking-widest font-semibold px-6 py-3 uppercase transition-all rounded-none cursor-pointer"
                id="overlay-inquire-btn"
              >
                Consult on Style <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
