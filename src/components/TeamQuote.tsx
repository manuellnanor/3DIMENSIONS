/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../data';
import { ArrowRight, BookOpen, Quote, X, Award, Briefcase, Sparkles, GraduationCap } from 'lucide-react';

export default function TeamQuote() {
  const [showKofiModal, setShowKofiModal] = useState(false);

  useEffect(() => {
    if (!showKofiModal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowKofiModal(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showKofiModal]);

  return (
    <section id="team" className="w-full bg-[#1c1a19] text-stone-100 py-16 sm:py-24 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quote Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 relative px-4">
          <Quote className="w-12 h-12 text-stone-700/60 mx-auto mb-6 rotate-180" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-lg sm:text-2xl md:text-3xl text-stone-200 leading-relaxed tracking-tight"
          >
            "Every project begins with questions and expectations. Our role is to listen, 
            explore possibilities, and shape a built solution that responds with clarity and purpose."
          </motion.p>
        </div>

        {/* Triple Bento Split Frame */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Kofi Tibori Showcase */}
          <div
            onClick={() => setShowKofiModal(true)}
            className="group flex flex-col justify-between bg-stone-900 border border-neutral-800 hover:border-neutral-700 cursor-pointer overflow-hidden p-6 relative transition-all duration-300"
            id="kofi-profile-card"
          >
            {/* Visual background image thumbnail */}
            <div className="aspect-3/4 overflow-hidden bg-stone-950 relative w-full rounded-none">
              <img
                src={IMAGES.kofiTibori}
                alt="Kofi Tibori"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors" />
            </div>

            {/* Profile Label Overlay */}
            <div className="mt-4 pt-2 flex justify-between items-end">
              <div>
                <p className="font-display font-medium text-stone-50 text-base">
                  Kofi Tibori
                </p>
                <p className="text-[10px] tracking-widest font-mono text-stone-400 uppercase mt-0.5">
                  Head of Architecture & Design
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold font-mono text-stone-300 group-hover:text-white uppercase">
                Biography <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Mid philosophy highlight panel */}
          <div className="bg-stone-900/60 border border-neutral-800/80 p-6 flex flex-col justify-between items-start space-y-12">
            <div className="space-y-6">
              <span className="text-[9px] tracking-[0.3em] font-mono text-amber-400 uppercase border border-amber-900/40 px-2.5 py-1 rounded-sm bg-amber-950/10">
                PRACTICE MANIFESTO
              </span>
              <h3 className="font-display font-light text-2xl text-stone-100 tracking-tight leading-snug">
                Harmonizing site-specific topography with carbon-locked mass timber solutions.
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed font-light">
                We reject standard concrete monolithic urbanism. Instead, we draft structure sizes around local tree lines, geothermal depths, and active microclimate thermal behavior.
              </p>
            </div>

            <div className="border-t border-neutral-800/80 pt-6 w-full flex justify-between items-center text-xs font-mono text-stone-500">
              <span>ESTABLISHED 2009</span>
              <span>•</span>
              <span>GHANA INSTITUTE OF ARCHITECTS</span>
            </div>
          </div>

          {/* Card 3: Drafting Image */}
          <div className="group flex flex-col justify-between bg-stone-900 border border-neutral-800 overflow-hidden p-6 relative transition-all duration-300">
            {/* Sketching image */}
            <div className="aspect-3/4 overflow-hidden bg-stone-950 relative w-full rounded-none">
              <img
                src={IMAGES.sketching}
                alt="Architect Sketching"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 pt-2">
              <p className="font-display font-medium text-stone-200 text-sm">
                Detail Draft / Floorplan Framing
              </p>
              <p className="text-[10px] tracking-widest font-mono text-stone-500 uppercase mt-0.5">
                AXONOMETRIC DETAILED DOCUMENTATION
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Kofi Tibori Detailed Profile Modal Overlay */}
      <AnimatePresence>
        {showKofiModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowKofiModal(false)}
            className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 md:items-center"
            id="kofi-bio-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Kofi Tibori biography"
              className="my-auto bg-[#121111] border border-neutral-800 w-full max-w-4xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto text-stone-100 flex flex-col md:max-h-[calc(100dvh-3rem)] md:flex-row md:overflow-hidden relative"
            >
              <button
                onClick={() => setShowKofiModal(false)}
                className="sticky top-3 self-end -mb-11 mr-3 shrink-0 bg-black/85 text-white border border-white/20 hover:bg-neutral-800 p-2.5 rounded-full cursor-pointer z-30 shadow-lg md:absolute md:top-4 md:right-4 md:m-0"
                aria-label="Close biography modal"
                id="close-kofi-modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Sidebar Portrait column */}
              <div className="h-[38dvh] min-h-[240px] shrink-0 md:h-auto md:min-h-0 md:w-2/5 md:aspect-auto relative bg-neutral-950">
                <img
                  src={IMAGES.kofiTibori}
                  alt="Kofi Tibori"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90 md:opacity-40" />
                <div className="absolute bottom-6 left-6 md:hidden z-10">
                  <h3 className="font-display font-medium text-2xl text-stone-50">Kofi Tibori</h3>
                  <p className="text-xs text-stone-400 font-mono tracking-wide mt-1">Lead Partner & Architect</p>
                </div>
              </div>

              {/* Main bio details content column */}
              <div className="p-6 sm:p-8 md:w-3/5 md:overflow-y-auto md:max-h-[600px] space-y-6">
                <div className="hidden md:block">
                  <span className="text-[10px] tracking-widest text-amber-400 font-mono uppercase">LEADERSHIP PROFILE</span>
                  <h3 className="font-display font-medium text-3xl text-stone-50 mt-1">Kofi Tibori</h3>
                  <p className="text-xs text-stone-400 font-mono tracking-wide mt-1">Head of Architecture & Design</p>
                </div>

                <div className="space-y-4 text-stone-300 text-sm font-light leading-relaxed">
                  <p>
                    Kofi brings extensive design and construction leadership to 3DIMENSIONAL, guiding projects from their earliest concepts through detailed coordination and delivery. His work advances the studio’s core signature design principle: <strong>Natural Modernism</strong>.
                  </p>
                  <p>
                    He believes structures should possess material honesty, emphasizing daylight, locally sourced materials, efficient building systems, and close collaboration between design and construction teams.
                  </p>
                </div>

                <div className="border-t border-neutral-805 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Milestones Card 1 */}
                  <div className="space-y-2 bg-[#1a1818] p-4 border border-neutral-800">
                    <div className="flex items-center gap-1.5 text-stone-200">
                      <GraduationCap className="w-4 h-4 text-amber-500" />
                      <span className="font-display font-medium text-xs">Aesthetic Origins</span>
                    </div>
                    <p className="text-xs text-stone-400 font-mono leading-relaxed">
                      M.Arch, ETH Zürich<br />
                      Distinguished Alumna Laurels
                    </p>
                  </div>

                  {/* Milestones Card 2 */}
                  <div className="space-y-2 bg-[#1a1818] p-4 border border-neutral-800">
                    <div className="flex items-center gap-1.5 text-stone-200">
                      <Award className="w-4 h-4 text-emerald-500" />
                      <span className="font-display font-medium text-xs">Key Laurels</span>
                    </div>
                    <p className="text-xs text-stone-400 font-mono leading-relaxed">
                      Urban Sustainability Prize 2024<br />
                      Sustainia Gold Medal Laureate
                    </p>
                  </div>
                </div>

                <div className="border-t border-neutral-805 pt-6 flex items-center gap-2">
                  <span className="text-xs text-stone-400">Want to book a design workshop directly with Kofi?</span>
                  <button
                    onClick={() => {
                      setShowKofiModal(false);
                      // Custom callback can be triggered
                    }}
                    className="text-xs font-semibold text-amber-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    Send proposal <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
