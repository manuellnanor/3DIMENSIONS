/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import housesImage from '../assets/services/houses.svg';
import renovationImage from '../assets/services/renovation.svg';
import interiorImage from '../assets/services/interior.svg';

export default function OurServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const servicesData = [
    {
      id: 'houses',
      title: 'Houses',
      description: 'To create beautiful, healthy buildings to empower families, uplift communities, and improve our living world.',
      image: housesImage
    },
    {
      id: 'renovation',
      title: 'Renovation',
      description: '3DIMENSIONAL strives toward a socially just and equitable world where buildings positively contribute to the environment.',
      image: renovationImage
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      description: 'We honor the profound and nuanced ways humans and the environment interact with, use, and are shaped by our work.',
      image: interiorImage
    }
  ];

  return (
    <section id="services" className="w-full bg-white py-16 sm:py-24 border-b border-stone-100 selection:bg-stone-900 select-none">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtitle Section Indicator */}
        <div className="mb-12">
          <p className="text-[10px] md:text-xs font-mono tracking-[0.34em] text-stone-400 uppercase font-semibold">
            Our Services
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" 
          id="services-container-grid"
          onMouseLeave={() => setHoveredIndex(null)} // Reverts to clean layout when not hovering
        >
          {servicesData.map((srv, index) => {
            const isHighlighted = hoveredIndex === index;

            return (
              <div
                key={srv.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative flex h-[280px] cursor-pointer flex-col justify-start border p-7 transition-all duration-300 sm:h-[285px] sm:p-8 lg:h-[285px] lg:p-10 ${
                  isHighlighted
                    ? 'bg-[#f6f5f4] border-transparent shadow-sm'
                    : 'bg-white border-stone-200'
                }`}
                id={`services-card-${srv.id}`}
              >
                
                {/* Architectural service illustration */}
                <div className="mb-6 flex h-12 w-full items-end justify-start text-stone-900">
                  <img
                    src={srv.image}
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-auto max-w-full object-contain object-left-bottom"
                  />
                </div>

                {/* Separator rule code */}
                <div className="relative mb-6 w-full">
                  <div 
                    className={`h-[1.5px] w-full transition-colors duration-300 ${
                      isHighlighted ? 'bg-[#d93a29]' : 'bg-stone-200'
                    }`} 
                  />
                </div>

                {/* Service Text Metadata */}
                <div className="space-y-4">
                  <h3 className="font-display text-[22px] font-medium tracking-tight text-stone-900">
                    {srv.title}
                  </h3>

                  <p className="font-sans text-[15px] font-normal leading-[23px] text-black">
                    {srv.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
