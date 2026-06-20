/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowRight, Sparkles, Trophy, Leaf, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhoWeAre() {
  const [showExtendedBio, setShowExtendedBio] = useState(false);

  return (
    <section id="about" className="w-full bg-white py-16 sm:py-24 border-b border-stone-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Subtitle */}
          <div className="lg:col-span-3">
            <h2 className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-stone-400 uppercase font-semibold">
              Who We Are
            </h2>
          </div>

          {/* Master Narrative Copy */}
          <div className="lg:col-span-9 flex flex-col items-stretch">
            <p className="font-display font-light text-xl sm:text-3xl md:text-[34px] leading-relaxed md:leading-normal text-stone-900 tracking-tight">
              3DIMENSIONAL is an award-winning modern architecture firm based in Accra, Ghana. 
              We specialize in contemporary design through our signature{' '}
              <span className="font-medium text-stone-950">
                Natural Modern
              </span>{' '}
              approach.
            </p>

            <div className="mt-8 flex justify-end font-sans">
              <button
                onClick={() => setShowExtendedBio(!showExtendedBio)}
                className="inline-flex items-center gap-2 text-sm text-stone-900 duration-200 transition-colors cursor-pointer group hover:text-stone-600"
                id="more-about-us-toggle"
              >
                <span className="border-b border-stone-900 pb-0.5 font-sans font-medium text-xs sm:text-sm">
                  {showExtendedBio ? 'Less about us' : 'More about us'}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Expandable Story Panel */}
        <AnimatePresence>
          {showExtendedBio && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-12 md:mt-16 overflow-hidden border-t border-stone-100 pt-12"
              id="extended-about-content"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-800">
                    <Leaf className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-stone-900">
                    Natural Modernism
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    We synchronize organic textures like untreated cedar, structural mass timber, 
                    and weathered granite with geometric block-form alignments. The goal is structures 
                    that age in dialogue with their environment.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-800">
                    <Trophy className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-stone-900">
                    Passive Standards
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    By strictly targeting passive building ratios, we curb cooling/heating grid demands. 
                    Every structural envelope is mathematically modeled to harness solar paths and thermal loops.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-800">
                    <Users className="w-5 h-5 text-sky-600" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-stone-900">
                    Human Alignment
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    We discard dramatic geometric gimmicks that look nice in render magazines but hamper daily comfort. 
                    True design integrity starts with human choreography—how air circulating, coffee tables, and footsteps interact.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
