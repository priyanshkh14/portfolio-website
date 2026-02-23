'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';
import { useHasMounted, useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import { experiencesData } from '@/common/lib/data';
import SectionDivider from '@/common/components/shared/section-divider';

export default function Experience() {
  const { ref } = useSectionInView('experience');
  const { theme } = useTheme();
  const ihasMounted = useHasMounted();

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline
        animate={false}
        lineColor={theme === 'light' ? '#e5e7eb' : 'rgba(255, 255, 255, 0.2)'}
      >
        {ihasMounted &&
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === 'light' ? '#fff' : '#111827',
                  color: theme === 'light' ? '#1f2937' : '#f3f4f6',
                  fontSize: '1.5rem',
                }}
              >
                <h3 className="font-semibold">
                  {item.title}
                </h3>
                <p className="!mt-0 font-normal text-gray-600 dark:text-white/80">
                  {item.role}
                </p>
                <p className="!mt-1 !font-normal !text-sm text-gray-500">
                  {item.location}
                </p>
                <div className="!mt-2 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.split(', ').map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-full bg-black/10 px-3 py-1 text-xs uppercase tracking-wider text-black/80 dark:bg-white/10 dark:text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
      </VerticalTimeline>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
