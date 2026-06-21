/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MEDIA_ITEMS } from '../data';
import { ArrowRight, BookOpen, Clock, Heart, Share2, ClipboardCheck, X } from 'lucide-react';
import { MediaItem } from '../types';

export default function MediaPress() {
  const [selectedArticle, setSelectedArticle] = useState<MediaItem | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleFavoriteToggle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section id="media" className="w-full bg-[#fcfbfc] py-16 sm:py-24 border-b border-stone-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-stone-400 uppercase">
              Media
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-stone-900 mt-2">
              Media & Press Releases
            </h2>
          </div>

          <button
            onClick={() => setSelectedArticle(MEDIA_ITEMS[0])}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-500 hover:text-stone-900 group transition-all cursor-pointer"
            id="read-all-press-btn"
          >
            Read highlights <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 duration-200" />
          </button>
        </div>

        {/* 3-Column Card Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="media-cards-grid">
          {MEDIA_ITEMS.map((item, idx) => {
            const isFav = favorites.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => setSelectedArticle(item)}
                className="group flex flex-col justify-between cursor-pointer border-b border-stone-200 hover:border-stone-950 pb-8 transition-colors duration-300"
                id={`media-card-${item.id}`}
              >
                <div>
                  {/* Thumbnail */}
                  <div className="aspect-16/10 overflow-hidden bg-stone-100 relative mb-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 duration-550 transition-transform ease-out"
                    />

                    {/* Badge Category Overlay */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm outline-1 outline-stone-250 border border-stone-200 text-[9px] font-mono font-bold tracking-widest text-stone-900 py-1 px-3 uppercase">
                      {item.category}
                    </div>

                    {/* Micro hover interaction panel */}
                    <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => handleFavoriteToggle(item.id, e)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                          isFav
                            ? 'bg-red-500 text-white border-red-500'
                            : 'bg-white text-stone-700 hover:text-black border-stone-200'
                        }`}
                        aria-label="Add to bookmarks"
                      >
                        <Heart className="w-3.5 h-3.5" fill={isFav ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>

                  {/* Date & clock read time line */}
                  <div className="flex items-center gap-3 text-[10px] tracking-wide text-stone-400 font-mono mb-2 uppercase">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.readTime}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-display font-medium text-lg leading-snug text-stone-900 group-hover:text-stone-950">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-stone-900 group-hover:translate-x-1 duration-200 transition-transform">
                  Read article <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Article Detailed popover overlay modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-sm flex items-center justify-center p-4"
            id="press-detail-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white text-stone-900 w-full max-w-2xl rounded-none border border-stone-200 relative overflow-hidden flex flex-col shadow-xl"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-stone-100 p-2 text-stone-500 hover:text-black rounded-full cursor-pointer z-10 hover:bg-stone-200"
                aria-label="Close article popover"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-16/9 bg-stone-100 overflow-hidden relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-900/15" />
                <div className="absolute bottom-4 left-6 bg-stone-900 text-stone-100 text-[10px] font-mono tracking-widest px-3 py-1 font-bold uppercase">
                  {selectedArticle.category}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 sm:p-8 space-y-4 max-h-[50vh] overflow-y-auto">
                <div className="flex items-center gap-3 text-xs tracking-wide text-stone-400 font-mono uppercase">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h3 className="font-display font-medium text-2xl text-stone-950">
                  {selectedArticle.title}
                </h3>

                <div className="space-y-4 text-stone-605 text-sm font-light leading-relaxed pt-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque mollis magna, aliquet tempor arcu pharetra tincidunt. Phasellus eget tortor ac mi hendrerit finibus quis vel leo. Cras vel tristique urna.
                  </p>
                  <p>
                    Nullam rhoncus sem nec nisi vestibulum imperdiet. Etiam eu diam non lectus vulputate dapibus. Maecenas scelerisque tristique ex vel aliquet. Etiam pretium sem nec augue auctor luctus. Vivamus sit amet erat id nulla bibendum egestas at congue sapien.
                  </p>
                  <p>
                    "Sustainability must transcend active high-emission solutions," says Lead Architect Kofi Tibori. "By locking dynamic, regional timber frame layouts directly at drafting point, we eliminate concrete curing footprint from the onset."
                  </p>
                </div>
              </div>

              {/* Action bar */}
              <div className="bg-stone-50/50 p-4 border-t border-stone-100 flex justify-between items-center text-xs">
                <span className="text-stone-400 font-mono">© 3DIMENSION ARCHITECTURE PUBLICATION</span>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    // trigger notification or copy link
                  }}
                  className="font-semibold text-stone-900 flex items-center gap-1 cursor-pointer hover:gap-1.5 transition-all"
                >
                  Share article <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
