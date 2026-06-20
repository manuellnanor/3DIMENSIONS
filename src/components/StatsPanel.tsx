/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Stat {
  value: string;
  targetNum: number;
  suffix: string;
  label: string;
}

export default function StatsPanel() {
  const stats: Stat[] = [
    { value: '10+', targetNum: 10, suffix: '+', label: 'Years of Experience' },
    { value: '200+', targetNum: 200, suffix: '+', label: 'Residential Projects Completed' },
    { value: '100+', targetNum: 100, suffix: '+', label: 'Commercial Spaces Transformed' },
    { value: '400+', targetNum: 400, suffix: '+', label: 'Serving Clients Nationwide' },
  ];

  return (
    <section className="w-full bg-[#121212] text-stone-100 py-16 sm:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start space-y-2 border-l border-neutral-800 pl-6 first:border-l-0"
              id={`stat-block-${idx}`}
            >
              {/* Dynamic Counting Animation */}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-stone-50 tracking-tight"
              >
                {st.value}
              </motion.span>

              <span className="text-xs sm:text-sm text-stone-400 font-sans tracking-wide leading-tight max-w-[180px]">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
