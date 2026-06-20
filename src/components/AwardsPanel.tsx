/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { AWARDS } from '../data';
import { Award, Medal, ShieldAlert } from 'lucide-react';

export default function AwardsPanel() {
  return (
    <section id="awards" className="w-full bg-white py-16 sm:py-24 border-b border-stone-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Section Indicator */}
          <div className="lg:col-span-3">
            <p className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-stone-400 uppercase">
              Awards
            </p>
          </div>

          {/* Right Column Timeline List */}
          <div className="lg:col-span-9 divide-y divide-stone-100">
            {AWARDS.map((aw, idx) => (
              <motion.div
                key={aw.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-12 py-6 items-center gap-4 hover:bg-stone-50/50 px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors group"
                id={`award-row-${aw.id}`}
              >
                {/* Year Label */}
                <div className="sm:col-span-2 font-mono text-xs sm:text-sm font-semibold text-stone-500 group-hover:text-stone-900 transition-colors">
                  {aw.year}
                </div>

                {/* Main Award Title */}
                <div className="sm:col-span-6 font-display font-medium text-base sm:text-lg text-stone-850 group-hover:text-stone-900 transition-colors">
                  {aw.title}
                </div>

                {/* Issuing Organization/Category */}
                <div className="sm:col-span-4 flex items-center gap-1.5 justify-start sm:justify-end text-xs text-stone-400 font-sans tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-200 group-hover:bg-amber-400 transition-colors" />
                  <span>{aw.category}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
