/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface HeroProps {
  projects: Project[];
  onViewProject: (project: Project) => void;
}

export default function Hero({ projects, onViewProject }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Warm every slide image into the browser cache before it is needed.
  useEffect(() => {
    projects.forEach((project) => {
      const image = new Image();
      image.src = project.image;
    });
  }, [projects]);

  // Auto-play the hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const activeProject = projects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="home" className="relative w-full h-[75vh] md:h-[85vh] bg-stone-100 overflow-hidden">
      {/* Background Image Slider — slides overlap for a continuous crossfade. */}
      <div className="absolute inset-0">
        {projects.map((project, index) => {
          const isActive = index === currentIndex;

          return (
            <motion.div
              key={project.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.035
              }}
              transition={{
                opacity: { duration: 1.35, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 7, ease: 'linear' }
              }}
              aria-hidden={!isActive}
              className={`absolute inset-0 h-full w-full ${
                isActive ? 'z-[1]' : 'z-0'
              }`}
            >
              <img
                src={project.image}
                alt={isActive ? project.title : ''}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                className="h-full w-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          );
        })}

        <div className="absolute inset-0 z-10 bg-black/35" />
      </div>

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 text-white">
        {/* Empty space or top sub-text */}
        <div />

        {/* Heading Block */}
        <div className="relative mt-12 h-[205px] max-w-2xl translate-y-8 sm:h-[235px] sm:translate-y-4 md:mt-24 md:h-[265px] md:translate-y-0">
          {projects.map((project, index) => {
            const isActive = index === currentIndex;

            return (
              <motion.div
                key={`content-${project.id}`}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 12,
                  filter: isActive ? 'blur(0px)' : 'blur(2px)'
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1]
                }}
                aria-hidden={!isActive}
                className={`absolute inset-x-0 top-0 ${
                  isActive ? 'z-10 pointer-events-auto' : 'z-0 pointer-events-none'
                }`}
              >
                <p className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-neutral-200 uppercase">
                  FEATURED PROJECT / {project.year}
                </p>

                <h1 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl leading-none tracking-tight mt-3 text-stone-50">
                  {project.title}
                </h1>

                <div className="mt-6 sm:mt-8 flex items-center gap-4">
                  <button
                    onClick={() => onViewProject(project)}
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-stone-950 transition-all duration-300 px-6 py-3 text-xs tracking-widest font-sans font-semibold uppercase cursor-pointer"
                    id={isActive ? 'hero-view-project' : undefined}
                    tabIndex={isActive ? 0 : -1}
                  >
                    View project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer of the Hero with sliding navigation indicators */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-white/10 pt-6">
          <p className="text-xs sm:text-sm font-sans tracking-wide text-stone-200 uppercase italic font-light">
            Beyond Architecture. Creating Experiences.
          </p>

          <div className="flex items-center gap-6">
            {/* Nav Arrows */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-all hover:bg-white/10"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-all hover:bg-white/10"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex gap-2">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
