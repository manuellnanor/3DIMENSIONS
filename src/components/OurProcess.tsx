/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import processHouse from '../assets/process-house.svg';

interface OurProcessProps {
  onLearnMoreProcess: () => void;
}

export default function OurProcess(_props: OurProcessProps) {
  const [activeStepId, setActiveStepId] = useState('listen-collaborate');

  return (
    <section
      id="process"
      className="w-full overflow-hidden border-b border-stone-200 bg-[#f7f7f7] py-14 sm:py-20 lg:min-h-[860px] lg:py-10"
    >
      <div className="mx-auto max-w-[1832px] px-5 sm:px-8 lg:px-[42px]">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-stone-900">
          Our Process
        </p>

        <h2 className="mt-6 max-w-[1220px] font-display text-[26px] font-light leading-[1.28] tracking-[-0.035em] text-stone-950 sm:text-3xl lg:text-[34px]">
          Our process starts with the first conversation and continues through move-in, guided
          by a deep understanding of client goals and site-specific opportunities
        </h2>

        <div className="mt-10 grid grid-cols-1 items-end gap-12 sm:mt-12 lg:mt-8 lg:grid-cols-12 lg:gap-8">
          <div
            className="lg:col-span-5 lg:mb-2 lg:max-w-[670px]"
            id="process-accordion-group"
          >
            {PROCESS_STEPS.map((step) => {
              const isOpen = activeStepId === step.id;

              return (
                <div
                  key={step.id}
                  className="border-b border-stone-300"
                  id={`accordion-step-${step.id}`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveStepId(isOpen ? '' : step.id)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between py-6 text-left font-display text-[21px] font-normal tracking-[-0.02em] text-stone-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-500 sm:text-[23px]"
                  >
                    <span>{step.title}</span>
                    {!isOpen && (
                      <span
                        aria-hidden="true"
                        className="font-sans text-[25px] font-light leading-none text-stone-800"
                      >
                        +
                      </span>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[650px] pb-9 pr-3 font-sans text-[14px] leading-[1.55] text-stone-700 sm:text-[15px]">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center lg:col-span-7 lg:justify-end">
            <img
              src={processHouse}
              alt="Architectural line drawing of a modern house"
              className="h-auto w-full max-w-[700px] object-contain lg:max-w-[760px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
