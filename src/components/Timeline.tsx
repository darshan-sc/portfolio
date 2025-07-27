// src/components/Timeline.tsx
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGraduationCap, FaBriefcase, FaRocket } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

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

const iconMap = {
  education: <FaGraduationCap />,  // graduation cap for education
  work:      <FaBriefcase />,      // briefcase for work
  other:     <FaRocket />,         // rocket for other events
};

const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  return (
    <section id="timeline" className="bg-bg py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl text-text mb-12 text-center">
          Timeline
        </h2>
        <VerticalTimeline lineColor="var(--color-muted)">
          {entries.map((e, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={e.date}
              dateClassName="text-muted font-body"
              iconStyle={{
                background: 'var(--color-text)',
                color:       'var(--color-bg)',
              }}
              icon={iconMap[e.iconType]}
              contentStyle={{
                background:       'var(--color-bg)',
                borderTop:        `3px solid var(--color-accent)`,
                boxShadow:        '0 3px 6px rgba(0,0,0,0.1)',
              }}
              contentArrowStyle={{
                borderRight: '7px solid var(--color-accent)',
              }}
            >
              <h3 className="font-heading text-xl text-text">
                {e.title}
              </h3>
              {e.subtitle && (
                <h4 className="font-body text-lg text-muted mt-1">
                  {e.subtitle}
                </h4>
              )}
              {e.description && (
                <p className="font-body text-text/80 mt-2">
                  {e.description}
                </p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
