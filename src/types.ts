/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  year: number;
  description: string;
  details: string;
  stats?: { label: string; value: string }[];
  awards?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  svgPath: string;
  highlights: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  points: string[];
}

export interface Award {
  id: string;
  year: number;
  title: string;
  category: string;
}

export interface MediaItem {
  id: string;
  category: 'Media' | 'Announcements';
  title: string;
  image: string;
  date: string;
  readTime: string;
}
