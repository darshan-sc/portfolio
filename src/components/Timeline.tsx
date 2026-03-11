import React from 'react';
import { motion } from 'framer-motion';

export type TimelineEntry = {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  iconType: 'education' | 'work' | 'other';
};

export interface TimelineProps {
  entries: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  return (
    <section id="timeline" className="py-24 sm:py-32 bg-bg border-t border-black/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-heading text-5xl sm:text-6xl text-text font-bold mb-16 tracking-tighter"
        >
          Timeline
        </motion.h2>

        <div className="flex flex-col">
          {entries.map((e, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-black/10 py-12 first:border-0 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8"
            >
              <div className="lg:w-1/3">
                <h3 className="font-heading text-3xl sm:text-4xl text-text font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">{e.title}</h3>
                <p className="font-body text-muted text-sm uppercase tracking-widest font-semibold mb-4">{e.subtitle}</p>
                <div className="flex items-center text-sm font-mono text-muted">
                  {e.date}
                </div>
              </div>
              
              <div className="lg:w-7/12">
                {e.description && (
                  <p className="font-body text-lg text-text/90 leading-relaxed">{e.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
